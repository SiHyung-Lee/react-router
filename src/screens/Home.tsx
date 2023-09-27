import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const [readSearchParms, setReadSearchParms] = useSearchParams();
  setTimeout(() => {
    setReadSearchParms({
      day: "today",
      tomorrow: "123",
      year: "2023",
    });
  }, 3000);
  // console.log(readSearchParms);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
