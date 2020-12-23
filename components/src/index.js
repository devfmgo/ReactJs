import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content="Nice blog post"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Fikri"
        timeAgo="Today at 5:45 PM"
        content="Nice  and great blog post"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Gita"
        timeAgo="Today at 6:45 PM"
        content="Nice your blog post"
        avatar={faker.image.image()}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
