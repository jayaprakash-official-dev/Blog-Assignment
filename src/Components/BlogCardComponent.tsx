import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { BlogResponse } from "../Models/Response/BlogModelResponse";

interface BlogCarProps {
  blogData: BlogResponse;
}

function BlogCardComponent(blog: BlogCarProps) {
  return (
    <Card sx={{ minWidth: 275,height:180 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {blog.blogData.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {blog.blogData.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogCardComponent;
