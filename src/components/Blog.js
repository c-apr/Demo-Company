import React from "react";
import "./Blog.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Blog({ image, category, title }) {
  return (
    <div className="blog__container">
      <div className="image__container">
        <img src={image} alt="hello" />
      </div>
      <div className="main__container">
        <div className="content">
          <div className="details">
            <span className="category">{category}</span>
            <span className="time"> 2 hours ago</span>
          </div>
          <p className="about__title">{title}</p>
          <p className="inShort">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
        </div>
        <div className="more">
          Read More    <ArrowRightAltIcon />
            
        </div>
      </div>
    </div>
  );
}

export default Blog;
