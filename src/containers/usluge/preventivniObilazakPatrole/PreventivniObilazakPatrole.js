import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import aktImg from '../../../assets/images/usluge/preventivniObilasci.jpg'


class PreventivniObilazakPatrole extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: aktImg,
            title: 'Preventivni obilasci patrolnog tima',
            description: 'Delanje je osnovni ključ svakog uspeha. Pablo Pikaso'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Kontinuirano povećanje nivoa bezbednosti i sigurnosti štićenih objekata u fokusu je
                                    naših razvojnih ciljeva. Kao jednu od usluga koja u značajnoj meri doprinosi
                                    povećanju bezbednosti izdvajamo preventivne obilaske patrolnog tima.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Angažovanje patrolnog tima podrazumeva preventivni obilazak korisnika u različitim
                                vremenskim periodima, danju ili noću, čime se ne dozvoljava uspostavljanje šablona koji
                                bi olakšao planiranje krivičnog dela.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Pružanjem ove usluge maksimalno se povećava bezbednost štićenog prostora, pri čemu se
                                preventivni obilasci mogu prilagoditi zahtevima korisnika tako da se obavljaju u
                                terminima kada za tim postoji najveća potreba.
                                Svi članovi interventne patrole su dobro obučeni i opremljeni, što omogućava najbrži
                                odgovor u slučaju alarmnih situacija.

                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Članove interventne patrole Watchout Security-a, selektuju i kroz specijalizovane
                                programe obučavaju poznati i priznati majstori borilačkih veština i psiholozi usko
                                specijalizovani za rad u ovoj oblasti.
                            </p>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default PreventivniObilazakPatrole;