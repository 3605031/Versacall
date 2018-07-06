import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import './filter.css';


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }


    componentDidMount() {
        
    }

    
    handleChange = (event,type) => {
        this.props.setFilter(type,event.target.value)
    };



    render() {



        return (
            <div>
            <Paper>

                
                <FormControl className="gender_filter" >
                            <InputLabel  >Gender</InputLabel>
                            <Select
                                value={this.props.state.filters_applied.gender}
                                onChange={ (event) => this.handleChange(event,"gender")}
                                
                            >
                                <MenuItem value={"MALE"}>Male</MenuItem>)}
                                <MenuItem value={"FEMALE"}>Female</MenuItem>)}
                            </Select>
                </FormControl>
                
                


                
                <FormControl className="year_filter" >
                    <InputLabel >Year</InputLabel>
                    <Select
                        value={this.props.state.filters_applied.year}
                        onChange={ (event) => this.handleChange(event,"year")}
                        
                    >
                        {this.props.state.loaded ? this.props.state.year.map( (element) => <MenuItem key={element} value={element}>{element}</MenuItem>):null}
                    </Select>
                </FormControl>
                



                    
                <FormControl className="ethnicity_filter">
                    <InputLabel >Ethnicity</InputLabel>
                    <Select
                        value={this.props.state.filters_applied.ethnicity}
                        onChange={ (event) => this.handleChange(event,"ethnicity")}
                        
                    >
                        {this.props.state.loaded ? this.props.state.ethnicity.map( (element) => <MenuItem key={element} value={element}>{element}</MenuItem>):null}
                    </Select>
                </FormControl>
            </Paper>

            <Button className="clear_all" variant="contained" color="secondary" fullWidth={true} onClick={this.props.clearAll}>
                    CLEAR ALL
                <Icon>clear</Icon>
                </Button>
            </div>
        )
    }
}