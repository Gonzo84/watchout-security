import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';

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

import headerCarousel1 from '../../assets/images/home/header_1_light.jpg';


import fizickaZastita from '../../assets/images/home/home-fizicka-zastita-ikonica.png';
import tehnickaZastita from '../../assets/images/home/home-tehnicka-zastita-ikonica.png';


import akcija1 from '../../assets/images/home/WS-Paket-4.jpg';
import akcija2 from '../../assets/images/home/WS-Paket-8.jpg';
import akcija3 from '../../assets/images/home/WS-Paket-16.jpg';


import pravnaLicaImg from '../../assets/images/pravnaLica/pravna_lica.jpg';
import fizickaLicaImg from '../../assets/images/fizickaLica/fizicka_lica.jpg';


import starGoldImg from '../../assets/images/home/star-gold.png';
import starSilverImg from '../../assets/images/home/star-silver.png';
import starCoperImg from '../../assets/images/home/star-copper.png';

import badge1 from '../../assets/images/home/IQNet.png';
import badge2 from '../../assets/images/home/ISO-9001.png';
import badge3 from '../../assets/images/home/Licenca-1-20433.png';
import badge4 from '../../assets/images/home/Licenca-2-20181.png';
import badge5 from '../../assets/images/home/Licenca-3-20182.png';
import badge6 from '../../assets/images/home/Licenca-4-20183.png';
import badge7 from '../../assets/images/home/Licenca-5-30161.png';
import badge8 from '../../assets/images/home/Sertifikat-1-SRPS-OHSAS.png';
import badge9 from '../../assets/images/home/Sertifikat-2-SRPS-ISO.png';
import badge10 from '../../assets/images/home/Sertifikat-3-SRPS-ISO.png';
import badge11 from '../../assets/images/home/Sertifikat-4-SRPS-ISO.png';
import badge12 from '../../assets/images/home/Sertifikat-5-SRPS-ISO.png';
import badge13 from '../../assets/images/home/Sertifikat-6-SRPS-ISO.png';
import badge14 from '../../assets/images/home/Sertifikat-7-SRPS-ISO.png';
import badge15 from '../../assets/images/home/Sertifikat-8-SRPS-ISO.png';

import attachIconImg from '../../assets/images/home/home-document-ikonica.png';


