import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Tab } from '@material-ui/core';

const ScrollLink = Scroll.Link;

class NavTab extends Component {
	render() {
		return (
			<ScrollLink to={this.props.to} spy={true} smooth={true} duration={500} offset={50}>
				<Tab
					label={this.props.to}
					value={this.props.value}
					// index={this.props.value}
					onClick={() => this.props.handleChange(this.props.value)}
					// style={{display: 'inline-block'}}
				/>
			</ScrollLink>
		);
	}
}

export default NavTab;