import React, {Component} from 'react';
import { Element } from 'react-scroll';
import { Grid, Typography, Divider, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Travel.css';

import Thailand from '../Images/thailand.jpg';
import Rockies from '../Images/rockies.JPG';
import Hawaii2 from '../Images/Hawaii2.jpg';
import Minneapolis from '../Images/minneapolis.JPG';
import Venice from '../Images/venice2.jpg';
import Denver from '../Images/denver.jpg';
import Crested from '../Images/crestedbutte.jpg';
import Phuket from '../Images/phuket2.JPG';

import ImageGallery from 'react-image-gallery';

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
        color: 'white',
        fontSize: 55,
        paddingTop: '80px',
        paddingBottom: '1vh'
    },
    text: {
        color: 'white'
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
    container: {
        display: "flex",
        justifyContent: "center",
        align: 'center',
        margin: 'auto'
    },
    smallgrid: {
        width: '70vh',
        align: 'center',
        margin: 'auto',
        padding: '6vh',
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
			justifyContent: 'center'
		}
    }
});

class Travel extends Component {
    render() {
        const { classes } = this.props;

        const images = [
            {
                original: Minneapolis,
                thumbnail: Minneapolis,
                description: 'Minneapolis, MN'
            },
            {
                original: Phuket,
                thumbnail: Phuket,
                description: 'Phuket, Thailand',
            },
            {
                original: Rockies,
                thumbnail: Rockies,
                description: 'Rocky Mountains National Park'
            },
            {
                original: Hawaii2,
                thumbnail: Hawaii2,
                description: 'Haunama Bay, Hawaii',
            },
            {
                original: Venice,
                thumbnail: Venice,
                description: 'Venice, Italy',
            },
            {
                original: Denver,
                thumbnail: Denver,
                description: 'Denver, CO',
            },
            {
                original: Crested,
                thumbnail: Crested,
                description: 'Crested Butte, CO',
            },

          ];

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
                        <Grid className={classes.smallgrid}>
                        <ImageGallery items={images} />
                        </Grid>
                </div>
            </Element>
        )
    }
}

export default withStyles(styles) (Travel);