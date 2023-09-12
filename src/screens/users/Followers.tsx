import { useOutletContext } from "react-router-dom";

function Followers() {
  const ctx = useOutletContext();
  console.log(ctx);
  return <h1>Followers</h1>;
}

export default Followers;
