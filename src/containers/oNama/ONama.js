import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './ONama.scss';

import orgSemaImg from '../../assets/images/oNama/org-sema.jpg';
import pecatImg from '../../assets/images/oNama/pecat.png';

import sl1Img from '../../assets/images/reference/alfa.png';
import sl2Img from '../../assets/images/reference/amss.png';
import sl3Img from '../../assets/images/reference/asseco.png';
import sl4Img from '../../assets/images/reference/baki.png';
import sl5Img from '../../assets/images/reference/becchis_siride.png';
import sl6Img from '../../assets/images/reference/bm_ritam.png';
import sl7Img from '../../assets/images/reference/car.png';
import sl8Img from '../../assets/images/reference/cilis.png';
import sl9Img from '../../assets/images/reference/coffe_dream.png';
import sl10Img from '../../assets/images/reference/diopia.png';
import sl11Img from '../../assets/images/reference/emisia.png';
import sl12Img from '../../assets/images/reference/energetika.png';
import sl13Img from '../../assets/images/reference/eparhija.png';
import sl14Img from '../../assets/images/reference/eps.png';
import sl15Img from '../../assets/images/reference/euro_heat.png';


import sl16Img from '../../assets/images/reference/ewe.png';
import sl17Img from '../../assets/images/reference/fca.png';
import sl18Img from '../../assets/images/reference/gomma_line.png';
import sl19Img from '../../assets/images/reference/inter_komerc_raca.png';
import sl20Img from '../../assets/images/reference/jevtic.png';


import sl21Img from '../../assets/images/reference/johnson_controls.png';
import sl22Img from '../../assets/images/reference/knjaz_milos.png';
import sl23Img from '../../assets/images/reference/krka.png';
import sl24Img from '../../assets/images/reference/kronospan.png';
import sl25Img from '../../assets/images/reference/max_bet.png';


import sl26Img from '../../assets/images/reference/mercata.png';
import sl27Img from '../../assets/images/reference/messer.png';
import sl28Img from '../../assets/images/reference/milanovic_inzenjering.png';
import sl29Img from '../../assets/images/reference/obi.png';
import sl30Img from '../../assets/images/reference/panasonic.png';


import sl31Img from '../../assets/images/reference/policija.png';
import sl32Img from '../../assets/images/reference/sunce.png';
import sl33Img from '../../assets/images/reference/tera.png';
import sl34Img from '../../assets/images/reference/todorovic.png';
import sl35Img from '../../assets/images/reference/triglav.png';


import sl36Img from '../../assets/images/reference/un_women.png';
import sl37Img from '../../assets/images/reference/unior.png';
import sl38Img from '../../assets/images/reference/vulovic_transport.png';
import sl39Img from '../../assets/images/reference/watchout.png';
import sl40Img from '../../assets/images/reference/zastava_arms.png';


