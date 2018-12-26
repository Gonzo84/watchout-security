import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/kontrolaPostojecihSluzbenika.jpg'


class KontrolaSluzbenikaObezbedjenja extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'Sistemi za kontrolu službenika obezbeđenja',
            description: 'Postaviti pravo pitanje je pola znanja. Rodžer Bejkon'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>U cilju kontinuiranog unapređenja bezbednosnih procedura, potrebno je pratiti
                                    realizaciju plana obilazaka službenika fizičkog obezbeđenja. Ovim tipom kontrole
                                    stiče se uvid u opravdanost investicije u fizičko obezbeđenje i uspostavlja se
                                    efikasan sistem rada angažovanih kadrova u ovoj sferi.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Sa korisnikom usluge se pre početka pružanja usluge definiše Plan obilazaka koji sadrži
                                tačan broj lokacija kontrolnih tačaka sa preciznim nazivima i vremenskim intervalom
                                obilazaka. Službenik obezbeđenja pri svakom obilasku lokacije prinosi čitač memorijskom
                                dugmentu na kontrolnom punktu, a poseta biva memorisana u sistem. Prenos podataka o
                                vremenima obilazaka patrole korisniku usluge dostavlja Kontrolni centar Watchout
                                Security-a.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default KontrolaSluzbenikaObezbedjenja;