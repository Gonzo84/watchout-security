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
                    <div className="col-md-12 col-lg-3">
                        <span className={classes.logo}>
                            <Logo companyLogo={companyLogo}/>
                        </span>
                    </div>
                    <div className="col-md-12 col-lg-9">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <div className="row">
                                    <div className={'col-sm-6 ' + classes.wsInfoBlock}>
                                        <p className={classes.wsTitle}>About Us</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                            when an unknown printer took a galle
                                            y of type and scrambled it to make a type specimen book. It has survived not
                                            only five centuries, but also the
                                        </p>
                                    </div>
                                    <div className={'col-sm-6 ' + classes.wsInfoBlock}>
                                        <p className={classes.wsTitle}>Usluge</p>
                                        <ul className="nav">
                                            {uslugeNavigation}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-5">
                                <div className="row">
                                    <div className={'col-sm-6 ' + classes.wsInfoBlock}>
                                        <p className={classes.wsTitle}>Bezbednosna resenja</p>

                                        <ul className="nav">
                                            {resenjaNavigation}
                                        </ul>
                                    </div>
                                    <div className={'col-sm-6 ' + classes.wsInfoBlock}>
                                        <p className={classes.wsTitle}>Kontakt</p>

                                        <p>Adresa</p>
                                        <p>
                                            34000 Kragujevac <br/>
                                            Kralja Aleksandra I Karadjordjevica <br/>
                                            132
                                        </p>
                                        <p>
                                            11000 Beograd <br/>
                                            Cara Dusana <br/>
                                            212
                                        </p>
                                        <p>012-3456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row ' + classes.wsSoc}>
                    <a href="https://www.facebook.com/bezbednost.srbija/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/channel/UCITYjHxEjRtP-NFZnEGy9Fg"  target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/watchoutsecurity/"  target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <div className={'container ' + classes.wsCopyrights}>
                    2018 (c) Watchout Security <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>)
};


export default footer;