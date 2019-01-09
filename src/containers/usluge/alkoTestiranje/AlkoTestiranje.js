import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alkoTestiranjeImg from '../../../assets/images/usluge/alkoTestiranje.jpg'


class AlkoTestiranje extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alkoTestiranjeImg,
            title: 'Alko testiranje zaposlenih',
            description: '99% svih iznenađenja u biznisu su neprijatna! Harold Geneen'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Sigurno želite ovu statističku pošalicu da okrenete u korist svoje organizacije, zar
                                    ne?
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Uspeh poslovanja u značajnoj meri zavisi od ljudskih resursa. Praksa u Srbiji beleži
                                slučajeve neetičkog i neprofesionalnog ponašanja i situacije kada su se zaposleni na
                                radnom mestu pojavljivali u alkoholisanom stanju.</p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>S obzirom da sve veći broj radnika dolazi na posao u alkoholisanom stanju ili konzumira
                                alkohol na radnom mestu, sve su učestalije povrede na radu kao i druge neprijatnosti,
                                nastale kao posledica povišenog nivoa alkohola u krvi. Zbog pomenutih razloga,
                                poslodavci se sve češće opredeljuju za uslugu alko testiranja zaposlenih. Informacije
                                dobijene na ovaj način, firme mogu koristiti za preduzimanje adekvatnih mera za
                                suzbijanje takvog ponašanja u budućnosti čime se osigurava nesmetano poslovanje.</p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Pružanje usluge alkotestiranja zaposlenih lica putem Etilometra Alkotest DRAGER 6810
                                (uređaj poseduje Uverenje Direkcije za mere i dragocene metale o ispunjenosti uslova
                                propisanih Pravilnikom o metrološkim uslovima za etilometre). Pružanje usluge se vrši
                                svakog radnog dana u mesecu, u periodu od 8 do 16 sati i tom prilikom se najmanje pet
                                osoba mogu testirati.</p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default AlkoTestiranje;