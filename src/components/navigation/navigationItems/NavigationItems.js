import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact navClickedHandler={props.navClickedHandler}>POČETNA</NavigationItem>

        <span className={classes.dropdown}>BEZBEDNOSNA REŠENJA <i className="fa fa-caret-down"></i>
            <div className={classes.dropdownContent}>
                <NavigationItem link="/pravna-lica" navClickedHandler={props.navClickedHandler}>PRAVNA LICA</NavigationItem>
                <NavigationItem link="/fizicka-lica" navClickedHandler={props.navClickedHandler}>FIZIČKA LICA</NavigationItem>
                <NavigationItem link="/custom-paketi" navClickedHandler={props.navClickedHandler}>CUSTOM PAKETI</NavigationItem>
            </div>
        </span>

        <span className={classes.dropdown}>SISTEMI TEHNIČKE ZAŠTITE <i className="fa fa-caret-down"></i>
            <div className={classes.dropdownContent}>
                <NavigationItem link="/video-obezbedjenje" navClickedHandler={props.navClickedHandler}>SISTEMI VIDEO OBEZBEĐENJA</NavigationItem>
                <NavigationItem link="/alarmni-sistemi" navClickedHandler={props.navClickedHandler}>ALARMNI SISTEMI PROTIVPROVALNI I PROTIVPREPADNI</NavigationItem>
                <NavigationItem link="/otkrivanje-pozara" navClickedHandler={props.navClickedHandler}>SISTEM ZA RANO OTKRIVANJE I DOJAVU POŽARA</NavigationItem>
                <NavigationItem link="/kontrola-pristupa" navClickedHandler={props.navClickedHandler}>SISTEM ZA KONTROLU PRISTUPA</NavigationItem>
                <NavigationItem link="/radno-vreme" navClickedHandler={props.navClickedHandler}>SISTEMI ZA EVIDENCIJU RADNOG VREMENA</NavigationItem>
                <NavigationItem link="/parking-rampe" navClickedHandler={props.navClickedHandler}>PARKING RAMPE MOTORI ZA KAPIJE I PEŠAČKE BARIJERE</NavigationItem>


                <NavigationItem link="/kontrola-sluzbenika-obezbedjenja" navClickedHandler={props.navClickedHandler}>SISTEMI ZA KONTROLU POSTOJEĆIH SLUŽBENIKA OBEZBEĐENJA</NavigationItem>
                <NavigationItem link="/gps-pracenje-vozila" navClickedHandler={props.navClickedHandler}>GPS PRAĆENJE VOZILA</NavigationItem>
                <NavigationItem link="/alarmi-vozila" navClickedHandler={props.navClickedHandler}>ALARMNI SISTEMI ZA VOZILA</NavigationItem>
                <NavigationItem link="/medicinska-pomoc" navClickedHandler={props.navClickedHandler}>MEDICINSKI PANIK TASTER</NavigationItem>
                <NavigationItem link="/iso" navClickedHandler={props.navClickedHandler}>I.S.O. INTEGRISANI SISTEMI OBEZBEĐENJA</NavigationItem>
            </div>
        </span>

        <span className={classes.dropdown}>USLUGE <i className="fa fa-caret-down"></i>
            <div className={classes.dropdownContent}>
                <NavigationItem link="/procena-rizika" navClickedHandler={props.navClickedHandler}>AKT O PROCENI RIZIKA</NavigationItem>
                <NavigationItem link="/planiranje-projektovanje" navClickedHandler={props.navClickedHandler}>PLANIRANJE I PROJEKTOVANJE</NavigationItem>
                <NavigationItem link="/montaza" navClickedHandler={props.navClickedHandler}>MONTAŽA POVEZIVANJE PROGRAMIRANJE I OBUKA</NavigationItem>
                <NavigationItem link="/odrzavanje" navClickedHandler={props.navClickedHandler}>ODRŽAVANJE</NavigationItem>

                <NavigationItem link="/alarm-monitoring" navClickedHandler={props.navClickedHandler}>ALARM MONITORING</NavigationItem>
                <NavigationItem link="/video-monitoring" navClickedHandler={props.navClickedHandler}>VIDEO MONITORING</NavigationItem>
                <NavigationItem link="/interventni-tim" navClickedHandler={props.navClickedHandler}>ANGAŽOVANJE INTERVENTNOG TIMA</NavigationItem>
                <NavigationItem link="/obilazak-patrole" navClickedHandler={props.navClickedHandler}>PREVENTIVNI OBILASCI PATROLNOG TIMA</NavigationItem>

                <NavigationItem link="/fizicka-zastita" navClickedHandler={props.navClickedHandler}>FIZIČKA ZAŠTITA</NavigationItem>
                <NavigationItem link="/alko-testiranje" navClickedHandler={props.navClickedHandler}>ALKO TESTIRANJE</NavigationItem>
                <NavigationItem link="/bezbednosno-izvestavanje" navClickedHandler={props.navClickedHandler}>BEZBEDNOSNO IZVEŠTAVANJE</NavigationItem>
            </div>
        </span>

        <NavigationItem link="/analitika" navClickedHandler={props.navClickedHandler}>ANALITIKA</NavigationItem>

        <NavigationItem link="/saradnja" navClickedHandler={props.navClickedHandler}>SARADNJA</NavigationItem>

        <NavigationItem link="/o-nama" navClickedHandler={props.navClickedHandler}>O NAMA</NavigationItem>
    </ul>
);

export default navigationItems;
