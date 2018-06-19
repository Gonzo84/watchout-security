import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import classes from './Home.scss';
import SimpleSlider from "../../components/carousel/Carousel";
import Aux from '../../hoc/Auxiliary/Auxiliary';

import icon1Img from '../../assets/images/icon1.jpg';
import icon2Img from '../../assets/images/icon2.jpg';

import pravnaLicaImg from '../../assets/images/pravna-lica.jpg';
import fizickaLicaImg from '../../assets/images/fizicka-lica.jpg';


import starGoldImg from '../../assets/images/star-gold.png';
import starSilverImg from '../../assets/images/star-silver.png';
import starCoperImg from '../../assets/images/star-copper.png';

import card1Img from '../../assets/images/card1.jpg';
import card2Img from '../../assets/images/card2.jpg';
import card3Img from '../../assets/images/card3.jpg';
import card4Img from '../../assets/images/card4.jpg';
import card5Img from '../../assets/images/card5.jpg';
import card6Img from '../../assets/images/card6.jpg';

import badgeSsmImg from '../../assets/images/badge-ssm.png';
import badgeCreImg from '../../assets/images/badge-cre.png';
import badgeCsmImg from '../../assets/images/badge-csm.png';
import badgeQsqImg from '../../assets/images/badge-qsg.png';
import badgeCspImg from '../../assets/images/badge-csp.png';
import badgeCsp2Img from '../../assets/images/badge-csp2.png';
import badgeCmsImg from '../../assets/images/badge-cms.png';

import attachIconImg from '../../assets/images/attachicon.jpg';
import sl1Img from '../../assets/images/sl1.png';
import sl2Img from '../../assets/images/sl2.png';
import sl3Img from '../../assets/images/sl3.png';
import sl4Img from '../../assets/images/sl4.png';
import sl5Img from '../../assets/images/sl5.png';

import headerCarousel1 from '../../assets/images/daljinski-nadzor.jpg';

