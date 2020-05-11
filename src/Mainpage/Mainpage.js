import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./mainpage.css";

class Mainpage extends Component {
  render() {
    console.log(this.props.Movies);
    return (
      <div className="Mainpage">
        <MovieCard Movies={this.props.Movies} AddFav={this.props.AddFav} />
        <button className="AddBtn" onClick={this.props.OpenFilmModal}>
          Add a Film
        </button>
      </div>
    );
  }
}

export default Mainpage;
