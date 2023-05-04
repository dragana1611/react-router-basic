import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <MainHeader />
      <header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to='/welcome'/>
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              {/* //:productId -> dynamic path segment */}
              <ProductDetail />
            </Route>
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;

//my-domain.com/ => Component A
//my-domain.com/products => Component B
//my-domain.com/product-detail/<any value> => singlepage
