import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Are you sure want to do this ?
            </div>
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Fikri"
          timeAgo="Today at 5:45 PM"
          content="Nice  and great blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gita"
          timeAgo="Today at 6:45 PM"
          content="Nice your blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
