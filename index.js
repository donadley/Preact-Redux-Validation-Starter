import "babel-polyfill";
import {
    h,
    render,
    Component
} from 'preact';
import style from './sass/style.scss';

import Login from './pages/routes/login';
import Home from './pages/routes/home';

import View from './pages/view';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './redux/reducers/reducer';
import * as actions from './redux/action/actions';

const store = createStore(combineReducers(reducers));

class App extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
          <div>
            <div class="app-header"></div>
            <div class="app">
              <Provider store={store}>
                <View view="login">
                  <Home name="home" />
                  <Login name="login" />
                </View>
              </Provider>
            </div>
            <div class="app-footer"></div>
          </div>
				);
    }
    onChange() {
        console.log('On change store');
    }
}
// render an instance of App into id < placeholder > :
render( <App /> , placeholder);
