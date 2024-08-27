import React from 'react';
import 'date-fns';
import {makeStyles} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    CssBaseline,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@material-ui/core';
import moment from "moment";
import {fetchAPI} from "./utility";
import Swal from 'sweetalert2'

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
    {text: "Tennis Indoor Courts", value: 85},
    {text: "Tennis Outdoor Courts", value: 83}
]

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Daneaz/sports_booker">
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    const [isSubmit, setIsSubmit] = React.useState(false);

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

    const submitForm = async (event) => {
        setIsSubmit(true);
        event.preventDefault();
        try {
            let response = await fetchAPI('POST', 'book', {
                email: email,
                password: password,
                date: selectedDate,
                time: time,
                duration: duration,
                type: type
            });

            await Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response,
                showConfirmButton: true
            })

            setIsSubmit(false);
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Error',
                html: err +
                    ', Please visit ' +
                    '<a href="https://sportshub.perfectgym.com/clientportal2/#/FacilityBooking?clubId=1">OCBC SportsHub</a> ' +
                    'for more detail',
                showConfirmButton: true
            })
            setIsSubmit(false);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    National Stadium Booker
                </Typography>
                <form className={classes.form} onSubmit={submitForm}>
                    <TextField required className={classes.itemMargin} fullWidth label="Email:"
                               onChange={handleEmailChange}/>
                    <TextField required type="password" className={classes.itemMargin} fullWidth label="Password:"
                               onChange={handlePasswordChange}/>
                    <MuiPickersUtilsProvider className={classes.itemMargin} utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy-MM-dd"
                            margin="normal"
                            minDate={moment(new Date()).add(1, "days")}
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
                    {isSubmit ?
                        <CircularProgress className={classes.submit}/>
                        :
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Book
                        </Button>
                    }

                </form>
            </div>

            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}
