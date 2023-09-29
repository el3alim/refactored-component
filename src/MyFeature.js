import React from "react";

// A generative function that pauses at the yield line on every run.
// The function is resumed using the JavaScripts' next() method.
// On every pause, the id variable is updated with the yield value.
const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

// It all starts here.
// The following functional component is the main component to be randered.
// All initial state values are decalred, updated, and reset here.
// The data is then passed through other components via the JSX in the index.js file.
// The component takes in the addArticle() and articleList() functions as arguments.
// These arguments data is passed to other components in the return section of this component,
// where the functions are called.
export default function MyFeature({ addArticle, articleList }) {
  // Declaring the initial "articles" state (an array of objects).
  const [articles, setArticles] = React.useState([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none",
    },
  ]);

  // Declaring the initial "title" state (an empty string).
  const [title, setTitle] = React.useState("");

  // Declaring the initial "summary" state (an empty string).
  const [summary, setSummary] = React.useState("");

  // Declaring the onChangeTitle event handler function.
  // The input value is changed to the users' input.
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  // Declaring the onChangeSummary event handler function.
  // The input value is changed to the users' input.
  function onChangeSummary(e) {
    setSummary(e.target.value);
  }

  // Declaring the onClickAdd event handler function.
  // On user click, the new object article is added to the articles array variable.
  // The new object includes the updated "title" and "summary" states form the user input.
  // The "title" and "summary" states are then reset back to empty strings.
  function onClickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title: title,
        summary: summary,
        display: "none",
      },
    ]);
    setTitle("");
    setSummary("");
  }

  // Declaring the onClickRemove event handler function.
  // The state setter updates the "articles" state to a new array.
  // Only the object with the id given as the functions' argument is filtered out.
  function onClickRemove(id) {
    setArticles(articles.filter((article) => article.id !== id));
  }

  // Declaring the onClickToggle event handler function.
  // The array index number of the targeted article is set as the "index" variable.
  // An instance/copy of the "articles" array is created by the use of the spread operator.
  // That copy is the value of the updatedArticles variable.
  // The targeted article object is selected using the updatedArticles and the index variables.
  // The display key/value pair of the selected article object is then updated using a ternary operator.
  // If the value is "none"(true), the string is emptied.
  // If the value is an empty string (false), it is set to "none".
  function onClickToggle(id) {
    const index = articles.findIndex((article) => article.id === id);
    const updatedArticles = [...articles];

    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none",
    };

    setArticles(updatedArticles);
  }

  // The addArticle() and articleList functions are called within a section element.
  // This calling passes the data collected from this component to other components.
  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd,
      })}
      {articleList({
        articles,
        onClickToggle,
        onClickRemove,
      })}
    </section>
  );
}
