import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/iso.jpg'


class IntegrisaniSistemiObezbedjenja extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'I.S.O.',
            description: 'Svakog minuta se bavimo analizom rizika, većina preduzima mere, a pojedini donose dobre odluke. Vladimir Jaćimović, direktor i osnivač Watchout Security doo'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>I.S.O. je Integrisani Sistem Obezbeđenja za obezbeđenje imovine u specifičnim
                                    uslovima i objedinjuje funkcije alarmnog sistema, sistema video obezbeđenja i
                                    sistema za evidenciju prisutnosti nad udaljenim objektima i postrojenjima.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Namenjen je svim preduzećima i kompanijama koje imaju potrebu za zaštitom, ali bez
                                stalnog fizičkog obezbeđenja (prisustva službenika obezbeđenja) kao što su gradilišta,
                                trafo stanice, razvodna postrojenja, telekomunikacione instalacije, bunari, rezervoari,
                                otvoreni magacini, poljoprivredna zemljišta i sl.
                            </p>
                            <p> Svi događaji sa udaljenih objekata se trenutno prenose u Kontrolni centar Watchout
                                Security-a, koji ih upisuje u bazu podataka. Svaka informacija o ovlašćenom i
                                neovlašćenom prisustvu u bilo kojem od udaljenih objekata se, uz zvučni alarm, trenutno
                                prikazuje u I.S.O. nadzornim aplikacijama. Svako prisustvo na objektu će pokrenuti
                                snimanje odgovarajuće IP kamere.

                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p>I.S.O. pruža mogućnost korisniku da preko aplikacija upravlja integrisanim sistemom
                                obezbeđenja. Ovlašćena lica su dužna da evidentiraju dolazak/odlazak prinošenjem svoje
                                identifikacione kartice odgovarajućem beskontaktnom čitaču, montiranom na uočljivo
                                obeleženi stubni nosač.
                            </p>
                            <p>Oprema koja se instalira je predviđena za spoljnu montažu i montira se na stubne nosače
                                uočljive crvene boje, sa vidljivim tekstualnim obaveštenjima i upozorenjima.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Sistem se sastoji od:
                            </p>
                            <ul>
                                <li>Alarmni protivprovalni sistem - alarmnih senzora za detekciju pokreta - prisustva
                                    neovlašćenih lica;
                                </li>
                                <li>Sistem za evidenciju prisutnosti - čitača beskontaktnih ID kartica za evidentiranje
                                    prisustva ovlašćenih lica;
                                </li>
                                <li>Sistem video obezbeđenja - IP kamere visoke rezolicije;
                                </li>
                                <li>Protivpožarnih aparata S6 i prve pomoći;
                                </li>
                                <li>Dvosmerna audio komunikacija sa kontrolnim centrom;
                                </li>
                                <li>Alarmne sirene sa stroboskopskim svetlom.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p>Dodatne usluge I.S.O. sistema su
                            </p>
                            <ul>
                                <li>Alarm monitoring iz Kontrolnog centra;</li>
                                <li>Video monitoring od strane službenika obezbeđenja;</li>
                                <li>Periodični izveštavaj sa sistema za evidenciju prisutnosti.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p>Na izuzetnu aktuelnost I.S.O. sistema utiču:
                            </p>
                            <ul>
                                <li>potreba za centralizovanim sistemom nadzora;</li>
                                <li>sprečavanje rastućeg broja krađa;</li>
                                <li>trend smanjenja fizičkog obezbeđenja;</li>
                                <li>velika pokrivenost GSM mreže i vrlo mali troškovi GPRS saobraćaja</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default IntegrisaniSistemiObezbedjenja;