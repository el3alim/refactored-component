// View the README.md file for project details
import React from "react";
import ReactDOM from "react-dom/client";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import MyFeature from "./MyFeature";

// Assigning the root element to a constant
const root = ReactDOM.createRoot(document.getElementById("root"));

// The MyFeature component renders two prop functions, addArticle() and articleList().
// These functions are passed to other components and used to retrieve and pass data.
root.render(
  <MyFeature
    addArticle={({
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onClickAdd,
    }) => (
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onClickAdd={onClickAdd}
      />
    )}
    articleList={({ articles, onClickToggle, onClickRemove }) => (
      <ArticleList
        articles={articles}
        onClickToggle={onClickToggle}
        onClickRemove={onClickRemove}
      />
    )}
  />
);
