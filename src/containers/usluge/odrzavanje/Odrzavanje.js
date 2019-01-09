import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import odrzavanjeImg from '../../../assets/images/usluge/odrzavanjeSTZ.jpg'


class Odrzavanje extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: odrzavanjeImg,
            title: 'Preventivno održavanje sistema tehničke zaštite',
            description: 'Da bi sistemi tehničke zaštite obezbedili Vas, imovinu i poslovanje prvo obezbedite Vi njih preventivnim održavanjem.'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Koliko god da su proizvođači kvalitetni, koliko god da je sistem dobro isplaniran,
                                    neophodno je obezbediti mu kontinuitet u radu, a to jedino moguće uz uslugu
                                    prevetnivnog održavanja sistema koje je danas i zakonska obaveza.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Smanjenje rizika sa aspekta bezbednosti lica i imovine, neplaniranih troškova
                                servisiranja sistema tehničke zaštite i zakonskih normi u fokusu je Watchout Security
                                misije da korisnicima u kontinuitetu isporučuje najviši stepen kvaliteta usluge.
                            </p>
                            <p>Preventivno održavanje sistema tehničke zaštite podrazumeva predviđanje potencijalnih
                                kvarova i pravovremeno reagovanje u cilju smanjivanja verovatnoće kvara na sistemu.
                                Ovakav način održavanja pruža viši stepen pouzdanosti u funkcionisanju sistema i
                                sigurnosti za korisnika. Preventivno održavanje sistema tehničke zaštite obavlja se
                                prema unapred određenim intervalima i propisanim kriterijumima.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Korektivno održavanje je usluga koje se ne zasniva na preventivi i realizuje se nakon što
                                nastane kvar u radu sistema, čime se povećava rizik po bezbednost lica, imovine i
                                poslovanja. Često uz kvar jednog elementa na sistemu nastaje šteta i na okolnim delovima
                                i uređajima zbog čega ceo sistem nije u funkciji. Zastoji u radu koji se javljaju kao
                                posledica kvara ne mogu se predvideti kao ni vreme potrebno za popravku sistema. Ovo je
                                najčešći način održavanja koji se danas primenjuje, a ujedno je i prividno najjeftiniji.
                                Pored toga, pouzdanost sistema sa ovim načinom održavanja je upitna - direktno je
                                zavisna od pouzdanosti najslabije komponente u sistemu.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Prednosti preventivnog održavanja u odnosu na konvencionalno, korektivno održavanje su
                                brojne:
                            </p>
                            <ul>
                                <li>veća pouzdanost uređaja i sistema u radu;</li>
                                <li>mogućnost planiranja momenta održavanja ;</li>
                                <li>mogućnost predviđanja troškova održavanja;</li>
                                <li>lakša kontrola.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p>Odabirom preventivnog održavanja sistema tehničke zaštite smanjuje se mogućnost kvara
                                komponenti i celokupnog sistema za 94,5%.
                            </p>
                            <p>Korisnici sistema tehničke zaštite, koji imaju ranije instalirane sisteme dužni su da sve
                                svoje već instalirane sisteme usklade sa Zakonom o privatnom obezbeđenju ("Sl. glasnik
                                RS", br. 104/2013 i 42/2015) i da obezbede održavanje u skladu sa ovim Zakonom.
                            </p>
                            <p>Watchout Security je pouzdan partner vašeg poslovanja u kontekstu usklađivanja sistema
                                tehničke zaštite sa zakonskim regulativama.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default Odrzavanje;