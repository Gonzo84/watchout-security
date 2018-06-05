import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import Layout from './hoc/Layout/Layout';
import Home from "./containers/home/Home";
import BezbednosnaResenja from "./containers/bezbednosnaResenja/BezbednosnaResenja";
import ONama from "./containers/oNama/ONama";
import Usluge from "./containers/usluge/Usluge";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Route path="/" exact component={Home}/>
                    <Route path="/bezbednosna-resenja" component={BezbednosnaResenja}/>
                    <Route path="/usluge" component={Usluge}/>
                    <Route path="/o-nama" component={ONama}/>
                </Layout>
            </div>
        );
    }
}

export default App;
