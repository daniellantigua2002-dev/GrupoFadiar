

// import { Footer, NavBar, ScrollToTopButton } from "../components";

// export const AppLayout = ({ children }) => {
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 minHeight: "100vh",
//                 width: "100%",          // 🟦 asegura ancho total
//             }}
//         >
//             <NavBar />

//             <main
//                 style={{

//                     width: "100%",       // 🟦 SOLUCIÓN PRINCIPAL
//                     display: "block",    // 🟦 evita comportamientos heredados
//                 }}
//             >
//                 {children}
//             </main>

//             <Footer />

//             <ScrollToTopButton />
//         </div>
//     );
// };


// src/layout/AppLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // 👈 Importar Outlet
import { Footer, NavBar, ScrollToTopButton } from "../components"; // Asumo esta ruta

export const AppLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
            }}
        >
            <NavBar />

            <main
                style={{
                    flexGrow: 1,
                    width: "100%",
                    display: "block",
                }}
            >

                <Outlet />
            </main>

            <Footer />

            <ScrollToTopButton />
        </div>
    );
};