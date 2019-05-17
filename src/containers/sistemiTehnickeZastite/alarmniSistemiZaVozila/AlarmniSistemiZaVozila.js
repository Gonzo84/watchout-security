import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/alarmniSistemiZaVozila.jpg'


class AlarmniSistemiZaVozila extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'Alarmni sistemi za vozila',
            description: 'Najuspešniji ljudi su oni koji su dobri u ispunjavanju plana B. James Yorke'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>Budući da su se serijski, fabrički i konvencionalni sistemi zaštite vozila u praksi
                                    pokazali kao nepouzdani, javila se potreba za individualnim sistemom zaštite u
                                    zavisnosti od tipa i modela automobila. Dovozeći novo vozilo kući, mnogi ne
                                    razmišljaju o krađi jer su od prodavca dobili fabrički daljinski upravljač ili su
                                    ugradili dodatnu bravu. Fabrički daljinski upravljač najčešće ne služi za zaštitu od
                                    krađe, već samo za daljinsko zaključavanje vrata.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Alarmni sistem koji se prilagođava vlasniku i karakteristikama vozila, najbolje je
                                rešenje za zaštitu vozila od krađe.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Auto alarm Watchout Security auto alarm u radu ne koristi digitalnu vezu za komunikaciju
                                sa kompjuterom vozila, pa ne postoji mogućnost kvara na alarmu i prestanka rada zaštite.
                                Kombinacijom više podsistema, elektronske i alarmne zaštite, najčešći načini krađe i
                                neutralisanja zaštite vozila, izbegnuti su u potpunosti.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default AlarmniSistemiZaVozila;
