import React from "react";

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

export default function Console(props: ConsoleProps) {
  const classes = useStyles();

  return <Card className={classes.root}>{props.history.join("\n")}</Card>;
}
