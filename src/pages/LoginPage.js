import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Footer from '../components/Footer'

export default function LoginPage() {
    return (
        <div className="pagecontainer">

            <div className="contentwrap">
                <Header />
                <Login />
            </div>
            <Footer />
        </div>
    )
}