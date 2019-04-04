import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import TourList from "./Components/Tourlist/TourList";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}
