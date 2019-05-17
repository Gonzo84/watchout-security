import React, {Component} from 'react';

import {HashLink as Link} from 'react-router-hash-link';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';
import LicaItem from '../../../components/licaItem/LicaItem';


import fizickaLicaHeaderImg from '../../../assets/images/fizickaLica/fizicka_lica.jpg';
import stanoviImg from '../../../assets/images/fizickaLica/stanovi.jpg';
import kuceIVikendiceImg from '../../../assets/images/fizickaLica/kuce_i_vikendice.jpg';
import zgradeImg from '../../../assets/images/fizickaLica/stambene_zgrade.jpg';


class FizickaLica extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: fizickaLicaHeaderImg,
            title: 'Fizička lica',
            description: 'Brinemo o bezbednosti vaše porodice i doma 24/7/365! Kako zaštititi imovinu, koji način je najisplativiji, koje mere su najefikasnije i kome pokloniti poverenje kada je o obezbeđenju reč, najčešća su pitanja i nedoumice klijenata.'
        };

        const contentConfig = [{
            left: true,
            imageUrl: stanoviImg,
            title: 'Stanovi',
            id: 'stanovi',
            description: '',
            content: `Osećaj bezbednosti u sopstvenom domu esencijalna je komponenta bezbrižnog i srećnog života. Ne dozvolite da nemili događaji poput provala, krađa, požara narušavaju harmoniju svakodnevnog života.
Kako zaštititi imovinu, koji način je najisplativiji, koje mere su najefikasnije i kome pokloniti poverenje kada je o zaštiti stana reč, najčešća su pitanja i nedoumice klijenata. 
Kontaktirajte nas za više informacija već danas!`
        }, {
            left: false,
            imageUrl: kuceIVikendiceImg,
            title: 'Kuće i vikendice',
            id: 'kuce',
            description: '',
            content: `Kako biste u potpunosti uživali u “toplini doma”, razmišljajte preventivno. Od vaše odluke zavisi bezbednost porodične kuće ili vikendice.

Obezbeđenje kuće i vikendice, naročito tokom vašeg odsustva od ključnog je značaja za očuvanje imovine, ali i vašeg mira i bezbednosti. Višegodišnje iskustvo u radu, stručnost kadrova i sofisticiranost tehnoloških rešenja koja koristimo, učinili su da Watchout Security postane prvi i najpouzdaniji izbor klijenata. 

Kontaktirajte nas za više informacija već danas!`
        }, {
            left: true,
            imageUrl: zgradeImg,
            title: 'Stambene zgrade',
            id: 'zgrade',
            description: '',
            content: `Delujte preventivno - to je formula bezbrižnog života u stambenoj zajednici. Kroz stambenu zgradu, na dnevnom nivou prođe i do 200 osoba. Neke od njih postupaju nesavesno i na štetu svih stanara. Sprečite potencijalne nemile događaje i kontaktirajte nas već danas da saznate više o obezbeđenju vaše stambene zgrade.`
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
                                <h6>PAKETI ZA FIZIČKA LICA</h6>
                                <p>predložene usluge i sistemi su posledica zadovoljstva velikog broja fizičkih lica kao
                                    aktivnih korisnika usluga naše organizacije
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-triangle-holder">
                        <div className="container">
                            <div className="row ws-packages">

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        STANOVI
                                    </div>
                                    <div className="ws-package-body ws-body-list-font">
                                        <ul>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Alarmni sistemi</li>
                                            <li>Sistemi za medicinsku pomoć</li>
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
                                        KUĆE I VIKENDICE
                                    </div>
                                    <div className="ws-package-body ws-body-list-font">
                                        <ul>
                                            <li>Planiranje i projektovanje sistema tehničke zaštite</li>
                                            <li>Montaža, programiranje i obuka za stz</li>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Video monitorig</li>
                                            <li>Angažovanje interventnog tima</li>
                                            <li>Preventivni obilasci patrolnog tima</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Alarmni sistemi</li>
                                            <li>Sistemi za kontrolu pristupa</li>
                                            <li>Parking rampe, motori za kapije i pešačke barijere</li>
                                            <li>Sistemi za medicinsku pomoć</li>
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
                                        STAMBENE ZGRADE
                                    </div>
                                    <div className="ws-package-body ws-body-list-font">
                                        <ul>
                                            <li>Planiranje i projektovanje sistema tehničke zaštite</li>
                                            <li>Montaža, programiranje i obuka za stz</li>
                                            <li>Održavanje sistema</li>
                                            <li>Alarm monitoring</li>
                                            <li>Video monitorig</li>
                                            <li>Angažovanje interventnog tima</li>
                                            <li>Preventivni obilasci patrolnog tima</li>
                                            <li>Fizička zaštita</li>
                                            <li>Bezbednosno izveštavanje</li>
                                            <li>Usaglašavanje sa zakonskom regulativom</li>
                                            <li>Sistemi video obezbeđenja</li>
                                            <li>Protivprovalni i Protivprepadni alarmni sistemi</li>
                                            <li>Sistemi za rano otkrivanje i dojavu požara</li>
                                            <li>Sistemi za kontrolu pristupa</li>
                                            <li>Parking rampe, motori za kapije i pešačke barijere</li>
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

export default FizickaLica;
