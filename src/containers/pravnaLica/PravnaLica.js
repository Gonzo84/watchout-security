import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';

import pravnaLicaHeaderImg from '../../assets/images/pravnaLica/pravna_lica.jpg'


class PravnaLica extends Component {

    render() {
        return (
            <Aux>

                <div className="ws-header ws-gradient">
                    <div className="container">
                        <div className="ws-slider-cont">
                            <img src={pravnaLicaHeaderImg} alt="alt"/>
                        </div>
                    </div>
                </div>
                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

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

export default PravnaLica;