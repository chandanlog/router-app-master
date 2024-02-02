import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Posts from "./components/posts/posts";
import Home from "./components/home/home";
import Games from "./components/games/games";
import Dashboard from "./components/admin/dashboard";
import "./App.css";
import "./style.css";
import Footer from "./components/pages/footer";
import Preloader from "./components/pages/Pre"



const App =()=> {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
    return (
      <div className="App">
        <Preloader load={load} />
        <NavBar />
          <Switch>
            <Route path="/games" component={Games} />
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    );
}

export default App;
