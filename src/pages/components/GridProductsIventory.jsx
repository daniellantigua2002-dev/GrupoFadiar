
// import { Box } from "@mui/material";
// import { ProductCard } from "./ProductCard";

// export const GridProductsInventory = ({ products = [] }) => {
//     return (
//         <Box sx={{ px: 3, py: 2 }}>

//             <Box
//                 sx={{
//                     display: { xs: "flex", sm: "grid" },
//                     overflowX: { xs: "scroll", sm: "visible" },
//                     WebkitOverflowScrolling: "touch",
//                     gap: 1, 
               
//                     gridTemplateColumns: {
//                         sm: "repeat(2, 1fr)",
//                         md: "repeat(4, 1fr)",
//                     },

//                     pb: { xs: 2, sm: 0 },
//                 }}
//             >
//                 {products.map((product) => (
//                     <Box
//                         key={product.id}
//                         sx={{
//                             flex: { xs: "0 0 80%", sm: "none" },
//                             minWidth: { xs: "80%", sm: "auto" },
//                             minHeight: { sm: '400px', md: '450px' },
//                         }}
//                     >
//                         <ProductCard product={product} />
//                     </Box>
//                 ))}
//             </Box>

//         </Box>
//     );
// };


// GridProductsInventory.jsx (MODIFICADO)
import { Box } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const GridProductsInventory = ({ products = [] }) => {
    return (
        // El px: 3, py: 2 en el contenedor exterior ya está bien para el padding.
        <Box sx={{ px: 3, py: 2 }}> 

            <Box
                sx={{
                    // CAMBIO 1: Usamos 'grid' en todas las resoluciones para eliminar el scroll horizontal.
                    // Esto resuelve el problema de desbordamiento en ProductsPage.
                    display: "grid", 
                    
                    // Eliminamos overflowX y WebkitOverflowScrolling que causaban el scroll horizontal:
                    // overflowX: { xs: "scroll", sm: "visible" },
                    // WebkitOverflowScrolling: "touch",
                    
                    // CAMBIO 2: Reducimos el espacio entre los ítems (filas y columnas) a 1 unidad.
                    // Si 1 es demasiado, puedes probar con 0.5 o 0.
                    gap: 1, 
                    
                    gridTemplateColumns: {
                        // Móviles (xs): 2 columnas
                        xs: "repeat(2, 1fr)", 
                        // sm: 2 columnas
                        sm: "repeat(2, 1fr)",
                        // md: 4 columnas
                        md: "repeat(4, 1fr)",
                    },

                    pb: { xs: 2, sm: 0 },
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            // Estos estilos de flex/minWidth ya no son necesarios con display: grid
                            // flex: { xs: "0 0 80%", sm: "none" },
                            // minWidth: { xs: "80%", sm: "auto" },
                            
                            // Mantenemos las alturas mínimas si son necesarias para el diseño
                            minHeight: { sm: '400px', md: '450px' },
                        }}
                    >
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>

        </Box>
    );
};