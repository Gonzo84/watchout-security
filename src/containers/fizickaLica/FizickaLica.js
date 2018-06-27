import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/header/Header';
import LicaItem from '../../components/licaItem/LicaItem';


import fizickaLicaHeaderImg from '../../assets/images/fizickaLica/fizicka_lica.jpg';
import stanoviImg from '../../assets/images/fizickaLica/stanovi.jpg';
import kuceIVikendiceImg from '../../assets/images/fizickaLica/kuce_i_vikendice.jpg';
import zgradeImg from '../../assets/images/fizickaLica/stambene_zgrade.jpg';


class FizickaLica extends Component {
    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: fizickaLicaHeaderImg,
            title: 'FIZICKA LICA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu justo malesuada, vestibulum nibh sed, congue neque. Fusce id erat felis. Aenean vel tortor libero. Quisque vitae purus eget magna porta vehicula.'
        };

        const contentConfig = [{
            left: true,
            imageUrl: stanoviImg,
            title: 'Stanovi',
            id: 'stanovi',
            description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            content: ` when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.`
        }, {
            left: false,
            imageUrl: kuceIVikendiceImg,
            title: 'Kuce i vikendice',
            id: 'kuce',
            description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            content: ` when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.`
        }, {
            left: true,
            imageUrl: zgradeImg,
            title: 'Stambene zgrade',
            id: 'zgrade',
            description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            content: ` when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.`
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