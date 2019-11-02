import React, {Component} from 'react';
import { Element } from 'react-scroll';
import Profile from '../Images/see.jpg';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Main.css';

const styles = theme => ({
	root: {
		width: '100vw',
		height: '100vh',
		paddingTop: '50px',
		margin: 'auto',
	},
	backgroundColor: {
		backgroundColor: theme.palette.background.paper
	},
	profile: {
		height: '300px',
		width: '300px',
		margin: 'auto'
	},
	title: {
		fontWeight: 'bolder',
        textTransform: 'uppercase',
        color: 'white',
        margin: '50px'
    },
    text: {
        fontWeight: 'bolder',
        color: 'white',
        margin: '50px'
    }
});

class Main extends Component {
      
    render() {

        const { classes } = this.props;

        return (
            <Element name="Main" className="Main">
                <Grid className={classes.root}>
                <Grid item xs={12}>
                        <Typography
                            variant='h3'
                            align='center'
                            className={classes.title}>
                            See Yang
                        </Typography>
					</Grid>
                    <Grid item xs={12}>
						<Avatar src={Profile} className={classes.profile} />
					</Grid>
                    <br />
                    <Grid item xs={12}>
							<Typography
								variant='h5'
								align='center'
								className={classes.text}>
								FULL STACK SOFTWARE DEVELOPER
                                <br />
                                Minneapolis, MN
							</Typography>
						</Grid>

                </Grid>
            </Element>
        )
    }
}

export default withStyles(styles) (Main);