class Home extends Component {
    render() {
        const headerCarouselConfig = [{
            backgroundImg: headerCarousel1,
            bodyContent: 'test1',
            type: 'header'
        }, {
            backgroundImg: headerCarousel1,
            bodyContent: 'test2',
            type: 'header'
        }, {
            backgroundImg: headerCarousel1,
            bodyContent: 'test3',
            type: 'header'
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
            backgroundImg: sl3Img,
            bodyContent: null
        }];
        return (
            <Aux>
                <div className={[classes.wsHeader, classes.wsGradient].join(' ')}>
                    <div className="container">
                        <div className={classes.wsSliderCont}>
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
                                <h6>BEZBEDNOSNA RESENJA</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </div>

                            <div className="row">

                                <div className="ws-centered-infoicon-block col-md-6">
                                    <div className="ws-cont">
                                        <div className="ws-icon-holder">
                                            <img src={icon2Img} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h5>Tehnicka zastita</h5>
                                            <p className="ws-stronger-color">Lorem Ipsum is simply dummy text of the
                                                printing.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <button type="button" className="btn ws-btn ws-btn-dark">Pogledaj pakete
                                                i cene
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-centered-infoicon-block col-md-6">
                                    <div className="ws-cont">
                                        <div className="ws-icon-holder">
                                            <img src={icon1Img} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h5>Tehnicka zastita</h5>
                                            <p className="ws-stronger-color">Lorem Ipsum is simply dummy text of the
                                                printing.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <button type="button" className="btn ws-btn ws-btn-dark">Pogledaj pakete
                                                i cene
                                            </button>
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
                                            <h2>FIZICKA <br/> LICA</h2>
                                            <p>It is a long established fact that a reader will be distracted by
                                                the readable content of a page when looking at its layout. </p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/fizicka-lica">
                                                <button type="button" className="btn ws-btn">Saznaj vise</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-card col-12 col-md-6">
                                    <div className="ws-cont" style={{backgroundImage: 'url(' + pravnaLicaImg + ')'}}>
                                        <div>
                                            <h2>PRAVNA <br/> LICA</h2>
                                            <p>It is a long established fact that a reader will be distracted by
                                                the readable content of a page when looking at its layout. </p>
                                        </div>
                                        <div className="ws-footer">
                                            <Link to="/pravna-lica">
                                                <button type="button" className="btn ws-btn">Saznaj vise</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-business-slider">
                        <div className="ws-triangle-reverse-holder ws-triangle-light"></div>
                        <div className="container">

                            <div className="ws-title">
                                <h5 className="ws-stronger-color">Resenja za Fizicka Lica</h5>
                            </div>
                            <div className="ws-body">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <div className="ws-icon-holder">
                                            <img src={icon1Img} alt="icon"/>
                                        </div>
                                        <p>Small Business</p>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="ws-icon-holder">
                                            <img src={icon1Img} alt="icon"/>
                                        </div>
                                        <p>Medium Business</p>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="ws-icon-holder">
                                            <img src={icon1Img} alt="icon"/>
                                        </div>
                                        <p>Large Business</p>
                                    </div>
                                </div>
                            </div>
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
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card1Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starGoldImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Alarm monitoring Akcija</h6>
                                            <p>U vase objekte WATCHOUT SECURITY ugradjuje PROTIVPROVALNI sistem za
                                                zastitu sa
                                                izuzetnim...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card2Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starGoldImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija alarmnih sistema</h6>
                                            <p>U vase objekte WATCHOUT SECURITY ugradjuje PROTIVPROVALNI sistem za
                                                zastitu sa
                                                izuzetnim...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card3Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starGoldImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija sistema video nadzora</h6>
                                            <p>U celokupnoj zastiti stambenih a narocito poslovnih prostora, sistem
                                                video nadzora
                                                ima vaznu funkciju stetnih...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card4Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starSilverImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Kontrola pristupa i radnog vremena</h6>
                                            <p>Sistem za video nadzor vozila je prilagodjen za komercijalnu
                                                upotrebu, ali i za
                                                potrebe privatnih lica...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card5Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starSilverImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Video nadzor vozila sa monitoringom</h6>
                                            <p>Sistem za video nadzor vozila je prilagodjen za komercijalnu
                                                upotrebu, ali i za
                                                potrebe privatnih lica...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="ws-card">
                                        <div className="ws-card-header"
                                             style={{backgroundImage: 'url(' + card6Img + ')'}}>
                                            <div className="ws-star"
                                                 style={{backgroundImage: 'url(' + starCoperImg + ')'}}></div>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Procena bezbednosti objekata</h6>
                                            <p>Sistem za video nadzor vozila je prilagodjen za komercijalnu
                                                upotrebu, ali i za
                                                potrebe privatnih lica...</p>
                                            <div className="ws-footer">
                                                0.1.09.2017 - <span>01.12.2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-quality-badge">
                        <div className="container">
                            <div className="ws-img-cont">
                                <img src={badgeSsmImg} alt="badge"/>
                                <img src={badgeCreImg} alt="badge"/>
                                <img src={badgeCsmImg} alt="badge"/>
                                <img src={badgeQsqImg} alt="badge"/>
                                <img src={badgeCspImg} alt="badge"/>
                                <img src={badgeCsp2Img} alt="badge"/>
                                <img src={badgeCmsImg} alt="badge"/>
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

                                <div className="col-12 col-sm-6 col-lg-3 ws-attached-cont">
                                    <div className="ws-attached">
                                        <div className="ws-icon-cont">
                                            <img src={attachIconImg} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija alarmnih sistema</h6>
                                            <p>Poboljšanje kvaliteta življenja je polazna ideja integracije i
                                                automatizacije
                                                svih kućnih sistema kojima se želi jednostavno upravljati, a
                                                da pri tome tehnološka rešenja budu nevidljiva i uklopljena u
                                                svakodnevni život.</p>
                                            <p>Ugradnja sistema tehničke zaštite u domu da bi se ostvario osećaj
                                                lične bezbednosti i
                                                bezbednosti porodice često je prvo o čemu razmišljamo.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <a href="#">Saznaj vise - </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 ws-attached-cont">
                                    <div className="ws-attached">
                                        <div className="ws-icon-cont">
                                            <img src={attachIconImg} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija alarmnih sistema</h6>
                                            <p>Poboljšanje kvaliteta življenja je polazna ideja integracije i
                                                automatizacije
                                                svih kućnih sistema kojima se želi jednostavno upravljati, a
                                                da pri tome tehnološka rešenja budu nevidljiva i uklopljena u
                                                svakodnevni život.</p>
                                            <p>Ugradnja sistema tehničke zaštite u domu da bi se ostvario osećaj
                                                lične bezbednosti i
                                                bezbednosti porodice često je prvo o čemu razmišljamo.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <a href="#">Saznaj vise - </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 ws-attached-cont">
                                    <div className="ws-attached">
                                        <div className="ws-icon-cont">
                                            <img src={attachIconImg} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija alarmnih sistema</h6>
                                            <p>Poboljšanje kvaliteta življenja je polazna ideja integracije i
                                                automatizacije
                                                svih kućnih sistema kojima se želi jednostavno upravljati, a
                                                da pri tome tehnološka rešenja budu nevidljiva i uklopljena u
                                                svakodnevni život.</p>
                                            <p>Ugradnja sistema tehničke zaštite u domu da bi se ostvario osećaj
                                                lične bezbednosti i
                                                bezbednosti porodice često je prvo o čemu razmišljamo.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <a href="#">Saznaj vise - </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 ws-attached-cont">
                                    <div className="ws-attached">
                                        <div className="ws-icon-cont">
                                            <img src={attachIconImg} alt="icon"/>
                                        </div>
                                        <div className="ws-body">
                                            <h6>Instalacija alarmnih sistema</h6>
                                            <p>Poboljšanje kvaliteta življenja je polazna ideja integracije i
                                                automatizacije
                                                svih kućnih sistema kojima se želi jednostavno upravljati, a
                                                da pri tome tehnološka rešenja budu nevidljiva i uklopljena u
                                                svakodnevni život.</p>
                                            <p>Ugradnja sistema tehničke zaštite u domu da bi se ostvario osećaj
                                                lične bezbednosti i
                                                bezbednosti porodice često je prvo o čemu razmišljamo.</p>
                                        </div>
                                        <div className="ws-footer">
                                            <a href="#">Saznaj vise - </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-card-gradient">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
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
                                                <a href="#">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
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
                                                <a href="#">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
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
                                                <a href="#">Saznaj vise -</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
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
                                                <a href="#">Saznaj vise -</a>
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
                                <SimpleSlider config={clientsCarouselConfig} slidesToShow='5'/>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        )
    }
}

export default Home;