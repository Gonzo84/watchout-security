import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Test from './components/test/Test';
import Testis from './components/test/Testis';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Testis}/>
                <Route path="/test" component={Test}/>
            </div>
        );
    }
}

export default App;
