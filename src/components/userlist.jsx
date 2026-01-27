import { useState, useEffect } from "react";

function GetUserList() {
    const [ data, setData ] = useState([]);
    
    const fetchUsers = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h2> User List</h2>

            <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
        </div>
    );
}

export default GetUserList;