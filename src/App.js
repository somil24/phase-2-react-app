import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import userinput from "./components/userinput";
import FaceDetection from "./Socket-io-Test/FaceDetection/FaceDetection";
import objectdetection from "./Socket-io-Test/ObjectDetection/ObjectDetection";
import AnprDetection from "./Socket-io-Test/ANPR/Anpr";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/userinput" component={userinput} />
          <Route path="/facedetection" component={FaceDetection} />
          <Route path="/objectdetection" component={objectdetection} />
          <Route path="/anprdetection" component={AnprDetection} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
