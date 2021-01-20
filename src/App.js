//import logo from './logo.svg';

import Header from './Components/Header'
import MenuBar from './Components/MenuBar'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Aboutus from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ComingSoon from "./Components/ComingSoon";
function App() {
  return (
    <>
      <Header />
      <MenuBar />
      {/* { <HomePage /> } */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (

              <Redirect to="/home" />

            )
          }}
        />
        <Route exact path="/home" component={HomePage} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/comingsoon" component={ComingSoon} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
