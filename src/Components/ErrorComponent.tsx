import { Alert, Modal } from "@mui/material";
import React from "react";

interface ErrorModal {
  errorMessage?: String;
}

function ErrorComponent({ errorMessage }: ErrorModal) {
  return (
    <>
      <Alert style={{width:'100%'}} severity="error">
        {errorMessage}
      </Alert>
    </>
  );
}

export default ErrorComponent;