class ONama extends Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <Aux>
                <div className="ws-header">
                    <h4 className="ws-header-title">O NAMA</h4>
                    <div className="container">
                        <div className=" ws-box ws-alt">
                            <div className="ws-txt">
                                <h5>Predgovor</h5>
                                <p>Postovani,</p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen
                                    book.
                                </p>
                                <p>Srdacan pozdrav/Best regards</p>
                                <div className="ws-potpis">
                                    <p>Vladimir Jacimovic
                                        <span className="ws-txt-italic"> direktor</span></p>
                                </div>
                            </div>
                            <div className="ws-stamp">
                                <img src={pecatImg} alt="pecat"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={[classes.ONama, 'ws-body'].join(' ')}>
                    <div className=" ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box">
                                <h5>Politika sistema menadzmenta organizacije</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the.
                                </p>
                                <ul className="ws-subtitle-assertive">
                                    <li>VIZIJA</li>
                                </ul>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the.
                                </p>

                                <ul className="ws-subtitle-assertive">
                                    <li>MISIJA</li>
                                </ul>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the.
                                </p>

                                <ul className="ws-subtitle-assertive">
                                    <li>POLITIKA</li>
                                </ul>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                </p>

                                <ul className="ws-politika-list">
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                </ul>

                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                </p>

                                <p className="ws-uppercase ws-color-dark ws-txt-italic">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                </p>
                                <p className="ws-color-dark">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-shema">
                        <div className="container">
                            <div className="ws-box ws-alt">
                                <h5>Organizaciona sema Watchout Security</h5>
                                <p>Organizaciona sema radnih mesta Watchout Security</p>
                                <div className="ws-shema-cont">
                                    <img src={orgSemaImg} alt="sema"/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box">
                                <h5>
                                    Zadovoljstvo zainteresovanih strana u organizaciji je na prvom mestu
                                </h5>
                                <p className="ws-txt-bold">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                                    Ipsum is
                                    simply dummy text of the
                                </p>

                                <ul className="ws-politika-list">
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy <span
                                        className="ws-uppercase ws-color-dark">CALL CENTER</span> text of the printing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-licence">
                        <div className="container">
                            <div className="ws-box ws-alt">
                                <h5>Licence i Sertifikati</h5>
                                <ul className="ws-licence-list">
                                    <li><span className="ws-color-dark">Lorem Ipsum</span> is simply dummy text of the
                                        printing
                                        Lorem Ipsum is simply dummy text of the printing
                                    </li>
                                    <li>Lorem Ipsum i vs simply dummy text of the printins simply dummy text of the
                                        printins
                                        simply dummy text of the printing
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the pris simply dummy text of the printins
                                        simply
                                        dummy text of the printinnting
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printings simply dummy text of the
                                        printins
                                        simply dummy text of the printin
                                    </li>
                                </ul>

                                <p>
                                    Lorem Ipsum i vs simply dummy text of the printins simply dummy text of the printins
                                    simply
                                    dummy text of the printing
                                    m Ipsum i vs simply dummy text of the printins simply dummy text of the pri
                                    m Ipsum i vs simply dummy text of the printins simply dummy text of the pri
                                    m Ipsum i vs simply dummy text of the printins simply dummy text of the pri
                                </p>

                                <p>
                                    m Ipsum i vs simply dummy text of <span
                                    className="ws-color-dark">Polisu osiguranja </span> simply dummy text of the pri
                                    m Ipsum i vs simply dummy text of the printins simply dummy text of the pri
                                    m Ipsum i vs simply dummy text of the printins simply dummy text of the pri

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-clients">
                        <div className="container">
                            <div className="ws-box">
                                <h5>Referentna Lista</h5>
                                <div className="ws-img-cont">

                                    <img src={sl1Img} alt="client"/>
                                    <img src={sl2Img} alt="client"/>
                                    <img src={sl3Img} alt="client"/>
                                    <img src={sl4Img} alt="client"/>
                                    <img src={sl5Img} alt="client"/>

                                    <img src={sl6Img} alt="client"/>
                                    <img src={sl7Img} alt="client"/>
                                    <img src={sl8Img} alt="client"/>
                                    <img src={sl9Img} alt="client"/>
                                    <img src={sl10Img} alt="client"/>

                                    <img src={sl11Img} alt="client"/>
                                    <img src={sl12Img} alt="client"/>
                                    <img src={sl13Img}
                                         alt="client"/>
                                    <img src={sl14Img}
                                         alt="client"/>
                                    <img src={sl15Img}
                                         alt="client"/>

                                    <img
                                        src={sl16Img}
                                        alt="client"/>
                                    <img
                                        src={sl17Img}
                                        alt="client"/>
                                    <img
                                        src={sl18Img}
                                        alt="client"/>
                                    <img
                                        src={sl19Img}
                                        alt="client"/>
                                    <img
                                        src={sl20Img}
                                        alt="client"/>

                                    <img
                                        src={sl21Img}
                                        alt="client"/>
                                    <img
                                        src={sl22Img}
                                        alt="client"/>
                                    <img
                                        src={sl23Img}
                                        alt="client"/>
                                    <img
                                        src={sl24Img}
                                        alt="client"/>
                                    <img
                                        src={sl25Img}
                                        alt="client"/>

                                    <img
                                        src={sl26Img}
                                        alt="client"/>
                                    <img
                                        src={sl27Img}
                                        alt="client"/>
                                    <img
                                        src={sl28Img}
                                        alt="client"/>
                                    <img
                                        src={sl29Img}
                                        alt="client"/>
                                    <img
                                        src={sl30Img}
                                        alt="client"/>

                                    <img
                                        src={sl31Img}
                                        alt="client"/>
                                    <img
                                        src={sl32Img}
                                        alt="client"/>
                                    <img
                                        src={sl33Img}
                                        alt="client"/>
                                    <img
                                        src={sl34Img}
                                        alt="client"/>
                                    <img
                                        src={sl35Img}
                                        alt="client"/>

                                    <img
                                        src={sl36Img}
                                        alt="client"/>
                                    <img
                                        src={sl37Img}
                                        alt="client"/>
                                    <img
                                        src={sl38Img}
                                        alt="client"/>
                                    <img
                                        src={sl39Img}
                                        alt="client"/>
                                    <img
                                        src={sl40Img}
                                        alt="client"/>
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