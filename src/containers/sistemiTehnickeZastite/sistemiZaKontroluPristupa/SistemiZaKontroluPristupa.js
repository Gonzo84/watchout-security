import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import sistemiZaKontroluPristupaImg from '../../../assets/images/sistemiTehnickeZastite/sistemiZaKontroluPristupa.jpg'


class SistemiZaKontroluPristupa extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: sistemiZaKontroluPristupaImg,
            title: 'Sistemi za kontrolu pristupa',
            description: 'Najbolji način da predvidite budućnost je da je stvorite. Abraham Linkoln'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>U skladu sa ciljem ka povećanju bezbednosti i težnjom ka prilagođavanju bezbednosnih
                                    sistema poslovnoj politici i procedurama rada organizacije, pristup restriktivnim
                                    prostorijama treba da bude efikasno kontrolisan.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Prvi stepenik u kontroli pristupa je fizička barijera, koja sprečava prilaz ograđenom
                                prostoru, a ulazi su strogo definisani i pod nadzorom osoblja službe fizičkog
                                obezbedenja. Svako lice koje želi pristup mora biti identifikovano i tu funkciju, za
                                objekte sa malim brojem zaposlenih i ređim posetama sa strane, vrše dežurna lica na
                                ulazima.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Međutim, kod objekata gde ima više zaposlenih i gde je frekvencija “saobraćaja” povećana,
                                kao i kod vrlo osetljivih objekata, gde oslonac isključivo na lica fizičkog obezbeđenja
                                nije dovoljno pouzdan, koriste se razne vrste tehničkih sistema za kontrolu pristupa.
                                Sem povećane bezbednosti, njihova primena smanjuje i broj mesta nadziranih od strane
                                lica fizičkog obezbeđenja.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Tehnički sistemi za kontrolu pristupa baziraju se na tri tehnike koje na određeni
                                utvrđuju autorizovanost lica za ulazak u osetljiv prostor i, po dobijanju potvrde, daju
                                dozvolu za ulazak. Prva tehnika se zasniva na poznavanju šifre za otvaranje brave, druga
                                na posedovanju identifikacione kartice ili bedža i treća na prepoznavanju neke fizičke
                                osobenosti lica koje traži pristup. Pri ovome je moguće vršiti kontrolu u tri nivoa, na
                                ulazu u krug objekta, na ulazu u sam objekat i na ulazu u kritičnu prostoriju i povezati
                                sistem sa alarmnim sistemom.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default SistemiZaKontroluPristupa;