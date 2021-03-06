import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router'

import configureStore, {history} from './store'
import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import NotFound from './pages/NotFound/NotFound';
import DetailContainer from './containers/DetailContainer';

import './index.scss';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Products}/>
                        <Route path="/products/:id" component={DetailContainer}/>
                        <Route path="/basket" component={Basket}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , rootElement
);
