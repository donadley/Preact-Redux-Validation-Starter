import {
	h,
	render,
	Component
} from 'preact';

import * as action from '../../redux/action/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { validatorTypes } from '../../validation/validatorTypes';

import Input from '../../validation/validationElements/input';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

function mapStateToProps(reducers){
  return {reducers: reducers}
}

let store = '';
let ENTER_KEY_CODE = 13; //Enter Button repersentation
class Login extends Component {
	constructor(props, context) {
		super(props, context);
		console.log('Redux actions', this.props, 'Navigation routes and dispatch'
		, this.context);
		this.onclick = this.onclick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.validatorTypes = validatorTypes;
	}

	onChange(event){
		event.preventDefault();
		this.setState({name: event.target.value});
	}

	onclick(){
		this.props.signInUser(this.state);
		this.context.route('home');
	}
	render() {
		console.log("Login Rendered", store);
		return(<div id="loginView" class="jumbotron container">
              <div>Login</div>
							<Input
								name='username'
								type="text"
								placeholder='username'
								validatorTypes={this.validatorTypes}
								onChange={this.onChange}>
							</Input>
							<button onclick={this.onclick}>LOGIN</button>
          	</div>
          )
	}
}
//Use connect to map redux actions and state to current props and context
export default connect(mapStateToProps, mapDispatchToProps)(Login);
