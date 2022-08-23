import React, { Component } from 'react'
import axios from 'axios'
import Weatherdisplay from './Weatherdisplay'
export default class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: '',
      tempHigh: '',
      date: '',
      wind: '',
      icon: '',
      description: '',
      temp2: '',
      temp2High: '',
      date2: '',
      wind2: '',
      icon2: '',
      description2: '',
    }
  }

  handleWeather = async () => {
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?lat=35.1378653&lon=-90.0280869&key=${process.env.REACT_APP_WEATHER}&units=I`
    const res = await axios.get(API);
     this.setState({
      temp: res.data.data[0].low_temp,
      tempHigh: res.data.data[0].high_temp,
      date: res.data.data[0].datetime,
      wind: res.data.data[0].wind_spd,
      icon: res.data.data[0].weather.icon,
      description: res.data.data[0].weather.description,
      temp2: res.data.data[1].low_temp,
      temp2High: res.data.data[1].high_temp,
      date2: res.data.data[1].datetime,
      wind2: res.data.data[1].wind_spd,
      icon2: res.data.data[1].weather.icon,
      description2: res.data.data[1].weather.description
     });
     console.log(res.data);
     
  }
  render() {
    return (
      <div>
        
        <button onClick={this.handleWeather}>Click</button>
        <Weatherdisplay temp={this.state.temp} 
        tempHigh={this.state.tempHigh}
        temp2={this.state.temp2}
        temp2High={this.state.temp2High}
        date={this.state.date}
        date2={this.state.date2}
        wind={this.state.wind} 
        wind2={this.state.wind2}
        img={this.state.icon} 
        img2={this.state.icon2}
        description={this.state.description}
        description2={this.state.description2}/>
      </div>
    )
  }
}
