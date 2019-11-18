import React, {Component} from 'react';
import { Element } from 'react-scroll';
import { Grid, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';

  const styles = theme => ({
	root: {
        flexGrow: 1,
        minHeight: '100vh',
        width: '100vw',
		align: 'center',
        justify: 'center',
	},
    title: {
		fontWeight: 'bolder',
        color: 'black',
        fontSize: 55,
        paddingTop: '80px',
        paddingBottom: '1vh',
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
    card: {
        maxWidth: 345,
        margin: 'auto'
    },
    media: {
    height: 340,
    },
    cardTitle: {
        fontFamily: 'default',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    cardPara: {
        fontFamily: 'default'
    },
    githubCard: {
        fontFamily: 'default',
        fontStyle: 'italic',
        fontWeight: 'bolder'
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
                    <Grid item xs={6} className={classes.grid}>
                        <Divider className={classes.dividerColor}/>
                    </Grid>
                    <br />
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Typography component="h5" variant="h5" className={classes.cardTitle}>
                                Viola
                            </Typography>
                            <br />
                            <CardMedia
                            className={classes.media}
                            image={require('./voila2.jpg')}
                            title="Project Voila"
                            />
                            <CardContent>
                            <Typography component="p" className={classes.cardPara}>
                                Voila is a real estate journey tracking application designe to remove barriers and provide transparency
                                and peace of mind to clients throughout the home-buying process.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/NaomiPrice/Voila-Group-Project">
                                Check out the source code on GibHub!
                            </Button>
                        </CardActions>
                    </Card>
                    <br />
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Typography component="h5" variant="h5" className={classes.cardTitle}>
                                TimeWise
                            </Typography>
                            <br />
                            <CardMedia
                            className={classes.media}
                            image={require('./timewise1.jpg')}
                            title="Project TimeWise"
                            />
                            <CardContent>
                            <Typography component="p" className={classes.cardPara}>
                                TimeWise is a web-application where employees can enter in their week's hours, and employers
                                can approve or deny the hours accordingly.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/paperjoob/project_timewise">
                                Check out the source code on GibHub!
                            </Button>
                        </CardActions>
                    </Card>
                    <br />
                    <Grid item xs={8} className={classes.grid} align="center">
                        <Typography component="p" className={classes.githubCard} variant="h6">
                            More of my work at: GITHUB.COM/PAPERJOOB
                        </Typography>
                        <IconButton href="https://github.com/paperjoob" ><GitHubIcon /> Github</IconButton>
                    </Grid>
                </div>
            </Element>
        )
    }
}

export default withStyles(styles) (Portfolio);