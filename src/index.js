import "./styles.css";

import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieDetail from "./pages/MovieDetail";
import SeeAll from "./pages/SeeAll/SeeAllTR";
import Favoritos from "./pages/Favoritos";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={MovieDetail} />
      <Route exact path="/seeAll" component={SeeAll} />
      <Route exact path="/favorites" component={Favoritos} />

      {/* el NotFound va a lo último */}
      <Route component={NotFound} />
    </Switch>
    
    <Footer />
  </BrowserRouter>
);
