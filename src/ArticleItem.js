// A simple component that creates a list item.
// It contains two neighbouring links; an articles' title, and a delete article clickable.
// It also contains a paragraph showing the articles' summary.
// the paragraphs' display property can be toggled to show or hide it.
// This component recieves its data from the index.js component through its functions' arguments.
// The index.js component in turn initially recieves that data from the MyFeature component.

import React from "react";

export default function ArticleItem({ article, onClickToggle, onClickRemove }) {
  return (
    <li>
      <a
        href={`#${article.id}`}
        title="Toggle Summary"
        onClick={onClickToggle.bind(null, article.id)}
      >
        {article.title}
      </a>
      &nbsp;
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={onClickRemove.bind(null, article.id)}
      >
        &#10007;
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}
