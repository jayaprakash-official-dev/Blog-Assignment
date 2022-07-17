import { Grid, CircularProgress, Skeleton } from "@mui/material";
import React from "react";

interface LoaderModal {
  width: number;
  height: number;
  count: number;
}

function LoaderComponent({ width, height, count }: LoaderModal) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        {/* <CircularProgress color="secondary" /> */}
        {new Array(count).fill(4).map((item) => {
          return (
            <Skeleton
              variant="rectangular"
              width={width}
              height={height}
              style={{ marginTop: 10 }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default LoaderComponent;
