import { Box, Typography } from "@mui/material";
import { Section } from "../../types/project_types";

export type MainSection3Props = {
  sectionProps: Section[];
};

const MainSection3 = ({ sectionProps }: MainSection3Props) => {
  return (
    <>
      {sectionProps.map((subSection, index) => {
        const variantBg =
          index % 2 === 0
            ? "bg-white/6"
            : "bg-gradient-to-r from-sky-50/6 to-transparent";
        return (
          <Box key={index} className="my-4">
            <Box
              className={`relative p-6 rounded-xl ${variantBg} border border-gray-300/40 transition-transform duration-200 hover:-translate-y-2 shadow-md overflow-hidden`}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 16,
                  bottom: 16,
                  width: 6,
                  borderRadius: 2,
                  background: "linear-gradient(180deg,#0369A1,#06B6D4)",
                },
              }}
            >
              <Box className="flex items-start gap-4">
                <Box className="shrink-0">
                  <Box className="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center font-semibold shadow-md">
                    {index + 1}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-nunito font-medium text-black"
                    sx={{
                      fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -10,
                        width: 48,
                        height: 3,
                        background:
                          "linear-gradient(90deg,#0369A1,transparent)",
                      },
                    }}
                  >
                    {subSection.header}
                  </Typography>

                  <Typography
                    variant="body1"
                    className="text-gray-700 leading-relaxed mt-4 max-w-2xl"
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      whiteSpace: "pre-line",
                      my: 2,
                    }}
                  >
                    {subSection.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default MainSection3;
