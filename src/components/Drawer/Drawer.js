import React from 'react';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu';

const toggle = ()=>{}

export default function(props){


    return (
        <React.Fragment key={'anchor'}>
            <Button variant="contained" color="primary" style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                        }} onClick={toggle("left", true)}>{<MenuIcon/>}</Button>

        </React.Fragment >
    )
}