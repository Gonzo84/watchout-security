import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import fizickaZastitaImg from '../../../assets/images/usluge/fizickaZastita.jpg'


class FizickaZastita extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: fizickaZastitaImg,
            title: 'Fizička zaštita',
            description: 'Biti u isto vreme i smeo i veoma oprezan, umetnost je uspeha. Napoleon'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Sistemski pristup u osiguravanju bezbednosti najvrednijih resursa u poslovanju, pored
                                    tehničke podrazumeva i fizičku zaštitu.
                                </p>
                            </div>
                            <div className="container">
                                <p>Fizičkim obezbeđenjem doprinosi se zaštiti ljudi i imovine od oštećenja, uništenja,
                                    krađe
                                    i drugih oblika štetnog delovanja.
                                </p>
                                <p>Usluga fizičke zaštite je usluga obezbeđenja koja se pruža ličnim prisustvom i
                                    neposrednom aktivnošću službenika obezbeđenja u određenom prostoru i vremenu, kao i
                                    primenom mera i upotrebom sredstava prinude.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">

                        <div className="container">
                            <p>Službenici Watchout Security-a prolaze obuku i polaganje iz sledećih oblasti:
                            </p>
                            <ul>
                                <li>zaštita od požara;</li>
                                <li>poznavanje pružanja prve pomoći;</li>
                                <li>poslovna komunikacije;</li>
                                <li>fizička samoodbrane;</li>
                                <li>upravljanje sistemima tehničke zaštite.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Službenik obezbeđenja u stalnom je kontaktu sa Kontrolnim centrom, čime se osigurava
                                pravovremenost reakcije u slučaju kriznih situacija
                            </p>
                            <p>Poslovi koje mogu obavljaju službenici obezbeđenja se sledeći: službenik obezbeđenja za
                                čuvanje objekta u izgradnji, službenik obezbeđenja za stacionarno čuvanje, službenik
                                obezbeđenja za rad recepcionara, službenik obezbeđenja za kontrolu ulaza i izlaza u
                                objekte koje se obezbeđuju, službenik obezbeđenja za rad u maloprodajnom objektu,
                                službenik obezbeđenja za obavljanje redarskih poslova.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p className="ws-stronger-color">GARANCIJE OBEŠTEĆENJA
                            </p>
                            <p>U slučaju propusta službe obezbeđenja, nudimo posebne uslove obeštećenja oštećenog
                                korisnika usluge aktiviranjem adekvatne polise osiguranja.
                                <br></br>
                                <br></br>
                                Watchout Security poseduje Polisu osiguranja od profesionalne odgovornosti za sve
                                eventualne propuste službenika obezbeđenja. Bez obzira na broj štetnih događaja, polisa
                                nije iscrpiva (svi štetni događaji do vrednosti od 200.000 evra tokom trajanja polise
                                biće nadoknađeni svim korisnicima usluga na teritoriji Srbije).
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default FizickaZastita;