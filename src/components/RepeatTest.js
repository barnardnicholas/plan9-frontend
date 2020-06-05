import React from "react";
import { MyContext } from "../Context";

export default function RepeatTest() {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <button onClick={context.repeatTestStart}>Start Repeat</button>
            <button onClick={context.repeatTestStop}>Stop Repeat</button>
          </>
        );
      }}
    </MyContext.Consumer>
  );
}
