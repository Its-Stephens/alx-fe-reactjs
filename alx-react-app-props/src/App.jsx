import ProfilePage from "../src/components/profilePage";
import UserContext from "../src/components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  <UserContext.provider value={userData}>
    return <ProfilePage userData={userData} />;
  </UserContext.provider>;
}

export default App;
