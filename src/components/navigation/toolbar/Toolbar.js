import React, {Component} from 'react';

import classes from './Toolbar.scss';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

import companyLogo from '../../../assets/images/logo/ws-logo-red-white.png';

class toolbar extends Component {
    state = {
        toolbarClass: ''
    };


    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            let scrollTop = event.currentTarget.pageYOffset;
            let toolbarClass = '';
            if (scrollTop > 70) {
                toolbarClass = classes.FixedBackgroundColor;
            }
            this.setState({toolbarClass: toolbarClass})
        })
    }

    render() {
        return (
            <header className={[classes.Toolbar, this.state.toolbarClass].join(' ')}>
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                <div className={[classes.ToolbarContainer]}>
                    <div className={classes.Logo}>
                        <Logo companyLogo={companyLogo}/>
                    </div>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                </div>
            </header>
        )
    }
}

export default toolbar;