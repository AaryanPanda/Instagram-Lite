import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AppLayout from "./Pages/AppLayout";
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
            <Route path="/profile" element={<Profile />} />
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
