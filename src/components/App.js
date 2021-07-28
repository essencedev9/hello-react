import React from "react";
import Contact from "./Contact";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    return <Contact />;
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
