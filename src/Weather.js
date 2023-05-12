import React from 'react';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        <ul className="list-group font">
          {' '}
          Weather Data
          <li class="list-group-item list-group-item-primary">
            {this.props.weatherData.map((element) => (
              <p key={element.date}>
                {element.date} {element.description}
              </p>
            ))}
          </li>
        </ul>
      </>
    );
  }
}

export default Weather;
