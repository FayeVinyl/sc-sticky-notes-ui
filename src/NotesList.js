import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  /*accepts note, only returns if note matches search term*/
  const keepSearchMatches = (note) => note.doesMatchSearch;
  /*filters through keepSearchMatches*/
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );
  /* map over searchMatches filter rather than all notes*/
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
