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


class Portfolio extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Element name="Portfolio" id="Portfolio">
                <div className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant='h3' align='center' className={classes.title}>
                            Portfolio
                        </Typography>
                    </Grid>

                    <br />
                    <Grid item xs={6} className={classes.grid}>
                        <Typography variant='h4' align='center' className={classes.text}>
                            
                        </Typography>
                        <Divider className={classes.dividerColor}/>
                    </Grid>
                </div>
            </Element>
        )
    }
}

export default withStyles(styles) (Portfolio);