import { Box, Typography } from "@mui/material";
import { Section } from "../../types/project_types";

export type MainSection2Props = {
  sectionProps: Section[];
};

const MainSection2 = ({ sectionProps }: MainSection2Props) => {
  return (
    <>
      {sectionProps.map((section, index) => (
        <Box key={index} className="my-4">
          <Box
            className="relative p-6 rounded-xl bg-white/6 border border-gray-300/40 transition-transform duration-200 hover:-translate-y-2 shadow-md"
            sx={{
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "12px",
                bottom: "12px",
                width: "6px",
                borderRadius: "4px",
                background: "linear-gradient(180deg,#0369A1,#06B6D4)",
              },
            }}
          >
            <Typography
              variant="h5"
              component="h2"
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
                  background: "linear-gradient(90deg,#0369A1,transparent)",
                },
              }}
            >
              {section.header}
            </Typography>

            <Typography
              variant="body1"
              className="text-gray-700 leading-relaxed mt-4 max-w-2xl"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem" },
                my: 2,
                whiteSpace: "pre-line",
              }}
            >
              {section.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default MainSection2;
