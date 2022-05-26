import React from "react";
import ReactDOM from "react-dom";

// Generating Data
import { faker } from "@faker-js/faker";

// Other resources
import "./style/App.css";

// React lesson files
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00PM"
                    avatarSrc={faker.image.avatar()}
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Amy"
                    timeAgo="Yesterday at 6:00PM"
                    avatarSrc={faker.image.avatar()}
                    content="Really nice!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Dan"
                    timeAgo="Today at 7:00PM"
                    avatarSrc={faker.image.avatar()}
                    content="Absolutely hated it."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
