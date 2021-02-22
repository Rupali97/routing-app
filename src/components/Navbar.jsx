import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  linkText: {
    color: "white",
    textDecoration: "none",
    marginRight: 25,
    padding: 10,
    '&:hover': {
      background: "#92a8d1",
   },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" style={{backgroundColor: '#034f84'}}>
        <Toolbar>
            <Link className={classes.linkText} to="/jobs"><Typography variant="h6">Jobs</Typography></Link>
            <Link className={classes.linkText} to="/inbox"><Typography variant="h6">Inbox</Typography></Link>
            <Link className={classes.linkText} to="/calendar"><Typography variant="h6">Calendar</Typography></Link>
            <Link className={classes.linkText} to="/career"><Typography variant="h6">Career Page</Typography></Link>
            <Link className={classes.linkText} to="/report"><Typography variant="h6">Report</Typography></Link>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  )
}

export default Navbar
