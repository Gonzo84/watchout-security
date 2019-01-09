import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import parkingRampeImg from '../../../assets/images/sistemiTehnickeZastite/parkingRampe.jpg'


class ParkingRampe extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: parkingRampeImg,
            title: 'Parking rampe',
            description: ''
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Sistem tehničke zaštite koji unapređuje nivo bezbednosti, a ujedno predstavlja i
                                    vizit kartu objekta jesu parking rampe. Prvo što posetilac primeti čak i pre samog
                                    objekta je upravo rampa za parking. Rampa je efikasno sredstvo za sprečavanje
                                    neovlašćenog ulaza vozila u ograđeni prostor, javne garaže, ulaza na zajednički
                                    parking stambenih objekata i druge objekte.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Česta pojava na ulazima u kompanije sa velikom frekvencijom prolaza su automatske kapije.
                                U poređenju sa automatskim kapijama, velika prednost parking rampe je brzina otvaranja.
                                Parking rampe koje Watchout Security ima u ponudi mogu se podizati ili spuštati za samo
                                dve sekunde. U odnosu na kapiju kojoj je potrebno u zavisnosti od širine, od 20 sekundi
                                na više, to je ogromna ušteda vremena.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Naše parking rampe rade na 24V dc i imaju mogućnost baterijskog napajanja, koje će
                                omogućiti da koristite rampu čak i kada mnogi to ne mogu – kada nema struje. Ukoliko
                                dođe do fizičkog oštećenja parking rampe garantujemo osposobljavanje ili zamenu delova u
                                roku od 24 sata od poziva kroz uslugu održavanja. U zavisnosti od konkretnih potreba
                                korisnika, parking rampu moguće je povezati sa čitačima kartica, otiska prsta,
                                daljinskim upravljačima, GSM modulima za upravljanje putem mobilnih telefona,
                                induktivnim petljama, mikrotalasnim radarima PRAP, fotoćelijama.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Korisnicima koji kupe rampu kod nas, garantujemo najpovoljniju cenu dodatnih daljinskih
                                upravljača italijanske proizvodnje.
                            </p>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ParkingRampe;