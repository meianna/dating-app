import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Job13 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleJob(props.value);
        }}
        disableElevation
      >
        Science/Engineering
      </Button>
    </div>
  );
};

export default Job13;