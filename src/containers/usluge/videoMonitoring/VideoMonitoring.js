import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import aktImg from '../../../assets/images/usluge/videoMonitoring.jpg'


class VideoMonitoring extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: aktImg,
            title: 'Video monitoring',
            description: ''
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p>Efikasnija usluga obezbeđenja lica, imovine i poslovanja u odnosu na alarm
                                    monitoring, predstavlja <span
                                        className="ws-stronger-color">usluga video monitoringa</span>. Prilikom
                                    aktiviranja alarmnog
                                    sistema, službenik obezbeđenja nema vizuelni prikaz događaja na terenu i iz tog
                                    razloga <span className="ws-stronger-color">usluga video monitoringa</span> dodatno
                                    doprinosi bezbednosti štićenog prostora.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p><span className="ws-stronger-color">Video monitoring</span> je usluga obezbeđenja koja
                                podrazumeva potpunu vizuelnu kontrolu nad
                                objektom i kada dođe do incidenta mogu se preduzeti odgovarajuće mere da bi se
                                minimizirala šteta.
                            </p>
                            <p>Osnovni preduslov za pružanje usluge <span
                                className="ws-stronger-color">video monitoring</span> je instaliran efikasan sistem
                                video obezbeđenja povezan na internet.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p><span
                                className="ws-stronger-color">Sistem video obezbeđenja</span> u svom osnovnom izvođenju
                                treba da sadrži kamere, međusobno
                                spregnute odgovarajućim prenosnim putem preko uređaja za snimanje i reprodukciju slike
                                (video rekorder). Kamere se postavljaju na mestima koja treba osmatrati, u spoljnim i
                                unutrašnjim prostorima, a kučišta su im prilagođena uslovima primene, kako klimatskim,
                                tako i ambijentalnim. Mogu biti fiksne i pokretne, sa mogućnošću daljinskog upravljanja
                                optikom i motorikom - pokretanje po horizontali i vertikali.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p><span
                                className="ws-stronger-color">Usluga video monitoringa</span> pruža i dimenziju fizičke
                                zaštite, kroz aktivnosti dežurnih
                                službenika obezbeđenja, čime se takav vid obezbeđenja tretira kao najefikasniji.
                            </p>
                            <p>Putem softvera obeležavaju se zone u kojima je pristup zabranjen. U slučaju da
                                neovlašćena osoba pristupi štićenoj zoni iz Kontrolnog centra upućuje se upozorenje
                                putem zvučnika, pri čemu je omogućena dvosmerna komunikacija. Sistem prepoznaje lica i
                                registarske tablice vozila i sadrži bazu potencijalnih počinioca prekršajnih dela.
                            </p>
                            <p>Prema Vašim zahtevima određuje se vreme pružanja usluge, odnosno vremenski periodi tokom
                                kojih se kamere nadgledaju.
                            </p>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default VideoMonitoring;