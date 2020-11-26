import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fontawesome/css/all.css"
import "./Style.css";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import { Routes } from "./components/router/Routes";
import { UserProvider } from "./global/Userprovider"

function App() {
    return (
    <div>
      <UserProvider>
        <Header />
            <Routes>
            </Routes>
        <Footer />
      </UserProvider>
    </div>
    )
  }
  export default App