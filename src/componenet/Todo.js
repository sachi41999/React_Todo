import { List, ListItem, ListItemText } from "@material-ui/core";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import React from "react";
import db from "./Firebase";

export const Todo = (props) => {
  const textcenter = {
    textAlign: "center",
  };
  return (
    <List>
      <ListItem style={textcenter}>
        <ListItemText primary={props.text.todo} secondary="😃 Do it" />
      </ListItem>
      <RestoreFromTrashIcon
        onClick={(Event) =>
          db.collection("todo_co").doc(props.text.id).delete()
        }
      />
    </List>
  );
};
