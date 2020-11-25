import React from 'react';

import useStyles from "./style";
const LawyersPage = props => {
  const classes = useStyles();

  return (
    <button className={classes.myButton}>LawyersPage</button>
  )
};

export default LawyersPage;
