import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';
import LicaItem from '../../../components/licaItem/LicaItem';


import fizickaLicaHeaderImg from '../../../assets/images/fizickaLica/fizicka_lica.jpg';
import stanoviImg from '../../../assets/images/fizickaLica/stanovi.jpg';
import kuceIVikendiceImg from '../../../assets/images/fizickaLica/kuce_i_vikendice.jpg';
import zgradeImg from '../../../assets/images/fizickaLica/stambene_zgrade.jpg';


class FizickaLica extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: fizickaLicaHeaderImg,
            title: 'Fizička lica',
            description: 'Brinemo o bezbednosti vaše porodice i doma 24/7!'
        };

        const contentConfig = [{
            left: true,
            imageUrl: stanoviImg,
            title: 'Stanovi',
            id: 'stanovi',
            description: '',
            content: `Osećaj bezbednosti u sopstvenom domu esencijalna je komponenta bezbrižnog i srećnog života. Ne dozvolite da nemili događaji poput provala, krađa, požara narušavaju harmoniju svakodnevnog života. Kontaktirajte nas za više informacija već danas!`
        }, {
            left: false,
            imageUrl: kuceIVikendiceImg,
            title: 'Kuće i vikendice',
            id: 'kuce',
            description: '',
            content: `Kako biste u potpunosti uživali u “toplini doma”, razmišljajte preventivno. Od vaše odluke zavisi bezbednost porodične kuće ili vikendice. Kontaktirajte nas za više informacija već danas!`
        }, {
            left: true,
            imageUrl: zgradeImg,
            title: 'Stambene zgrade',
            id: 'zgrade',
            description: '',
            content: `Delujte preventivno. Sprečite potencijalne nemile događaje i kontaktirajte nas već danas da saznate više o obezbeđenju vaše stambene zgrade.`
        }];
        return (
            <Aux>

                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>
                    <div className="ws-simple-style-cont ws-overflow-img-container ws-triangle-holder">
                        <div className="container">
                            <LicaItem {...contentConfig[0]}/>
                        </div>
                    </div>
                    <div className="ws-simple-style-cont ws-alt ws-overflow-img-container">
                        <div className="container">
                            <LicaItem {...contentConfig[1]}/>
                        </div>
                    </div>
                    <div
                        className="ws-simple-style-cont  ws-overflow-img-container ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <LicaItem {...contentConfig[2]}/>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="ws-centered-info-block">
                                <h6>PAKETI I USLUGE</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-triangle-holder">
                        <div className="container">
                            <div className="row ws-packages">

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        Small Business
                                    </div>
                                    <div className="ws-package-body">
                                        <p>Professional monitored security for your home.</p>
                                        <ul>
                                            <li>Alarm monitoring</li>
                                            <li>Instalacija alarmnih sistema</li>
                                            <li>Instalacija sistema za video nadzor</li>
                                            <li>Procena bezbednosti objekta</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <button type="button" className="btn ws-btn">Request a Quote</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        Mediimu Business
                                    </div>
                                    <div className="ws-package-body">
                                        <p>Be in control of your home whether you're there or not.</p>
                                        <ul>
                                            <li>Alarm monitoring</li>
                                            <li>Instalacija alarmnih sistema</li>
                                            <li>Instalacija sistema za video nadzor</li>
                                            <li>Procena bezbednosti objekta</li>
                                            <li>GPS satelitsko pracenje vozila</li>
                                            <li>Video nadzor sa monitoringom</li>
                                            <li>Mobilne patrole</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <button type="button" className="btn ws-btn">Request a Quote</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ws-package col-12 col-md-4">
                                    <div className="ws-package-header">
                                        Large Business
                                    </div>
                                    <div className="ws-package-body">
                                        <p>Know what's going on in your home from anywhre.</p>
                                        <ul>
                                            <li>Alarm monitoring</li>
                                            <li>Instalacija alarmnih sistema</li>
                                            <li>Instalacija sistema za video nadzor</li>
                                            <li>Procena bezbednosti objekta</li>
                                            <li>GPS satelitsko pracenje vozila</li>
                                            <li>Video nadzor sa monitoringom</li>
                                            <li>Mobilne patrole</li>
                                            <li>Kontrola portirske sluzbe</li>
                                            <li>Kontrola pristupa radnog vremena</li>
                                        </ul>
                                        <div className="ws-package-footer">
                                            <button type="button" className="btn ws-btn">Request a Quote</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default FizickaLica;