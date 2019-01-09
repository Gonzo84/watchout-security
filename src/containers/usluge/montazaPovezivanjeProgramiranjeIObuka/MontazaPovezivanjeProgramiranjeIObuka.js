import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import montazaPovezivanjeProgramiranjeIObukaImg from '../../../assets/images/usluge/montaza.jpg'


class MontazaPovezivanjeProgramiranjeIObuka extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: montazaPovezivanjeProgramiranjeIObukaImg,
            title: 'Montaža, povezivanje, programiranje i obuka za sisteme tehničke zaštite',
            description: 'Moć ne dolazi od znanja zadržanog za sebe, već od deljenja znanja. Bil Gejts'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Da bi sistemi tehničke zaštite u potpunosti odgovorili na potrebe organizacije,
                                    minimizirali ili otklonili rizike i doprineli realizaciji ciljeva poslovanja,
                                    neophodno je poverenje u znanje, stručnost i veštine kadrova koji realizuju
                                    projekat.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Samo kada je korisnik usluge siguran u kompetentnost organizacije koja montira, povezuje
                                i programira sisteme tehničke zaštite, može uvideti opravdanost investicije i neometano
                                obavljati poslovne aktivnosti.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Montažom sistema tehničke zaštite smatra se:
                            </p>
                            <ul>
                                <li>postavljanje instalacija;</li>
                                <li>ugradnja uređaja i opreme;</li>
                                <li>programiranje, podešavanje (parametrisanje) i ispitivanje sistema tehničke zaštite
                                    kao i njegovo puštanje u rad;
                                </li>
                                <li>verifikacija uređaja i opreme, odnosno sistema i tehnički prijem;</li>
                                <li>izrada uputstava za rukovanje;</li>
                                <li>obuku osoblja.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Postavljanju instalacija tehničke zaštite i ugradnji uređaja i opreme prethode pripremni
                                radovi. Instalacije tehničke zaštite moraju biti izvedene u skladu sa propisima koji
                                uređuju uslove postavljanja elektrotehničkih instalacija.
                            </p>
                            <p>Watchout Security tehničku službu čine zaposleni, starosti između 20 i 40 godina,
                                osposobljeni za rad na visini, sa visokim iskustvom u izvođenju telekomunikacionih
                                instalacija.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default MontazaPovezivanjeProgramiranjeIObuka;