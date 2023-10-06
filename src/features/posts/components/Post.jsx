import React from "react";
import { Link } from "react-router-dom";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.substr(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return truncatedText + " ...";
  } else {
    return truncatedText.substr(0, lastSpaceIndex) + " ...";
  }
}

const Post = ({ id, title, body }) => {
  const maxLength = 128;
  const truncatedDescription = truncateText(body, maxLength);

  return (
    <div className="rounded-2xl w-full col-start-1 col-end-13 bg-white flex flex-col justify-start gap-y-5 p-10 ">
      <div className="flex items-start text-sm">{"№ " + id}</div>
      <div className="font-bold text-lg flex items-start text-left">
        {title}
      </div>
      <p className="text-left">{truncatedDescription}</p>
      <Link
        to={`/posts/${id}`}
        className="p-2 px-5 bg-black hover:opacity-80 rounded-xl text-white w-fit font-bold"
      >
        Просмотр
      </Link>
    </div>
  );
};

export default Post;
