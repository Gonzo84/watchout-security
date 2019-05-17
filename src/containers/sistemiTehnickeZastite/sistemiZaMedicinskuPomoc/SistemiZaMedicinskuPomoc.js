import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import alarmniSisImg from '../../../assets/images/sistemiTehnickeZastite/panikTaster.JPG'


class SistemiZaMedicinskuPomoc extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: alarmniSisImg,
            title: 'Medicinski panik taster',
            description: 'Koncept “zlatnog sata”'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body ws-page-subheader">
                    <div className="ws-border-holder"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block ws-page-subheader-text">
                                <p>Da li ste znali da 50% starijih od 60 godina nakon pada ne mogu da ustanu sami već im
                                    je potrebna nečija pomoć?
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>U medicini je poznat koncept “zlatnog sata” koji ukazuje da je za osobu koja je doživela
                                neželjenu zdravstvenu komplikaciju od kritičnog značaja stručno medicinsko zbrinjavanje
                                u prvih sat vremena od nastanka zdravstvenog problema. Samim tim, brza reakcija je jedan
                                od najbitnijih faktora u sprečavanju nastanka daljih zdravstvenih komplikacija ili čak
                                fatalnog ishoda. Iako vreme za adekvatnu reakciju zavisi u velikoj meri od tipa
                                zdravstvenog problema, opšte je prihvaćeno stanovište da ugrožena osoba ima više šansi
                                za oporavak ukoliko je stručna medicinska nega ukazana u što kraćem periodu od trenutka
                                nastanka zdravstvenog problema.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Prilikom nastanka iznenadnog zdravstvenog problema, svaka sekunda se računa. Postoji
                                veliki broj situacija u kojima Medicinski panik taster može odigrati ključnu ulogu i
                                posebno se preporučuje:
                            </p>
                            <ul>
                                <li>starijim osobama koje žive same;</li>
                                <li>osobama kod kojih postoji viši stepen rizika od padova, poput osoba koje boluju od
                                    artritisa, Parkinsonove bolesti, hronične nesvestice;
                                </li>
                                <li>osobama koje imaju hronične zdravstvene probleme, poput epilepsije, demencije,
                                    artritisa, mišićnih oboljenja, srčanih problema, itd.;
                                </li>
                                <li>paraplegičarima</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Medicinski panik taster pruža niz benefita korisnicima usluge i to kroz:
                            </p>
                            <ul>
                                <li>najbržu moguću reakciju u slučaju iznenadnih zdravstvenih problema;</li>
                                <li>mogućnost reagovanja 24 časa dnevno, 7 dana u nedelji, 365 dana godišnje;
                                </li>
                                <li>lakoću korišćenja i pouzdanosti uređaja;
                                </li>
                                <li>osećaj spokojstva kako za korisnike, tako i za njihove najbliže;</li>
                                <li>omogućavanje korisniku da zadrži privatnost i ostane nezavistan u komforu sopstvenog
                                    doma
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SistemiZaMedicinskuPomoc;
