import React from "react";
import "./FeaturedMovie.css";

//icons
import PlayArrow from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import Info from '@mui/icons-material/InfoOutlined';

const FeaturedMovie = (props) => {
  console.log(props.item);

  const featuredStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
  };

  let firstDate = new Date(props.item.first_air_date);

  let genres = []; 
  for (let i in props.item.genres) {
    genres.push( props.item.genres[i].name )
  }

  return (
    <section className="featured" style={featuredStyle}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{props.item.original_name}</div>
          <div className="featured--info">
            <div className="featured-rating">
              {props.item.vote_average}
            </div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {props.item.number_of_seasons} season
              {props.item.number_of_seasons > 1 && "s"}
            </div>
          </div>
          <div className="featured--buttons">
            <button className="play"> <PlayArrow style={{fontSize: 40}} /> Play</button>
            <button className="info"> <Info style={{fontSize: 40}} /> More Info</button>
          </div>
          <div className="featured--genres"><strong>Genre :</strong> {genres.join(', ')} </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
