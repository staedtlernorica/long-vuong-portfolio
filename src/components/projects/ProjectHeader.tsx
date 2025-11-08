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
    <Box className="mb-3 border-2 border-gray-300 rounded-xl p-5">
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Box className="mb-3">
        {tags.map((tag) => (
          <Chip key={tag} className="mr-2 mb-2" label={tag}></Chip>
        ))}
      </Box>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default ProjectHeader;
