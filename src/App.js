import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import Layout from './hoc/Layout/Layout';
import Home from "./containers/home/Home";
import ONama from "./containers/oNama/ONama";
import CustomPaketi from './containers/customPaketi/CustomPaketi'
import FizickaLica from "./containers/bezbednosnaResenja/fizickaLica/FizickaLica";
import PravnaLica from "./containers/bezbednosnaResenja/pravnaLica/PravnaLica";
import AlarmniSistemiZaVozila from "./containers/sistemiTehnickeZastite/alarmniSistemiZaVozila/AlarmniSistemiZaVozila";
import ParkingRampe from "./containers/sistemiTehnickeZastite/parkingRampe/ParkingRampe";
import SistemiVideoObezbedjenja
    from "./containers/sistemiTehnickeZastite/sistemiVideoObezbedjenja/SistemiVideoObezbedjenja";
import SistemiZaEvidencijuRadnogVremena
    from "./containers/sistemiTehnickeZastite/sistemiZaEvidencijuRadnogVremena/SistemiZaEvidencijuRadnogVremena";
import SistemiZaKontroluPristupa
    from "./containers/sistemiTehnickeZastite/sistemiZaKontroluPristupa/SistemiZaKontroluPristupa";
import SistemiZaRanoOtkrivanjeIDojavuPozara
    from "./containers/sistemiTehnickeZastite/sistemiZaRanoOtkrivanjeIDojavuPozara/SistemiZaRanoOtkrivanjeIDojavuPozara";
import AktOProceniRizika from "./containers/usluge/aktOProceniRizika/AktOProceniRizika";
import AlkoTestiranje from "./containers/usluge/alkoTestiranje/AlkoTestiranje";
import BezbednosnoIzvestavanje from "./containers/usluge/bezbednosnoIzvestavanje/BezbednosnoIzvestavanje";
import FizickaZastita from "./containers/usluge/fizickaZastita/FizickaZastita";
import MontazaPovezivanjeProgramiranjeIObuka
    from "./containers/usluge/montazaPovezivanjeProgramiranjeIObuka/MontazaPovezivanjeProgramiranjeIObuka";
import Odrzavanje from "./containers/usluge/odrzavanje/Odrzavanje";
import PlaniranjeIProjektovanje from "./containers/usluge/planiranjeIProjektovanje/PlaniranjeIProjektovanje";
import AlarmniSistemiProtivprovalniProtivprepadni
    from "./containers/sistemiTehnickeZastite/alarmniSistemiProtivprovalniProtivprepadni/AlarmniSistemiProtivprovalniProtivprepadni";
import KontrolaSluzbenikaObezbedjenja
    from "./containers/sistemiTehnickeZastite/kontrolaSluzbenikaObezbedjenja/KontrolaSluzbenikaObezbedjenja";
import GpsPracenjeVozila from "./containers/sistemiTehnickeZastite/gpsPracenjeVozila/GpsPracenjeVozila";
import SistemiZaMedicinskuPomoc
    from "./containers/sistemiTehnickeZastite/sistemiZaMedicinskuPomoc/SistemiZaMedicinskuPomoc";
import IntegrisaniSistemiObezbedjenja
    from "./containers/sistemiTehnickeZastite/integrisaniSistemiObezbedjenja/IntegrisaniSistemiObezbedjenja";
import AlarmMonitoring from "./containers/usluge/alarmMonitoring/AlarmMonitoring";
import VideoMonitoring from "./containers/usluge/videoMonitoring/VideoMonitoring";
import InterventniTim from "./containers/usluge/interventniTim/InterventniTim";
import PreventivniObilazakPatrole from "./containers/usluge/preventivniObilazakPatrole/PreventivniObilazakPatrole";
import Saradnja from "./containers/saradnja/Saradnja";
import Analitika from "./containers/analitika/Analitika";
import OpstiUslovi from "./containers/opstiUslovi/OpstiUslovi";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Route path="/" exact component={Home}/>

                    <Route path="/o-nama" component={ONama}/>

                    <Route path="/opsti-uslovi" component={OpstiUslovi}/>

                    <Route path="/saradnja" component={Saradnja}/>

                    <Route path="/analitika" component={Analitika}/>

                    <Route path="/custom-paketi" component={CustomPaketi}/>
                    <Route path="/fizicka-lica" component={FizickaLica}/>
                    <Route path="/pravna-lica" component={PravnaLica}/>


                    <Route path="/alarmi-vozila" component={AlarmniSistemiZaVozila}/>
                    <Route path="/gps-pracenje-vozila" component={GpsPracenjeVozila}/>
                    <Route path="/iso" component={IntegrisaniSistemiObezbedjenja}/>
                    <Route path="/medicinska-pomoc" component={SistemiZaMedicinskuPomoc}/>
                    <Route path="/kontrola-sluzbenika-obezbedjenja" component={KontrolaSluzbenikaObezbedjenja}/>
                    <Route path="/alarmni-sistemi" component={AlarmniSistemiProtivprovalniProtivprepadni}/>
                    <Route path="/parking-rampe" component={ParkingRampe}/>
                    <Route path="/video-obezbedjenje" component={SistemiVideoObezbedjenja}/>
                    <Route path="/radno-vreme" component={SistemiZaEvidencijuRadnogVremena}/>
                    <Route path="/kontrola-pristupa" component={SistemiZaKontroluPristupa}/>
                    <Route path="/otkrivanje-pozara" component={SistemiZaRanoOtkrivanjeIDojavuPozara}/>


                    <Route path="/procena-rizika" component={AktOProceniRizika}/>
                    <Route path="/obilazak-patrole" component={PreventivniObilazakPatrole}/>
                    <Route path="/interventni-tim" component={InterventniTim}/>
                    <Route path="/video-monitoring" component={VideoMonitoring}/>
                    <Route path="/alarm-monitoring" component={AlarmMonitoring}/>
                    <Route path="/alko-testiranje" component={AlkoTestiranje}/>
                    <Route path="/bezbednosno-izvestavanje" component={BezbednosnoIzvestavanje}/>
                    <Route path="/fizicka-zastita" component={FizickaZastita}/>
                    <Route path="/montaza" component={MontazaPovezivanjeProgramiranjeIObuka}/>
                    <Route path="/odrzavanje" component={Odrzavanje}/>
                    <Route path="/planiranje-projektovanje" component={PlaniranjeIProjektovanje}/>
                </Layout>
            </div>
        );
    }
}

export default App;
