import React, {Component} from 'react';
import { Element } from 'react-scroll';
import Profile from '../Images/see.jpg';

import { Grid, Avatar, Typography, Divider, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './AboutMe.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Reactjs from '../Icons/react.svg';
import JavaScript from '../Icons/javascript.svg';
import Node from '../Icons/nodejs-1-logo.png';
import Reduxx from '../Icons/redux.svg';
import Postgres from '../Icons/postgresql.png';
import PHP from '../Icons/php.png';
import CSS from '../Icons/CSS.3.svg';
import HTML from '../Icons/html5.svg';

const font = "'Dancing Script', sans-serif"; 

const theme = createMuiTheme({
    typography: {
      fontFamily: font
    },
    overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "14px",
            fontFamily: 'default'
          }
        }
      }
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
        [theme.breakpoints.down('sm')]: {
            height: '220px',
            width: '200px'
		}
    },
    title: {
		fontWeight: 'bolder',
        color: 'black',
        fontSize: 55,
        paddingTop: '80px',
        paddingBottom: '30px',
    },
    getToKnow: {
        [theme.breakpoints.down('sm')]: {
			fontSize: 32
		}
    },
    bio: {
        fontFamily: 'default',
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
			fontSize: '15px'
		}
    },
    languages: {
        fontFamily: 'default',
        fontSize: '18px',
        fontWeight: 'bolder',
        [theme.breakpoints.down('sm')]: {
			fontSize: '15px'
		}
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
    icons: {
        height: '50px',
        width: '50px',
        fontSize: '50px',
        fontFamily: 'default',
        align: 'center',
        margin: theme.spacing(1),
        justify: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '35px',
            width: '35px'
		}
    },
    iconGrid: {
        align:"center",
        justify: 'center',
        margin: 'auto',
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
                            <Typography variant='h3' align='center' fontFamily='default' className={classes.getToKnow}>
                                Get to Know Me
                            </Typography>
                            <Divider className={classes.dividerColor}/>
                            <br />
                            <Typography paragraph align='center' className={classes.bio} >
                                <strong>Welcome!</strong> My name is See. I am a new and ever-curious Software Developer based in Minneapolis, MN.
                                <br />
                                I enjoy learning new materials and designing websites, both on the front-end and back-end.
                                <br />
                                When I am not coding, I am busy hiking, planning my future travels, or spending time with my family.
                            </Typography>
                        </Grid>
                        <Grid item xs={8}  className={classes.grid} align="center">
                            <Typography paragraph align='center' className={classes.languages} >
                                Languages and Tools:
                            </Typography>
                            <Tooltip className={classes.icons} title="ReactJS" >
                                <img src={Reactjs} alt="reactIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="JavaScript" >
                                <img src={JavaScript} alt="JavaScriptIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="Node.JS" >
                                <img src={Node} alt="NodeJSIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="Redux" >
                                <img src={Reduxx} alt="ReduxIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="PostgreSQL" >
                                <img src={Postgres} alt="PostgreSQLIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="PHP" >
                                <img src={PHP} alt="PHPIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="CSS" >
                                <img src={CSS} alt="cssIcon"/>
                            </Tooltip>
                            <Tooltip className={classes.icons} title="HTML" >
                                <img src={HTML} alt="htmlIcon"/>
                            </Tooltip>
                        </Grid>
                    </div>
                </ThemeProvider>
            </Element>
        )
    }
}

export default withStyles(styles) (AboutMe);