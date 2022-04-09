import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UserList />
      <UserDetail />
    </div>
  );
}
