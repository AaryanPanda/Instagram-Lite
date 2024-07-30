import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Signup';
import SignIn from './Pages/Signin';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
        </Route>
        <Route path="/signup" element={<SignUp />}>
          {' '}
        </Route>
        <Route path="/login" element={<SignIn />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
