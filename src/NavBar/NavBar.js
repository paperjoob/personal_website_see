import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import NavTab from './NavTab';

  const theme = createMuiTheme({
    palette: {
        primary: { main: '#FFFFFF' },
    },
});
  
  const styles = theme => ({
    root: {
		position: 'fixed',
		display: 'flex',
		zIndex: 1,
		[theme.breakpoints.up('md')]: {
			left: '25px',
			top: '15vh',
		},
		[theme.breakpoints.down('sm')]: {
			backgroundColor: theme.palette.background.default,
			width: '100vw',
			justifyContent: 'center'
		}
	},
    indicator: {
        backgroundColor: 'gold',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
        fontSize: 24,
        flexGrow: 1,
        color: 'black',
        fontWeight: 'medium',
        fontStyle: 'italic',
        cursor: 'pointer'
    },
  });

  const GitHubIcon = (props) => (
    <SvgIcon {...props}>
        {<path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
    </SvgIcon>
);

class NavBar extends Component {

    state = {
        value: 0,
    };

    // when one tab is clicked, set the value to that clicked tab and scroll to that tab
    handleChange = (nextValue) => {
    this.setState({ value: nextValue });
    };

    //takes user back to top of page
    handleClick = () => {
      window.location.assign('http://www.seeyang.info');
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
            <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h1" className={classes.title} onClick={this.handleClick}>
                    See
                </Typography>
              <Tabs value={value} classes={{indicator: classes.indicator}} centered>
                <NavTab label="About" to="About" value={0} handleChange={this.handleChange} />
                <NavTab label="Portfolio" to="Portfolio" value={1} handleChange={this.handleChange} />
                <NavTab label="Travel" to="Travel" value={2} handleChange={this.handleChange} />
                <NavTab label="Contact Me" to="Contact" value={3} handleChange={this.handleChange} />
              </Tabs>
              {/* <IconButton><GitHubIcon /></IconButton> */}
              </Toolbar>
            </AppBar>
            </ThemeProvider>
          </div>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles) (NavBar);