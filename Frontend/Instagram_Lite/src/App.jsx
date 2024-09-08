import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/Signin";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AppLayout from "./Pages/AppLayout";
import MyFollowingPost from "./Pages/MyFollowingPost";
import { AuthProvider, useAuth } from "./Context/AuthContext";

function RoutesComponent() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <AppLayout /> : <Navigate to="/signin" />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/following" element={<MyFollowingPost />} />
          </Route>
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <RoutesComponent></RoutesComponent>
    </AuthProvider>
  );
}

export default App;
