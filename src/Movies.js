import React from 'react';

class Movies extends React.Component {
  render() {
    return (
      <>
        <ul className="list-group font">
          {' '}
          Movie Data
          <li className="list-group-item list-group-item-primary">
            {this.props.movieData.map((element) => (
              <p key={element.movies}>
                {element.title}
                {element.overview}
                {element.average_votes}
                {element.total_votes}
                {element.image_url}
                {element.popularity}
                {element.released_on}
              </p>
            ))}
          </li>
        </ul>
      </>
    );
  }
}

export default Movies;
