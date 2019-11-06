import React, {Component} from 'react';
import { Element } from 'react-scroll';
import './ContactMe.css';

import { Typography, Button, Divider, Grid, TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const styles = theme => ({
	root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
		align: 'center',
		justify: 'center',
	},
    title: {
		fontWeight: 'bolder',
        color: 'black',
        fontSize: 55,
        paddingTop: '80px',
        paddingBottom: '1vh'
    },
    text: {
        fontFamily: 'default',
        fontSize: '24px'
    },
    grid: {
        flexGrow: 2,
        align:"center",
        justify: 'center',
        margin: 'auto'
    },
    dividerColor: {
        backgroundColor: 'gold',
        width: '80%',
        margin: 'auto',
        align: 'center'

    },
    textField: {
        marginLeft: theme.spacing(3),
        width: 250,
        align: 'center',
        padding: '3px',
    },
    container: {
        display: "flex",
        justifyContent: "center"
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
        backgroundColor: 'palevioletred',
        '&:hover': {
        backgroundColor: 'palevioletred',
        },
    },
    formInput: {
        align:"center",
        justify: 'center',
        margin: 'auto',
        flexGrow: 1
    }
});

class ContactMe extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    // submit the message onClick
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email === '') {
            return Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Please enter in your email.',
              })
        } else {
        const { name, email, subject, message } = this.state;
        let templateParams = {
          from_name: name + '(' + email +')',
          to_name: 'seeyang24@gmail.com',
          subject: subject,
          message_html: message,
         }
         emailjs.send(
          'default_service',
          'template_aKix9bLm',
           templateParams,
          'user_EBdcvYx7cR5ar14ONYDge'
         )
         Swal.fire({
            type: 'success',
            title: 'Message sent!',
          })
         this.resetForm()
        }
    }

    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }

    // handlechange
    handleChange = (event, param) => {
        this.setState({ 
            [param]: event.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Element name="Contact" id="Contact" >
                   <div className={classes.root}>
                        <Grid item xs={12}>
                            <Typography variant='h3' align='center' className={classes.title}>
                                Let's Connect!
                            </Typography>
                        </Grid>
                        <Grid className={classes.grid} style={{ minHeight: '100vh' }}>
                            <Typography variant='h4' align='center' className={classes.text}>
                                Message me at seeyang24@gmail.com
                                <br />
                                or fill out the form below.
                            </Typography>
                            <Divider className={classes.dividerColor}/>
                            <br />
                            <form className='ContactForm' onSubmit={this.handleSubmit}>
                                <TextField label="Name" className={classes.textField} value={this.state.name} 
                                    name="name" onChange={(event) => {this.handleChange(event, 'name')}}/>
                                <TextField label="Email" className={classes.textField} value={this.state.email} 
                                    name="email" onChange={(event) => {this.handleChange(event, 'email')}}/>
                                <TextField label="Subject" className={classes.textField} value={this.state.subject} 
                                    name="subject" onChange={(event) => {this.handleChange(event, 'subject')}}/>
                                <TextField
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows="4"
                                    value={this.state.message}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event) => {this.handleChange(event, 'message')}}
                                />
                            </form>
                            <br />
                            <Grid className={classes.container}>
                                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                                    Submit
                                    <SendIcon className={classes.rightIcon}>send</SendIcon>
                                </Button>
                            </Grid>
                            <br />
                            <Typography variant="h5" align='center'  >
                                Thanks for visiting!
                            </Typography>
                        </Grid>
                    </div>
            </Element>
        )
    }
}

export default withStyles(styles) (ContactMe);