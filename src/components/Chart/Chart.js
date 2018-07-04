import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    render(){
        return 
        <Bar
            data = {data}
            width = {200}
            height = {100}
            options = {{
                maintainAspectRatio : false
            }}
        /> 
    }
}