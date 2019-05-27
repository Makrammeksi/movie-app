import React from 'react';
import './App.css';
import Movieapp from './Movieapp';
import ModalExample from './modallreact';
import Rating from './Stars';

const MoviesList = [
  {
    Movieimg: "http://cdn.seriesonline.bz/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
    , Movietitle: "John week",
    description: "hels fjjsu sto god qsdjf",
    rating: 4
  },
  {
    Movieimg: "http://cdn.seriesonline.bz/MV5BOTI0NTk0ODE4OV5BMl5BanBnXkFtZTgwNDQxOTgyNzM@._V1_SX300.jpg"
    , Movietitle: "A Dog's Journey",
    description: "hels fjjsu sto god qsdjf",
    rating: 3
  },
  {
    Movieimg: "http://cdn.seriesonline.bz/MV5BODAzMWYyNmYtYzk3OC00MzFiLWI2ZDMtMjkwZGJlN2ZlZjI4XkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX300.jpg"
    , Movietitle: "ThePoisonRose",
    description: "John Travolta & Morgan Freeman",
    rating: 4.5
  }
]
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minrate: 0,
      movielist: MoviesList,
      search:''
    };
  }
  click = (e) => {
    this.setState({
      minrate: e
    })
  }
  addNewMovie = (Movieimg, Movietitle, description, rating) => {
    this.setState({
      movielist: this.state.movielist.concat({ Movieimg, Movietitle, description, rating })
    })
  }
  fonctionSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
  render() {
    return (
      <div className="App">
        <div className="star">
          <Rating modifyRating={this.click} rating={this.state.minrate} />
          <input className="searchinput" type="text" value={this.state.search} onChange={this.fonctionSearch} placeholder="Search film...." ></input>
        </div>
        <Movieapp list={this.state.movielist.filter(el => (el.Movietitle.toUpperCase().includes(this.state.search.toUpperCase())) && (el.rating >= this.state.minrate) )}     />
        <ModalExample handleAdd={this.addNewMovie} />
      </div>
    );
  }
}