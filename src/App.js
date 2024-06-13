import React from 'react';
import axios from 'axios';

import './App.css';

import { Search } from './components/Search';
import { UsersList } from './components/UsersList';
import { PopupUser } from './components/PopupUser';

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000?term=${searchTerm}`);
      setUsers(response.data);
      console.log(users);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  React.useEffect(() => {
    fetchUsers();
  }, [searchTerm]);

  return (
    <div className="App font-proxima-nova">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <UsersList users={users} onClickUser={handleUserClick} isLoading={isLoading} />
      {selectedUser && <PopupUser user={selectedUser} onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
