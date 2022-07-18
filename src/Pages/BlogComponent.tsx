import { Grid, Stack, Typography } from "@mui/material";
import BlogListComponent from "../Components/BlogListComponent";
import BlogUserComponent from "../Components/BlogUserComponent";
import RssFeedIcon from "@mui/icons-material/RssFeed";
function BlogComponent() {
  return (
    <Grid container direction={"row"} justifyContent={"space-evenly"}>
      <Grid item sm={3}>
        {/* <Typography
          // variant="h6"

          gutterBottom
          pt={2}
          pb={4}
        >
          Sort By Users
        </Typography> */}
        <BlogUserComponent />
      </Grid>
      <Grid item sm={8}>
        <Stack pt={4} pb={4} direction={'row'} alignItems={'center'}>
          <RssFeedIcon style={{ fontSize: 30 }} />
          <Typography
            variant="h6"
            style={{ color: "#4a4d4b",paddingLeft:10 }}
            gutterBottom
            pt={1}
          >
            List of Blogs
          </Typography>
        </Stack>
        <Grid container direction={"row"} spacing={4}>
          <BlogListComponent />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BlogComponent;
