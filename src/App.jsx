// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
// import About from "./components/Abouts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import NotFound from "./components/NotFound"; // Create this component for 404 pages

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Home page */}
        <Route path="/" exact component={Home} />

        {/* Projects page */}
        <Route path="/projects" exact component={Projects} />

        {/* About page */}
    

        {/* Contact page */}
        <Route path="/contact" exact component={Contact} />

        {/* 404 Not Found page */}
 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
