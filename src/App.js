// import Home from "./pages/Home/home";
import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar/navbar.componenet";
import FirstList from "./components/Navbar/ListItem/listItem";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <FirstList></FirstList>
    </Fragment>
  );
}

export default App;
