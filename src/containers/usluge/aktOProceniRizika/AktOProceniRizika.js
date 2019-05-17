import React, {Component} from 'react';


import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Header from '../../../components/header/Header';

import aktImg from '../../../assets/images/usluge/aktOProceniRizika.jpg'


class AktOProceniRizika extends Component {

    render() {
        window.scrollTo(0, 0);
        const headerConfig = {
            backgroundImg: aktImg,
            title: 'Izrada Akta o proceni rizika u zaštiti lica, imovine i poslovanja',
            description: 'Rizik je donositi odluke u nesigurnom okruženju. Ne donositi ih, takođe je rizik. Warren Buffett'
        };
        return (
            <Aux>
                <Header {...headerConfig}/>

                <div className="ws-body">
                    <div className="ws-border-holder ws-border-holder-min"></div>

                    <div className="ws-triangle-holder">

                        <div className="container">
                            <div className="ws-centered-info-block">
                                <p class="ws-txt-bold">Da li znate da ste prema Zakonu o privatnom obezbeđenju (“Sl. glasnik RS”, br.
                                    104/2013 i 42/2015) u obavezi da posedujete Akt o proceni rizika?
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-first">
                        <div className="container">
                            <p>Cilj izrade ovog Akta jeste da se klijentu predoči stepen rizika kome je izložen on sam,
                                njegova imovina ili poslovanje. Korisnik usluge na ovaj način ima uvid u sve
                                potencijalne neželjene događaje kao i posledice u slučaju njihovog nastanka. Informacije
                                dobijene ovim Aktom se dalje koriste kako bi se korisniku predložilo najbolje moguće
                                bezbednosno rešenje. Celokupno planiranje sistema tehničke zaštite vrši se na osnovu
                                Akta o proceni rizika u zaštiti lica, imovine i poslovanja. Akt o proceni rizika u
                                zaštiti lica, imovine i poslovanja se izrađuje po standardu serije SRPS A.L2.003.
                            </p>
                        </div>
                    </div>


                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Rizici se analiziraju u sledećim oblastima:
                            </p>
                            <ul>
                                <li>od opšth poslovnih aktivnosti;</li>
                                <li>po bezbednost i zdravlje na radu;</li>
                                <li>pravni rizici;</li>
                                <li>od protivpravnog delovanja;</li>
                                <li>od požara;</li>
                                <li>od elementarnih nepogoda i drugih nesreća;</li>
                                <li>od eksplozija;</li>
                                <li>od neusaglašenosti sa standardima;</li>
                                <li>po životnu sredinu;</li>
                                <li>u upravljanju ljudskim resursima;</li>
                                <li>u oblasti informaciono-komunikaciono-telekomunikacijskih sistema;</li>
                            </ul>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt">
                        <div className="container">
                            <p>Dokument je početni korak posle koga sledi detaljan plan rada u cilju realizacije
                                definisanih mera.
                            </p>
                            <p>
                                Watchout Security poseduje Licencu za procenu rizika u zaštiti lica, imovine i
                                poslovanja, izdatu od strane Ministarstva unutrašnjih poslova Republike Srbije i nudi
                                vam mogućnost da vaše poslovanje usaglasite sa Zakonom.

                            </p>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-alt ws-triangle-holder ws-triangle-light">
                        <div className="container">
                            <p>Procena rizika u zaštiti lica, imovine i poslovanja uređuje se Zakonom na način propisan
                                važećim standardom u oblasti privatnog obezbeđenja. Procena rizika se ne vrši za
                                korisnike usluga:
                            </p>
                            <ul>
                                <li>zaštite lica;</li>
                                <li>zaštite objekata za stanovanje;</li>
                                <li>zaštite javnih skupova na kojima redarsku službu obavljaju samo redari;</li>
                                <li>zaštite mikro pravnih lica i preduzetnika.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default AktOProceniRizika;
