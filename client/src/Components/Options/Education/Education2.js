import React from "react";
import Button from "@material-ui/core/Button";

const Education2 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleEducation(props.value);
        }}
        disableElevation
      >
        Two-year college
      </Button>
    </div>
  );
};

export default Education2;
