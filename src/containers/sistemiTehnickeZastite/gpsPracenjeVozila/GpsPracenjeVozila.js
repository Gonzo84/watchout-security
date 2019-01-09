import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/GPSPracenjeVozila.jpg'


class GpsPracenjeVozila extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'GPS praćenje vozila',
            description: 'Mudar čovek izbegava štete i opasnosti. Latinska poslovica'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Poslovanje Vaše organizacije podrazumeva čestu upotrebu motornih vozila? Želite da
                                    smanjite operativne troškove, poboljšate efikasnost vozača, komercijalista i kadrova
                                    na terenu, pružie klijentima bolju uslugu i uz to poboljšate pregovaračku moć?
                                    Otkrijte šta je GPS praćenje vozila i šta može učiniti za Vaš biznis!
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Watchout Security nudi uslugu GPS praćenja vozila uređajem Master tracker 3000 koji
                                predstavlja sintezu GPS i GSM tehnologije, a rezultat je jednostavno dobijanje podataka
                                o lokaciji, zaustavljanjima, praznom hodu i kilometraži koja može biti jednostavno
                                analizirana u cilju povećanja efikasnosti i smanjenja troškova. Kompletno softversko
                                rešenje, u koje je uključen i prenos podataka putem GPRS-a od svih vozila do servera,
                                napravljeno je u Srbiji. Dostupna je i web aplikacija sa softverom na srpskom jeziku,
                                kojoj klijent može da pristupi sa bilo kog računara.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p className="ws-stronger-color">Proverite prijavljenu satnicu zaposlenog:
                            </p>
                            <p>Mnoge kompanije samo po ovom osnovu povrate investiciju u roku od 3 do 6 meseci. Pomoću
                                izveštaja možete dobiti informacije o vremenu provedenom na radnom mestu. Uporedite
                                prosečno radno vreme pre i posle instalacije sistema.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p className="ws-stronger-color">Pomozite zaposlenom koji je zalutao:
                            </p>
                            <p>Kada je poznata trenutna lokacija vozila, dispečer može lako pomoći vozaču da pronađe
                                pravi put i time uštedi na vremenu i ispoštuje predviđene rokove.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p className="ws-stronger-color">Kontrolišite i umanjite prosečnu brzinu vozila:
                            </p>
                            <p>Neka vozila ne prelaze 100km/h na autoputu i 70km/h na ostalim putevima. Ove promenljive
                                su u direktnoj sprezi sa potrošnjom goriva, troškovima održavanja i bezbednosti učesnika
                                u saobraćaju. Kontrolom brzine uštedećete na troškovima goriva do 20% na mesečnom nivou.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p className="ws-stronger-color">Osiguravajuće kompanije:
                            </p>
                            <p>Kontaktirajte Vašu osiguravajuću kompaniju i zahtevajte popust kada im budete pokazali da
                                Vaša vozila sada voze sporije i da smanjujete mogućnost saobraćajne nezgode. Ako Vaša
                                osiguravajuća kompanija ne želi da Vam izađe u susret, promenite je.
                            </p>
                        </div>
                    </div>

                    <div className="ws-triangle-holder">
                        <div className="container">
                            <p className="ws-stronger-color">Pratite vreme zaustavljanja:
                            </p>
                            <p>Serviseri i menadžeri tačno znaju koliko vremena je potrebno za isporuku ili obavljanje
                                servisne usluge. Nepoštovanje predviđenog vremena, može biti pokazatelj smanjene
                                produktivnosti zaposlenog ili pak nedovoljnog posvećivanja klijentu. Ove informacije su
                                od značaja za jačanje veza, povraćaj robe ili uspešnu prodaju. Efikasnost na prvom
                                mestu!
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ">
                        <div className="container">
                            <p className="ws-stronger-color">Negovanje dobrih odnosa sa kupcima i pomoć menadžmentu:
                            </p>
                            <p>Nema više odgovora klijentima: “Između 9 i 17 sati”. Profesionalnije je da navedete tačno
                                vreme isporuke/dolaska koje ćete ispoštovati. Uz GPS tehnologiju garantujete kvalitet
                                usluga i obezbeđujete
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default GpsPracenjeVozila;