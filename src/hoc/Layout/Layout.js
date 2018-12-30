import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.scss';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';
import Footer from '../../components/footer/Footer'

class Layout extends Component {
    state = {
        showSideDrawer: false,
        toolbarClass: ''
    };


    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            let scrollTop = event.currentTarget.pageYOffset;
            let toolbarClass = '';
            if(scrollTop > 0){
                toolbarClass = 'fixed-background-color'
            }
            this.setState({toolbarClass: toolbarClass})
        })
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} toolbarClass={this.state.toolbarClass}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;