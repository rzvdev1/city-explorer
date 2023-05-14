import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    const movieImg = `https://image.tmdb.org/t/p/w500/${this.props.movieData.images_url}`;

    //https://image.tmdb.org/t/p/w500/iLWsLVrfkFvOXOG9PbUAYg7AK3E.jpg

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movieImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <ul className="list-group font">
          {' '}
          Movie Data
          <li className="list-group-item list-group-item-primary">
            {this.props.movieData.map((element, idx) => (
              <p key={idx}>
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
