import {
	h,
	render,
	Component
} from 'preact';

import * as action from '../../redux/action/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { validatorTypes } from '../../validation/validatorTypes';
import validation from 'react-validation-mixin'; //import the mixin
import strategy from 'joi-validation-strategy'; //choose a validation strategy

import Input from '../../validation/validationElements/input';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

function mapStateToProps(reducers){
  return {reducers: reducers}
}

let showErrors = false;

let ENTER_KEY_CODE = 13; //Enter Button repersentation
class Login extends Component {
	constructor(props, context) {
		super(props, context);
		console.log('Redux actions', this.props, 'Navigation routes and dispatch'
		, this.context);
		this.onSubmit = this.onSubmit.bind(this);
		this.onUserNameChange = this.onUserNameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.validatorTypes = validatorTypes;
	}


	onUserNameChange(event){
		event.preventDefault();
		this.setState({username: event.target.value});
	}
	onPasswordChange(event){
		event.preventDefault();
		this.setState({password: event.target.value});
	}

	getValidatorData() {
		return this.state;
	}

	onSubmit(){
		showErrors = true;
		this.setState()
		const onValidate = (error) => {
			if (error) {
				//form has errors; do not submit
				this.forceUpdate();
				console.log("form has errors; do not submit", error)
			} else {
				//no errors; submit form
				this.forceUpdate();
				console.log("no errors; submit form")
				this.props.signInUser(this.state);
				this.context.route('home');
			}
		};
		this.props.validate(onValidate);
	}
	render() {
		console.log("Login Rendered", this.state);
		return(<div id="loginView" class="jumbotron container">
              <div>Login</div>
							<Input
								id='username'
								name='username'
								type="text"
								placeholder='username'
								validatorTypes={this.validatorTypes}
								onChange={this.onUserNameChange}
								onSubmit={this.onSubmit}
								showErrors={showErrors}
								autofocus={true}
								>
							</Input>
							<Input
								id='password'
								name='password'
								type="password"
								placeholder='password'
								onSubmit={this.onSubmit}
								validatorTypes={this.validatorTypes}
								showErrors={showErrors}
								onChange={this.onPasswordChange}>
							</Input>
							<button onclick={this.onSubmit}>LOGIN</button>
          	</div>
          )
	}
}
//Use connect to map redux actions and state to current props and context
let ValidatedLogin = validation(strategy)(Login)

export default connect(mapStateToProps, mapDispatchToProps)(ValidatedLogin);
