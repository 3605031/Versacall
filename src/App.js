import React, { Component } from 'react';
import Filter from "./components/Filter/Filter.js";
import Chart from "./components/Chart/Chart.js";
import Tags from "./components/Tags/Tags.js";
import helpers from "./helpers/functions.js";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters_applied: {
        gender : "",
        year   : "",
        ethnicity : "",
      },
      most_popular : [],
      
    }
  }

  componentDidMount() {


    
  }

  //
  setFilter = (data_array,gender,year,ethnicity) => {


      if(gender!==null){

        var filters_applied = {
          gender : gender,
          year   : this.state.filters_applied.year,
          ethnicity : this.state.filters_applied.ethnicity,
        }

        this.setState({
          filters_applied : filters_applied
        },this.filterData.bind(this,data_array))
      }
      if(year!==null){
        var filters_applied = {
          gender : this.state.filters_applied.gender,
          year   : year,
          ethnicity : this.state.filters_applied.ethnicity,
        }

        this.setState({
          filters_applied : filters_applied
        }, this.filterData.bind(this,data_array))
      }

      if(ethnicity!==null){
        var filters_applied = {
          gender : this.state.filters_applied.gender,
          year   : this.state.filters_applied.year,
          ethnicity : ethnicity,
        }

        this.setState({
          filters_applied : filters_applied
        }, this.filterData.bind(this,data_array))
      }
  }

  clearAll = (data_array) => {
    var filters_applied = {
      gender : "",
      year   : "",
      ethnicity : "",
    }

      this.setState({
        filters_applied : filters_applied
      }, this.filterData.bind(this,data_array))
  }
  

  log = () => {
    console.log(this.state)
  }

  filterData = (data_array) => {
    
    var year_slot = 8
    var gender_slot = 9
    var ethnicity_slot = 10
    var name = 11

    var name_map = new Map()
    var name_array = []
    var popular_names = []
    var top_names = 10

    
    //Map each name's popularity
    data_array.forEach((element,index) => {

      var arg1 = (element[year_slot] === this.state.filters_applied.year) || this.state.filters_applied.year === ""
      var arg2 = (element[gender_slot]  === this.state.filters_applied.gender) || this.state.filters_applied.gender === ""
      var arg3 = (element[ethnicity_slot] === this.state.filters_applied.ethnicity) || this.state.filters_applied.ethnicity === ""


      if(!name_map.has(element[name].toLowerCase()) && arg1 && arg2  && arg3){
        
        name_map.set(element[name].toLowerCase(),1)
      }

      else if(name_map.has(element[name].toLowerCase()) && arg1 && arg2  && arg3){
        
        var counter = name_map.get(element[name].toLowerCase())
        counter = counter + 1
        name_map.set(element[name].toLowerCase(),counter)
      }
    })

    //Add to array to be sorted
    name_map.forEach(function(value,key,map){
      name_array.push([key,value])
    })

    //Sort array descending
    name_array.sort(helpers.sortFunction)
    //Get first 10
    popular_names = name_array.slice(0,top_names)
    this.setState({
      most_popular : popular_names
    })
    
  }



  render() {
    return (
      <div className="App">
        <div className="flex_container">
          <div className="filter">
            <Filter filterData={this.filterData} setFilter={this.setFilter} clearAll={this.clearAll}  state={this.state} />


            <Paper  className="tags">
              <Tags state={this.state}/>
            </Paper>

          </div>

          <Paper className="graph">
            <Chart state={this.state} />
          </Paper>

           

        </div>
      </div>
    );
  }
}

export default App;
