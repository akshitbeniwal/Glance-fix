import React from "react";
import { Signup } from "./components/Signup";
import { Container } from "react-bootstrap";
// import { AuthProvider } from "./contexts/Authcontext"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Switch } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { image_variable } from "./components/image_variables";
import { ControlledCarousel } from "./components/carousel";
import { AuthProvider } from "./contexts/Authcontext";
import { Topten } from "./components/topten";
import { ToptenRD } from "./components/ToptenRD";
function App() {
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <ControlledCarousel image={image_variable.homepage_images} />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/topten/men/tshirts">
                {/* <Topten gen="Men" type="T-Shirts"/> */}
                <ToptenRD gen="Men" type="T-shirts" />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
