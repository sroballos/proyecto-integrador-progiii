import "./styles.css";

import ReactDOM from "react-dom/client";

import Main from "./pages/Main";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieDetail from "./pages/MovieDetail";


import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" component={Main} />
      <Route path='/detail' component={MovieDetail} />

      {/* el NotFound va a lo último */}
      <Route component={NotFound} />
    </Switch>
    
    <Footer />
  </BrowserRouter>
); 
