import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Header from "./Header";

import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage"
import RutasPage from "../pages/RutasPage";

import ErrorPage from "../pages/ErrorPage"


import Footer from "./Footer";




export default function Router() {
    return (
        <div className="pagecontainer">
            <div className="contentwrap">
                <BrowserRouter>
                    <Navbar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/rutas" component={RutasPage} />

                        <Route component={ErrorPage} />

                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}