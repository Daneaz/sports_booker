import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Container, CssBaseline, Link, Box, Typography, MenuItem, InputLabel, Button, Select, FormControl, TextField } from '@material-ui/core';
import moment from "moment";

const axios = require('axios').default;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let timeSlot = [
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM"
]

let durationSlot = [
  "60",
  "120"
]

let typeList = [
  {text: "Badminton Courts", value: 31},
  {text: "Basketball Courts (OCBC Arena)", value: 32},
  {text: "Table Tennis Tables", value: 33},
  {text: "Netball Courts", value: 34},
  {text: "Volleyball Courts", value: 35},
  {text: "Basketball Courts (Sports Hub Hard Courts)", value: 42},
]

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Daneaz/BadmintonBooker">
        Eugene Wu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemMargin: {
    marginTop: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(5),
  },
  multiSelect: {
    marginTop: theme.spacing(3),
  }
}));

export default function SportsBooker() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(moment(new Date()).add(7, "days"));
  const [time, setTime] = React.useState('02:00 PM');
  const [duration, setDuration] = React.useState(120);
  const [type, setType] = React.useState(typeList[0]);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlerDurationChange = (event) => {
    setDuration(event.target.value);
  };


  const handlerTypeChange = (event) => {
    setType(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('/book', {
      email: email,
      password: password,
      date: selectedDate,
      time: time,
      duration: duration,
      type: type
    }).then((response) => {
      alert(response.data);
    }).catch((error) => {
      alert(error);
    });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          National Stadium Booker
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField required className={classes.itemMargin} fullWidth label="Email:" onChange={handleEmailChange} />
          <TextField required type="password" className={classes.itemMargin} fullWidth label="Password:" onChange={handlePasswordChange} />
          <MuiPickersUtilsProvider className={classes.itemMargin} utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              minDate={moment(new Date()).add(7, "days")}
              id="date-picker-inline"
              label="Date:"
              value={selectedDate}
              autoOk
              fullWidth
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl className={classes.itemMargin} fullWidth>
            <InputLabel>Time:</InputLabel>
            <Select
              value={time}
              onChange={handleTimeChange}
            >
              {
                timeSlot.map((cc, i) => {
                  return <MenuItem key={i} value={cc}>{cc}</MenuItem>
                })
              }
            </Select>
          </FormControl>

          <FormControl className={classes.itemMargin} fullWidth>
            <InputLabel>Duration:</InputLabel>
            <Select
                value={duration}
                onChange={handlerDurationChange}
            >
              {
                durationSlot.map((cc, i) => {
                  return <MenuItem key={i} value={cc}>{cc} mins</MenuItem>
                })
              }
            </Select>
          </FormControl>

          <FormControl className={classes.itemMargin} fullWidth>
            <InputLabel>Facility Type:</InputLabel>
            <Select
                value={type}
                onChange={handlerTypeChange}
            >
              {
                typeList.map((cc, i) => {
                  return <MenuItem key={i} value={cc}>{cc.text}</MenuItem>
                })
              }
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Book
          </Button>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container >
  );
}
