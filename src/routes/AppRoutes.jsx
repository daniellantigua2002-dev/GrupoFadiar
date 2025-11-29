

import { Routes, Route, Navigate } from 'react-router-dom';

import {
    AboutPage,
    ContactPage,
    FaqPage,
    HomePage,
    ProductDetailPage,
    ProductsPage,
    ProfilePage

} from '../pages';



import { AppLayout } from '../layout/AppLayout';
import { AuthRoutes } from '../assets/routes/AuthRoutes';

export const AppRoutes = () => {
    return (
        <Routes>


            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="productos" element={<ProductsPage />} />
                <Route path="productos/:productId" element={<ProductDetailPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="contacto" element={<ContactPage />} />
                <Route path="perfil" element={<ProfilePage />} />
            </Route>

            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};