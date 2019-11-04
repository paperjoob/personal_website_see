import React, {Component} from 'react';
import { Element } from 'react-scroll';
import Profile from '../Images/see.jpg';

import { Grid, Avatar, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './AboutMe.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const font = "'Dancing Script', sans-serif"; 

const theme = createMuiTheme({
    typography: {
      fontFamily: font
    },
  });

  const styles = theme => ({
	root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
		align: 'center',
		justify: 'center',
	},
	profile: {
		height: '300px',
		width: '280px',
        margin: 'auto',
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
    }
});

class AboutMe extends Component {
    render() {
        
        const { classes } = this.props;

        return (

            <Element name="About" id="About" >
                <ThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <Grid item xs={12}>
                            <Typography variant='h3' align='center' className={classes.title}>
                                About See
                            </Typography>
                        </Grid>
                        <Grid >
                            <Grid item xs={12}>
                                <Avatar src={Profile} className={classes.profile} />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item xs={6} className={classes.grid}>
                            <Typography variant='h3' align='center' fontFamily='default'>
                                Get to Know Me
                            </Typography>
                            <Divider className={classes.dividerColor}/>
                            <Typography paragraph align='center' className={classes.bio} >
                                Welcome! My name is See. I am a new and ever-curious Software Developer based in Minneapolis, MN.
                                <br />
                                I enjoy learning and making websites, both on the front-end and back-end.
                                <br />
                                When I am not coding, I am busy hiking, planning my future travels, or spending time with my family.
                            </Typography>
                        </Grid>
                    </div>
                </ThemeProvider>
            </Element>
        )
    }
}

export default withStyles(styles) (AboutMe);