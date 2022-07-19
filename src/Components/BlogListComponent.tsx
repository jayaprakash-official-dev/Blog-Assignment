import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { Card, Stack } from "@mui/material";
import LoaderComponent from "./LoaderComponent";
import { Grid, Typography } from "@mui/material";
import { BlogState } from "../Voltio/store";
import ErrorComponent from "./ErrorComponent";
import { BlogStateManager } from "../Voltio/BlogStateManager";
import BlogCardComponent from "./BlogCardComponent";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface BlogListType {
  updateBlogCount: (count: number) => void;
}

function BlogListComponent(props: BlogListType) {
  const { BlogList, isLoading } = useSnapshot(BlogState);
  if (BlogList.data) {
    props.updateBlogCount(BlogList.data.length);
  }
  const getBlog = async () => {
    await BlogStateManager.getBlog();
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <>
      {/* loader */}
      {isLoading ? (
        <div style={{ padding: 20 }}>
          <LoaderComponent width={400} height={200} count={10} size={6} />
        </div>
      ) : (
        <>
          {BlogList.user ? (
            <Grid item sm={12}>
              <Grid item sm={5}>
                <Card variant="outlined" style={{ borderRadius: 10 }}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    p={2}
                  >
                    <div>
                      <AccountCircleIcon
                        style={{
                          fontSize: 80,
                          color: "#FE6B8B",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        sx={{ fontSize: 20, fontWeight: "bold" }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {BlogList.user.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {BlogList.user.phone}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {BlogList.user.email}
                      </Typography>
                    </div>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          ) : null}
          {
            //list of users
            BlogList &&
              BlogList.success &&
              BlogList.data &&
              BlogList.data.map((item: BlogResponse) => {
                return (
                  <Grid item sm={6}>
                    <BlogCardComponent blogData={item} />
                  </Grid>
                );
              })
          }
        </>
      )}
      {/* Render when error occurs */}
      {BlogList && !BlogList.success && BlogList.error && (
        <ErrorComponent errorMessage={BlogList.error} />
      )}
    </>

    // </Grid>
  );
}

export default BlogListComponent;
