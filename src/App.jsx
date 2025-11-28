
// import theme from "./theme/theme";
// import { ThemeProvider } from "@emotion/react";
// import { AppRoutes } from "./routes/AppRoutes";
// import { AppLayout } from "./layout/AppLayout";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { CartProvider, FiltersProvider, SearchProvider } from "./contexts";

import { AppLayout } from "./layout/AppLayout";

// export const App = () => {

//   const queryClient = new QueryClient();

//   return (

//     <ThemeProvider theme={theme}>
//       <QueryClientProvider client={queryClient}>


//         <CartProvider>
//           <SearchProvider>
//             <FiltersProvider>
//               <AppLayout>
//                 <AppRoutes />
//               </AppLayout>
//             </FiltersProvider>
//           </SearchProvider>
//         </CartProvider>

//       </QueryClientProvider>
//     </ThemeProvider>

//   );
// };


import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./routes/AppRoutes";
// ❌ Importación de AppLayout ELIMINADA. AppRoutes se encarga de aplicarlo.
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider, FiltersProvider, SearchProvider } from "./contexts";

// Creamos una instancia del QueryClient fuera del componente para que no se recree en cada render
const queryClient = new QueryClient();

export const App = () => {

    return (

        // 1. Proveedor de Tema (UI)
        <ThemeProvider theme={theme}>
            
            {/* 2. Proveedor de Queries (Gestión de API/Data Fetching) */}
            <QueryClientProvider client={queryClient}>

                {/* 3. Proveedores de Estado Globales */}
                <CartProvider>
                    <SearchProvider>
                        <FiltersProvider>
                            
                            {/* 4. Rutas de la Aplicación */}
                            {/* AppRoutes contiene la lógica de enrutamiento y aplica AppLayout solo donde es necesario */}
                            <AppRoutes /> 
                            
                        </FiltersProvider>
                    </SearchProvider>
                </CartProvider>

            </QueryClientProvider>
        </ThemeProvider>

    );
};