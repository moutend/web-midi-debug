import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    color: "#EEE",
    backgroundColor: "#333",
    fontFamily: "monospace",
  },
  scroll: {
    height: 375,
    padding: "8pt 16pt",
    overflow: "scroll",
    whiteSpace: "pre",
  },
});

interface ConsoleProps {
  history: string[];
}

export default function Console({ history }: ConsoleProps) {
  const classes = useStyles();
  const [follow, setFollow] = useState(true);

  const bottom = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (follow) bottom.current?.scrollIntoView();
  }, [history]);

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.scroll}>
          {history.join("\n")}
          <div ref={bottom} />
        </div>
      </Card>

      <FormControlLabel
        control={
          <Checkbox
            checked={follow}
            onChange={(_, checked) => setFollow(checked)}
          />
        }
        label="Follow output"
      />
    </>
  );
}
