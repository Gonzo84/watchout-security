import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';


import classes from './Home.scss';

import SimpleSlider from "../../components/carousel/Carousel";
import Aux from '../../hoc/Auxiliary/Auxiliary';

import sl1Img from '../../assets/images/reference/amss.png';
import sl2Img from '../../assets/images/reference/asseco.png';
import sl3Img from '../../assets/images/reference/bmRitam.png';
import sl4Img from '../../assets/images/reference/diopta.png';
import sl5Img from '../../assets/images/reference/emisia.png';
import sl6Img from '../../assets/images/reference/ewe.png';
import sl7Img from '../../assets/images/reference/fca.png';
import sl8Img from '../../assets/images/reference/johnsonControl.png';
import sl9Img from '../../assets/images/reference/knjazMilos.png';
import sl10Img from '../../assets/images/reference/krka.png';
import sl11Img from '../../assets/images/reference/kronospan.png';
import sl12Img from '../../assets/images/reference/mercata.png';
import sl13Img from '../../assets/images/reference/messer.png';
import sl14Img from '../../assets/images/reference/milanovic.png';
import sl15Img from '../../assets/images/reference/ottobock.png';


import sl16Img from '../../assets/images/reference/panasonic.png';
import sl17Img from '../../assets/images/reference/policija.png';
import sl18Img from '../../assets/images/reference/sunce.png';
import sl19Img from '../../assets/images/reference/triglav.png';
import sl20Img from '../../assets/images/reference/unior.png';


import sl21Img from '../../assets/images/reference/unWomen.png';
import sl22Img from '../../assets/images/reference/zastava.png';

import headerCarousel1 from '../../assets/images/home/home-page-main-image.jpg';


import fizickaZastita from '../../assets/images/home/home-fizicka-zastita-ikonica.png';
import tehnickaZastita from '../../assets/images/home/home-tehnicka-zastita-ikonica.png';


import akcija1 from '../../assets/images/home/akcija-akt-o-proceni-rizika.jpg';
import akcija2 from '../../assets/images/home/akcija-alarm-monitoring.jpg';
import akcija3 from '../../assets/images/home/akcija-medicinski-panik-taster.jpg';
import akcija4 from '../../assets/images/home/akcija-odrzavanje-sistema.jpg';
import akcija5 from '../../assets/images/home/akcija_sistem_za-evidenciju_radnog_vremena.jpg';
import akcija6 from '../../assets/images/home/akcija-video-monitoring.jpg';


import pravnaLicaImg from '../../assets/images/home/pravna_lica.jpg';
import fizickaLicaImg from '../../assets/images/home/fizicka_lica.jpg';


import starGoldImg from '../../assets/images/home/star-gold.png';
import starSilverImg from '../../assets/images/home/star-silver.png';
import starCoperImg from '../../assets/images/home/star-copper.png';

import badge3 from '../../assets/images/home/licenc_01.png';
import badge4 from '../../assets/images/home/licenc_02.png';
import badge5 from '../../assets/images/home/licenc_03.png';
import badge6 from '../../assets/images/home/licenc_04.png';
import badge7 from '../../assets/images/home/licenc_05.png';
import badge8 from '../../assets/images/home/sert_01.png';
import badge9 from '../../assets/images/home/sert_02.png';
import badge10 from '../../assets/images/home/sert_03.png';
import badge11 from '../../assets/images/home/sert_04.png';
import badge12 from '../../assets/images/home/sert_05.png';
import badge13 from '../../assets/images/home/sert_06.png';
import badge14 from '../../assets/images/home/sert_07.png';
import badge15 from '../../assets/images/home/sert_08.png';

import attachIconImg from '../../assets/images/home/home-document-ikonica.png';

import heroVideoUrl from '../../assets/loopEarth.mp4';
import HeaderItem from "./headerItem/HeaderItem";


