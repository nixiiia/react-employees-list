WITH RecursiveSubdivisions AS (
    SELECT id, name, parent_id, 0 AS sub_level
    FROM dbo.subdivisions
    WHERE id = (SELECT subdivision_id FROM dbo.collaborators WHERE id = 710253)
    
    UNION ALL
    
    SELECT s.id, s.name, s.parent_id, rs.sub_level + 1
    FROM dbo.subdivisions s
    JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
    WHERE s.id NOT IN (100055, 100059)
)
, CollaboratorsWithSubdivision AS (
    SELECT c.id AS coll_id, c.name AS coll_name, rs.name AS sub_name, c.subdivision_id AS sub_id, rs.sub_level
    FROM dbo.collaborators c
    JOIN RecursiveSubdivisions rs ON c.subdivision_id = rs.id
    WHERE c.age < 40
)
, CollaboratorsCount AS (
    SELECT subdivision_id, COUNT(*) AS colls_count
    FROM dbo.collaborators
    GROUP BY subdivision_id
)
SELECT 
    cws.coll_id AS id,
    cws.coll_name AS name,
    cws.sub_name AS sub_name,
    cws.sub_id AS sub_id,
    cws.sub_level AS sub_level,
    cc.colls_count AS colls_count
FROM CollaboratorsWithSubdivision cws
JOIN CollaboratorsCount cc ON cws.sub_id = cc.subdivision_id
ORDER BY cws.sub_level ASC;
