// This component receives the articles array from the index.js component through its functions' arguments.
// It then creates a list of articles by mapping through the array and rendering an ArticleItem component for each article.
import React from "react";
import ArticleItem from "./ArticleItem";

export default function ArticleList({
  articles,
  onClickToggle,
  onClickRemove,
}) {
  return (
    <ul>
      {articles.map((i) => (
        <ArticleItem
          key={i.id}
          article={i}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
