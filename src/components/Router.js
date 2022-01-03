import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Header from "./Header";

import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage"
import RutasPage from "../pages/RutasPage";
import ReservasPage from "../pages/ReservasPage"

import ErrorPage from "../pages/ErrorPage"


import Footer from "./Footer";
import EmpresaPage from "../pages/EmpresaPage";




export default function Router() {
    return (
        <div className="pagecontainer">
            <div className="contentwrap">
                <BrowserRouter>
                    <Navbar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={IndexPage} />

                        <Route path="/empresa" component={EmpresaPage} />
                        <Route path="/rutas" component={RutasPage} />
                        <Route path="/reservas" component={ReservasPage} />

                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />

                        <Route component={ErrorPage} />

                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}