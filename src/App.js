//React
import React, { useEffect, useState } from 'react';

//movie dataBase API
import Tmdb from './Tmdb'

//components
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import './App.css'

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    
    const loadAll = async () => {
      
      //getting list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //getting featured movie/series
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {

    const scrollListener = () => {

      if (window.scrollY > 10) return setBlackHeader(true);
      setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, [])

  return (
    <div className="page noselect">

      <Header black={blackHeader} />
      
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => <MovieRow key={key} title={item.title} items={item.items}/>)}
      </section>

      <footer>
        Direitos de imagem para a Netflix <br />
        Dados pego pelo Site Themoviedb.org
      </footer>

      <div className="loading">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.filmelier.com%2Fnoticias%2Fbr%2F2020%2F03%2FNetflix_LoadTime.gif&imgrefurl=https%3A%2F%2Fwww.filmelier.com%2Fbr%2Fnoticias%2F6-dicas-para-nao-ter-problemas-com-o-streaming-na-quarentena&tbnid=wtw8Fs_0NFEEbM&vet=12ahUKEwi4u9TPrK72AhVNs5UCHdj3AhYQMygBegUIARDeAQ..i&docid=K_ZdmlnMoQiPqM&w=2000&h=1000&q=netflix%20loading%20gif%20&hl=en&ved=2ahUKEwi4u9TPrK72AhVNs5UCHdj3AhYQMygBegUIARDeAQ" />  
      </div>
    </div>
  );
}

export default App;