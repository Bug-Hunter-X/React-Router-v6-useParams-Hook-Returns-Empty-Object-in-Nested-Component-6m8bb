In React Router Dom v6, using the `useParams` hook inside a component that's not directly a child of a route that defines the parameters will result in an empty object being returned.  This happens because `useParams` only works within route components. Consider this example:

```jsx
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

//User.js
import { useParams } from 'react-router-dom';

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
export default User;
```

This works correctly. However, if we try to access the `userId` from a nested component:
```jsx
// User.js (Modified)
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Details</h1>
      <UserDetails userId={userId}/>
    </div>
  );
}
export default User;

// UserDetails.js
import { useParams } from 'react-router-dom';

function UserDetails(props) {
  let { userId } = useParams(); //This will be empty
  console.log(props.userId); //This will have the correct value
  return (
    <div>
      <p>User ID (from useParams): {userId}</p>
      <p>User ID (from props): {props.userId}</p>
    </div>
  );
}
export default UserDetails;
```
`useParams` inside `UserDetails` will return an empty object. The correct approach is to pass the parameter via props.