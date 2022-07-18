import React, { useEffect, useState } from "react";
import { UserStateManager } from "../Voltio/UserStateManager";
import { proxy, useSnapshot } from "valtio";
import { UserState } from "../Voltio/store";
import {
  CircularProgress,
  ListItemButton,
  ListItemText,
  LinearProgress,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import LoaderComponent from "./LoaderComponent";
import { Grid, Typography } from "@mui/material";
import { BlogState } from "../Voltio/store";
import ErrorComponent from "./ErrorComponent";
import { BlogStateManager } from "../Voltio/BlogStateManager";
import BlogCardComponent from "./BlogCardComponent";
import { BlogResponse } from "../Models/Response/BlogModelResponse";

function BlogListComponent() {
  const { BlogList, isLoading } = useSnapshot(BlogState);
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
        <div style={{padding:20}}>
          <LoaderComponent width={400} height={200} count={10} size={6} />
        </div>
      ) : (
        <>
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
