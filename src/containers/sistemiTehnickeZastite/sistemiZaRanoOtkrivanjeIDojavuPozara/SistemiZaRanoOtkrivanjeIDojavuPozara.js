import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import sistemiZaRanoOtkrivanjeIDojavuPozaraImg
    from '../../../assets/images/sistemiTehnickeZastite/sistemiZaRanoOtkrivanjeIDojavuPozara.jpg'


class SistemiZaRanoOtkrivanjeIDojavuPozara extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: sistemiZaRanoOtkrivanjeIDojavuPozaraImg,
            title: 'Sistemi za rano otkrivanje i dojavu požara',
            description: 'Svaka akcija nosi rizike i troškove, ali su rizici i troškovi komfora i neaktivnosti daleko veći. Džon Kenedi'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>Zdravlje i bezbednost ljudi, kao i imovina mogu biti ugroženi u slučaju izbijanja
                                    požara. Bilans nastale štete usled požara često se može izraziti ljudskim žrtvama,
                                    finansijskim i materijalnim gubitkom.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Sistemi za dojavu požara služe za rano otkrivanje, alarmiranje i pravovremenu reakciju
                                nadležnih timova kako bi se pružila najbolja zaštita od požara. Sistemi za dojavu požara
                                su za razliku od protivprovalnih uvek aktivni (nalaze se u 24/7 režimu rada).
                            </p>
                            <p>Za rano otkrivanje požara koriste se dim i toplota. Javljači požara koriste sledeće
                                fizičke principe za detekciju požara: merenje prisutnosti dima, merenje temperature,
                                treperenje plamena ili izvora toplote. Informaciju dalje prosleđuju do protivpožarne
                                centrale koja proverava verodostojnost signala. U slučaju potvrde kritične vrednosti
                                aktivira se alarm. Alarm se može oglasiti pomoću sirene ili putem telefonske dojave.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Sisteme za dojavu požara moguće je realizovati u dve varijante: kao konvencionalne i kao
                                adresabilne sisteme. Osnovna razlika između ova dva sistema je u tome što je kod
                                adresabilnog sistema dojave požara moguće preciznije detektovati mesto opasnosti. Kod
                                adresabilnih sistema detektori se povezuju na centralu preko petlje, za razliku od
                                konvencionalnih gde se detektori povezuju na centralu linijski, a takav način
                                povezivanja omogućava da sistem ostaje celokupno funkcionalan u slučaju jednog prekida
                                ili greške u instalaciji. Adresabilni sistemi za detekciju i dojavu požara pružaju
                                najmoderniju i najbolju zaštitu od požara.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>U ovoj oblasti predlažemo ugradnju visoko kvalitetne opreme proizvođača Detnov, Nittan,
                                Bentel, Advanced, GLT Zeta, Satel i SD3. Watchout Security u ponudi ima protivpožarne
                                centrale (pp centrale), senzore, ručne javljače, detektore dima, optičke detektore,
                                detektore plamena za adresabilne i konvencijalne sisteme dojave požara. Watchout
                                Security nudi i uslugu servisiranja sistema za dojavu požara.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default SistemiZaRanoOtkrivanjeIDojavuPozara;
