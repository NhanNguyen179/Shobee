import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CategoryPage from "./categoryView/CategoryView";
import ProductView from "./productView/ProductView";
import Cart from "./cart/Cart";
import SearchResults from "./SearchResults";
import SignIn from "../view/SignIn";
import Register from "../view/Register";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sign-in" component={SignIn}></Route>
      <Route exact path="/sign-up" component={Register}></Route>
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
  );
}
