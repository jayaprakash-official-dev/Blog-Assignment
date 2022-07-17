import { Grid, Typography } from "@mui/material";
import BlogListComponent from "../Components/BlogListComponent";
import BlogUserComponent from "../Components/BlogUserComponent";

function BlogComponent() {
  return (
    <Grid container direction={"row"} justifyContent={"space-evenly"}>
      <Grid item sm={3}>
        <Typography variant="h6" gutterBottom pt={2} pb={4}>
          Bloggers
        </Typography>
        <BlogUserComponent />
      </Grid>
      <Grid item sm={8}>
        <Typography variant="h6" gutterBottom pt={2} pb={4}>
          List of Blogs
        </Typography>
        <Grid container direction={"row"} spacing={4}>
          <BlogListComponent />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BlogComponent;
