import React from "react";
import "./NewsCard.css";

function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt);
  // console.log(fullDate);
  var date = fullDate.toString().split(" ");
  console.log("date", date[4]);

  const hour = parseInt(date[4].slice(0, 2));
  console.log("hour", hour);

  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        className="newsImage"
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://source.unsplash.com/random"
        }
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short</b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
