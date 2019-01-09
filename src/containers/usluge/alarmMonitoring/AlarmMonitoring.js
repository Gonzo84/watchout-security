import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import aktImg from '../../../assets/images/usluge/alarmMonitoring.jpg'


class AlarmMonitoring extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: aktImg,
            title: 'Alarm monitoring',
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
                                <p>Vaši najvredniji resursi zahtevaju apsolutnu posvećenost u kontekstu bezbednosti i
                                    kontinuitet u pogledu aktivnosti koje se sa ciljem rasta stepena bezbednosti
                                    preduzimaju. <br></br> Da bi alarmni sistemi smanjili rizik od izvršenja krivičnog
                                    dela,
                                    Watchout Security pruža uslugu alarm monitoringa.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p className="ws-stronger-color">Alarm monitoring
                            </p>
                            <p> je usluga daljinskog nadzora alarmnog sistema iz Kontrolnog centra Watchout Security-a
                                koja korisniku pruža viši stepen tehničke zaštite kroz signaliziranje neovlašćenog
                                pristupa štićenom prostoru.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p className="ws-stronger-color">Alarmni sistemi
                            </p>
                            <p> projektovani su za detekciju neautorizovanog ulaska u objekat ili oblast. Sastoje se od
                                različitih tipova senzora, alarmne centrale, sirene i uređaja za dojavu. Najčešće se
                                instaliraju senzori koji detektuju pokret, zvuk (lom stakla), vibracije ili mikrotalase,
                                kao i panik tasteri.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p className="ws-stronger-color">Alarm monitoring
                            </p>
                            <p>podrazumeva praćenje aktivacije alarma na štićenom objektu, proveru događaja i dalje
                                reagovanje na osnovu dobijenih informacija u skladu sa procedurama. Dežurni službenici
                                obezbeđenja su dužni da utvrde uzrok alarmne dojave i da obaveste korisnika usluge.
                                Ukoliko se utvdri da postoje elementi koji ukazuju na vršenje krivičnog dela, dežurna
                                lica, po Zakonu, su dužna da obaveste nadležnu policijsku stanicu. U zavisnosti od
                                specifičnosti događaja koji je doveo do aktiviranja alarmnog sistema, dežurna lica
                                Kontrolnog centra upućuju poziv vatrogasnoj i/ili službi hitne medicinske pomoći.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p className="ws-stronger-color">Usluga alarm monitoringa
                            </p>
                            <p> mogu služiti kao protivprovalni i protivprepadni. Osnovna funkcija usluge alarm
                                monitoringa je što ranija detekcija opasnosti i upozoravanje dežurnog lica na nju čime
                                se u najvećoj meri smanjuju negativne posledice po bezbednost ljudi, imovine i
                                poslovanja.
                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont">
                        <div className="container">
                            <p>Na kvalitet usluge alarm monitoringa u značajnoj meri utiče Kontrolni centar - njegova
                                opremljenost, resursi i menadžment. Kontrolni centar je najvažniji sektor u kontekstu
                                daljinskog obezbeđenja objekata i predstavlja centralizovanu bazu za prijem informacija
                                sa instaliranih sistema tehničke zaštite. Kontrolni centar je “mozak operacije” u
                                bezbednosnim postupcima i iz tog razloga Watchout Security dosta pažnje posvećuje
                                odabiru i razvoju ljudskih resursa na poslovima monitoringa, kao i opremanju i
                                održavanju tehnoloških sistema koje u radu koristimo. Menadžment Watchout Security
                                Kontrolnim centom vrše rukovodioci sa dugogodišnjim iskustvom u oblasti
                                fizičko-tehničkog obezbeđenja. S obzirom da Kontrolni centar radi neprekidno, 24/7/365,
                                opremljenost najmodernijim IT rešenjima u skladu sa tehničko-tehnološkim progresom je
                                još jedan zahtev na koji je Watchout Security odgovorio u skladu sa dobrom poslovnom
                                praksom.
                            </p>
                            <ul>
                                <li>Dežurstvo operatera kontrolnog centra 24 časa;</li>
                                <li>Patrolni tim za intervenciju od najmanje 2 službenika privatnog obezbeđenja;</li>
                                <li>Pisane procedure za obavljanje poslova;</li>
                                <li>Utvrđivanje razloga alarmnog stanja;</li>
                                <li>Obaveštavanje policije ili drugih javnih službi ukoliko postoji potreba za njihovim angažovanjem;</li>
                                <li>Zaštita podataka.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default AlarmMonitoring;