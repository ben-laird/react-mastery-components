import * as React from "react";

interface CommentDetailProps {
  author: string;
  timeAgo: string;
  avatarSrc: string;
  content: string;
}

const CommentDetail = (props: CommentDetailProps) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export type { CommentDetailProps };

export default CommentDetail;
