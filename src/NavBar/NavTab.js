import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Tab } from '@material-ui/core';

const ScrollLink = Scroll.Link;

class NavTab extends Component {
	render() {
		return (
			<ScrollLink to={this.props.to} spy={true} smooth={true} duration={500}>
				<Tab
					label={this.props.to}
					value={this.props.value}
					onClick={() => this.props.handleChange(this.props.value)}
				/>
			</ScrollLink>
		);
	}
}

export default NavTab;