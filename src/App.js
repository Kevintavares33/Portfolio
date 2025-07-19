
import React, { useState } from "react";
// components
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Work from "./components/Work";
import black from "./assets/black.jpg";
import purplebg2 from "./assets/purplebg2.jpg";
import darkmode from "./assets/dark-mode.png";

const App = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleBackground = () => setIsDark(!isDark);

    return (
        <div
            style={{
                backgroundImage: `url(${isDark ? black : purplebg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.5s ease-in-out",
            }}

        >
            <div className="fixed top-6 right-4 z-50">
                <button
                    onClick={toggleBackground}
                    className="px-4 py-2 bg-darkmode"
                >
                    <img src={darkmode} alt="Alternar fundo" className="w-14 h-8" />
                </button>
            </div>

            <Header />
            <Banner />
            <NavBar />
            <About />
            <Services />
            <Work />
            <Contact />
            <div className="h-[4000px]"></div>
        </div>
    );
};

export default App;
