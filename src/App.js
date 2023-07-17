import Home from "./pages/home/Home";
import TopBar from "./componenets/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
    <div>
      <TopBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/register" element={user ? <Home/> : <Register/>} />
      <Route path="/login" element={user ? <Home/> : <Login/>} />
      <Route exact path="/write" element={user ? <Write/> : <Register/>} />
      <Route exact path="/settings" element={user ? <Settings/> : <Register/>} />
      <Route exact path="/post/:postId" element={<Single/>} />
      </Routes>
     </div>
     </Router>
  );
}

export default App;
