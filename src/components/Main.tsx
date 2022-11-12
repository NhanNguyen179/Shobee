import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import ProductView from "./productDetail/ProductView";
import Cart from "./cart/Cart";
import SearchResults from "./SearchResults";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import ProductsPage from "./products/ProductsPage";

export default function Main() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={ProductsPage}></Route>
        <Route exact path="/product/:productId" component={ProductView}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route
          exact
          path="/search/query=:query"
          component={SearchResults}
        ></Route>
      </Switch>
      <Footer />
    </>
  );
}
