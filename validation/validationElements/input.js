import {
	h,
	render,
	Component
} from 'preact';

import validation from 'react-validation-mixin'; //import the mixin
import strategy from 'joi-validation-strategy'; //choose a validation strategy
import Joi from 'joi';
import classnames from 'classnames';

class Input extends Component {
	constructor(props, context) {
		super(props, context);
		this.getValidatorData = this.getValidatorData.bind(this);
		this.renderHelpText = this.renderHelpText.bind(this);
		this.getClasses = this.getClasses.bind(this);
		this.updateValue = this.updateValue.bind(this);
		this.validatorTypes = this.props.validatorTypes;
		this.setState({
			value: ''
		});
	}

	updateValue(event){
		this.setState({value: event.target.value});
		this.props.onChange(event);
	}
	//Required method of react-validation-mixin and joi-validation-strategy
	getValidatorData() {
		var validate = {}
		validate[this.props.name] = this.state.value;
		return validate;
	}

	renderHelpText(message) {
		return (
			<span className='help-block'>
				<ul>
					{message.map(this.listItems)}
				</ul>
			</span>
		);
	}

	listItems(listValue){
		return <li>{listValue}</li>;
	}

	getClasses(field) {
		return classnames({
			'form-group': true,
			'has-error': !this.props.isValid(field)
		});
	}

	render() {
		return (
        <div className={this.getClasses(this.props.name)}>
						<input
							class={this.props.class}
							placeholder={this.props.placeholder}
							type={this.props.type || 'text'}
							name={this.props.name}
							onChange={this.updateValue}
							value={this.state.value}
							required={this.props.required}
							autofocus={this.props.autoFocus || ''}
							onBlur={this.props.handleValidation(this.props.name)}
						/>
						{this.renderHelpText(this.props.getValidationMessages(this.props.name))}
			 </div>
		);
	}
}
export default validation(strategy)(Input);
//validation(strategy) addes the following properties
// propTypes = {
//   errors: PropTypes.object,
//   validate: PropTypes.func,
//   isValid: PropTypes.func,
//   handleValidation: PropTypes.func,
//   getValidationMessages: PropTypes.func,
//   clearValidations: PropTypes.func,
// }
