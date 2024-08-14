import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/Signin";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AppLayout from "./Pages/AppLayout";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={token ? <AppLayout /> : <Navigate to="/signin" />}
          >
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/signup"
            element={token ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={token ? <Navigate to="/" /> : <SignIn />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
