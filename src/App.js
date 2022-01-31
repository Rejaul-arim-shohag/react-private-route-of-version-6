import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/dashboard" element={
          <PrivateRoute> <Dashboard/> </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
