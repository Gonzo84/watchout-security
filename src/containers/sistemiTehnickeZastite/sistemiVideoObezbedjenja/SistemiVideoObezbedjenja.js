import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import sistemiVideoObezbedjenjaImg from '../../../assets/images/sistemiTehnickeZastite/sistemiVideoObezbedjenja.jpg'


class SistemiVideoObezbedjenja extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: sistemiVideoObezbedjenjaImg,
            title: 'Video obezbeđenje',
            description: 'Neka naše brige koje unapred brinemo postanu razmišljanje i planiranje unapred. Vinston Čerčil'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>U savremenim uslovima poslovanja koje karakterišu brojni rizici, kao jedna od mogućih
                                    kriznih situacija izdvajaju se provale i krađe. Posledice nastale u tom slučaju u
                                    značajnoj meri mogu narušiti stabilnost poslovanja organizacije. Shodno tome, javlja
                                    se potreba za ekonomičnim načinom poboljšanja bezbednosti ljudi, objekata i imovine
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Sistemi video obezbeđenja se sve više koriste u sigurnosnim sistemima i to sa dobrim
                                razlogom. Čak i samo prisustvo video kamera odvraća potencijalne provalnike od krađe.
                                Moguće je takođe otkrivanje opasnosti u ranoj fazi. Odgovarajuća i brza intervencija
                                omogućiće smanjenje štete.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Video obezbeđenje omogućava potpunu vizuelnu kontrolu nad objektom i kada dođe do
                                incidenta mogu se preduzeti odgovarajući koraci da bi se minimizirala šteta.
                            </p>
                            <p>CTV (televizija zatvorenog kruga - Closed Circuit TeleVision), kao jedan od
                                najzastupljenijih sistema tehničke zaštite objekata može se sagledati kroz tri osnovne
                                funkcije i to: 1. osmatranje, 2. snimanje i 3. odvraćanje.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Prva funkcija (osmatranje) omogućava sagledavanje stanja na značajnim punktovima
                                restriktivnog prostora i procenu događaja na njima. Na mestima gde se zahteva pregled
                                posetilaca pre njihovog ulaska, CCTV omogućava da se prati tok događaja i interveniše u
                                slučaju pokušaja nasilnog ulaska.
                            </p>
                            <p>Druga funkcija (snimanje) u cilju arhiviranja, omogućava da se ima reprodukcija događaja
                                kako bi se mogla izvršiti analiza ekscesnih situacija i voditi dalji postupak ukoliko to
                                bude potrebno.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p>Treća funkcija (odvraćanje) ima psihološko dejstvo na lice koje namerava da
                                neautorizovano uđe u restriktivan prostor. Saznanje da će biti uočeno i snimljeno i da
                                će samim tim postojati materijalni dokazi njegove neregularne aktivnosti zbog koje može
                                odgovarati, zastrašuje i najčešće odvraća od namere.
                            </p>
                            <p>Sistem video nadzora u svom osnovnom izvođenju treba da sadrži kamere i monitor ili više
                                njih, međusobno spregnute odgovarajućim prenosnim putem preko uređaja za snimanje i
                                reprodukciju slike (video rekorder).
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Kamere se postavljaju na mestima koja treba osmatrati, u spoljnim i unutrašnjim
                                prostorima, a kučišta su im prilagođena uslovima primene, kako klimatskim, tako i
                                ambijentalnim. Mogu biti fiksne i pokretne, sa mogućnošću daljinskog upravljanja optikom
                                i motorikom - pokretanje po horizontali i vertikali. Monitori se obično smeštaju na
                                komandno-kontrolnom pultu u kontrolnom centru, gde se smešta i ostala oprema sistema
                                tehničke zaštite.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default SistemiVideoObezbedjenja;
