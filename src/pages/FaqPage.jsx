// FaqPage.jsx
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppDownloadSection, GridRecientes } from "./components";
import { useInventoryProducts } from "../hooks/useInventoryProducts";

export const FaqPage = () => {
  const theme = useTheme();


  const { data: productsInventory, isLoading, isError } = useInventoryProducts();
  const products = productsInventory?.products || [];

  const faqs = [
    { question: "¿Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolores fugiat..." },
    { question: "¿Ut quaerat soluta?", answer: "Lorem ipsum dolores fugiat..." },
    { question: "¿Quis eum voluptates?", answer: "Lorem ipsum dolores fugiat..." },
    { question: "¿Exercitationem animi?", answer: "Lorem ipsum dolores fugiat..." },
    { question: "¿Nemo enim ipsam voluptatem?", answer: "Lorem ipsum dolores fugiat..." },
  ];

  return (

    <>
      <Box sx={{ width: "90%", py: 5, px: { xs: 2, md: 6 } }}>


        <Typography variant="caption" sx={{ color: "grey" }}>
          Home &gt;{" "}
          <Typography
            component="span"
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            FAQ
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            width: "95%",
            overflow: "hidden",
          }}
        >

          <Box sx={{ flex: 1, minWidth: 0, mt: 2 }}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
            >
              Preguntas Frecuentes
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                mb: 2,
              }}
            >
              de nuestros clientes
            </Typography>

            <Typography
              variant="body1"
              sx={{

                maxWidth: "480px",
              }}
            >
              Lorem ipsum Sit amet consectetur. At tristique est adipiscing
              pellentesque vel sit id at
            </Typography>
          </Box>


          <Box
            sx={{
              flex: 1.2,
              minWidth: 0,
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {faqs.map((faq, idx) => {
              const isActive = idx === 1; // Puedes cambiar el índice del activo

              return (
                <Accordion
                  key={idx}
                  sx={{
                    mb: 2,
                    borderRadius: "12px !important",
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    backgroundColor: isActive
                      ? theme.palette.primary.main
                      : theme.palette.background.paper,
                    color: isActive
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.primary,
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: isActive
                            ? "#fff"
                            : theme.palette.primary.main,
                        }}
                      />
                    }
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      backgroundColor: isActive
                        ? theme.palette.background.default
                        : "#f5f5f5",
                      color: theme.palette.text.primary,
                      fontSize: "0.9rem",
                    }}
                  >
                    {faq.answer}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>


        <Box sx={{}}>
          <AppDownloadSection />
        </Box>

      </Box>



      <Box sx={{ width: "95%", mt: 6, mb: 4 }}>
        <GridRecientes products={products} />
      </Box>
    </>
  );
};
