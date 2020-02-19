import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 150,
    color: '#162AF4',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#162AF4'
  }
});

function valuetext(value) {
  let str = ""
  for (let i = 0 ; i < value ; i++) {
    str += "£"
  }
  return `${str}`;
}

const marks = [
  {
    value: 0,
    label: '£',
  },
  {
    value: 1,
    label: '££',
  },
  {
    value: 2,
    label: '£££',
  },
  {
    value: 3,
    label: '££££',
  }
];

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 3]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaLabel={valuetext}
        valueLabelFormat={valuetext}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        defaultValue={[0, 3]}
        step={1}
        marks
        min={0}
        max={3}
      />
    </div>
  );
}
