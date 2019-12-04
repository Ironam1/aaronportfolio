import React from "react";
import "./App.css";
import apps from "./apps.json";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    apps
  };

  render() {
    return (
      <div>
        <HomePage />
        <AboutPage />
        <PortfolioPage
        apps={this.state.apps} />
        <Footer />
      </div>
    );
  }
}
export default App;
