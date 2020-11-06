import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    padding: "8pt 16pt",
    color: "#EEE",
    backgroundColor: "#333",
    fontSize: 16
  },
  label: {},
});

interface ConsoleProps {
  history: string[];
}

export default function Console(props: ConsoleProps) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        inputProps={{className: classes.root}} InputLabelProps={{className: classes.root}}
        multiline={true} rows={16} fullWidth={true}
        value={props.history.join("\n")}
      />
    </div>
  );
}
