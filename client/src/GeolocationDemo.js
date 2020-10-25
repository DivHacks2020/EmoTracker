import React from "react";

class GeolocationDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.showError);
      console.log("Location is supported");
    } else {
      console.log("Location is not supported");
    }
  }

  getCoordinates(position) {
    console.log(position);
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Geo Demo</h1>
        <button onClick={this.getLocation}>Get Coordinates</button>
        <p>Lat: {this.state.lat}</p>
        <br />
        <p>Long: {this.state.long}</p>

{
  this.state.lat && this.state.long ?
  <img src={`http://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=6&size=400x400
  &style=visibility:on
  &markers=anchor:32,10%7Cicon:https://goo.gl/1oTJ9Y%7C${this.state.lat},${this.state.long}
  &key=${process.env.REACT_APP_GOOGLE_API_KEY}`} alt='map'/>
  : null
}
      </React.Fragment>
    );
  }
}

export default GeolocationDemo;
