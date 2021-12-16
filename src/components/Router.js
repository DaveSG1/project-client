import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LoginPage from "../pages/LoginPage";
import IndexPage from "../pages/IndexPage";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/login" component={LoginPage} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}