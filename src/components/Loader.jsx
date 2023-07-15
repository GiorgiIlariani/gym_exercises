import React from "react";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%">
    <CircularProgress />
  </Stack>
);

export default Loader;
