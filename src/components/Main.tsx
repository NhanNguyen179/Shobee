import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CategoryPage from "./category/CategoryView";
import ProductView from "./productDetail/ProductView";
import Cart from "./cart/Cart";
import SearchResults from "./SearchResults";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

export default function Main() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/category/:categoryId"
          component={CategoryPage}
        ></Route>
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
