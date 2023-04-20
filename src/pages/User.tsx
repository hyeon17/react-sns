import { useParams } from "react-router-dom";

function User() {
  const params = useParams();

  return <div>User {params?.user}</div>;
}

export default User;
