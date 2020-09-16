import React from "react";
import Button from "@material-ui/core/Button";

const Gender2 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleGender(props.value);
        }}
        disableElevation
      >
        Man
      </Button>
    </div>
  );
};

export default Gender2;
