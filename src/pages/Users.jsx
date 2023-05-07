import React, { useState, useEffect } from 'react';

function GithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
