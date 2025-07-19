
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
                    className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition"
                    aria-label="Alternar tema"
                >
                    {isDark ? (
                        // Ícone Sol (Modo Claro)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                    ) : (
                        // Ícone Lua (Modo Escuro)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M21.752 15.002A9 9 0 1112 3a9.005 9.005 0 009.752 12.002z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
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
