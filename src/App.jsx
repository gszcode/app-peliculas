import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detalles from "./pages/Detalles";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detalles/:idPelicula">
                    <Detalles />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </>
    )
}

export default App;