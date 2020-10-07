import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <Header />

        <ApplicationViews />
      </UserProfileProvider>
    </Router>
  );
}

export default App;
