import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import bezbednosnoIzvestavanjeImg from '../../../assets/images/usluge/bezbednosnoIzvestavanje.jpg'


class BezbednosnoIzvestavanje extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: bezbednosnoIzvestavanjeImg,
            title: 'Bezbednosno izveštavanje',
            description: 'Autoritet znanja jednako je legitiman kao i autoritet položaja. Peter Drucker'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Sistemski pristup i transparentnost u pogledu realizovanih bezbednosnih mera pružaju
                                    osnovu za kontinuirano poboljšanje nivoa bezbednosti štićenog objekta i usklađivanje
                                    sitema tehničke zaštite sa konkretnim potrebama klijenta.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Bezbednosni izveštaji od izuzetnog su značaja za korisnike usluga, pa će i ubuduće
                                orijentacija Watchout Security tima biti usmerena ka što boljem sistemu izveštavanja o
                                sprovedenim aktivnostima.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p>Sastavni deo svakog izveštaja su podaci o sprovedenim aktivnostima koji se dobijaju
                                automatski iz informacionih sistema. Drugi deo izveštaja su svi uočeni rizici u procesu
                                obezbeđenja, a kao najbitniji deo se podrazumevaju zaključci menadžera rizika koji
                                predviđaju korektivne i preventivne mere za poboljšanje procesa u cilju podizanja
                                bezbednosnog nivoa. Izveštavanje se može vršiti periodično i na zahtev korisnika.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Izveštavanjem, Watchout Security doprinosi boljim performansama pruženih usluga i
                                istovremeno razvija efikasan sistem istraživanja i ublažavanja svih potencijalnih
                                bezbednosnih opasnosti i rizika na štićenom objektu.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default BezbednosnoIzvestavanje;