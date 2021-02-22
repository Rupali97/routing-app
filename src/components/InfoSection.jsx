import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    marginTop: 30,
    width: 600,
    padding: 20,
    height: 400,
  },
}))

function InfoSection(props) {
  const classes = useStyles();

  if(props.jobField === "") return <div />

  else if(props.jobField === "react-dev")
    return (
      <div>
        <Paper className={classes.paperStyle} elevation={3}>
          <Typography variant="h5">React Developer responsibilities:</Typography><br />
          <Typography variant="body1">We are looking for an experienced JavaScript developer who is proficient with React.js. The primary focus of the selected candidate would be on developing user interface components implementing and executing them following well-known React.js workflows (such as Flux or Redux). Also ensuring that these components and the overall application are robust and easy to manage. A commitment to collaborative problem solving, sophisticated design, and quality products are important.
          </Typography>
        </Paper>
      </div>
    )

  else if(props.jobField === "python-dev")
    return (
      <div>
        <Paper className={classes.paperStyle} elevation={3}>
          <Typography variant="h5">Python Developer responsibilities:</Typography><br />
          <Typography variant="body1">We are looking for a Python Developer to join our engineering team and help us develop and maintain various software products.
            Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services. To be successful in this role, you should have experience using server-side logic and work well in a team.
            Ultimately, you’ll build highly responsive web applications that align with our business needs.
          </Typography>
        </Paper>
      </div>
    )

  else if(props.jobField === "android")
    return (
      <div>
        <Paper className={classes.paperStyle} elevation={3}>
          <Typography variant="h5">Android developer responsibilities: </Typography><br />
          <Typography variant="body1">An Android developer is responsible for developing applications for devices powered by the Android operating system. Due to the fragmentation of this ecosystem, an Android developer must pay special attention to the application's compatibility with multiple versions of Android and device types.</Typography>
        </Paper>
      </div>
    )
}

export default InfoSection
