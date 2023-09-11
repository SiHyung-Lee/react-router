import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  console.log(params);
  return <h1>User</h1>;
}
export default User;
