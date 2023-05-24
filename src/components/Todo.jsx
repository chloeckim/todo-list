import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export default function Todo(props) {
  const { task, toggleTask } = props;

  return (
    <ListItem key={task.id} disablePadding>
      <ListItemButton role={undefined} onClick={() => toggleTask(task.id)} dense>
        <ListItemIcon>
          <Checkbox 
            checked={task.completed}
            inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={task.text} />
      </ListItemButton>
    </ListItem>
  );
}