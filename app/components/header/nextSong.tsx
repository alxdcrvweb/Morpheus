import { useState } from "react";

const NextSong = () => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill={hover ? "white" : "none"}
      style={{ marginRight: "19px" }}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        d="M14.3364 12.8777L14.3364 4.12268M2.66309 5.11435L2.66309 11.8931C2.66309 13.2814 4.17184 14.1527 5.376 13.4585L8.31559 11.7656L11.2552 10.0656C12.4593 9.37143 12.4593 7.63602 11.2552 6.94185L8.31559 5.24185L5.376 3.54893C4.17184 2.85477 2.66309 3.71893 2.66309 5.11435Z"
        stroke="white"
        strokeWidth="1.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default NextSong;
