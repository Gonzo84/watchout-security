import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import planiranjeIProjektovanjeImg from '../../../assets/images/usluge/planiranjeIProjektovanjeSTZ.jpg'


class PlaniranjeIProjektovanje extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: planiranjeIProjektovanjeImg,
            title: 'Planiranje i projektovanje sistema tehničke zaštite',
            description: 'Ne planirati znači planirati neuspeh. Bendžamin Frenklin'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Osnovni preduslov za uspeh u poslovanju jeste bezbednost lica i imovine. Bilo da je
                                    reč o uslužnoj delatnosti ili o proizvodnim pogonima, neophodno je preduzeti mere u
                                    zaštiti ljudskih resursa i celokupne imovine.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Bezbedno poslovno okruženje i zaposleni koji imaju poverenje u sisteme tehničke zaštite
                                pozitivno utiču na rast produktivnosti, poboljšanje efikasnosti u obavljanju radnih
                                zadataka i finansijski aspekt uspešnosti poslovanja.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Planiranje sistema tehničke zaštite vrši se na osnovu Akta o proceni rizika u zaštiti
                                lica, imovine i poslovanja izrađenog po standardu serije SRPS A.L2.003. Na osnovu
                                izrađenog Plana sistema tehničke zaštite i posebnih zahteva vlasnika ili korisnika
                                objekta, izrađuje se projektni zadatak.
                                Projektnim zadatkom utvrđuju se svi parametri potrebni za izradu projekta sistema
                                tehničke zaštite, a naročito:
                            </p>
                            <ul>
                                <li>vrsta tehničke zaštite;</li>
                                <li>smeštaj centra tehničke zaštite (kontrolni paneli, centrale, digitalni video
                                    rekorderi i drugo);
                                </li>
                                <li>smeštaj uređaja i opreme (detektori, kamere i senzori);</li>
                                <li>način polaganja instalacija (kablova za povezivanje).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Projektovanje sistema tehničke zaštite obuhvata:
                            </p>
                            <ul>
                                <li>implementaciju plana sistema tehničke zaštite;</li>
                                <li>izbor uređaja i opreme;</li>
                                <li>izradu projektne dokumentacije.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default PlaniranjeIProjektovanje;