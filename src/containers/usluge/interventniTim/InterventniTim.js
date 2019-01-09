import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import aktImg from '../../../assets/images/usluge/interventniTim.jpg'


class InterventniTim extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: aktImg,
            title: 'Angažovanje interventnog tima',
            description: 'Vreme je novac. Bendžamin Frenklin'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Da li znate da 8 od 10 pokušaja krađe i akata vandalizma bude uspešno sprečeno
                                    zahvaljujući pravovremenoj intervenciji službenika obezbeđenja? U slučaju nastanka
                                    neželjenog događaja u štićenom objektu, u Kontrolni centar Watchout Security-a stiže
                                    dojava i na lice mesta se šalje interventna patrola.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>U vašem štićenom objektu ćete, u najkraćem vremenskom roku, imati jasno obeleženo
                                Watchout Security vozilo sa rotacijom. Tako ćete značajno smanjiti rizik od krađe i
                                vandalizma.</p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Svi službenici mobilnog obezbeđenja su adekvatno obučeni da reaguju u najkraćem mogućem
                                roku. Brz i profesionalan odgovor korisniku uliva osećaj sigurnosti da će neželjeni
                                događaj biti okončan sa minimalnim posledicama.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Članove mobilne ekipe obezbeđenja Watchout Security-a, selektuju i kroz specijalizovane
                                programe i obučavaju poznati i priznati majstori borilačkih veština i psiholozi usko
                                specijalizovani za rad u ovoj oblasti.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p>Usluge mobilne Watchout Security ekipe možete koristiti kratkoročno i dugoročno, kao
                                samostalni servis ili ih možete prilagoditi u kombinaciji sa različitim vrstama sistema
                                tehničke zaštite, to jest našim jedinstvenim sistemom integrisanog obezbeđenja.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p>Pored mnogobrojnih primenjenih inovacija, Watchout Security je prva organizacija za
                                pružanje usluga privatnog obezbeđenja u zemlji i regionu koja je primenila snimanje i
                                arhviranje video i audio zapisa svake intervencije. Video materijal je na raspolaganju
                                korisnicima usluge, a menadžeri rizika u Watchout Security-u na osnovu njega predlažu
                                poboljšanja sistema obezbeđenja.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default InterventniTim;