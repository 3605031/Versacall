import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import MenuList from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import API from "../../api/API.js";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import './filter.css';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: 'left',
            anchorEl: null,
            loaded: false,
            data: [],
            year: [],
            ethnicity: [],
        }
    }


    componentDidMount() {
        API.getData()
            .then(res => {
                
                //Initialize local data array
                var data_array = res.data.data

                //Initialize array slots for year/ethnicity data
                var year = 8
                var ethnicity = 10

                //Dynamically generate all possible years/ethnicity
                var year_array = []
                var ethnicity_array = []
                var gender_array = []

                //Get all different types of ethnicity/years from data
                data_array.forEach(function (element) {

                    if (!year_array.includes(element[year])) {
                        year_array.push(element[year])
                    }

                    if (!ethnicity_array.includes(element[ethnicity])) {
                        ethnicity_array.push(element[ethnicity])
                    }
                })

                this.setState({
                    data: data_array,
                    year: year_array,
                    ethnicity: ethnicity_array,
                    loaded: true,
                })

                //Initial top 10 without filters
                //this.props.filterData(this.state.data, null, null, null)
               
            })
    }

    //Year Filter
    handleChange_year = event => {
        this.props.setFilter(this.state.data,null,event.target.value,null)

    };

    //Gender Filter
    handleChange_gender = event => {

        console.log(event.target.value)
        this.props.setFilter(this.state.data,event.target.value,null,null)

    };
    //Ethnicity Filter
    handleChange_ethnicity = event => {
        this.props.setFilter(this.state.data,null,null,event.target.value)

    };

    clearAllFilter = () => {
        this.props.setFilter(this.state.data,"", "", "")
    };




    render() {

        const { anchor } = this.state;


        return (
            <div>

                <div className="gender_filter">
                <FormControl >
                            <InputLabel style={{minWidth: "220"}} >Gender</InputLabel>
                            <Select
                                value={this.props.state.gender_filter}
                                onChange={this.handleChange_gender}
                                
                            >
                                <MenuItem value={"MALE"}>Male</MenuItem>)}
                                <MenuItem value={"FEMALE"}>Female</MenuItem>)}
                            </Select>
                </FormControl>

                </div>


                <div className="year_filter">
                    
                        <FormControl >
                            <InputLabel htmlFor="age-simple">Year</InputLabel>
                            <Select
                                value={this.props.state.year_filter}
                                onChange={this.handleChange_year}
                               
                            >
                                {this.state.year.map( (element) => <MenuItem key={element} value={element}>{element}</MenuItem>)}
                            </Select>
                        </FormControl>
                    
                </div>

                <div className="year_filter">
                    
                    <FormControl >
                        <InputLabel htmlFor="age-simple">Ethnicity</InputLabel>
                        <Select
                            value={this.props.state.ethnicity_filter}
                            onChange={this.handleChange_ethnicity}
                           
                        >
                            {this.state.ethnicity.map( (element) => <MenuItem key={element} value={element}>{element}</MenuItem>)}
                        </Select>
                    </FormControl>
                
            </div>

                <div>
                    <Button color="secondary" onClick={this.clearAllFilter}>
                        CLEAR ALL
                    <Icon>clear</Icon>
                    </Button>
                </div>

            </div>
        )
    }
}