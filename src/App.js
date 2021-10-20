import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from './Component/Error/Error';
import Navbar from './Component/Header/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/home/Home';
import Treatments from './Component/Treatments/Treatments';
import Details from './Component/Details/Details';
import Login from './Component/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Component/Login/Login/PrivateRoute/PrivateRoute';
import About from './Component/ExtraRoute/About/About';
import Contact from './Component/ExtraRoute/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/treatments">
              <Treatments></Treatments>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/details/:detailsId">
              <Details></Details>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
