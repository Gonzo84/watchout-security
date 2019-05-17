import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/protivprovalniIProtivprepadniSistemi.jpg'


class AlarmniSistemiProtivprovalniProtivprepadni extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'Alarmni sistemi',
            description: 'Najskuplje je ne preduzimati ništa. John Ford'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>Beskompromisna bezbednost objekata, ljudi i imovine osnovni je preduslov za uspeh u
                                    poslovanju. S druge strane, savremeni način života često dovodi do stresnih
                                    situacija, pa se osećaj apsolutne sigurnosi u spostvenom domu logično javlja kao
                                    jedna od osnovnih potreba čoveka. Provale, krađe, vandalizam, neovlašćeni pristup
                                    objektu - u kontekstu ovakvih i sličnih nemilih događaja treba delovati preventivno.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Protivprovalni alarmni sistemi dizajnirani su za detekciju neautorizovanog ulaska u
                                objekat ili oblast. Sastoje se od različitih tipova senzora, alarmne centrale, sirene i
                                uređaja za dojavu. U zavisnosti od načina detekcije postoje senzori koji detektuju
                                pokret, zvuk (lom stakla), vibracije ili mikrotalase.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Alarmni sistemi mogu služiti kao protivprovalni sistemi, ali i kao sistemi za zaštitu od
                                požara. Protivprovalni alarmni sistemi mogu biti povezani sa sistemima video nadzora
                                kako bi se automatski snimio željeni pokret ili događaj i osigurao viši stepen
                                bezbednosti. Osnovna funkcija alarmnog sistema je što ranija detekcija opasnosti i
                                upozoravanje dežurnog lica na nju čime se u značajnoj meri smanjuju negativne posledice
                                po zdravlje, bezbednost ljudi i imovine.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default AlarmniSistemiProtivprovalniProtivprepadni;
