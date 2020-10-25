import React, { useState } from "react";
import Select from "react-select";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import * as tagJson from "./data/tags.json";

const tagOptions = tagJson.tags;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TagsModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add Tags</h2>
      <Select
        className="select-tag"
        options={tagOptions}
        onChange={(e) => setTags(e)}
        autoFocus
        isMulti
        isSearchable
      />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Tags
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
