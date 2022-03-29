import React, { useState } from "react";
import "./MovieRow.css";

//icons
import ArrowLeft from "@mui/icons-material/ArrowBackIos";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";

const MovieRow = (props) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) x = 0;
    setScrollX(x);
  };

  const handleRightArrow = () => {

    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = props.items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x);
  };

  const movieListStyle = {
    marginLeft: scrollX,
    width: props.items.results.length * 150,
  };

  return (
    <div className="movieRow">
      <h2>{props.title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <ArrowLeft style={{ fontSize: 40 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <ArrowRight style={{ fontSize: 40 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={movieListStyle}>
          {props.items.results.length > 0 &&
            props.items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
