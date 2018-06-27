import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact navClickedHandler={props.navClickedHandler}>POCETNA</NavigationItem>
        <span className={classes.dropdown}>BEZBEDNOSNA RESENJA <i className="fa fa-caret-down"></i>
            <div className={classes.dropdownContent}>
                <NavigationItem link="/alarmni-sistemi" navClickedHandler={props.navClickedHandler}>ALARMNI SISTEMI ZA VOZILA</NavigationItem>
                <NavigationItem link="/parking-rampe" navClickedHandler={props.navClickedHandler}>PARKING RAMPE</NavigationItem>
                <NavigationItem link="/video-obezbedjenje" navClickedHandler={props.navClickedHandler}>SISTEMI VIDEO OBEZBEDJENJA</NavigationItem>
                <NavigationItem link="/radno-vreme" navClickedHandler={props.navClickedHandler}>SISTEMI ZA EVIDENCIJU RADNOG VREMENA</NavigationItem>
                <NavigationItem link="/kontrola-pristupa" navClickedHandler={props.navClickedHandler}>SISTEM ZA KONTROLU PRISTUPA</NavigationItem>
                <NavigationItem link="/otkrivanje-pozara" navClickedHandler={props.navClickedHandler}>SISTEM ZA RANO OTKRIVANJE I DOJAVU POZARA</NavigationItem>
            </div>
        </span>

        <span className={classes.dropdown}>USLUGE <i className="fa fa-caret-down"></i>
            <div className={classes.dropdownContent}>
                <NavigationItem link="/procena-rizika" navClickedHandler={props.navClickedHandler}>AKT O PROCENI RIZIKA</NavigationItem>
                <NavigationItem link="/alko-testiranje" navClickedHandler={props.navClickedHandler}>ALKO TESTIRANJE</NavigationItem>
                <NavigationItem link="/bezbednosno-izvestavanje" navClickedHandler={props.navClickedHandler}>BEZBEDNOSNO IZVESTAVANJE</NavigationItem>
                <NavigationItem link="/daljinski-nadzor" navClickedHandler={props.navClickedHandler}>BEZBEDNOSNO TEHNICKI I DALJINSKI NADZOR</NavigationItem>
                <NavigationItem link="/fizicka-zastita" navClickedHandler={props.navClickedHandler}>FIZICKA ZASTITA</NavigationItem>
                <NavigationItem link="/montaza" navClickedHandler={props.navClickedHandler}>MONTAZA POVEZIVANJE PROGRAMIRANJE I OBUKA</NavigationItem>
                <NavigationItem link="/odrzavanje" navClickedHandler={props.navClickedHandler}>ODRZAVANJE</NavigationItem>
                <NavigationItem link="/planiranje-projektovanje" navClickedHandler={props.navClickedHandler}>PLANIRANJE I PROJEKTOVANJE</NavigationItem>
            </div>
        </span>
        <NavigationItem link="/o-nama" navClickedHandler={props.navClickedHandler}>O NAMA</NavigationItem>
    </ul>
);

export default navigationItems;