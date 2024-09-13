import "./styles.css";

import ReactDOM from "react-dom/client";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
); 
