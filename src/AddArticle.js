// This component recieves its data from the index.js component through its functions' arguments.
// It then uses the data to create a header displaying the name of the feature (Articles).
// It also creates two inputs; an input for a new articles' name, and another for its summary.
// It finally provides a button to add the new article to the articles list.
// the inputs and button elements call their value functions upon event trigger.

import React from "react";

export default function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <section>
      <h1>{name}</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} />
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}
