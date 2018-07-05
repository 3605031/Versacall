import React, { Component } from 'react';
import Filter from "./components/Filter/Filter.js";
import Chart from "./components/Chart/Chart.js"
import helpers from "./helpers/functions.js";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender_filter : "",
      year_filter   : "",
      ethnicity_filter : "",
      most_popular : [],
    }
  }

  componentDidMount() {


    
  }

  //Redo
  setFilter = (data_array,gender,year,ethnicity) => {


      if(gender!==null){

        this.setState({
          gender_filter : gender 
        },this.filterData.bind(this,data_array))
      }
      if(year!==null){

        this.setState({
          year_filter : year 
        }, this.filterData.bind(this,data_array))
      }
      if(ethnicity!==null){

        this.setState({
          ethnicity_filter : ethnicity
        }, this.filterData.bind(this,data_array))
      }
  }

  log = () => {
    console.log(this.state)
  }

  filterData = (data_array) => {

    console.log(this.state)
    
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

      var arg1 = (element[year_slot] === this.state.year_filter) || this.state.year_filter === ""
      var arg2 = (element[gender_slot] === this.state.gender_filter) || this.state.gender_filter === ""
      var arg3 = (element[ethnicity_slot] === this.state.ethnicity_filter) || this.state.ethnicity_filter === ""


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
    }, function(){
      console.log(this.state.most_popular)
    })
    
  }



  render() {
    return (
      <div className="App">
        <div className="flex_container">
          <div className="filter">
            <Filter filterData={this.filterData} setFilter={this.setFilter}  state={this.state} />
          </div>

          <Paper className="graph">
            <Chart state={this.state} />
          </Paper>

        </div>

        <div className="flex_container">
          <div className="clear_filter">
                   
          </div>

          <div className="filter_tags">
              
          </div>

        </div>
      </div>
    );
  }
}

export default App;
