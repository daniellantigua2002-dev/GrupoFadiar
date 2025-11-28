
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { AboutPage, ContactPage, FaqPage, HomePage, ProductDetailPage, ProductsPage } from '../pages';


// export const AppRoutes = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/productos" element={<ProductsPage />} />
//                 <Route path="/productos/:productId" element={<ProductDetailPage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/faq" element={<FaqPage />} />
//                 <Route path="/contacto" element={<ContactPage />} />

//                 <Route path="*" element={<Navigate to="/" />} />

//             </Routes>

//         </>

//     );
// };


// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';

import {
    AboutPage,
    ContactPage,
    FaqPage,
    HomePage,
    ProductDetailPage,
    ProductsPage,
    // Asegúrate de que LoginPage también esté exportado de '../pages' si no usas un archivo separado.
} from '../pages';


// ⚠️ Nota: Revisé la ruta que mencionaste. Si tu carpeta es 'auth/routes', ajusta esto si es necesario.

import { AppLayout } from '../layout/AppLayout';
import { AuthRoutes } from '../assets/routes/AuthRoutes';

export const AppRoutes = () => {
    return (
        <Routes>

            {/* GRUPO CON LAYOUT: Todas las rutas anidadas usarán AppLayout */}
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} /> {/* Ruta principal: / */}
                <Route path="productos" element={<ProductsPage />} />
                <Route path="productos/:productId" element={<ProductDetailPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="contacto" element={<ContactPage />} />
            </Route>

            {/* GRUPO SIN LAYOUT: Las rutas de autenticación no usan AppLayout */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Fallback para rutas no definidas */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};