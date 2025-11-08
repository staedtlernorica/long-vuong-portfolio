import React from "react";
import { Box, Chip, Container, Typography } from "@mui/material";

type ProjectHeaderProps = {
  title: string;
  tags: string[];
  description: string;
};

const ProjectHeader = ({
  title,
  tags,
  description,
}: ProjectHeaderProps): React.ReactNode => {
  return (
    <Box className="mb-1 p-8 bg-white/5 backdrop-blur-sm rounded-2xl">
      <Typography
        variant="overline"
        className="text-sky-800! tracking-widest! mb-4! block!"
      >
        PROJECT
      </Typography>

      <Typography
        variant="h1"
        className="font-nunito font-light tracking-tight text-black mb-8! text-4xl! sm:text-5xl! md:text-7xl! drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]!"
      >
        {title}
      </Typography>

      <Box className="my-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            className="bg-sky-200! text-gray-800! hover:bg-sky-300! transition-colors! duration-200!"
          />
        ))}
      </Box>

      <Typography
        variant="body1"
        className="text-lg! text-gray-700! leading-relaxed!"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProjectHeader;
