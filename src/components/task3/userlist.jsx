import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  const cities = [...new Set(users.map(user => user.address.city))];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesCity = cityFilter ? user.address.city === cityFilter : true;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="container">
      <h2>User Directory</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;