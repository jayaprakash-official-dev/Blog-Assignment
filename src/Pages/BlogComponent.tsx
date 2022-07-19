import { Grid, Stack, Typography } from "@mui/material";
import BlogListComponent from "../Components/BlogListComponent";
import BlogUserComponent from "../Components/BlogUserComponent";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { useState } from "react";
function BlogComponent() {
  const [blogCount, setBlogCount] = useState<number>();

  const updateBlogCount = (count: number) => {
    setBlogCount(count);
  };

  return (
    <Grid container direction={"row"} justifyContent={"space-evenly"}>
      {/* // User List Component */}
      <Grid item sm={3}>
        <BlogUserComponent />
      </Grid>
      {/* // Blog List Component */}
      <Grid item sm={8}>
        <Stack pt={4} pb={4} direction={"row"} alignItems={"center"}>
          <RssFeedIcon style={{ fontSize: 30 }} />
          <Typography
            variant="h6"
            style={{ color: "#4a4d4b", paddingLeft: 10 }}
            gutterBottom
            pt={1}
          >
            List of Blogs ({blogCount})
          </Typography>
        </Stack>
        <Grid container direction={"row"} spacing={4}>
          <BlogListComponent updateBlogCount={updateBlogCount} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BlogComponent;
