import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectFieldText: {
    marginTop: 10,
  },
  container: {
    margin: "20px 0",
  }
}));

function SelectionBar(props) {
  const classes = useStyles();
  const [jobField, setJobField] = React.useState('');

  const handleChange = (event) => {
    setJobField(event.target.value);
  };

  useEffect(() => {
    props.getJobField(jobField)
  }, [jobField])

  // console.log("jobField", jobField)

  return (
    <div className={classes.container}>
      <div style={{display: 'flex'}}>
        <div><Typography className={classes.selectFieldText} variant="h6">Select your job field: </Typography></div>
        <div>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={jobField}
              onChange={handleChange}
              label="job"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="react-dev">React dev</MenuItem>
              <MenuItem value="python-dev">Python dev</MenuItem>
              <MenuItem value="android">Android</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
     
    </div>
  )
}

export default SelectionBar
