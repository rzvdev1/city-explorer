import React from 'react';
import axios from 'axios';
import './Main.css';
import Weather from './Weather';
import { Button, Form } from 'react-bootstrap';
import Movies from './Movies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city: '',
      cityName: '',
      latitude: '',
      icon: '',
      weatherData: [],
      movieData: [],
    };
  }

  handleInput = (e) => {
    this.setState({ city: e.target.value }, () => console.log(this.state.city));
  };

  handleExplore = async (e) => {
    e.preventDefault();
    console.log('submitted');
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`;
    try {
      const response = await axios.get(url);
      console.table(response.data[0]);
      this.setState({
        displayInfo: true,
        cityName: response.data[0].display_name,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        icon: response.data[0].icon,
        error: null,
      });
      this.displayWeather();
      this.displayMovies();
    } catch (err) {
      window.confirm(`${err.message} --> Unable to get geocode`);
    }
  };

  displayWeather = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weatherData?searchQuery=${this.state.city}`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ weatherData: response.data }, () =>
        console.table(this.state.weatherData)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  displayMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?movieQuery=${this.state.city}`;
      console.log(url);
      const response = await axios.get(url);
      this.setState({ movieData: response.data }, () =>
        console.table(this.state.movieData)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleExplore} className="form">
          <Form.Group className="form-group col-md-6">
            <Form.Label>Search the city</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleInput}
            ></Form.Control>
          </Form.Group>

          <Button className="btn btn-primary" onClick={this.getLocation}>
            Explore!
          </Button>
        </Form>
        {this.state.displayInfo && (
          <>
            <p>{this.state.cityName}</p>
            <p>Latitude: {this.state.latitude}</p>
            <p>Longitude: {this.state.longitude}</p>
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=12&size=800x800&format=jpg&markers=icon:${this.state.icon}|${this.state.latitude},${this.state.longitude}`}
              alt="City"
            ></img>
          </>
        )}

        {this.state.weatherData.length > 0 && (
          <Weather weatherData={this.state.weatherData} />
        )}

        {this.state.movieData.length > 0 && (
          <Movies movieData={this.state.movieData} />
        )}
      </>
    );
  }
}

export default Main;
