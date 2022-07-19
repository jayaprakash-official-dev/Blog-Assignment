import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import { motion } from "framer-motion";

interface BlogProps {
  blogData: BlogResponse;
}

function BlogCardComponent(blog: BlogProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} animate={{ y: [-10, 0] }}>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          maxHeight: 200,
          height: 200,
          background:
            "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

          borderWidth: 0,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
            gutterBottom
          >
            {blog.blogData.title}
          </Typography>
          <Typography
            sx={{ fontSize: 12, color: "#fff", paddingTop: 2 }}
            color="text.secondary"
            gutterBottom
          >
            {blog.blogData.body}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default BlogCardComponent;
