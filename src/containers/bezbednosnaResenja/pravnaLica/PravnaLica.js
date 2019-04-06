import React, {Component} from 'react';

import {HashLink as Link} from 'react-router-hash-link';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';
import LicaItem from '../../../components/licaItem/LicaItem';

import pravnaLicaHeaderImg from '../../../assets/images/pravnaLica/pravna_lica.jpg';

import smallImg from '../../../assets/images/pravnaLica/small_business.jpg';
import mediumImg from '../../../assets/images/pravnaLica/medium_business.jpg';
import largeImg from '../../../assets/images/pravnaLica/large_business.jpg';


class PravnaLica extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: pravnaLicaHeaderImg,
            title: 'Pravna lica',
            description: 'Pored toga što smanjuju bezbednosne rizike, bezbednosni sistemi povećavaju stepen kontrole poslovnih procesa. Implementacijom bezbednosnih sistema poboljšava se celokupno poslovanje privrednih subjekata.'
        };

        const contentConfig = [{
            left: true,
            imageUrl: smallImg,
            title: 'Objekti malog rizika',
            id: 'small',
            description: '',
            content: `Za male biznise nudimo bezbednosna rešenja koja vlasnicima omogućavaju stvaranje boljeg poslovnog ambijenta kroz visoko kvalitetnu uslugu praćenu veoma pristupačnim cenama.`
        }, {
            left: false,
            imageUrl: mediumImg,
            title: 'Objekti umereno velikog rizika',
            id: 'medium',
            description: '',
            content: `Za biznise koji su pokretač privrede nudimo integrisana bezbednosna rešenja kombinovana fizičko tehničkom zaštitom. Usaglašavanje sa zakonskom regulativom i jasno definisanje zahteva korisnika usluge, omogućavaju da se rizici koji se javljaju u svakodnevnom poslovanju svedu na prihvatljiv nivo.`
        }, {
            left: true,
            imageUrl: largeImg,
            title: 'Objekti velikog rizika',
            id: 'large',
            description: '',
            content: `Prilagođavanjem tržištu uspeli smo da odgovorimo na najkompleksnije zahteve najvećih kompanija u Srbiji. Iskustvo u radu sa velikim sistemima danas garantuje kvalitet kakav očekuju odgovorna lica. Maksimalnu usaglašenost sa zakonskom regulativom, kvalitet usaglašen sa međunarodnim standardima i realizacija usaglašena sa zahtevima korisnik, danas čine sastavni deo naše organizacije koja nudi složena bezbednosna rešenja.`
        }];
        return (
            <Aux>

                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>
                    <div className="ws-simple-style-cont ws-overflow-img-container ws-triangle-holder">
                        <div className="container">
                            <LicaItem {...contentConfig[0]}/>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-overflow-img-container">
                        <div className="container">
                            <LicaItem {...contentConfig[1]}/>
                        </div>
                    </div>
                    <div
                        className="ws-simple-style-cont  ws-overflow-img-container ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <LicaItem {...contentConfig[2]}/>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>PAKETI ZA PRAVNA LICA</h6>
                                <p>predložene usluge i sistemi su pokazali da njihova kombinacija predstavlja
                                    bezbednosna rešenja koja eliminišu bezbednosne rizike ili ih svode na prihvatljive
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-triangle-holder">
                        <div className="container">
                            <div className="row ws-packages">

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        OBJEKTI MALOG RIZIKA
                                    </div>
                                    <div className="ws-package-body">
                                        <ul>
                                            <li>Montaža, programiranje i obuka za stz</li>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Video monitorig</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Protivprovalni i Protivprepadni alarmni sistemi</li>
                                            <li>Sistemi za kontrolu pristupa</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi za evidenciju radnog vremena</li>
                                            <li>Parking rampe, motori za kapije i pešačke barijere</li>
                                            <li>Sistemi za kontrolu postojećeg obezbeđenja</li>
                                            <li>GPS praćenje vozila</li>
                                            <li>Alarmni sistemi za vozila</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <Link smooth to="custom-paketi/#kontaktForma"
                                                  style={{textDecoration: 'none'}}>
                                                <button type="button" className="btn ws-btn">Zatražite ponudu</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        OBJEKTI UMERENO VELIKOG RIZIKA
                                    </div>
                                    <div className="ws-package-body">
                                        <ul>
                                            <li>Procena rizika</li>
                                            <li>Planiranje i projektovanje sistema tehničke zaštite</li>
                                            <li>Montaža, programiranje i obuka za stz</li>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Angažovanje interventnog tima</li>
                                            <li>Preventivni obilasci patrolnog tima</li>
                                            <li>Fizička zaštita</li>
                                            <li>Alko testiranje zaposlenih</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Protivprovalni i Protivprepadni alarmni sistemi</li>
                                            <li>Sistemi za rano otkrivanje i dojavu požara</li>
                                            <li>Sistemi za kontrolu pristupa</li>
                                            <li>Sistemi za evidenciju radnog vremena</li>
                                            <li>Parking rampe, motori za kapije i pešačke barijere</li>
                                            <li>Sistemi za kontrolu postojećih službenika obezbeđenja</li>
                                            <li>GPS praćenje vozila</li>
                                            <li>Alarmni sistemi za vozila</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <Link smooth to="custom-paketi/#kontaktForma"
                                                  style={{textDecoration: 'none'}}>
                                                <button type="button" className="btn ws-btn">Zatražite ponudu</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        OBJEKTI VELIKOG RIZIKA
                                    </div>
                                    <div className="ws-package-body">
                                        <ul>
                                            <li>Procena rizika</li>
                                            <li>Planiranje i projektovanje sistema tehničke zaštite</li>
                                            <li>Montaža, programiranje i obuka za stz</li>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Video monitoring</li>
                                            <li>Angažovanje interventnog tima</li>
                                            <li>Preventivni obilasci patrolnog tima</li>
                                            <li>Fizička zaštita</li>
                                            <li>Alko testiranje zaposlenih</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Protivprovalni i Protivprepadni alarmni sistemi</li>
                                            <li>Sistemi za rano otkrivanje i dojavu požara</li>
                                            <li>Sistemi za kontrolu pristup</li>
                                            <li>Sistemi za evidenciju radnog vremena</li>
                                            <li>Parking rampe, motori za kapije i pešačke barijere</li>
                                            <li>Sistemi za kontrolu postojećih službenika obezbeđenja</li>
                                            <li>GPS praćenje vozila</li>
                                            <li>Alarmni sistemi za vozila</li>
                                            <li>Sistemi za medicinsku pomoć</li>
                                            <li>I. S. O. Integrisani sistem obezbeđenja</li>
                                            <li>S.O.P. Sistemi za organizaciju parkinga</li>
                                            <li>Video analitika</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <Link smooth to="custom-paketi/#kontaktForma"
                                                  style={{textDecoration: 'none'}}>
                                                <button type="button" className="btn ws-btn">Zatražite ponudu</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default PravnaLica;