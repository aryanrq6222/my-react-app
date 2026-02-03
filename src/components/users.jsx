import useFetch from "../hooks/useFetch";

function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!users) return <p>Fetching users...</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
