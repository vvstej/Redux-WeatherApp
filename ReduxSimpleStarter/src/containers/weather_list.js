import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.props)}
          {this.props.weather.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    var tempList = [];
    var pressureList = [];
    var humidityList = [];
    var lon = cityData.city.coord.lon;
    var lat = cityData.city.coord.lat;
    cityData.list.map(function(weather){
      tempList.push(weather.main.temp);
    });
    cityData.list.map(function(weather){
      pressureList.push(weather.main.pressure);
    });
    cityData.list.map(function(weather){
      humidityList.push(weather.main.humidity);
    })
    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={tempList} color="red" units="K"/>
        </td>
        <td>
          <Chart data={pressureList} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidityList} color="green" units="%"/>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather } //{weather} = {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
