//This class was kindly provided by:
//Jason Miller (jason@developit.ca)

import {
	h,
	Component,
	render
} from 'preact';
export default class View extends Component {
	state = {
		view: this.props.view // can pass default view in as a prop
	};
	// route to a given view
	route = view => {
		this.setState({
			view
		});
	};
	// child components can call:  this.context.route('some-view');
	getChildContext() {
		return {
			route: this.route
		};
	}
	render({
		children
	}, {
		view
	}) {
		//Maybe if statment that check for loggin user then return Login if false
		// just render the child whose `name` prop matches the current view:
		return children.filter(child => child.attributes.name === view)[0] || null;
	}
}
