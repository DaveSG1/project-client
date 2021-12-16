import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage"
import IndexPage from "../pages/IndexPage";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}