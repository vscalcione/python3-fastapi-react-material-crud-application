import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './FormComponent.css';

export const FormComponent = () => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }),
  );

  const classes = useStyles();

  return (
    <>
      <div className="App">
        <form className={classes.root} noValidate autoComplete="off">
          <div>
              <TextField style={{ width: '300px' }} id="filled-basic" label="First Name" variant="filled" />
          </div>
          <div>
              <TextField style={{ width: '300px' }} id="filled-basic" label="Last Name" variant="filled" />
          </div>
          <div>
              <TextField style={{ width: '300px' }} id="filled-basic" label="Email" variant="filled" />
          </div>
          <div>
              <TextField style={{ width: '300px' }} id="filled-basic" label="Password" variant="filled" type="password" />
          </div>
          <div>
            <Button variant="contained" color="primary"> Submit </Button> 
          </div>
        </form>
      </div>
    </>
  );

}