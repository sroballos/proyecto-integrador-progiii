import "./styles.css";

import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieDetail from "./pages/MovieDetail";
import Favoritos from "./pages/Favoritos";
import Popular from "./pages/SeeAll/Popular";
import Best from "./pages/SeeAll/Best";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/> 

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={MovieDetail} />
        <Route exact path="/favorites" component={Favoritos} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/toprated" component={Best} />
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/SearchResults" component={SearchResults} />

        {/* el NotFound va a lo último */}
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;