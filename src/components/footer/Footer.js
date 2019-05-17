import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

import classes from './Footer.scss';
import Logo from '../logo/Logo';

import companyLogo from '../../assets/images/logo/ws-logo-white.png';
import OpstiUslovi from '../../assets/opsti uslovi Watchout Security doo.pdf';
import MapWithAMarker from "./map/map";


const footer = (props) => {
    const uslugeNavigationArray = [{
        title: 'Procena rizika',
        nav: '/procena-rizika'
    }, {
        title: 'Alko testiranje',
        nav: '/alko-testiranje'
    }, {
        title: 'Bezbednosno izvestavanje',
        nav: '/bezbednosno-izvestavanje'
    }, {
        title: 'Daljinski nadzor',
        nav: '/daljinski-nadzor'
    }, {
        title: 'Fizicka zastita',
        nav: '/fizicka-zastita'
    }, {
        title: 'Montaza',
        nav: '/montaza'
    }, {
        title: 'Odrzavanje',
        nav: '/odrzavanje'
    }, {
        title: 'Planiranje i projektovanje',
        nav: '/planiranje-projektovanje'
    }];

    const uslugeNavigation = uslugeNavigationArray.map(navItem => {
        return (
            <Link smooth to={navItem.nav} key={navItem.title}>
                <li className={classes.navLink}>
                    <p className={classes.navLink + ' active'}>{navItem.title}</p>
                </li>
            </Link>
        )
    });

    const resenjaNavigationArray = [
        {
            title: 'Pravna lica',
            nav: '/pravna-lica'
        }, {
            title: 'Fizicka lica',
            nav: '/fizicka-lica'
        }, {
            title: 'Small Business',
            nav: {
                pathname: '/pravna-lica',
                hash: 'small'
            }
        }, {
            title: 'Medium Business',
            nav: {
                pathname: '/pravna-lica',
                hash: 'medium'
            }
        }, {
            title: 'Large Business',
            nav: {
                pathname: '/pravna-lica',
                hash: 'large'
            }
        }, {
            title: 'Custom paketi',
            nav: '/custom-paketi'
        }];

    const resenjaNavigation = resenjaNavigationArray.map(navItem => {
        return (
            <Link smooth to={navItem.nav} key={navItem.title}>
                <li className={classes.navLink}>
                    <p className={classes.navLink + ' active'}>{navItem.title}</p>
                </li>
            </Link>
        )
    });

    return (
        <footer className={classes.footer}>
            <div className="container ws-footer-container">
                <div className="row">

                    <div className="col-md-12 col-lg-4"></div>
                    <div className="col-md-12 col-lg-4">
                        <div className={'row ' + classes.logo}>
                            <Logo companyLogo={companyLogo}/>
                        </div>
                        <div className={'row ' + classes.wsInfoBlock}>
                            <div className="col-md-12 col-lg-6 ws-footer-navigateto">
                                <a href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=44.006840,20.892489"
                                   target="_system" title="Navigate to Spasenije Cane Babović 5">
                                    Spasenije Cane Babović 5<br/>
                                    11000 Beograd<br/>
                                </a>
                            </div>

                            <div className="col-md-12 col-lg-6 ws-footer-navigateto">
                                <a href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=44.006840,20.892489"
                                   target="_system"  title="Navigate to Spasenije Cane Babović 5">
                                    Spasenije Cane Babović 5<br/>
                                    11000 Beograd<br/>
                                </a>
                            </div>
                        </div>
                        <div className={'row ' + classes.wsInfoBlock}>
                            <div className="col-md-12 col-lg-12">
                                <div>Call Centar: 0800 011 013</div>
                                <div class="ws-footer-mailto">email: <a href="mailto:info@ws.co.rs"
                                                                        target="_blank">info@ws.co.rs</a></div>
                            </div>
                        </div>
                        <div className={'row ' + classes.wsSoc}>
                            <a href="https://www.facebook.com/bezbednost.srbija/" target="_blank"> <span
                                className={classes.Facebook}></span></a>
                            <a href="https://www.youtube.com/channel/UCITYjHxEjRtP-NFZnEGy9Fg" target="_blank"><span
                                className={classes.Youtube}></span></a>
                            <a href="https://www.instagram.com/watchout.security/?utm_source=ig_profile_share&igshid=1so2kvkqw4jr8&fbclid=IwAR3fcOjYeoozjmz8Idbylp8mKYFyckq7_f-WGTHRzB-hqxMdrpT1uhq45pA"
                               target="_blank"><span className={classes.Instagram}></span></a>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4"></div>
                </div>

                <div className="row">
                    <div className={'container ' + classes.wsCopyrights + ' ' + classes.logo}>
                        Pronadjite nas ovde
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtWhoHsIGxcXeUIEZ25-14M8ohWkjJS2Y"
                            loadingElement={<div style={{height: `270px`, width: '100%'}}/>}
                            containerElement={<div style={{height: `270px`, width: '100%'}}/>}
                            mapElement={<div style={{height: `270px`}}/>}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtWhoHsIGxcXeUIEZ25-14M8ohWkjJS2Y"
                            loadingElement={<div style={{height: `270px`, width: '100%'}}/>}
                            containerElement={<div style={{height: `270px`, width: '100%'}}/>}
                            mapElement={<div style={{height: `270px`}}/>}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className={'container ' + classes.wsCopyrights + ' ' + classes.logo}>
                        2018 (c) Watchout Security - <a href={OpstiUslovi} target='_blank'>Opšti uslovi poslovanja</a>
                    </div>
                </div>
            </div>
        </footer>)
};


export default footer;
