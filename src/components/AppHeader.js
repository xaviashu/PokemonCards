import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import IconButton from '@material-ui/core/IconButton';
import {Typography, Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom"


const AppHeader = () => {

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  }

  return (
    <AppBar
    position='static'
   >
     <Toolbar>
       <IconButton color={'inherit'} disable='true' edge='start' size='medium'>
         <DonutSmallIcon />
       </IconButton>
       <Typography variant="h6" style={{flex: 1}}>
         {'Poke Cards'}
       </Typography>
       <Button color='inherit' onClick={() => handleClick('/')}>HOME</Button>
       <Button color='inherit' onClick={() => handleClick('/like')}>LIKES</Button>
     </Toolbar>
  </AppBar>
  )
}

export default AppHeader;