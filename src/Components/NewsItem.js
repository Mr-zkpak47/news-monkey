import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style = {{height:"500px"}}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageurl
                ? "https://www.freep.com/gcdn/presto/2023/03/23/PDTF/ce683da5-e077-42ce-82fe-96f811aef422-GMIMG_7361.jpg?crop=2399,1350,x0,y160&width=2399&height=1350&format=pjpg&auto=webp"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "unknown"} on {" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className={`btn btn-dark position-absolute text-center`}
              style={{bottom:"5%",left:"50%",transform:"translateX(-50%)"}}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
