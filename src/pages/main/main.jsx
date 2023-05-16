import UserList from "../../components/user-list";
import { USERS } from "../../constans";

function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      <UserList users={USERS} />
    </div>
  );
}

export default Main;
