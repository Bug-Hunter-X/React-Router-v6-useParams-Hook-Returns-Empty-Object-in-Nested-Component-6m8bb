// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// User.js
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Details</h1>
      <UserDetails userId={userId} />
    </div>
  );
}
export default User;

// UserDetails.js
function UserDetails(props) {
  return (
    <div>
      <p>User ID (from props): {props.userId}</p>
    </div>
  );
}
export default UserDetails;