import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './ONama.scss';
import KodeksPonasanja from "../../assets/KOD 01-1 - Kodeks ponasanja WS.pdf";
import IdentifikacionaKartica from "../../assets/ob-89-3-identifikaciona-kartica.pdf";

class ONama extends Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <Aux>
                <div className={[classes.ONamaHeader, 'ws-header'].join(' ')}>
                    <h4 className="ws-header-title ws-o-nama">O kompaniji

                        <h6 className="ws-header-title">”Preventiva stvara kapital, zato je bezbednost investicija u
                            bolju
                            budućnost!”<br/>
                            <span>Vladimir Jaćimović, direktor i osnivač Watchout Security doo</span></h6></h4>
                </div>

                <div className={[classes.ONama, 'ws-body'].join(' ')}>

                    <div className="ws-border-holder"></div>
                    <div className=" ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box">
                                <p><span className="ws-txt-bold">Watchout Security doo</span> osnovan je 2008. godine u
                                    Kragujevcu sa fokusom na pružanje usluga fizičko-tehničkog obezbeđenja pravnim i
                                    fizičkim licima.</p>
                                <p>Kompletno poslovanje Watchout Security-a zasniva se na četiri postulata:

                                </p>
                                <ul className="ws-subtitle-assertive">
                                    <li>Kvalitet</li>
                                </ul>
                                <p>Jer je brzina prilagođavanja promenama ključ uspeha
                                </p>

                                <ul className="ws-subtitle-assertive">
                                    <li>Poverenje</li>
                                </ul>
                                <p>Jer bez njega nema uspeha na bilo kojem životnom polju.
                                </p>

                                <ul className="ws-subtitle-assertive">
                                    <li>Preventiva</li>
                                </ul>
                                <p>Jer je upravo ona najbolji pristup rešavanju problema - temeljno, spremno i u pravi
                                    čas.
                                </p>

                                <ul className="ws-subtitle-assertive">
                                    <li>Pouzdanost</li>
                                </ul>
                                <p>Jer nam je stalo da stvorimo bezbedniju budućnost.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box ws-alt">
                                <p>Da li znate da je <span className="ws-txt-bold">teorija o hijerarhiji</span> potreba
                                    Abrahama
                                    Maslova jedna od najpoznatijih i najčešće citiranih u zapadnim zemljama? Prema
                                    Maslovljevoj hijerarhiji potreba, <span className="ws-txt-bold">potreba za sigurnošću</span> nalazi
                                    se visoko na lestvici
                                    - na drugom mestu, odmah nakon bioloških potreba čoveka.
                                </p>
                                <p className="ws-txt-bold">Život u bezbednom okruženju, sigurnost porodice, zdravlja i
                                    imovine, stabilan posao - razumemo vas!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box">
                                <p>Sofisticiranost tehnoloških rešenja koja u radu koristimo, kontinuirana edukacija i
                                    razvoj kadrova, praćenje inovacija i prilagođavanje tehničko-tehnološkom progresu i
                                    poslovanje u skladu sa dobrom poslovnom praksom u Republici Srbiji učinili su da
                                    <span className="ws-txt-bold">Watchout Security</span> postane lider u oblasti
                                    fizičko-tehničkog obezbeđenja u zemlji i
                                    regionu.
                                </p>
                                <p>Pratimo globlane trendove u oblasti obezbeđenja i njihovom primenom čuvamo naše
                                    zgrade, kuće, apoteke, škole - našu Srbiju!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-licence">
                        <div className="container">
                            <div className="ws-box ws-alt">
                                <h5>Sertifikati</h5>
                                <p>Kompanija <span className="ws-txt-bold">Watchout Security</span> dostigla je
                                    međunarodno priznate standarde u oblasti
                                    fizičko-tehničkog obezbeđenja i upravljanja procesom rada:</p>
                                <ul className="ws-licence-list">
                                    <li><span className="ws-color-dark">SRPS OHSAS 18001:2008</span> Sistem upravljanja
                                        zaštitom zdravlja i bezbednošću na radu
                                    </li>
                                    <li><span className="ws-color-dark">SRPS ISO 27001:2014</span> Sistem upravljanja
                                        bezbednošću informacija
                                    </li>
                                    <li><span className="ws-color-dark">SRPS ISO 14001:2015</span> Sistemi menadžmenta
                                        zaštite životne sredine
                                    </li>
                                    <li><span className="ws-color-dark">SRPS ISO 9001:2015</span> Sistem upravljanja
                                        kvalitetom
                                    </li>
                                    <li><span className="ws-color-dark">SRPS ISO 2000-1:2014</span> Sistem upravljanja
                                        uslugama - Informacione tehnologije
                                    </li>
                                    <li><span className="ws-color-dark">SRPS A.L2.002:2015</span> Fizička zaštita
                                    </li>
                                    <li><span className="ws-color-dark">SRPS A.L2.002:2015</span> Tehička zaštita
                                    </li>
                                    <li><span className="ws-color-dark">SRPS A.L2.002:2015</span> Menadžment iz
                                        kontrolnog centra
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-licence">
                        <div className="container">
                            <div className="ws-box">
                                <h5>Licence </h5>
                                <p><span className="ws-txt-bold">Watchout Security</span> poseduje sledeće licence
                                    izdate od strane Ministarstva unutrašnjih poslova:</p>
                                <ul className="ws-licence-list">
                                    <li><span className="ws-color-dark">Licenca 20433</span> za fizičko-tehničku zaštitu
                                        lica i imovine i održavanje reda na sportskim priredbama, javnim skupovima i
                                        drugim mestima okupljanja građana;
                                    </li>
                                    <li><span className="ws-color-dark">Licenca 20181</span> za planiranje sistema
                                        tehničke zaštite;
                                    </li>
                                    <li><span className="ws-color-dark">Licenca 20182</span> za procenu rizika u zaštiti
                                        lica, imovine i poslovanja;
                                    </li>
                                    <li><span className="ws-color-dark">Licenca 20183</span> za montažu, puštanje u rad
                                        i održavanje sistema tehničke zaštite i obuke korisnika;
                                    </li>
                                    <li><span className="ws-color-dark">Licenca 30161</span> za vršenje poslova
                                        projektovanja i nadzora nad izvođenjem sistema tehničke zaštite.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-licence">
                        <div className="container">
                            <div className="ws-box ws-alt">
                                <div>
                                    <a className="ws-color-dark" href={KodeksPonasanja} target='_blank'>Kodeks
                                        ponašanja</a></div>
                                <br/>
                                <div>
                                    <a className="ws-color-dark" href={IdentifikacionaKartica} target='_blank'>Identifikaciona
                                        kartica</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default ONama;