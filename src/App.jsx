import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StateLogin from "./components/StateLogin";


function App() {
    return (
        <>
            <Header />
            <main>
                <Signup />
            </main>
        </>
    );
};

export default App;