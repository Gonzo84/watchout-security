import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Saradnja.scss';

class Saradnja extends Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <Aux>
                <div className={[classes.ONamaHeader, 'ws-header'].join(' ')}>
                    <h4 className="ws-header-title ws-o-nama">SARADNJA</h4>

                    <div
                        className={[classes.Buducnost, 'ws-simple-style-cont ws-politika-sistema container'].join(' ')}>
                        <div className=" ws-box">
                            <p><span className="ws-txt-bold">Mi smo pouzdani partneri na putu ka uspehu, bilo da je reč o unapređenju Vaše karijere, partnersvu sa nama ili franšiznom modelu saradnje. U svakom obliku saradnje ćete zajedno sa nama da napredujete, učite, usavršavate Vaše veštine i brzo prilagođavate novonastalim promenama na tržištu. Pogledajte dostupne opcije saradnje sa našim timom i kontaktirajte nas već danas za dodatne informacije.</span>
                            </p>
                            {/*<ul className="ws-subtitle-assertive">*/}
                            {/*    <li>POSTANITE DEO TIMA</li>*/}
                            {/*</ul>*/}

                            {/*<ul className="ws-subtitle-assertive">*/}
                            {/*    <li>POSTANITE PARTNER</li>*/}
                            {/*</ul>*/}

                            {/*<ul className="ws-subtitle-assertive">*/}
                            {/*    <li>POSTANITE KORISNIK FRANŠIZE</li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>

                <div className={[classes.Saradnja, 'ws-body'].join(' ')}>

                    <div className="ws-border-holder"></div>
                    <div className={[classes.DeoTima, 'ws-simple-style-cont ws-politika-sistema'].join(' ')}>
                        <div className={[classes.MarginTop, 'container'].join(' ')}>
                            <div className="ws-box">
                                <h4 className="ws-txt-bold">POSTANITE DEO TIMA</h4>
                                <h6 className="ws-txt-bold">Postanite deo Watchout Security tima</h6>
                                <p>Konstantno smo u potrazi za novim kolegama koji će se priključiti Watchout Security
                                    timu i svojim znanjem i veštinama doprneti daljem razvoju kompanjije i rastu stepena
                                    bezbednosti i zadovoljstva naših klijenata.</p>
                                <br/>
                                <p>Ukoliko želite da razvijate karijeru u jednoj od najperspektivnijih delatnosti
                                    budućnosti - oblasti zaštite lica i imovine, Watchout Security vas očekuje.
                                    Zapošljavamo stručne kadrove u oblasti, fizičkog i tehničkog obezbeđenja u zaštiti
                                    lica, imovine i poslovanja, procene rizika.</p>
                                <br/>
                                <p>Pošaljite nam vašu radnu biografiju na <a href="mailto:hr.watchout@gmail.com?Subject=Radna%20biografija" target="_top"><span
                                    className={[classes.Assertive]}>hr.watchout@gmail.com</span></a> i kolege iz HR sektora
                                    će vas kontaktirati u najkraćem roku.</p>
                                <br/>
                                <h5 className="ws-txt-bold">Kakvi ljudi su potrebni WS-u?</h5>
                                <h6 className="ws-txt-bold">Obavljajući poslove iz nadležnosti privatnog obezbeđenja,
                                    zaposleni se susreću sa zadacima koji iziskuju posebne kvalitete i osobine neohpodne
                                    da se uspešno odgovori visokim zahtevima ovog posla.</h6>

                                <ul className="ws-licence-list">
                                    <li>Rešenost da sve svoje sposobnosti i profesionalna znanja ulože u posao zaštite
                                        korisnika usluge i bezbednosti Republike Srbije.
                                    </li>
                                    <li>Integritet, moralni i lični, koji ih čini dostojnim ovlašćenja koja su im
                                        poverena.
                                    </li>
                                    <li>Visoke intelektualne sposobnosti, širina i nivo obrazovanja koji će im omogućiti
                                        da izađu na kraj sa složenošću svakodnevnih zadataka i pružiti izvesnu prednost
                                        u odnosu na potencijalne konkurente.
                                    </li>
                                    <li>Pouzdanost, odgovornost i lojalnost zbog kojih se drugi na njih uvek mogu
                                        osloniti.
                                    </li>
                                    <li>Svest o trenutku, poziciji u međunarodnom okruženju i bezbednosnim izazovima
                                        koji se nalaze pred organizacijom.
                                    </li>
                                    <li>Odvažnost da se uhvate u koštac sa nekim od najznačajnijih pitanja sa kojima se
                                        kao organizacija suočavamo i želja da, u posebno zahtevnim okolnostima, daju
                                        važan doprinos ostvarivanju interesa organizacije.
                                    </li>
                                    <li> Izazov koji prihvataju radeći na uzbudljivom, dinamičnom, zanimljivom,
                                        nesvakidašnjem, ali krajnje odgovornom poslu.
                                    </li>
                                    <li>Samopouzdanje, poverenje u sopstvene kapacitete i kompetenciju, ali i spremnost
                                        za učenje i usvajanje novih znanja i veština.
                                    </li>
                                    <li>Dinamičnost, preduzimljivost, samostalnost u poslu, ali i visok nivo
                                        samokontrole, taktičnosti i odmerenosti.
                                    </li>
                                    <li>Staloženost, prisebnost i sposobnost za rešavanje problema pod pritiskom i
                                        donošenje promišljenih odluka i u kritičnim situacijama.
                                    </li>
                                    <li>Snalažljivost, prilagodljivost, fleksibilnost i kreativnost u pristupu
                                        raznovrsnim situacijama sa kojima se mogu suočiti.
                                    </li>
                                    <li>Socijalne veštine i sposobnosti za rad sa ljudima: komunikativnost, rečitost,
                                        ubedljivost, prodornost i medju najvažnijim, veština slušanja, u poslovima čiji
                                        učinak direktno zavisi od uspešnosti u kontaktima sa ljudima.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className={[classes.Partner, 'ws-simple-style-cont ws-politika-sistema'].join(' ')}>
                        <div className={[classes.MarginTop, 'container'].join(' ')}>
                            <div className="ws-box">
                                <h4 className="ws-txt-bold">POSTANITE PARTNER</h4>
                                <p className="ws-txt-bold">Ukoliko ste firma koja na lokalnom nivou pruža usluge
                                    instalacije video nadozra, interfonskih sistema ili alarmnih sistema, a želite
                                    dodatno da zaradite kroz širenje tržišta, asortimana usluga i korišćenja postojećih
                                    poslovnih veza, onda je pravo rešenje partnerstvo sa nama..... Bez mnogo uloženog
                                    truda, sa korišćenjem naših resursa i potpuno usaglašenim rešenjima sa aktuelnom
                                    zakonskom regulativom, imaćete mogućnost da Vaše postojećih kupce učinite
                                    zadovoljnijim, a kao posledica javiće se uvećan profit. Pored postojećih usluga koje
                                    pružate možete da ponudite još više od 20 različitih usluga iz domena
                                    fizičko-tehničke zaštite...</p><br/>
                                <p>Treba nam bar jedna ili dve rečenice za nekog ko nema firmu a želi da prodaje ili
                                    pruža usluge, mi možemo da mu pomognemo u otvaranju firme korišćenjem našeg
                                    iskustva…</p><br/>
                                <p>Kroz naš rad u oblasti privatnog obezbedjenja činimo bezbedniji život miliona ljudi
                                    širom Srbije.
                                    Sarađujemo sa velikim brojem različitih organizacija u Srbiji kojima preko naših
                                    globalnih mreža, iskustva i poverenja pomažemo da ostvare svoje ciljeve. Kada su u
                                    pitanju poslovni partneri, u potpunosti razumemo njihovu društvenu odgovornost i
                                    marketinške strategije. Isto tako, cenimo težnje naših partnere iz javnog i trećeg
                                    sektora za usavršavanjem i njihove aspiracije u oblasti obezbeđenja lica, imovine i
                                    poslovanja.</p><br/>
                                <p>Uspeh naših partnera čini saradnju sa nama još korisnijom, zato Vam predlažemo da nas
                                    kontaktirate i time započnete novu eru u Vašem poslovanju..Ukoliko ste firma koja na
                                    lokalnom nivou pruža usluge instalacije video nadozra, interfonskih sistema ili
                                    alarmnih sistema, a želite dodatno da zaradite kroz širenje tržišta, asortimana
                                    usluga i korišćenja postojećih poslovnih veza, onda je pravo rešenje partnerstvo sa
                                    nama..... Bez mnogo uloženog truda, sa korišćenjem naših resursa i potpuno
                                    usaglašenim rešenjima sa aktuelnom zakonskom regulativom, imaćete mogućnost da Vaše
                                    postojećih kupce učinite zadovoljnijim, a kao posledica javiće se uvećan profit.
                                    Pored postojećih usluga koje pružate možete da ponudite još više od 20 različitih
                                    usluga iz domena fizičko-tehničke zaštite...</p><br/>
                                <p>Kroz naš rad u oblasti privatnog obezbeđenja činimo život miliona ljudi širom Srbije
                                    bezbednijim.
                                    Sarađujemo sa velikim brojem različitih organizacija u Srbiji kojima preko naših
                                    globalnih mreža, iskustva i poverenja pomažemo da ostvare svoje ciljeve. Kada su u
                                    pitanju poslovni partneri, u potpunosti razumemo njihovu društvenu odgovornost i
                                    marketinške strategije. Isto tako, cenimo težnje naših partnera iz javnog i trećeg
                                    sektora za usavršavanjem i njihove aspiracije u oblasti obezbeđenja lica, imovine i
                                    poslovanja.</p><br/>
                                <p>Uspeh naših partnera čini saradnju sa nama još korisnijom, zato Vam predlažemo da nas
                                    kontaktirate i time započnete novu eru u Vašem poslovanju.</p>
                                <br/>
                            </div>
                        </div>
                    </div>


                    <div className={[classes.KorisnikFransize, 'ws-simple-style-cont ws-politika-sistema'].join(' ')}>
                        <div className={[classes.MarginTop, 'container'].join(' ')}>
                            <div className="ws-box">
                                <h4 className="ws-txt-bold">POSTANITE KORISNIK FRANŠIZE</h4>
                                <p className="ws-txt-bold">Odlučujete se za kupovinu franšize u oblasti privatnog
                                    obezbeđenja?</p><br/>
                                <p className="ws-txt-bold">Razmišljate da krenete putem preduzetništva, a nemate
                                    sopstvenu poslovnu ideju? Želite da uđete u već oprobani poslovni model, gde poznat
                                    security brend i sva znanja o preduzetništvu dobijete „na ruke“?</p> <br/>
                                <p><b>Watchout Security</b> je prva privatna security kompanija u Srbiji koja zastupa
                                    franšizni
                                    sistem. Franšiza, partnerski sistem ili zastupništvo su način da započnete sopstveni
                                    biznis. Ovakav biznis vam donosi nezavisnost u poslovanju i mogućnost
                                    zadovoljavajuće zarade.</p>
                                <br/>
                                <p>Ujedno Vam želimo predstaviti naše usluge, koje smo osmislili sa ciljem, da Vama kao
                                    potencijalnom korisniku franšize sveobuhvatno pomognemo da uspete kao
                                    preduzetnik.</p>
                                <br/>
                                <p>Ako ste zainteresovani da poslujete pod <b>Watchout Security</b> franšizom potrebno
                                    je
                                    odgovoriti na nekoliko ključnih pitanja, stoga Vas pozivamo u sedište organizacije
                                    na besplatni savet. Konsultacija je besplatna i potpuno neobavezujuća za Vas.</p>
                                <br/>

                                <h5 className="ws-txt-bold">Konsultacije sa našim zastupnicima u oblasti franšizinga Vam
                                    mogu pomoći:</h5>

                                <ul className="ws-licence-list">
                                    <li>Da lakše ocenite koje su prednosti i potencijali franšiznog sistema za Vas, kao
                                        vlasnika franšize
                                    </li>
                                    <li>Da utvrdite da li je sama ideja franšize, Vaš pravi put
                                    </li>
                                    <li>Da postanete svesni šta je potrebno za uspostavljanje solidnog, odlično
                                        realizovanog i samim tim uspešnog franšiznog sistema, čiji deo ćete postati ( u
                                        vezi toga, šta su obaveze korisnika franšize prema Vama, i šta je, Vaše pravo)
                                    </li>
                                    <li>Da izbegnete (pre)česte greške i da uđete na pravi način u dugoročnu uspešnu
                                        priču koja će postati Vaš način života.
                                    </li>
                                </ul>

                                <p>Pozivamo Vas, da nas kontaktirate na <a href="mailto:fransiza@ws.co.rs?Subject=Fransiza" target="_top"><span
                                    className={[classes.Assertive]}>fransiza@ws.co.rs</span></a> ili na telefonske
                                    brojeve <span className={[classes.Assertive]}>+381
                                    69 558 58 01</span> i <span
                                        className={[classes.Assertive]}>+381 69 558 58 02</span> (Vladimir i Milutin
                                    Jaćimović, direktori).</p>
                                <br/>

                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default Saradnja;