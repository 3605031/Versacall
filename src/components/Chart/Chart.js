import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            most_popular : [],
            name_labels : [],
            data : []
            
        }
    }

    componentWillReceiveProps(nextProps) {

        var name_labels = nextProps.state.most_popular.map( element => element[0]);
        var data        = nextProps.state.most_popular.map( element => element[1])

        if(JSON.stringify(this.props.most_popular) !== JSON.stringify(nextProps.state.most_popular)){
            this.setState({
                most_popular : nextProps.state.most_popular,
                name_labels : name_labels,
                data : data
            })
        }

    }

    handleClick = () => {
        console.log(this.props.state)
    }

    render(){
        return (
        <div >
            
            <Bar
                data = {{ labels: this.state.name_labels,
                datasets: [{
                    data: this.state.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderWidth: 1
                }]}}
                options = {{
                    title: {
                        display : true,
                        text : 'Most popular baby names'
                    },
                    legend : {
                        display : false
                    }
                }}
            />

        </div> )
    }
} 

