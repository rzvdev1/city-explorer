import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <>
        <h5>Weather Data</h5>
        <p>
          {this.props.weatherData.map((element) => (
            <p key={element.date}>
              {element.date} {element.description}
            </p>
          ))}
        </p>
      </>
    );
  }
}

export default Weather;