class Home extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerCarouselConfig = [{
            backgroundImg: headerCarousel1,
            bodyContent: {
                title: '24/7 u službi vaše bezbednosti!',
                content: '',
                widgets: [{
                    number: 'ispod 4 min',
                    label: 'reagovanje interventne patrole'
                }, {
                    number: 'preko 7000',
                    label: 'instaliranih sistema tehničke zaštite'
                }, {
                    number: 'preko 12 000',
                    label: 'instaliranih kamera'
                }]
            },
            type: 'header'
        }];

        const resenjaCarouselConfig = [{
            title: 'Resenja za fizicka lica',
            widgets: [{
                iconUrl: fizickaZastita,
                label: 'Stanovi',
                nav: {
                    pathname: '/fizicka-lica',
                    hash: 'stanovi'
                }
            }, {
                iconUrl: fizickaZastita,
                label: 'Kuce i vikendice',
                nav: {
                    pathname: '/fizicka-lica',
                    hash: 'kuce'
                }
            }, {
                iconUrl: fizickaZastita,
                label: 'Stambene zgrade',
                nav: {
                    pathname: '/fizicka-lica',
                    hash: 'zgrade'
                }
            }],
            type: 'resenja'
        }, {
            title: 'Resenja za pravna lica',
            widgets: [{
                iconUrl: tehnickaZastita,
                label: 'Small Business',
                nav: {
                    pathname: '/pravna-lica',
                    hash: '#small'
                }
            }, {
                iconUrl: tehnickaZastita,
                label: 'Medium Business',
                nav: {
                    pathname: '/pravna-lica',
                    hash: '#medium'
                }
            }, {
                iconUrl: tehnickaZastita,
                label: 'Large Business',
                nav: {
                    pathname: '/pravna-lica',
                    hash: '#large'
                }
            }],
            type: 'resenja'
        }];
        const certificatesCarouselConfig = [{
            backgroundImg: badge3,
            bodyContent: null
        }, {
            backgroundImg: badge4,
            bodyContent: null
        }, {
            backgroundImg: badge5,
            bodyContent: null
        }, {
            backgroundImg: badge6,
            bodyContent: null
        }, {
            backgroundImg: badge7,
            bodyContent: null
        }, {
            backgroundImg: badge8,
            bodyContent: null
        }, {
            backgroundImg: badge9,
            bodyContent: null
        }, {
            backgroundImg: badge10,
            bodyContent: null
        }, {
            backgroundImg: badge11,
            bodyContent: null
        }, {
            backgroundImg: badge12,
            bodyContent: null
        }, {
            backgroundImg: badge13,
            bodyContent: null
        }, {
            backgroundImg: badge14,
            bodyContent: null
        }, {
            backgroundImg: badge15,
            bodyContent: null
        }];

        const clientsCarouselConfig = [{
            backgroundImg: sl1Img,
            bodyContent: null
        }, {
            backgroundImg: sl2Img,
            bodyContent: null
        }, {
            backgroundImg: sl3Img,
            bodyContent: null
        }, {
            backgroundImg: sl4Img,
            bodyContent: null
        }, {
            backgroundImg: sl5Img,
            bodyContent: null
        }, {
            backgroundImg: sl6Img,
            bodyContent: null
        }, {
            backgroundImg: sl7Img,
            bodyContent: null
        }, {
            backgroundImg: sl8Img,
            bodyContent: null
        }, {
            backgroundImg: sl9Img,
            bodyContent: null
        }, {
            backgroundImg: sl10Img,
            bodyContent: null
        }, {
            backgroundImg: sl11Img,
            bodyContent: null
        }, {
            backgroundImg: sl12Img,
            bodyContent: null
        }, {
            backgroundImg: sl13Img,
            bodyContent: null
        }, {
            backgroundImg: sl14Img,
            bodyContent: null
        }, {
            backgroundImg: sl15Img,
            bodyContent: null
        }, {
            backgroundImg: sl16Img,
            bodyContent: null
        }, {
            backgroundImg: sl17Img,
            bodyContent: null
        }, {
            backgroundImg: sl18Img,
            bodyContent: null
        }, {
            backgroundImg: sl19Img,
            bodyContent: null
        }, {
            backgroundImg: sl20Img,
            bodyContent: null
        }, {
            backgroundImg: sl21Img,
            bodyContent: null
        }, {
            backgroundImg: sl22Img,
            bodyContent: null
        }];

        const najnovijeAkcijeConfig = [{
            backgroundImg: akcija2,
            title: 'Alarm monitoring',
            star: 'Gold',
            lead: 'Alarm monitoring',
            description: 'je usluga daljinskog nadzora alarmnog sistema iz Kontrolnog centra Watchout Security-a koja korisniku pruža viši stepen tehničke zaštite kroz signaliziranje neovlašćenog pristupa štićenom prostoru.'
        }, {
            backgroundImg: akcija6,
            title: 'Video monitoring',
            star: 'Gold',
            lead: 'Video monitoring',
            description: 'je usluga obezbeđenja koja podrazumeva potpunu vizuelnu kontrolu nad objektom i kada dođe do incidenta mogu se preduzeti odgovarajuće mere da bi se minimizirala šteta.'
        }, {
            backgroundImg: akcija4,
            title: 'Održavanje sistema',
            star: 'Gold',
            lead: 'Održavanje sistema',
            description: ' tehničke zaštite podrazumeva predviđanje potencijalnih kvarova i pravovremeno reagovanje u cilju smanjivanja verovatnoće kvara na sistemu.'
        }, {
            backgroundImg: akcija5,
            title: 'Sistemi za evidenciju radnog vremena',
            star: 'Silver',
            lead: 'ZKTime',
            description: ' je sistem za evidenciju radnog vremena zaposlenih i/ili kontrolu pristupa (kontrola prolaza), a on obuhvata beleženje i memorisanje prolazaka, dozvolu pristupa, obradu podataka i, na osnovu rečenog, kreiranje izveštaja.'
        }, {
            backgroundImg: akcija1,
            title: 'Procena rizika',
            star: 'Silver',
            lead: 'Cilj izrade Akta o proceni rizika',
            description: ' jeste identifikacija i vrednovanje rizika, predlaganje mera za smanjenje rizika i planiranje realizacije mera i ocena efektivnosti sprovedenih mera.'
        }, {
            backgroundImg: akcija3,
            title: 'Medicinski panik tester',
            star: 'Bronze',
            lead: 'Medicinski panik tester',
            description: ' pruža niz benefita korisnicima usluge i to kroz: najbržu moguću reakciju u slučaju iznenadnih zdravstvenih problema, mogućnost reagovanja 24 časa dnevno, 7 dana u nedelji, 365 dana godišnje.'
        }];

        const najnovijeVestiConfig = [{
            title: 'GPS Satelitsko pracenje vozila',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/gps-pracenje-vozila',
                hash: ''
            }
        }, {
            title: 'Alko test',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/alko-testiranje',
                hash: ''
            }
        }, {
            title: 'Kontrola sluzbenika obezbedjenja',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/kontrola-sluzbenika-obezbedjenja',
                hash: ''
            }
        }, {
            title: 'Usluge fizicke zastite',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/fizicka-zastita',
                hash: ''
            }
        }];

        const najnovijeVesti = najnovijeVestiConfig.map(function (item, index) {
            return (
                <div className="col-12 col-sm-6 col-lg-3 ws-attached-cont" key={index}>
                    <div className="ws-attached ws-on-hover">
                        <div className="ws-body">
                            <div className="ws-icon-cont">
                                <img src={attachIconImg} alt="icon"/>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                        <div className="ws-footer">
                            <Link to={item.nav}>Saznaj vise - </Link>
                        </div>
                    </div>
                </div>
            )
        });
        const najnovijeAkcije = najnovijeAkcijeConfig.map(function (item, index) {
            let star = null;
            switch (item.star) {
                case 'Gold':
                    star = <div className="ws-star" style={{backgroundImage: 'url(' + starGoldImg + ')'}}></div>
                    break;
                case 'Silver':
                    star = <div className="ws-star" style={{backgroundImage: 'url(' + starSilverImg + ')'}}></div>
                    break;
                default:
                    star = <div className="ws-star" style={{backgroundImage: 'url(' + starCoperImg + ')'}}></div>
            }
            return (
                <div className="col-12 col-md-4" key={index}>
                    <div className={[classes.Akcije, 'ws-card  ws-on-hover'].join(' ')}>
                        <div className="ws-card-header"
                             style={{backgroundImage: 'url(' + item.backgroundImg + ')'}}>
                            {star}
                        </div>
                        <div className="ws-body">
                            <h6>{item.title}</h6>
                            <p><span className={[classes.Assertive]}>{item.lead}</span> {item.description}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <Aux>

                <div className={[classes.HeaderVideo]}>

                    <video autoPlay
                           loop
                           muted
                           playsInline>
                        <source src={heroVideoUrl} type="video/mp4"/>
                    </video>
                    <HeaderItem bodyContent={headerCarouselConfig[0].bodyContent}/>
                </div>
                <div className="ws-body">
                    <div className="ws-border-holder">
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-sec-colutions">
                        <div className="ws-triangle-reverse-holder ws-triangle-light"></div>
                        <div className="container">

                            <div className="ws-centered-info-block">
                                <h6>Bezbednosna rešenja</h6>
                                <p>Watchout security svojim bezbednosnim rešenjima u procesu obezbeđenja lica, imovine i
                                    poslovanja sve vrste bezbednosnih rizika svodi na prihvatljiv nivo. Imamo rešenje i
                                    za najspecifičnije zahteve korisnika jer je bezbednosni koncept prilagođen
                                    individualnim potrebama korisnika i štićenog objekta kroz procenu rizika, temeljno
                                    planiranje i implementiranje dogovorenih mera.</p>
                            </div>

                            <div className="row">

                                <div className="ws-centered-infoicon-block col-md-6">
                                    <div className="ws-cont">
                                        <div className="ws-icon-holder">
                                            <img src={fizickaZastita} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h5>Fizička zaštita</h5>
                                            <p className="ws-stronger-color">je usluga obezbeđenja koja se pruža
                                                prvenstveno ličnim prisustvom i neposrednom aktivnošdu službenika
                                                obezbeđenja u određenom prostoru i vremenu, kao i primenom mera i
                                                upotrebom sredstava prinude.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/fizicka-zastita">
                                                <button type="button" className="btn ws-btn ws-btn-dark">Pogledaj pakete
                                                    i cene
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-centered-infoicon-block col-md-6">
                                    <div className="ws-cont">
                                        <div className="ws-icon-holder">
                                            <img src={tehnickaZastita} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h5>Tehnička zaštita</h5>
                                            <p className="ws-stronger-color">je obezbeđenje lica i imovine koje se vrši
                                                tehničkim sredstvima i uređajima, njihovim planiranjem, projektovanjem,
                                                ugradnjom i održavanjem.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/alarm-monitoring">
                                                <button type="button" className="btn ws-btn ws-btn-dark">Pogledaj pakete
                                                    i cene
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-images-info-block ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <div className="row">

                                <div className="ws-card col-12 col-md-6">
                                    <div className="ws-cont" style={{backgroundImage: 'url(' + fizickaLicaImg + ')'}}>
                                        <div>
                                            <h4>Fizička<br/>lica</h4>
                                            <p className="ws-txt-bold ws-no-padding-left">Brinemo o bezbednosti vaše porodice i doma
                                                24/7!</p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/fizicka-lica">
                                                <button type="button" className="btn ws-btn">Saznaj više</button>
                                            </Link>
                                        </div>
                                        <div className="ws-layer">
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-card col-12 col-md-6">
                                    <div className="ws-cont" style={{backgroundImage: 'url(' + pravnaLicaImg + ')'}}>
                                        <div>
                                            <h4>Pravna <br/> lica</h4>
                                            <p className="ws-txt-bold ws-no-padding-left">Pored toga što smanjuju bezbednosne rizike,
                                                bezbednosni sistemi povećavaju stepen kontrole poslovnih procesa.
                                                Implementacijom bezbednosnih sistema poboljšava se celokupno poslovanje
                                                privrednih subjekata. </p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/pravna-lica">
                                                <button type="button" className="btn ws-btn">Saznaj više</button>
                                            </Link>
                                        </div>
                                        <div className="ws-layer">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*<div className="ws-simple-style-cont ws-alt ws-business-slider">*/}
                    {/*    <div className="ws-triangle-reverse-holder ws-triangle-light"></div>*/}
                    {/*    <div className="container">*/}

                    {/*        <SimpleSlider config={resenjaCarouselConfig} slidesToShow='1'/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}


                    <div className="ws-simple-style-cont ws-complex-cards ws-triangle-light">
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>NAJNOVIJE AKCIJE WATCHOUT SECURITY</h6>
                                <p className="ws-top-bottom-padding">U prilici smo da Vam ponudimo najpovoljnija i najefikasnija bezbednosna rešenja
                                    primenom fizičko tehničke zaštite lica, imovine i poslovanja.
                                </p>
                            </div>

                            <div className="row">
                                {najnovijeAkcije}
                            </div>

                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-slider-clients">
                        <div className="container">
                            <div className="ws-clients">
                                <SimpleSlider config={certificatesCarouselConfig} slidesToShow='5' dots='false'
                                              slidesToScroll='5'/>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ">
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>ZAKONSKI OSNOV ZA IMPLEMENTACIJU OBEZBEĐENJA</h6>
                                <p>Danas su aktivnosti u implementaciji fizičko tehničke zaštite jasno definisane kroz
                                    Zakone i propise, zato Vam informišemo o svim promenama zakonske regulative u
                                    oblasti privatnog obezbeđenja.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-triangle-holder">
                        <div className="container">
                            <div className="row">
                                {najnovijeVesti}
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-card-gradient">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-md-6 ws-no-side-padding-left">
                                    <div className="ws-card ws-on-hover">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o privatnom obezbeđenju ...
                                                </div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Ovim zakonom uređuju se obavezno obezbeđenje i zaštita određenih
                                                objekata,poslovi i rad pravnih i fizičkih lica u oblasti privatnog
                                                obezbeđenja, uslovi za njihovo licenciranje, način vršenja poslova i
                                                ostvarivanje nadzora nad njihovim radom.</p>
                                            <div className="ws-footer">
                                                <a href="http://arhiva.mup.gov.rs/cms/resursi.nsf/Zakon-o-privatnom-obezbedjenju-lat.pdf"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ws-no-side-padding-right">
                                    <div className="ws-card ws-on-hover">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Pravilnik o načinu vršenja tehničke zašt
                                                    …
                                                </div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Na osnovu člana 33. stav 2. Zakona o privatnom obezbeđenju („Službeni
                                                glasnik RS”, br. 104/13 i 42/15), Ministar unutrašnjih poslova donosi
                                                PRAVILNIK o izmenama i dopunama Pravilnika o načinu vršenja poslova
                                                tehničke zaštite i korišćenja tehničkih sredstava...
                                            </p>
                                            <div className="ws-footer">
                                                <a href="http://www.mup.gov.rs/wps/wcm/connect/5f426587-88a3-4cc6-b2c1-a8a404c1784a/Pravilnik+-+poslovi+tehn.zastite_LAT.pdf?MOD=AJPERES&CVID=m6PHkZr&CVID=m6PHkZr&CVID=m6PHkZr&CVID=m6PHkZr"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 ws-no-side-padding-left">
                                    <div className="ws-card ws-on-hover">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Standard SRPS A.L2.003 Procena rizika
                                                    ...
                                                </div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Korišćenjem ovog standarda se obezbeđuje izvršenje sveobuhvatne procene
                                                rizika za organe javne vlasti, organizacije koje pružaju ili koriste
                                                usluge obezbeđivanja lica, imovine i kontinuiteta poslovanja...</p>
                                            <div className="ws-footer">
                                                <Link to="/procena-rizika">
                                                    Saznaj vise -
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ws-no-side-padding-right">
                                    <div className="ws-card ws-on-hover">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o zaštiti od požara ...</div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Ovim zakonom uređuju se sistemi zaštite od požara, prava i obaveze
                                                državnih organa, organa autonomne pokrajine i organa jedinica lokalne
                                                samouprave, privrednih društava, drugih pravnih i fizičkih lica,
                                                organizacija vatrogasne službe, nadzor nad sprovođenjem ovog zakona i
                                                druga pitanja od značaja za sistem zaštite od požara.
                                            </p>
                                            <div className="ws-footer">
                                                <a href="https://www.paragraf.rs/propisi/zakon_o_zastiti_od_pozara.html"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-slider-clients">
                        <div className="container">
                            <div className="ws-slider-title">
                                <h5>Zadovoljni korisnici usluga</h5>
                            </div>
                            <div className="ws-clients">
                                <SimpleSlider config={clientsCarouselConfig} slidesToShow='3' dots='false'
                                              slidesToScroll='2'/>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        )
    }
}

export default Home;
