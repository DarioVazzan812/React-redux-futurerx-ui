import React from "react";

import "./SearchBox.scss";
export default function SearchBox(props: any) {
  const { iconPosition = "right" } = props;
  const iconPositionClass =
    iconPosition === "right" ? "icon-right" : "icon-left";

  return (
    <div className="SearchBox">
      <input type="text" {...props} />
      <span className={`SearchBox-Icon ${iconPositionClass}`}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.66 23.3432L19.7915 18.0861C19.5717 17.8488 19.2739 17.717 18.9613 17.717H18.1654C19.5131 15.8557 20.314 13.5145 20.314 10.9677C20.314 4.90909 15.7678 0 10.157 0C4.54623 0 0 4.90909 0 10.9677C0 17.0263 4.54623 21.9354 10.157 21.9354C12.5156 21.9354 14.6837 21.0706 16.4074 19.6153V20.4748C16.4074 20.8122 16.5295 21.1339 16.7493 21.3712L21.6178 26.6283C22.0768 27.1239 22.8191 27.1239 23.2732 26.6283L24.6551 25.136C25.1141 24.6404 25.1141 23.8389 24.66 23.3432ZM10.157 17.717C6.70459 17.717 3.90654 14.7009 3.90654 10.9677C3.90654 7.23972 6.69971 4.21834 10.157 4.21834C13.6094 4.21834 16.4074 7.23445 16.4074 10.9677C16.4074 14.6956 13.6143 17.717 10.157 17.717Z"
            fill="#C4C4C4"
          />
        </svg>
      </span>
    </div>
  );
}
