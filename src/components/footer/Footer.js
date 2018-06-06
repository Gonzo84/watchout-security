import React from 'react';

import classes from './Footer.scss';
import Logo from '../logo/Logo'


const footer = (props) => {
    const uslugeNavigationArray = ['Alarm monitoring', 'Video nadzor', 'GPS Satelitsko pracenje vozila', 'Mobilne patrole', 'Instalacija alarmnih sistema', 'Kontrola pristupa i radnog vremena'];

    const uslugeNavigation = uslugeNavigationArray.map(navItem => {
        return (
            <li className={classes.navLink} key={navItem}>
                <a className={classes.navLink + ' active'} href="#">{navItem}</a>
            </li>
        )
    });

    const resenjaNavigationArray = ['Pravna lica', 'Fizicka lica', 'Small Business', 'Medium Business', 'Large Business', 'Custom paketi'];

    const resenjaNavigation = resenjaNavigationArray.map(navItem => {
        return (
            <li className={classes.navLink} key={navItem}>
                <a className={classes.navLink + ' active'} href="#">{navItem}</a>
            </li>
        )
    });

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3">
                        <span className={classes.logo}>
                            <Logo/>
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
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div className={'container ' + classes.wsCopyrights}>
                    2017 (c) Watchout Security <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>)
};


export default footer;