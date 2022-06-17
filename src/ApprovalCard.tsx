import * as React from "react";

interface ApprovalCardProps {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}

const ApprovalCard = (props: ApprovalCardProps) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export type { ApprovalCardProps };

export default ApprovalCard;
