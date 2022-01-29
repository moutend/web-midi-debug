import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    padding: "8pt 16pt",
    color: "#EEE",
    backgroundColor: "#333",
    fontFamily: "monospace",
    height: "23em",
    overflow: "scroll",
    whiteSpace: "pre",
  },
});

interface ConsoleProps {
  history: string[];
}

export default function Console({ history }: ConsoleProps) {
  const classes = useStyles();
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => bottom.current?.scrollIntoView(), [history]);

  return (
    <Card className={classes.root}>
      {history.join("\n")}
      <div ref={bottom} />
    </Card>
  );
}