class Home extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerCarouselConfig = [{
            backgroundImg: headerCarousel1,
            bodyContent: {
                title: '24/7 u službi vaše bezbednosti!',
                content: '',
                widgets: [{
                    number: '4,3min',
                    label: 'vreme reagovanja inteventne patrole'
                }, {
                    number: '3458',
                    label: 'instaliranih sistema tehnicke zastite'
                }, {
                    number: '8765',
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
            backgroundImg: akcija1,
            title: 'Alarm monitoring Akcija',
            star: 'Gold',
            description: 'U vase objekte WATCHOUT SECURITY ugradjuje PROTIVPROVALNI sistem za zastitu sa izuzetnim...',
            duration: {
                from: '01.09.2017',
                to: '31.12.2017'
            }
        }, {
            backgroundImg: akcija2,
            title: 'Instalacija alarmnih sistema',
            star: 'Gold',
            description: 'U vase objekte WATCHOUT SECURITY ugradjuje PROTIVPROVALNI sistem za zastitu sa izuzetnim...',
            duration: {
                from: '01.09.2017',
                to: '31.12.2017'
            }
        }, {
            backgroundImg: akcija3,
            title: 'Instalacija sistema video nadzora',
            star: 'Bronze',
            description: 'U vase objekte WATCHOUT SECURITY ugradjuje PROTIVPROVALNI sistem za zastitu sa izuzetnim...',
            duration: {
                from: '01.09.2017',
                to: '31.12.2017'
            }
        }];

        const najnovijeVestiConfig = [{
            title: 'GPS Satelitsko pracenje vozila',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/gps-pracenje',
                hash: ''
            }
        }, {
            title: 'Alko test',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/alko-test',
                hash: ''
            }
        }, {
            title: 'Kontrola sluzbenika obezbedjenja',
            description: 'Poboljšanje kvaliteta življenja je polazna ideja integracije i automatizacije svih kućnih sistema kojima se želi jednostavno upravljati, a da pri tome tehnološka rešenja budu nevidljiva i uklopljena u svakodnevni život.',
            nav: {
                pathname: '/kontrola-sluzbenika',
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
                    <div className="ws-attached">
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
                    <div className="ws-card">
                        <div className="ws-card-header"
                             style={{backgroundImage: 'url(' + item.backgroundImg + ')'}}>
                            {star}
                        </div>
                        <div className="ws-body">
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                            <div className="ws-footer">
                                {item.duration.from} - <span>{item.duration.to}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <Aux>

                <div className="ws-header ws-gradient">
                    <div className="container">
                        <div className="ws-slider-cont">
                            <SimpleSlider config={headerCarouselConfig} slidesToShow='1' type='header'/>
                        </div>
                    </div>
                </div>
                <div className="ws-body">
                    <div className="ws-border-holder">
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-sec-colutions">
                        <div className="ws-triangle-reverse-holder ws-triangle-light"></div>
                        <div className="container">

                            <div className="ws-centered-info-block">
                                <h6>Bezbednosna rešenja</h6>
                                <p>
                                    Bezbednosni koncept prilagođen individualnim potrebama korisnika i štićenog objekta
                                    uspešno realizujemo na osnovu procene rizika, temeljnog planiranja i implementiranja
                                    dogovorenih mera.
                                </p>
                            </div>

                            <div className="row">

                                <div className="ws-centered-infoicon-block col-md-6">
                                    <div className="ws-cont">
                                        <div className="ws-icon-holder">
                                            <img src={fizickaZastita} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h5>Fizička zaštita</h5>
                                            <p className="ws-stronger-color">Fizičkim obezbeđenjem doprinosi se zaštiti
                                                ljudi i imovine od oštećenja, uništenja, krađe i drugih oblika štetnog
                                                delovanja.</p>
                                            <br></br>
                                            <p>Usluga fizičke zaštite je usluga obezbeđenja koja se pruža ličnim
                                                prisustvom i neposrednom aktivnošću službenika obezbeđenja u određenom
                                                prostoru i vremenu, kao i primenom mera i upotrebom sredstava
                                                prinude.</p>
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
                                            {/*<p className="ws-stronger-color">Lorem Ipsum is simply dummy text of the*/}
                                            {/*printing.</p>*/}
                                            <p>Savremene tehnologije u službi vaše bezbednosti! Sofisticiranost metoda
                                                rada, veštine Watchout Security kadrova i visoki standardi kvaliteta
                                                omogućavaju nam da efikasno štitimo vaše najvrednije resurse.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/daljinski-nadzor">
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
                    <div className="ws-simple-style-cont ws-images-info-block">
                        <div className="container">
                            <div className="row">

                                <div className="ws-card col-12 col-md-6">
                                    <div className="ws-cont" style={{backgroundImage: 'url(' + fizickaLicaImg + ')'}}>
                                        <div>
                                            <h2>Fizička<br/>lica</h2>
                                            <p className="ws-txt-bold">Brinemo o bezbednosti vaše porodice i doma
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
                                            <h2>PRAVNA <br/> LICA</h2>
                                            <p className="ws-txt-bold">It is a long established fact that a reader will
                                                be distracted by
                                                the readable content of a page when looking at its layout. </p>
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
                    <div className="ws-simple-style-cont ws-alt ws-business-slider">
                        <div className="ws-triangle-reverse-holder ws-triangle-light"></div>
                        <div className="container">

                            <SimpleSlider config={resenjaCarouselConfig} slidesToShow='1'/>
                        </div>

                    </div>


                    <div className="ws-simple-style-cont ws-complex-cards">
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>NAJNOVIJE AKCIJE WATCHOUT SECURITY</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </div>

                            <div className="row">
                                {najnovijeAkcije}
                            </div>

                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-quality-badge">
                        <div className="container">
                            <div className="ws-img-cont">
                                <img src={badge1} alt="badge"/>
                                <img src={badge2} alt="badge"/>
                                <img src={badge3} alt="badge"/>
                                <img src={badge4} alt="badge"/>
                                <img src={badge5} alt="badge"/>
                                <img src={badge6} alt="badge"/>
                                <img src={badge7} alt="badge"/>
                            </div>
                            <div className="ws-img-cont">
                                <img src={badge8} alt="badge"/>
                                <img src={badge9} alt="badge"/>
                                <img src={badge10} alt="badge"/>
                                <img src={badge11} alt="badge"/>
                                <img src={badge12} alt="badge"/>
                                <img src={badge13} alt="badge"/>
                                <img src={badge14} alt="badge"/>
                                <img src={badge15} alt="badge"/>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>NAJNOVIJE VESTI / ZAKONI WATCHOUT SECURITY</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
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
                                    <div className="ws-card">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o polaniranju sistema tehnicke
                                                    zastite
                                                </div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Poboljsanje kvaliteta zivljenja je polazna ideja integracije i
                                                automatizacije svih
                                                kucnih
                                                sistema kojima se zeli jednostavno upravljati, a da pri tome
                                                tehnoloska resenja vudu
                                                nevidljiva
                                                i uklopljena u svakodnevni zivot.</p>
                                            <div className="ws-footer">
                                                <a href="http://www.pks.rs/SADRZAJ/Files/Zakon%20o%20privatnom%20obezbedjenju(3).pdf"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ws-no-side-padding-right">
                                    <div className="ws-card">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o proceni rizika</div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Poboljsanje kvaliteta zivljenja je polazna ideja integracije i
                                                automatizacije svih
                                                kucnih
                                                sistema kojima se zeli jednostavno upravljati, a da pri tome
                                                tehnoloska resenja vudu
                                                nevidljiva
                                                i uklopljena u svakodnevni zivot.</p>
                                            <div className="ws-footer">
                                                <a href="http://www.pks.rs/SADRZAJ/Files/Zakon%20o%20privatnom%20obezbedjenju(3).pdf"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 ws-no-side-padding-left">
                                    <div className="ws-card">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o vrsenju poslova montaze
                                                </div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Poboljsanje kvaliteta zivljenja je polazna ideja integracije i
                                                automatizacije svih
                                                kucnih
                                                sistema kojima se zeli jednostavno upravljati, a da pri tome
                                                tehnoloska resenja vudu
                                                nevidljiva
                                                i uklopljena u svakodnevni zivot.</p>
                                            <div className="ws-footer">
                                                <a href="http://www.pks.rs/SADRZAJ/Files/Zakon%20o%20privatnom%20obezbedjenju(3).pdf"
                                                   target="_blank">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ws-no-side-padding-right">
                                    <div className="ws-card">
                                        <div className="ws-card-header">
                                            <div className="ws-title">
                                                <div className="ws-notch"></div>
                                                <div className="ws-text-holder">Zakon o kontroli pristupa</div>
                                                <div className="ws-triangle"></div>
                                            </div>
                                        </div>
                                        <div className="ws-body">
                                            <p>Poboljsanje kvaliteta zivljenja je polazna ideja integracije i
                                                automatizacije svih
                                                kucnih
                                                sistema kojima se zeli jednostavno upravljati, a da pri tome
                                                tehnoloska resenja vudu
                                                nevidljiva
                                                i uklopljena u svakodnevni zivot.</p>
                                            <div className="ws-footer">
                                                <a href="http://www.pks.rs/SADRZAJ/Files/Zakon%20o%20privatnom%20obezbedjenju(3).pdf"
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
                                <h5>Zadovoljni korisnici</h5>
                            </div>
                            <div className="ws-clients">
                                <SimpleSlider config={clientsCarouselConfig} slidesToShow='5' dots='false'/>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        )
    }
}

export default Home;