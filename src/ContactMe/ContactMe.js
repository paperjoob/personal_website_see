import React, {Component} from 'react';
import { Element } from 'react-scroll';
import './ContactMe.css';

import { Typography, Button, Divider, Paper, Grid, TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';

import emailjs from 'emailjs-com';

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
        paddingBottom: '30px'
    },
    bio: {
        fontFamily: 'default',
        fontSize: '18px'
    },
    grid: {
        width: '700px',
        align:"center",
        justify: 'center',
        margin: 'auto'
    },
    dividerColor: {
        backgroundColor: 'gold',
    },
    textField: {
        marginLeft: theme.spacing(3),
        width: 250,
        align: 'center',
        padding: '3px'
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
        const { name, email, subject, message } = this.state;
        let templateParams = {
          from_name: email,
          to_name: 'seeyang24@gmail.com',
          subject: subject,
          message_html: message,
         }
         emailjs.send(
          'gmail',
          'template_aKix9bLm',
           templateParams,
          'user_EBdcvYx7cR5ar14ONYDge'
         )
         console.log(this.state)
         this.resetForm()
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
        console.log(event.target.value)
    }

    render() {
        const { classes } = this.props;

        return (
            <Element name="Contact Me" id="Contact Me" >
                   <div className={classes.root}>
                        <Grid item xs={12}>
                            <Typography variant='h3' align='center' className={classes.title}>
                                Connect with Me!
                            </Typography>
                        </Grid>

                        <br />
                        <Grid item xs={6} className={classes.grid}>
                            <Typography variant='h4' align='center'>
                                Send me an email
                            </Typography>
                            <Divider className={classes.dividerColor}/>
                            <br />
                            <form className='ContactForm' >
                                <TextField label="Name" className={classes.textField} value={this.state.name} 
                                    onChange={(event) => {this.handleChange(event, 'name')}}/>
                                <TextField label="Email" className={classes.textField} value={this.state.email} 
                                    onChange={(event) => {this.handleChange(event, 'email')}}/>
                                <TextField label="Subject" className={classes.textField} value={this.state.subject} 
                                    onChange={(event) => {this.handleChange(event, 'subject')}}/>
                                <TextField
                                    label="Message"
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