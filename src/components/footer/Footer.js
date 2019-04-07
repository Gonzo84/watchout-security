import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import classes from './Footer.scss';
import Logo from '../logo/Logo';

import companyLogo from '../../assets/images/logo/ws-logo-white.png';


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
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-lg-4">
                        <div className={'row ' + classes.wsSoc}>
                            <a href="https://www.facebook.com/bezbednost.srbija/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/channel/UCITYjHxEjRtP-NFZnEGy9Fg"  target="_blank"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/watchout.security/?utm_source=ig_profile_share&igshid=1so2kvkqw4jr8&fbclid=IwAR3fcOjYeoozjmz8Idbylp8mKYFyckq7_f-WGTHRzB-hqxMdrpT1uhq45pA"  target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>


                    <div className="col-md-12 col-lg-4">
                        <div className={'row ' + classes.wsInfoBlock}>

                                Spasenije Cane Babović 5<br/>
                                34000 Kragujevac<br/>
                        </div>
                    </div>


                    <div className="col-md-12 col-lg-4">
                        <div className={'row ' + classes.wsInfoBlock}>
                                Call Centar: 0800 011 013<br/>
                                email: info@ws.co.rs
                        </div>
                    </div>
                </div>
                <div className={'container ' + classes.wsCopyrights + ' ' + classes.logo}>

                    <Logo companyLogo={companyLogo}/>
                    2018 (c) Watchout Security <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>)
};


export default footer;