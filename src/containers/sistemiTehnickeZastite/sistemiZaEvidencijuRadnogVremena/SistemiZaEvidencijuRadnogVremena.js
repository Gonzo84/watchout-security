import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import sistemiZaEvidencijuRadnogVremenaImg
    from '../../../assets/images/sistemiTehnickeZastite/sistemiZaEvidencijuRadnogVremena.jpg'


class SistemiZaEvidencijuRadnogVremena extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: sistemiZaEvidencijuRadnogVremenaImg,
            title: 'Sistemi za evidenciju radnog vremena i kontrolu pristupa',
            description: 'Ako ne znate ili ne možete da upravljate svojim vremenom, čime onda uopšte možete da upravljate? Peter Drucker'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>Evidencija radnog vremena, kontrola kretanja kroz objekat i dozvola pristupa
                                    autorizovanim kadrovima u restriktivne prostorije, tri su važna segmenta u
                                    funkcionisanju savremene organizacije.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>ZKTime je sistem za evidenciju radnog vremena zaposlenih i/ili kontrolu pristupa i
                                sastoji se od terminala za identifikaciju RFID kartice, otiska prstiju, prepoznavanja
                                lica ili PIN-a, zatim serverske aplikacije, te web aplikacije za administraciju i
                                upravljanje samim sistemom, kao i izveštavanje.
                            </p>
                            <p>Implementacijom i primenom sistema kontrole sprečava se nepotrebno i nedozvoljeno
                                kretanje po objektu, čime se povećava nivo bezbednosti što svakako doprinosi
                                racionalnijem i efikasnijem poslovanju.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Pored kontrole pristupa, ZKTime sistem koristi se za praćenje i evidentiranje radnog
                                vremena, tako da menadžment kompanije dobija vrlo efikasan mehanizam za kontrolu utroška
                                radnog vremena. Primenom sistema za evidenciju radnog vremena omogućena je potpuna i
                                efikasna kontrola vremena koje zaposleni provedu na poslu, kontrola njihovog kašnjenja,
                                prekovremenog rada, bolovanja, godišnjih odmora, a na kraju i završnog obračuna troškova
                                za zaposlene.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Softver za upravljanje sistemom i pregled izveštaja je web orijentisan, tako da korisnici
                                imaju mogućnost pristupa unutar lokalne mreže, ali i pristup sa ostalih lokacija vezanih
                                na internet.
                            </p>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SistemiZaEvidencijuRadnogVremena;
