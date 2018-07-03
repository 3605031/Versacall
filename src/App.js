import React, { Component } from 'react';
import Filter from "./components/Filter/Filter.js"
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.get("https://data.cityofnewyork.us/api/views/25th-nujf/rows.json")
      .then(res => {
        console.log(res.data.data[0])

        console.log(res.data.data.length)

        var data_array = res.data.data
        var year = 8
        var gender = 9
        var ethnicity = 10
        var name = 11

        var year_array = []
        var ethnicity_array = []
        var gender_array = []


        data_array.forEach(function(element){

          if(!year_array.includes(element[year])){
            year_array.push(element[year])
          }

          if(!ethnicity_array.includes(element[ethnicity])){
            ethnicity_array.push(element[ethnicity])
          }

          if(!gender_array.includes(element[gender])){
            gender_array.push(element[gender])
          }

        })

        console.log(year_array)
        console.log(ethnicity_array)
        console.log(gender_array)
        
      })
  }



  render() {
    return (
      <div className="App">
        <div className="flex_container">
          <div className="filter">
            <Filter />
          </div>

          <div className="graph">
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
