import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './OpstiUslovi.scss';

class OpstiUslovi extends Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <Aux>
                <div className={['ws-header ws-page-opstiuslovi', classes.OpstiUsloviHeader].join(' ')}>
                    <h4 className="ws-header-title ws-o-nama">OPŠTI USLOVI POSLOVANJA</h4>
                </div>

                <div className="ws-body ws-page-opstiuslovi">
                    <div className={classes.OpstiUsloviTriangleWrap}></div>
                    <div className=" ws-simple-style-cont ws-politika-sistema">
                        <div className="container">
                            <div className="ws-box ws-text-centar">

                                <h5><span className="ws-txt-bold">Opšti uslovi pružanja i korišćenja usluga Watchout Security doo</span>
                                </h5>

                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">1.</span> Predmet i primena</span></h6>
                                <p>Opštim uslovima utvrđuju se uslovi za korišćenje usluga Watchout security doo(u
                                    daljem tekstu:davaoc usluga) za fizička, pravna lica i preduzetnike (u daljem
                                    tekstu: korisnici usluga). Opšti uslovi su obavezujući za davaoca usluga i korisnike
                                    i primenjuju se na sve njihove ugovorne odnose, izuzev ako se ugovorom Davaoc usluga
                                    i korisnik usluga ne dogovore drugačije. Delovi Opštih uslova čiji naslov ukazuje na
                                    posebnu grupu usluga ili posebnu grupu korisnika primeniće se samo na njih.Opšti
                                    uslovi obuhvataju sve usluge kompanije Watchout security.
                                </p>

                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">2.</span> Javnost, izmene i dopune Opštih uslova</span></h6>
                                <p>Watchout security je dužan da ove Opšte uslove, kao i sve izmene istih učini javno
                                    dostupnim na svojoj internet stranici www.ws.co.rs/opstiuslovi. Watchout security
                                    ima pravo i obavezu da Opšte uslove dopunjuje i menja radi usklađivanja s promenama
                                    zakona, drugih obavezujućih opštih akata, svoje poslovne politike i potreba
                                    korisnika. Watchout security će o izmenama i dopunama Opštih uslova i cenovnika
                                    informisati korisnike preko navedene internet stranice, pri čemu će izmene i dopune
                                    biti obavezujuće za Watchout security i korisnike usluga mesec dana od njihovog
                                    objavljivanja na internet stranici.
                                </p>

                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">3.</span> Zakonske odredbe</span></h6>
                                <p>Watchout Securty se obavezuje da će pružiti uslugu u skladu sa Zakonom o Privatnom
                                    Obezbeđenju. Zakon o Privatnom Obezbeđenju i odredbe koje se tiču korisnika sistema.vanrednih okolnosti.
                                </p>

                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">4.</span> Pojmovi</span></h6>
                                <p><span class="ws-font-color-assertive">4.1.</span> Davalac usluge – WS ili Watchout Securtity doo. <br/><br/>
                                    <span className="ws-font-color-assertive">4.2.</span> Korisnik usluge – Pravno / Fizičko lice koje koristi uslugu, a za koga je
                                    ugovarač Ugovorio posao.<br/><br/>
                                    <span className="ws-font-color-assertive">4.3.</span> Ugovorna dokumentacija - Ugovor, Faktura, Profaktura, Ponuda, Primopredajni
                                    zapisnik, Radni nalog, Zapisnik o izvršenoj obuci, Uputstvo o korišćenju sistema,
                                    plan STZ, akcioni plan, skica, idejno rešenje, projekat, građevinski dnevnik,
                                    obaveštenje o otkazu Ugovora: Dogovoreni zahtevi i obaveze između WS-a i korisnika
                                    usluge dokumentovani na bilo koji način.<br/><br/>
                                    <span className="ws-font-color-assertive">4.4.</span> Dokumentovane informacije – informacije za koje se od Ugovornih strana zahteva
                                    da njima upravlja i da ih održava, kao i medijum na kojem se nalaze. <br/><br/>
                                    <span className="ws-font-color-assertive">4.5.</span> Poverljivost - svojstvo da informacija ne može biti dostupna ili obelodanjena
                                    neovlašćenim osobama, entitetima ili procesima.<br/><br/>
                                    <span className="ws-font-color-assertive">4.6.</span> Integritet - celokupnost - svojstvo ispravnosti i kompletnosti, očuvanost
                                    izvornog sadržaja i kompletnosti podatka.<br/><br/>
                                    <span className="ws-font-color-assertive">4.7.</span> Raspoloživost - svojstvo
                                    dostupnosti
                                    i upotrebljivosti na zahtev ovlašćenog entiteta.<br/><br/>
                                    <span className="ws-font-color-assertive">4.8.</span> Upravljanje rizikom -
                                    sistematičan skup mera koji uključuje planiranje, organizovanje i usmeravanje
                                    aktivnosti kako bi se obezbedilo da rizici ostanu u propisanim okvirima. Izbor i
                                    nivo primene mera se zasniva na proceni rizika, potrebi za prevencijom rizika i
                                    otklanjanja posledica rizika koji se ostvario, uključujući sve vrste vanrednih
                                    okolnosti.<br/><br/>
                                    <span className="ws-font-color-assertive">4.9.</span> Izvršilac – lice koje učestvuje u procesu realizacije
                                    Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">4.10.</span> Sl Ob – Službenik Obezbeđenja - lice koje ispunjava uslove po Zakonu o privatnom
                                    obezbeđenju (Sl. glasnik ) i drugih zakonskih i podzakonskih
                                    propisa.<br/><br/>
                                    <span className="ws-font-color-assertive">4.11.</span> Call centar – Organizovani proces koji služi za prijem i obradu zahteva korisnika 24h
                                    dnevno svakog dana u nedelji na broju telefona 0800 011 013.<br/><br/>
                                    <span className="ws-font-color-assertive">4.12.</span> Tehnička podrška – je usluga koja je usmerena na pojedince sa tehničkim problemima sa elektronskim,
                                    mehaničkim ili elektromehaničkim proizvodima. Uz pomoć svog znanja tehnička podrška
                                    je u stanju da reši većinu problema koju korisnik doživi.<br/><br/>
                                    <span className="ws-font-color-assertive">4.13.</span> Služba za
                                    korisnike - je usluga koja osigurava zadovoljstvo Korisnika proizvodom ili uslugom.
                                    Predstavlja važan deo održavanja odnosa sa Korisnicima, koji je ključan za
                                    kontinuirani prihod. Korisnicima je važno da znaju da postoji služba koju mogu
                                    dobiti ukoliko imaju nekih pitanja, problem ili im je potrebna
                                    pomoć.<br/><br/>
                                    <span className="ws-font-color-assertive">4.14.</span> Neusaglašenost - je iskazana neusaglašenost i/ili. prigovor korisnika
                                    usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">4.15.</span> Zahtev za servis - pokretanje procesa servisiranja u garantnom ili van garantnom
                                    roku sa korisnikom usluge u cilju otklanjanja neusaglašenosti.<br/><br/>
                                    <span className="ws-font-color-assertive">4.16.</span> Zahtev za
                                    ugovaranje - pokretanje procesa ugovaranja sa potencijalnim ili postojećim
                                    korisnikom usluge u cilju ugovaranja neke od usluge Davaoca usluga.<br/><br/>
                                    <span className="ws-font-color-assertive">4.17.</span> STZ - sistem tehničke zaštite predstavlja povezivanje sredstava i uređaja koji zajedno
                                    čine funkcionalnu celinu.<br/><br/>
                                    <span className="ws-font-color-assertive">4.18.</span> Tehnička zaštita - je obezbeđenje lica i imovine
                                    koje se vrši tehničkim sredstvima i uređajima, njihovim planiranjem, projektovanjem,
                                    ugradnjom i održavanjem.<br/><br/>
                                    <span className="ws-font-color-assertive">4.19.</span> Usluga izvođenja pripremnih radovi - Pripremni radovi uključuju postavljanje kablovskih polica i instalacijskih cevi i kablova do spojnih
                                    tačaka.<br/><br/>
                                    <span className="ws-font-color-assertive">4.20.</span> Usluga izvođenja instalacija - obuhvata ispitivanje i spajanje vodova od
                                    spojnih tačaka do sredstava i uređaja tehničke zaštite i vrše ih pravna lica i
                                    preduzetnici koji su licencirani za vršenje poslova montaže, puštanja u rad,
                                    održavanja sistema tehničke zaštite i obuke Korisnika.<br/><br/>
                                    <span className="ws-font-color-assertive">4.21.</span> Građevinski dnevnik - dokument o toku gradnje, u obliku sveske u koju se svakodnevno upisuju svi podaci na
                                    osnovu kojih se može utvrditi tok i način građenja objekta u celini, kao i po
                                    pojedinim fazama, kao i podaci koji utiču ili mogu uticati na predviđeni tok, način
                                    i rok građenja, odnosno izvođenja radova.<br/><br/>
                                    <span className="ws-font-color-assertive">4.22.</span> Zapisnik o primopredaji STZ – Je dokument u kome se navode podaci o dokumentaciji koja je predmet primopredaje i
                                    eventualnim preostalim neizvršenim obavezama ugovornih strana u odnosu na pojedine
                                    radove i međusobna materijalna i druga potraživanja.<br/><br/>
                                    <span className="ws-font-color-assertive">4.23.</span> Usluga održavanja –
                                    Aktivnosti Davaoca usluga u cilju otklanjanja pojavljenih neusaglašenosti i
                                    preduzimanje mera u cilju smanjenja rizika za ponovno pojavljivanje neusaglašenos.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">5.</span> Bezbednost informacija </span></h6>
                                <p><span className="ws-font-color-assertive">5.1.</span> Sva lica Korisnika i Davaoca usluga i podizvođača Davaoca usluga koja učestvuju
                                    u realizaciji ovog Ugovora dužni su da obezbede poverljivost
                                    podataka.<br/><br/>
                                    <span className="ws-font-color-assertive">5.2.</span> Sva
                                    lica
                                    Korisnika i Davaoca usluga i podizvođača Davaoca usluga koja učestvuju u realizaciji
                                    ovog Ugovora dužni su da sve uočene rizike za bezbednost informacija sa aspekta
                                    poverljivosti, integriteta i raspoloživosti, identifikuju i blagovremeno obaveste
                                    drugu stranu, dok je ovaj Ugovor na snazi i u periodu od jedne godine nakon njegovog
                                    prestanka.<br/><br/>
                                    <span className="ws-font-color-assertive">5.3.</span> Potpisivanjem Ugovora Korisnik je upoznat i saglasan da Davalac usluga čuva i
                                    obrađuje dostavljene podatke od strane Korisnika i njegovih zaposlenih i koristi ih
                                    isključivo u svrhu pružanja usluge koja je predmet ovog Ugovora i ne dostvlja ih bez
                                    saglasnosti druge strane, a u skladu sa važećim Zakonom i propisima.<br/><br/>
                                    <span className="ws-font-color-assertive">5.4.</span> Podaci koji su prikupljeni u realizaciji Ugovora mogu se koristiti samo u svrhu
                                    za koju su prikupljeni i ne mogu se ustupati trećim licima ili javno objavljivati,
                                    osim ako je drugačije propisano ili Ugovoreno.<br/><br/>
                                    <span className="ws-font-color-assertive">5.5.</span> Lice na koje se podaci
                                    odnose
                                    ima pravo da zahteva da mu se prikupljeni podaci stave na uvid,što obuhvata pravo na
                                    pregled, čitanje i slušanje podataka, kao i pravljenje zabeleški, a o svom trošku i
                                    dobijanje kopija podataka (fotokopiju, audio kopiju, video kopiju, digitalnu kopiju
                                    i sl.) u obliku u kojem se informacija nalazi, kao i da, u skladu sa propisima,
                                    zahteva izmenu ili brisanje podataka. Ako je zbirka podataka uspostavljena Ugovorom,
                                    ili na osnovu pristanka u pisanom obliku, u slučaju ispunjenja ili raskida Ugovora,
                                    odnosno povlačenja pristanka u pisanom obliku, Davalac usluga se obavezuje da
                                    podatke preda korisniku ili da ih briše u roku od 15 dana od dana raskida Ugovora,
                                    odnosno povlačenja pristanka, a druge podatke koji nisu od značaja ili koje korisnik
                                    odbije da preuzme, uništi u roku od osam dana.<br/><br/>
                                    <span className="ws-font-color-assertive">5.6.</span> Davalac usluga je
                                    dužan da
                                    kao
                                    tajnu, u skladu sa Zakonom i drugim propisima kojima se uređuje tajnost podataka,
                                    čuva sve podatke koje saznaju u vršenju poslova, osim u slučajevima predviđenim
                                    zakonom.<br/><br/>
                                    <span className="ws-font-color-assertive">5.7.</span> Obaveza čuvanja tajne traje i po prestanku obavljanja delatnosti sve do Zakonom
                                    propisanog roka.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">6.</span> Opšte obaveze davaoca usluga </span></h6>
                                <p><span className="ws-font-color-assertive">6.1.</span> Da zadrži cene i način plaćanja, rokove isporuke i ostale informacije iz ponude
                                    u roku važenja ponude i Davalac usluga ima pravo da traži ponovno usaglašavanje sa
                                    drugom stranom ako dođe do bilo kakve izmene ponude.<br/><br/>
                                    <span className="ws-font-color-assertive">6.2.</span> Da angažovanje
                                    službenika
                                    obezbeđenja i njegov način rada reguliše međusobno usaglašenim i verifikovanim
                                    Planom aktivnosti koji je sastavni deo ovog Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">6.3.</span> Da odredi odgovornog rukovodioca realizacije Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">6.4.</span> Da u toku
                                    realizacije po ovom Ugovoru sprovodi mere zaštite na radu, zaštite od požara i
                                    povreda i nanošenja štete trećim licima i okolnim objektima i saobraćajnicama i ne
                                    naruši postignuti nivo uređenosti.<br/><br/>
                                    <span className="ws-font-color-assertive">6.5.</span> Da izvrši obuku o korišćenju
                                    sistema
                                    tehničke zaštite svim korisnicima i sačini Zapisnik o izvršenoj
                                    obuci.<br/><br/>
                                    <span className="ws-font-color-assertive">6.6.</span> Da izda
                                    pisano Uputstvo o korišćenju sistema.<br/><br/>
                                    <span className="ws-font-color-assertive">6.7.</span> Da obezbedi potpunu tehničku
                                    ispravnost
                                    instaliranog sistema tehničke zaštite.<br/><br/>
                                    <span className="ws-font-color-assertive">6.8.</span> Da svi izvršioci WS-a
                                    uključeni u
                                    realizaciju ugovora pažljivo i savesno postupaju sa imovinom Korisnika
                                    usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">6.9.</span> Da obezbedi prijem zahteva za servis i korisničku podršku na broju 0800 011 013
                                    (besplatan za Korisnike) 24h dnevno svakog dana u nedelji i podršku tehničke službe
                                    radnim danima od ponedeljka do petka od 08-16h.<br/><br/>
                                    <span className="ws-font-color-assertive">6.10.</span> Da obezbedi
                                    Korisniku
                                    pristupnešifre za STZ po isteku garantnog roka, ugovora ili odluke Korisnika da
                                    dalje održavanje ne poveri Davaocu usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">6.11.</span> Da po ispostavljenom
                                    zahtevu za
                                    ugovaranje od strane korisnika, obezbedi ponudu za dodatnu uslugu.<br/><br/>
                                    <span className="ws-font-color-assertive">6.12.</span>
                                    Da obezbedi
                                    Izveštaj o aktivnostima Davaoca usluga.<br/><br/>
                                    <span className="ws-font-color-assertive">6.13.</span> Da potpiše Primopredajni
                                    zapisnik i da
                                    navede sve primedbe ako ih ima.<br/><br/>
                                    <span className="ws-font-color-assertive">6.14.</span> Da u roku od 5 dana od dana
                                    potpisivanja
                                    Zapisnika o primopredaji preduzme mere i otkloni primedbe druge strane u cilju
                                    nastavka dalje realizacije Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">6.15.</span> Da shodno pruženim uslugama
                                    vidno obeleži
                                    štićeni objekat oznakama Davaoca usluga.<br/><br/>
                                    <span className="ws-font-color-assertive">6.16.</span> Pruži Korisniku savete i uputstva da reši problem bez dolaska na štićeni
                                    objekat.<br/><br/>
                                    <span className="ws-font-color-assertive">6.17.</span> Da u slučaju utvrđenih neusaglašenosti funkcionisanja
                                    sistema planira
                                    stručni tim koji će u planiranom roku na sistemuštićenog objekta utvrditi uzrok i
                                    način otklanjanja neusaglašenosti kao i da definiše planirani rok u kome će se
                                    otkloniti uzrok neusaglašenosti.<br/><br/>
                                    <span className="ws-font-color-assertive">6.18.</span> Da prati ukupno vreme utvrđivanja i
                                    otklanjanja uzroka neusaglašenosti po vrstama neusaglašenosti u cilju
                                    poboljšanja.<br/><br/>
                                    <span className="ws-font-color-assertive">6.19.</span> Da prati i utvrđuje neusaglašenosti koje se pojavljuju na svim instaliranim
                                    sistemima i da utvrdi mere koje će smanjiti obim pojavljivanja.<br/><br/>
                                    <span className="ws-font-color-assertive">6.20.</span> Da prati
                                    razvoj instrumenata za blagovremena upozorenja i predloži adekvatne
                                    mere.<br/><br/>
                                    <span className="ws-font-color-assertive">6.21.</span> Da
                                    prati razvoj proizvoda ugrađenih u sistem i predlaže izmenu sa
                                    obrazloženjem.<br/><br/>
                                    <span className="ws-font-color-assertive">6.22.</span>
                                    Da drži optimalnu zalihu proizvoda koji su predmet privremene zamene (ako se
                                    neusaglašeni proizvodi odnose na servisiranje) ili zamene istrošeni
                                    proizvodi.<br/><br/>
                                    <span className="ws-font-color-assertive">6.23.</span> Davalac uslugaDavalac uslugaje dužan da tokom trajanja Ugovora sarađuje sa
                                    ovlašćenim licem Naručioca i da uvaži opravdane stručne sugestije i reklamacije.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">7.</span> Opšte obaveze korisnika  usluga</span></h6>
                                <p><span className="ws-font-color-assertive">7.1.</span> Da na vreme i u skladu sa Ugovorom izvršava svoje obaveze.<br/><br/>
                                    <span className="ws-font-color-assertive">7.2.</span> Da pre
                                    početka
                                    realizacije Ugovora odredi odgovorno lice za nadzor, komunikaciju i primopredaju i
                                    da blagovremeno obavesti Davaoca usluga u slučaju promene.<br/><br/>
                                    <span className="ws-font-color-assertive">7.3.</span> Da pre
                                    početka
                                    pružanja usluge odredi lica koja će Davalac usluge obučiti za korišćenje usluge, i
                                    da blagovremeno obavesti Davaoca usluga u slučaju promene.<br/><br/>
                                    <span className="ws-font-color-assertive">7.4.</span> Da blagovremeno obavesti Davaoca usluga o eventualnim izmenama planiranog
                                    početka ili planiranog roka za realizaciju.<br/><br/>
                                    <span className="ws-font-color-assertive">7.5.</span> Da će prilikom svake isporuke proizvoda verifikovati specifikaciju isporučenih
                                    proizvoda od strane Davaoca usluge koja je sastavni deo Ugovorne dokumentacije.<br/><br/>
                                    <span className="ws-font-color-assertive">7.6.</span> Da kontinuirano obezbedi sve preduslove vezane za Ugovorenu uslugu: ispravnu
                                    internet konekciju, ispravnu telefonsku liniju (po mogućstvu zasebnu ili onu koja se
                                    ređe koristi) i ispravnu instalaciju 220V, kao i da obavesti Davaoca usluga o
                                    eventualnim problemima koji mogu da utiču na kavlitet pružanja
                                    usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">7.7.</span> Da u
                                    cilju uspešne realizacije Ugovora obezbedi ovlašćenim licima Davaoca usluge
                                    nesmetano izvođenje radova.<br/><br/>
                                    <span className="ws-font-color-assertive">7.8.</span> Da koristi uslugu shodno sprovedenoj obuci i datim uputstvima.<br/><br/>
                                    <span className="ws-font-color-assertive">7.9.</span> Da u slučaju pojave neusaglašenosti prouzrokovane namerno ili iz nepažnje,
                                    nekorišćenju shodno datim uputstvima ili sprovedenoj obuci, nadoknadi nastale
                                    troškove servisa Davaocu usluga.<br/><br/>
                                    <span className="ws-font-color-assertive">7.10.</span> Da snosi naknadu za dodatno
                                    angažovanje
                                    stručnih lica od strane Davaoca u slučaju da ne obezbedi sve prethodno navedene
                                    uslove za realizaciju Ugovora<br/><br/>
                                    <span className="ws-font-color-assertive">7.11.</span> Da u slučaju zahteva za angažovanje
                                    tehničke
                                    službe van radnog vremena u cilju otklanjanja neusaglašenosti nadoknadi troškove
                                    Davaoca, osim ako nije Ugovorena posebna usluga održavanja sistema.<br/><br/>
                                    <span className="ws-font-color-assertive">7.12.</span>
                                    Da Davaocu
                                    usluge bez naknade omogući korišćenje struje, vode, sanitarnih čvorova za vreme
                                    izvođenja radova i instalacije sistema na objektu.<br/><br/>
                                    <span className="ws-font-color-assertive">7.13.</span> Da da saglasnost Davaocu usluge za daljinski pristup instaliranom sistemu u
                                    cilju utvrđivanja uzroka problema, otklanjanja uzroka problema i testiranja
                                    funkcionisanja sistema.<br/><br/>
                                    <span className="ws-font-color-assertive">7.14.</span> Da bez odlaganja obavesti dežurnog operatera
                                    KC-a o
                                    periodu godišnjih odmora i situacija u kojima će štićeni prostor biti bez prisustva
                                    ovlašćenih lica.<br/><br/>
                                    <span className="ws-font-color-assertive">7.15.</span> Da u slučaju pojave neusaglašenosti prouzrokovane
                                    namerno ili
                                    iz nepažnje, nekorišćenju shodno sprovedenoj obuci, nadoknadi nastale troškove
                                    Davaocu usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">7.16.</span> Da na zahtev za angažovanje izvršioca Davaoca usluga
                                    van
                                    radnog vremena u cilju otklanjanja neusaglašenosti nadoknadi troškove Davaoca
                                    usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">7.17.</span> Da sve dodatne zahteve u odnosu na ugovorene usluge dostavi
                                    Davaocu
                                    usluge putem telefona ili mail-a.<br/><br/>
                                    <span className="ws-font-color-assertive">7.18.</span> Da na nakon izvršene primopredaje
                                    ne vrši
                                    nikakve izmene i dopune na instaliranom sistemu bez pisane saglasnosti Davaoca
                                    usluga za vreme trajanja garancije iz Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">7.19.</span> Da se u obrazac PPZO
                                    Pregled
                                    podataka za obezbeđenje unesu i održavaju podaci lica za korišćenje STZ-a koji služe
                                    za proveru i identifikaciju, kao i da pravovremeno, pisanim putem, obavesti KC o
                                    svim promenama, kao i podatke lica kod kojih se nalaze ključevi
                                    objekta.<br/><br/>
                                    <span className="ws-font-color-assertive">7.20.</span> Da
                                    potpiše Primopredajni zapisnik i da navede sve primedbe ako ih ima.<br/><br/>
                                    <span className="ws-font-color-assertive">7.21.</span>
                                    Da u roku
                                    od 5 dana od dana potpisivanja Zapisnika o primopredaji preduzme mere i otkloni
                                    primedbe druge strane u cilju nastavka dalje realizacije Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">7.22.</span> Da potpisivanjem ovog Ugovora da saglasnost Davaocu da prikuplja i obrađuje
                                    podatke o Korisniku, navedene, odnosno sadržane u ugovornoj dokumentaciji. Korisnik
                                    izjavljuje da je upoznat sa svrhom obrade i drugim okolnostima i pravima iz Zakona o
                                    zaštiti podataka o ličnosti, te da je saglasan da Davalac prikupi i obradi podatke o
                                    Korisniku.<br/><br/>
                                    <span className="ws-font-color-assertive">7.23.</span> Da proceni rizik za pojavu neusaglašenosti na sistemu i preduzme mere u cilju
                                    smanjenja rizika.<br/><br/>
                                    <span className="ws-font-color-assertive">7.24.</span> Da dobijene predloge poboljšanja sprovede i da za
                                    identifikovane uzroke predvidi mere u cilju efektivnijeg funkcionisanja sistema i
                                    smanjenja troškova.<br/><br/>
                                    <span className="ws-font-color-assertive">7.25.</span> Da utvrdi planove funkcionalnog testiranja u
                                    cilju da li
                                    ugrađeni proizvodi reaguju kako je predviđeno ugovorom.<br/><br/>
                                    <span className="ws-font-color-assertive">7.26.</span> Korisnik
                                    usluga je
                                    dužan da Davaocu usluga obezbedi tehničku dokumentaciju STZ-a, a koja je predmet
                                    održavanja u skladu sa odredbama ovog Ugovora.<br/><br/>
                                    <span className="ws-font-color-assertive">7.27.</span> Da obezbedi
                                    odgovarajuće
                                    dozvole za iznošenje proizvoda u servis u slučaju da se servisna intervencija
                                    započne kod vlasnika pa se ustanovi da je njen uspešan završetak moguć jedino u
                                    prostorijama Davaoca usluga.<br/><br/>
                                    <span className="ws-font-color-assertive">7.28.</span> Da sačini i dostavi Davaocu usluga
                                    dinamiku
                                    redovnog održavanja sistema koja je predmet održavanja.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">8.</span> Garancija </span></h6>
                                <p>
                                    <span className="ws-font-color-assertive">8.1.</span> Davalac usluga garantuje da će Ugovorena usluga biti realizovana u skladu sa
                                    ovim Ugovorom za sve vreme trajanja Ugovora računajući od dana potpisivanja
                                    zapisnika o primopredaji.<br/><br/>
                                    <span className="ws-font-color-assertive">8.2.</span> Za sve vreme trajanja Ugovoraštete nastale
                                    kao
                                    neposredna posledica nepažnje, greške ili propusta zaposlenih u Watchout Security-u
                                    prilikom obavljanja registrovane delatnosti, Davalac usluga poseduje Polisu
                                    osiguranja od profesionalne odgovornosti.<br/><br/>
                                    <span className="ws-font-color-assertive">8.3.</span> Davalac usluga će na zahtev Korisnika usluge staviti na uvid Sertifikat o
                                    osiguranju.<br/><br/>
                                    <span className="ws-font-color-assertive">8.4.</span> Garancija se daje samo pod uslovom da se Korisnik usluge
                                    pridržava
                                    prihvaćenih obaveza u Ugovoru.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">9.</span> Raskid i istek ugovora</span></h6>
                                <p><span className="ws-font-color-assertive">9.1.</span> U slučaju da Ugovor na zvaničan zahtev Korisnika bude raskinut pre isteka roka
                                    trajanja, Korisnik je u obavezi da plati preostalu vrednost usluge za ugovoreni
                                    period. U tom slučaju se Davalac u obavezi je da besplatno izvrši deaktivacije
                                    usluge. Deaktivacija usluge podrazumeva resetovanje sistema i vraćanje na fabričko
                                    podešavanje, skidanje obeležja WS-a, skidanje TAG-a, deaktiviranje korisnika u KC-u
                                    WS.<br/><br/>
                                    <span className="ws-font-color-assertive">9.4.</span> Korisnik će nadoknaditi Davaocu usluga stvarne troškove za opomene
                                    poslate
                                    Korisniku, kao i sve ostale troškove vezane za naplatu i/ili obezbeđenje njegovog
                                    potraživanja na osnovu Ugovora (sudski, administrativni, advokatski troškovi itd.),
                                    čija će dospelost za plaćanje biti utvrđena računima koje će Davalac usluga
                                    ispostaviti Korisniku za navedene troškove. Korisnik je dužan da plati troškove
                                    zateznih kamata u visini predviđenoj Zakonom. U slučaju da Korisnik kasni sa
                                    plaćanjem iznosa bilo koje mesečne rate za više od 15 (petnaest) dana Davalac usluga
                                    ima pravo da raskine Ugovor.<br/><br/>
                                    <span className="ws-font-color-assertive">9.5.</span> Ugovor se smatra prećutno produženim na
                                    neodređeno
                                    vreme pod uslovima sadržanim u Ugovoru, i sa mogućnošću raskida Ugovora ugovornih
                                    strana 7 (sedam) dana nakon obaveštavanja pismenim putem preporučenom pošiljkom sa
                                    povratnicom.
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">10.</span> Upotreba podataka i prenos prava</span></h6>
                                <p>Potpisivanjem Ugovora Korisnik je saglasan da Watchout security ima pravo da podatke
                                    o Korisniku koji se odnose na adresu, brojeve telefona, faks, e-mail adrese i ostale
                                    podatke za uspostavljanje kontakta, a koje je Korisnik prezentovao Watchout
                                    security-u prilikom potpisivanja Ugovora, koristi radi dostavljanja Korisniku
                                    obaveštenja o svojim aktivnostima i uslugama, koristeći sva sredstva poslovne
                                    komunikacije. Potpisivanjem ugovora Korisnik je upoznat I saglasan da Watchout
                                    security čuva I obrađuje elektronskim putem dostavljene podatke od strane Korisnika
                                    I njegovih zaposlenih, a koji se prvenstveno odnose na zaposlene kod Korisnika I
                                    koristi ih isključivo u svrhe obavljanja predmeta ovog Ugovora, a u skladu sa
                                    Zakonom o zaštiti podataka o ličnosti ("Sl. glasnik RS", br. 97/2008, 104/2009 - dr.
                                    zakon, 68/2012 odluka US i 107/2012).
                                </p>
                                <h6><span className="ws-txt-bold"><span className="ws-font-color-assertive">11.</span> Završne odredbe </span></h6>
                                <p><span className="ws-font-color-assertive">11.1.</span> Ugovor stupa na snagu danom zaključenja.<br/><br/>
                                    <span className="ws-font-color-assertive">11.2.</span> Obe strane su saglasne
                                    da se
                                    Primopredaja smatra izvršenom obostrano potpisanim Zapisnikom o primopredaji bez
                                    primedbi ugovornih strana.<br/><br/>
                                    <span className="ws-font-color-assertive">11.3.</span> Ugovorne strane su saglasne da će sve
                                    sporove
                                    nastale u vezi sa ovim Ugovorom rešavati sporazumno. Ugovorne strane su saglasne da
                                    u slučaju, da se spor ne može rešiti sporazumno nadležan je sud u
                                    Kragujevcu.<br/><br/>
                                    <span className="ws-font-color-assertive">11.4.</span>
                                    Obe strane su saglasne da potpisana Ugovorna dokumentacija može biti predmet sudskog
                                    spora nadležnog Suda.<br/><br/>
                                    <span className="ws-font-color-assertive">11.5.</span> Sve dokumentovane informacije koje su sastavni
                                    deo
                                    Ugovorne dokumentacije koje jedna Ugovorna strana dostavlja drugoj biće pisane i
                                    poslate putem preporučene pošte ili putem elektronske pošte, sa potvrdom o prijemu,
                                    na adrese navedene u Ugovoru ili na neku drugu adresu koju Ugovorne strane mogu
                                    kasnije da odrede.<br/><br/>
                                    <span className="ws-font-color-assertive">11.6.</span> Nijedna Ugovorna strana neće preneti bilo koja
                                    svoja prava
                                    niti delegirati bilo koje svoje obaveze prema ovom Ugovoru bilo kojoj drugoj
                                    Ugovornoj strani bez prethodne pisane saglasnosti druge Ugovorne strane. Bilo koji
                                    pokušaj cesije ili delegiranja predstavljaće kršenje ovog Ugovora. Koristi od ovog
                                    Ugovora će biti preneti na poverioce i naslednike svake Ugovorne strane. Nezavisno
                                    od odredaba ovog Ugovora, Korisnik usluga će moći da prenese sva ili pojedina prava
                                    na svoja povezana pravna lica.<br/><br/>
                                    <span className="ws-font-color-assertive">11.7.</span> Svaka Ugovorna strana može
                                    jednostrano da
                                    raskine Ugovor, bez otkaznog roka, pisanom izjavom volje samo u slučaju da nad
                                    drugom Ugovornom stranom bude pokrenut postupak stečaja, likvidacije, prinudnog
                                    poravnanja ili administrativnog odnosno prinudnog upravljanja, da druga Ugovorna
                                    strana pravnosnažnom presudom dobije zabranu obavljanja delatnosti ili da druga
                                    strana trajno prestane da posluje.<br/><br/>
                                    <span className="ws-font-color-assertive">11.8.</span> Ugovor se može sporazumno
                                    raskinuti samo uz
                                    saglasnost obe Ugovorne strane.<br/><br/>
                                    <span className="ws-font-color-assertive">11.9.</span> Dok je ovaj Ugovor na snazi i za
                                    period od
                                    jedne (1) godine posle, Davalac usluga i Korisnik usluga su saglasni da neće nuditi
                                    zaposlenje, bilo direktno ili indirektno preko trećih lica, bilo kojim licima koje
                                    učestvuju u realizaciji Ugovora bez prethodne pisane saglasnosti za takvu ponudu
                                    dobijenu od suprotne strane.<br/><br/>
                                    <span className="ws-font-color-assertive">11.10.</span> Ugovorne strane su saglasne da Davalac usluga ne snosi nikakvu odgovornost za
                                    nepoštovanje Zakona o privatnom obezbeđenju od strane Korisnika
                                    usluge.<br/><br/>
                                    <span className="ws-font-color-assertive">11.11.</span> Na
                                    sve što nije predviđeno ovim Ugovorom primenjivaće se važeće odredbe Zakona o
                                    obligacionim odnosima. Sve izmene i dopune ovog Ugovora moguće su samo na osnovu
                                    Aneksa ovog Ugovora i uz obostranu saglasnost Ugovornih strana.
                                    <br/><br/><br/><br/>
                                    Opšti uslovi objavljeni su na Watchout security internet stranici
                                    ​<a class="ws-font-color-assertive" href="http://www.ws.co.rs/opsti-uslovi" target="_blank">www.ws.co.rs/opsti-uslovi</a> i stupaju na snagu <span className="ws-font-color-assertive">1. aprila 2019.</span> godine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default OpstiUslovi;
