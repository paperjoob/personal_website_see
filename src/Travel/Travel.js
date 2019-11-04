import React, {Component} from 'react';
import { Element } from 'react-scroll';
import { Grid, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
        paddingBottom: '1vh'
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

class Travel extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Element name="Travel" id="Travel">
                <div className={classes.root}>
                        <Grid item xs={12}>
                            <Typography variant='h3' align='center' className={classes.title}>
                                Travel
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.grid}>
                            <Typography variant='h4' align='center' className={classes.text}>
                                Oh, the places you'll go
                            </Typography>
                            <Divider className={classes.dividerColor}/>
                        </Grid>
                    </div>
            </Element>
        )
    }
}

export default withStyles(styles) (Travel);