import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={1}
    width={357}
    height={314}
    viewBox="0 0 357 314"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="16" ry="16" width="357" height="314" />
  </ContentLoader>
);
