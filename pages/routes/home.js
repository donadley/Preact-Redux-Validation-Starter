import {
    h,
    render,
    Component
} from 'preact';
import style from '../../sass/style.scss';

import * as action from '../../redux/action/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

function mapStateToProps(reducers){
  return {reducers: reducers}
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        console.log(this.props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
					<div class="container">
            <div> Welcome Home, {this.props.reducers.userReducer.name} </div>
						<div class="app-footer"></div>
					</div>
				);
    }
    onChange() {
        console.log('On change store');
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
