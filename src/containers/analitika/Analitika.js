import React, {Component} from 'react';


import classes from './Analitika.scss';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import LicaItem from '../../components/licaItem/LicaItem';

import analitika1 from '../../assets/images/analitika/people-counter.jpg';
import analitika2 from '../../assets/images/analitika/heat-maps.jpg';
import analitika3 from '../../assets/images/analitika/cross-line.jpg';
import analitika4 from '../../assets/images/analitika/anpr.jpg';
import analitika5 from '../../assets/images/analitika/face-detection.jpg';


class Analitika extends Component {
    render() {
        window.scrollTo(0, 0);

        const contentConfig = [{
            left: false,
            up: true,
            imageUrl: analitika1,
            title: 'People Counter',
            id: 'people',
            description: '',
            content: `Video analitika za brojanje posetilaca koristi standardnu video nadzor opremu tj. IP kameru u kombinaciji sa firmware-om (programska aplikacija instalirana na IP kameru) čime je omogućueno korišćenje video nadzor tehnologije u svrhu dobijanja poslovnih podataka. Parametri poput dnevnog prosečnog broja posetilaca, ili mesečnog, ili broja poseta po određenim satima koriste menadžmentu da efikasnije upravlja raspoloživim resursima i prodajom. Informacije poput konverzione stope kao jednog od osnovnih marketing/prodajnih parametara dostupne su momentalno i to za analizu različitih vremenskih perioda. Naprednije aplikacije za brojanje posetilaca omogućuju dodatni nivo video analitike. Centralizovanim menadžmentom sistema korisnici mogu sa lakoćom voditi mrežu maloprodajnih/veleprodajnih objekata u smislu pametnijeg upravljanja raspoloživim resursima, pravilnijim rasporedom zaposlenih u objektina i optimizacijom operativnih troškova. Video analitički algoritmi namenjeni poput People Counter-a mogu se integrisati sa informacionim sistemom neke kompanije i pružati dodatne (meta) podatke u okviru sintetizovanih poslovnih izveštaja.`
        }, {
            left: false,
            up: true,
            imageUrl: analitika2,
            title: 'Heat Maps',
            id: 'Heat',
            description: '',
            content: `Analitika koja prikazuje kinetičke tragove kretanja posetilaca u nekom objektu omogućuje vlasnicima maloprodajnih/veleprodajnih firmi da optimizuju izloženost asortimana, kao i naknada za posebno pozicioniranje robe u određenim visoko frekventnim mestima u objektu. Ova video analitika u svojstvu poslovnog alata u stanju je da pokaže nivoe posećenosti svih delova prodajnog prostora i da time omogući vlasnicima privatnih firmi efikasniju organizaciju prodajnog prostora u cilju unapređenja prodajnih i promotivnih akcija na primer.
Video analitika koja se vezuje za tzv. heat mape, ili za kinetičke mape, kompanijama može dati precizan uvid u kretanje i zadržavanje posetilaca ispred određenih lokala, ili trgovačkih pultova sa različitom robom, pa na osnovu ovih parametara menadžment može efikasnije upravljati svojim prodajnim prostorima i bolje pozicionirati određene grupe proizvoda, tokom specifične kampanje npr.
`
        }, {
            left: false,
            up: true,
            imageUrl: analitika3,
            title: 'Cross Line',
            id: 'Line',
            description: '',
            content: `Video analitika cross line koristi mogućnost iscrtavanja virtualne linije u posmatranoj sceni video nadzor kamere, koja dalje omogućuje kreiranje pravila u smislu generisanja sistemskog alarma u slučajevima prelazaka objekata preko ove linije. Cross line video analitika koristi se u svrhu bezbednosti kada se želi osigurati neovlašćen pristup nekom objektu ili nekoj površini. Uz standardnu funkcionalnost vremenskog rasporeda, moguće je efikasno upravljati bezbednošću nekog objekta u toku radnog vremena, kao i van radnog vremena,… Sistem se jednostavno i brzo setuje, a nakon toga po automatizaciji radi i automatski obaveštava vlasnika objekta, ili dežurnog operatera o alarmnim situacijama, shodno unapred setovanim pravilima i vremenskom rasporedu primene pravila.`
        }, {
            left: false,
            up: true,
            imageUrl: analitika4,
            title: 'ANPR',
            id: 'ANPR',
            description: '',
            content: `ANPR - softver za automatsko prepoznavanje registarskih tablica najčešću primenu ima u hotelima, stambenim udruženjima, parkiralištima, industrijskim i logističkim područjima. Naš sistem je dizajniran da radi u svim vremenskim uslovima, bez obzira u kom pravcu vozio automobil, adekvatnost ili veoma dobro osvetljenje. Ako osoba kroz kameru može prepoznati broj automobila - to će učiniti i naš sistem. Upotreba drugih rešenja - daljinski upravljač za otvaranje vrata ili mobilni telefon je svakako jeftin i praktičan, ali kada razgovarati telefonom i pritiskati dolazak na barijeru, sigurnost, kontrolu i računovodstvo - treba da izaberu različite tehnologije. Video analitika za automatsko prepoznavanje registarskih tablica ima sledeće opcije:
 
·   	Identifikacija registarske tablice vozila sa daljim skladištenjem slike;
·   	Upravljanje korisnicima - pristup automobilom po datumu i vremenu;
·   	Upravljanje parkom sa ograničenjem broja i ograničenjem zone;
·   	Crna i bela lista vozila;
·   	Automatska kontrola opreme prema postavljenim parametrima;
·   	Tačnost prepoznavanja registarske tablice vozila je više od 99%. noć i dan;
·   	Ispravno otkrivanje registarske tablice pri različitim brzinama vozila;
·   	Univerzalni sistem se može povezati na bilo koju IP kameru;
·   	Izveštaji - sposobnost rada sa različitim bazama podataka;
·   	Mogućnost povezivanja neograničenog broja video kamera;
·   	Upotreba LED panela;
·   	Brza identifikacija registarske tablice pomoću svih resursa računara;
·   	Veb interfejs za rad u mreži.`
        }, {
            left: false,
            up: true,
            imageUrl: analitika5,
            title: 'Face Detection',
            id: 'Face',
            description: '',
            content: `Ova video analitika koristi se u širokom spektru primena koje za osnovni zadatak imaju identifikaciju ljudskih lica u digitalnom zapisu. Face detection video analitički algoritmi na osnovu fizičkih karakteristika i crta lica mogu detektovati određena lica i već samo na osnovu toga generisati alarmne i notifikacione događaje u video nadzor sistemu, ukoliko su npr. presetovana pravila da u određenom prostoru, tokom određenih vremenskih intervala nije dozvoljen pristup ljudima. 

Video analitika za pretragu po fizičkim karakteristikama nekog lica – Face Search, koristi AI deep-learning analitičke algoritme koji pretragu po ovom osnovu čine mogućom. Zasnovani na mašinskom (deep-learning) učenju, Face Search AI analitički algoritmi nam pomažu da jednim klikom selektujemo lice određene osobe čije kretanje ili trenutnu lokaciju pretražujemo i da momentalno dobijemo hronološki uređen sled događaja, gde god je ovo lice uočeno u sistemu. Takođe, u okviru Face Search analitičkih modula tehnologija nam dozvoljava da jednom pretragom dobijemo rezultate i sa geografski udaljenih lokacija koje su pod jednim sistemom određenog korisnika, npr. industrijski korisnik sa desetinama rasprostranjenih fizičkih lokacija.

Kao jedan od tehnoloških derivata inicijalno razvijene tehnologije za detekciju lica (Face Detection) nastala je i tehnologija za prepoznavanje lica – Face Recognition. Analitički algoritmi koji čine prepoznavanje lica mogućim, zapravo su u stanju da samo iz jednog ili nekoliko frejmova na kojima uoče lice, to isto lice upoređuju sa svojom bazom podataka i uparuju ga sa identitetom tog lica, dakle imenom i prezimenom nekog zaposlenog ili nekog počinioca krivičnog dela i sl.
`
        }];
        return (
            <Aux>

                <div className="ws-header">
                    <h4 className="ws-header-title ws-o-nama">Video analitika</h4>

                    <div
                        className={[classes.Buducnost, 'ws-simple-style-cont ws-politika-sistema container'].join(' ')}>
                        <div className=" ws-box">
                            <p>Video anlitika je sve zastupljeniji poslovni alat koji ima širok sprektar primene – od
                                bezbednosnih,
                                sigurnosnih, kontrolnih, ali i poslovnih video analitičkih softvera za evaluaciju i
                                upravljanje poslovnim
                                procesima. Najčešće se primenjuje u maloprodajnim i veleprodajnim prostorima,
                                proizvodnim pogonima,
                                industrijskim postrojenjima, bankama i sl... Korišćenje video analitike prvobitno je
                                rasprostranjeno u
                                bezbednosne i sigurnosne svrhe. Kasniji razvoj video analitike i video nadzor
                                analitičkih algoritama, svoju
                                široku primenu našao je i u poslovnom svetu. U poslovnom svetu, kada je video nadzor u
                                pitanju, su Data
                                informacije mnogo vrednije od Piksel vrste informacije, obzirom na integrisane BI
                                (business intelligence)
                                funkcionalnosti koje video analitika nekom poslovanju može da pruži. Analiza poslovnih
                                parametara i
                                sintetizovan pregled istih daje poslovnom okruženju mogućnost da bolje upravlja svojim
                                resursima, kao i
                                da uživo koriguje određene poslovne parametre radi unapređenja poslovanja.
                            </p>

                        </div>
                    </div>
                </div>

                <div className={[classes.Analitika, 'ws-body'].join(' ')}>
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
                    <div
                        className="ws-simple-style-cont ws-overflow-img-container ws-triangle-holder">
                        <div className="container">
                            <LicaItem {...contentConfig[3]}/>
                        </div>
                    </div>
                    <div
                        className="ws-simple-style-cont ws-overflow-img-container ws-triangle-holder">
                        <div className="container">
                            <LicaItem {...contentConfig[4]}/>
                        </div>
                    </div>


                </div>
            </Aux>
        );
    }
}

export default Analitika;