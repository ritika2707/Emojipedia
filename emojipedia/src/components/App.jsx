import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(description) {
  return (
    <Entry
    key={emojipedia.id}
      emoji={description.emoji}
      name={description.name}
      definition={description.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
