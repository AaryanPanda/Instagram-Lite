import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/Signin";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AppLayout from "./Pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
