import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './tags.css'


export default class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags_array : []
        }
    }
    
    componentDidUpdate(){

        var filter_object = this.props.state.filters_applied
        console.log(filter_object)


    }
    
    handleDelete = (event) => {
        console.log(event.target.parentNode.parentNode.firstChild.innerHTML)
    }

    showTags = () => {

        console.log("showtags")

        var filter_object = this.props.state.filters_applied
        var tags_array = []

        for(var filter_tag in filter_object){
            if(filter_object[filter_tag]!==""){
                tags_array.push([filter_tag,filter_object[filter_tag]])
            }
        }
        
        return(
        tags_array.map( element => { return <Chip className="tags" label={`${element[0]} : ${element[1]}`}/>}))
    }
    
    render() {
        
        const { anchor } = this.state;
        
        
        return (
            <div>
            <Card >
                <CardContent>
                    <Typography variant="headline" component="h2">Filters applied:</Typography>                  
                </CardContent>

                <CardActions className="chip_container">
                    {this.showTags()}
                </CardActions>
            </Card>
            </div>
        )
    }
}