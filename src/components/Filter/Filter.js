import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import MenuList from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default class Filter extends Component {

    state = {
        anchor: 'left',
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };



    render() {

        const { anchor } = this.state;


        return (
            <Drawer
                variant="permanent"

                anchor={anchor}
            >


                <div>   
                        <Button
                            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            
                        >
                            <Icon>person</Icon>
                            Gender
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Male</MenuItem>
                            <MenuItem onClick={this.handleClose}>Female</MenuItem>
                        </Menu>
                    
                </div>

                <div>
                </div>

            </Drawer>
        )
    }
}