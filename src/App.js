import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter,Route,Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<><News pageSize={15} key="general" country="us" category="general" /></>}/>
          <Route exact path="/business" element = {<><News pageSize={15} key="business" country="us" category="entertainment" /></>}/>
          <Route exact path="/entertainment" element = {<><News pageSize={15} key="entertainment" country="us" category="entertainment" /></>}/>
          <Route exact path="/general" element = {<><News pageSize={15} key="general" country="us" category="general" /></>}/>
          <Route exact path="/health" element = {<><News pageSize={15} key="health" country="us" category="health" /></>}/>
          <Route exact path="/science" element = {<><News pageSize={15} key="science" country="us" category="science" /></>}/>
          <Route exact path="/sports" element = {<><News pageSize={15} key="sports" country="us" category="sports" /></>}/>
          <Route exact path="/technology" element = {<><News pageSize={15} key="technology" country="us" category="technology" /></>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
