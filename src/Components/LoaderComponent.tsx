import { Grid, Skeleton } from "@mui/material";
import React from "react";

interface LoaderModal {
  width: number;
  height: number;
  count: number;
  size: number;
}

function LoaderComponent({ width, height, count, size }: LoaderModal) {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* <CircularProgress color="secondary" /> */}
      {new Array(count).fill(4).map((item) => {
        return (
          <Grid item sm={size}>
            <Skeleton
              variant="rectangular"
              width={width}
              height={height}
              style={{ marginTop: 10, borderRadius: 5 }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default LoaderComponent;
