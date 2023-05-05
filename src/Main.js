import React from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city: '',
      cityName: '',
      latitude: '',
      icon: '',
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
      console.log(response.data[0]);
      this.setState({
        displayInfo: true,
        cityName: response.data[0].display_name,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        icon: response.data[0].icon,
        error: null,
      });
    } catch (err) {
      window.confirm(`${err.message} --> Unable to get geocode`);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleExplore}>
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
            <img src={this.state.icon} alt="icon" width="50" height="50"></img>
          </>
        )}
      </>
    );
  }
}

export default Main;
