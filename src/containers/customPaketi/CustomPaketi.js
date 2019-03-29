import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'


import Aux from '../../hoc/Auxiliary/Auxiliary';
import FormGroup from '../../components/formGroup/FormGroup'

import ImageMapper from 'react-image-mapper';


import classes from './CustomPaketi.scss';

import gradjevinskiPlanImg from '../../assets/images/customPaketi/bluprint.png';
import h4 from "eslint-plugin-jsx-a11y/src/util/implicitRoles/h4";

const MAP = {
    name: "my-map",
    areas: [
        {shape: "circle", coords: [218, 89, 16]},
        {shape: "circle", coords: [183, 481, 16]},
        {shape: "circle", coords: [338, 329, 16]},
        {shape: "circle", coords: [459, 693, 16]},
        {shape: "circle", coords: [516, 456, 16]},
        {shape: "circle", coords: [649, 265, 16]},
        {shape: "circle", coords: [813, 542, 16]},
        {shape: "circle", coords: [1075, 157, 16]}
    ]
};

const tooltipMap = [{
    title: 'IP  kamera',
    content: 'Element sistema video obezbeđenja čijom se pojavom smanjuje rizik od protivpravnih delovanja, viši kvalitet digitalne kamere omogućava kvalitetniji proces osmatranja, snimanja i odvraćanja...'
}, {
    title: 'Senzor pokreta',
    content: 'Element protivprovalnog sistema koji ima za cilj ranu detekciju ulaska neovlašćenog lica u štićeni prostor, detektuje sve vrste pomeranja u štićenoj zoni i informacije šalje alarmnoj centrali...'
}, {
    title: 'Senzor za vodu',
    content: 'Element sistema tehničke zaštite koji detektuje pojavu vode i shodno programiranom modu, šalje informacije o alarmnoj situaciji zainteresovanom subjektu...'
}, {
    title: 'Video interfon',
    content: 'Element sistema kontrole pristupa u štićeni prostor i za cilj da smanji rizik od neovlašćenih ulaza, podiže nivo bezbednosti, olakšava daljinsku kontrolu nad kapijom ili vratima...'
}, {
    title: 'Protivpožarni detektor',
    content: 'Element protivpožarnog sistema koji ima za cilj smanjenje rizika od požara radnim otkrivanje i upozorenjem, detektuje dim ili povišenu temperaturu u zoni delovanja...'
}, {
    title: 'Panik taster',
    content: 'Samostalni uređaj ili kao element protivprepadnog sistema čija je najbitnija funkcija zaštita lica pravovremenom tihom ili zvučnom dojavom, i alarmiranje i obaveštavanje nadležnih lica...'
}, {
    title: 'Spoljna sirena',
    content: 'Element alarmnog sistema koji ima za cilj zvučnu i svetlosnu signalizaciju alarmnog stanja, uglavnom su antisabotažno zaštićene čime je smanjen rizik od sabotaže...'
}, {
    title: 'HDCVI kamera',
    content: 'Element sistema video obezbeđenja čijom se pojavom smanjuje rizik od protivpravnih delovanja, viši kvalitet analogne kamere omogućava kvalitetniji proces osmatranja, snimanja i odvraćanja...'
}];

class CustomPaketi extends Component {
    state = {
        formValid: false,
        prvaGrupa: {
            name: 'Da li na štićenom objektu posedujete?',
            questions: {
                "Akt o proceni rizika u zaštiti lica, imovine i poslovanja": false,
                "Plan obezbeđenja": false,
                "Grafički prikaz elemenata sistema tehničke zaštite": false
            }
        },
        drugaGrupa: {
            name: 'Da li na štićenom objektu posedujete?',
            questions: {
                "Fizičku zaštitu": false,
                "Tehničku zaštitu": false,
                "Fizičko-tehničku zaštitu": false
            }
        },
        trecaGrupa: {
            name: 'Da li posedujete neku vrstu sistema tehničke šaštite?',
            questions: {
                "Alarmni sistem": false,
                "Sistem video obezbeđenja": false,
                "Kontrola pristupa (čitači, interfoni)": false
            }
        },
        cetvrtaGrupa: {
            name: 'Da li želite da štitite?',
            questions: {
                "Spoljašnji prostor": false,
                "Unutrašnji prostor": false,
                "Perimetar": false
            }
        },
        petaGrupa: {
            name: 'Da li želite da se neovlašćeni ulazak u štićeni prostor?',
            questions: {
                "Alarmira preko alarmnog sistema": false,
                "Snimi preko sistema video obezbeđenja": false,
                "Onemogući fizičkom barijerom": false
            }
        },
        sestaGrupa: {
            name: 'Da li želite da se prosledi informacija o neovlašćenom ulasku u objekat?',
            questions: {
                "Vama kao korisniku sistema": false,
                "Kontrolnom centru": false,
                "Vama i kontrolnom centru": false
            }
        },
        sedmaGrupa: {
            name: 'Da li želite da se uzrok dojave sa štićenog objekta utvrđuje?',
            questions: {
                "Od strane nekog od lica koje ste Vi ovlastili": false,
                "Od strane službenika obezbeđenja iz kontrolnog centra": false,
                "Od strane službenika obezbeđenja u interventnoj patroli": false
            }
        },
        osmaGrupa: {
            name: 'Da li želite da instalirane sisteme tehničke zaštite održavamo?',
            questions: {
                "Preventivno": false,
                "Korektivno": false,
                "Preventivno i korektivno": false
            }
        },
        devetaGrupa: {
            name: 'Da li želite da poboljšate poslovne procese kroz?',
            questions: {
                "Kontrolu radnog vremena zaposlenih": false,
                "Kontrolu voznog parka i parking prostora": false,
                "Kontrolu kretanja posetilaca u Vašem objektu": false
            }
        },
        contactForm: {
            name: '',
            mail: '',
            comment: ''
        }
    };

    checkFormValidity = (form) => {
        if (form.checkValidity() && this.state.contactForm.name !== '' && this.state.contactForm.mail !== '') {
            this.setState({formValid: true})
        } else {
            this.setState({formValid: false})
        }
    };

    onContactFormChange = (event) => {
        const currentState = {...this.state};
        const prop = event.target.name;
        const value = event.target.value;
        currentState.contactForm[prop] = value;

        this.setState({...currentState});
        this.checkFormValidity(this.formEl1);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log('state ', this.state)
    };

    updateState = (groupName, event) => {
        const {questions} = {...this.state[groupName]};
        const currentState = questions;
        const question = event.target.value;
        currentState[question] = !currentState[question];

        this.setState({question: currentState});
    };

    render() {
        const enterArea = function (area, index, event) {
            tooltipContent = tooltipMap[index];
            const tooltip = document.getElementsByClassName('bluprintTooltip')[0];
            if (tooltip && tooltip.classList) {
                tooltip.classList.remove(classes.hide);
                tooltip.classList.add(classes.show);
            }
        };
        const leaveArea = function (area, index, event) {
            tooltipContent = null;
            const tooltip = document.getElementsByClassName('bluprintTooltip')[0];
            if (tooltip && tooltip.classList) {
                tooltip.classList.remove(classes.show);
                tooltip.classList.add(classes.hide);
            }
        };
        let tooltipContent = null;

        const prvaGrupa = {
            groupName: 'prvaGrupa',
            question: 'Da li na štićenom objektu posedujete?',
            state: this.state,
            config: [{
                value: 'Akt o proceni rizika u zaštiti lica, imovine i poslovanja',
                label: 'Akt o proceni rizika u zaštiti lica, imovine i poslovanja',
                onChangeHandler: this.updateState.bind(this, 'prvaGrupa')
            }, {
                value: 'Plan obezbeđenja',
                label: 'Plan obezbeđenja',
                onChangeHandler: this.updateState.bind(this, 'prvaGrupa')
            }, {
                value: 'Grafički prikaz elemenata sistema tehničke zaštite',
                label: 'Grafički prikaz elemenata sistema tehničke zaštite',
                onChangeHandler: this.updateState.bind(this, 'prvaGrupa')
            }]
        };
        const drugaGrupa = {
            groupName: 'drugaGrupa',
            question: 'Da li na štićenom objektu posedujete?',
            state: this.state,
            config: [{
                value: 'Fizičku zaštitu',
                label: 'Fizičku zaštitu',
                onChangeHandler: this.updateState.bind(this, 'drugaGrupa')
            }, {
                value: 'Tehničku zaštitu',
                label: 'Tehničku zaštitu',
                onChangeHandler: this.updateState.bind(this, 'drugaGrupa')
            }, {
                value: 'Fizičko-tehničku zaštitu',
                label: 'Fizičko-tehničku zaštitu',
                onChangeHandler: this.updateState.bind(this, 'drugaGrupa')
            }]
        };
        const trecaGrupa = {
            groupName: 'trecaGrupa',
            question: 'Da li posedujete neku vrstu sistema tehničke šaštite?',
            state: this.state,
            config: [{
                value: 'Alarmni sistem',
                label: 'Alarmni sistem',
                onChangeHandler: this.updateState.bind(this, 'trecaGrupa')
            }, {
                value: 'Sistem video obezbeđenja',
                label: 'Sistem video obezbeđenja',
                onChangeHandler: this.updateState.bind(this, 'trecaGrupa')
            }, {
                value: 'Kontrola pristupa (čitači, interfoni)',
                label: 'Kontrola pristupa (čitači, interfoni)',
                onChangeHandler: this.updateState.bind(this, 'trecaGrupa')
            }]
        };
        const cetvrtaGrupa = {
            groupName: 'cetvrtaGrupa',
            question: 'Da li želite da štitite?',
            state: this.state,
            config: [{
                value: 'Spoljašnji prostor',
                label: 'Spoljašnji prostor',
                onChangeHandler: this.updateState.bind(this, 'cetvrtaGrupa')
            }, {
                value: 'Unutrašnji prostor',
                label: 'Unutrašnji prostor',
                onChangeHandler: this.updateState.bind(this, 'cetvrtaGrupa')
            }, {
                value: 'Perimetar',
                label: 'Perimetar',
                onChangeHandler: this.updateState.bind(this, 'cetvrtaGrupa')
            }]
        };
        const petaGrupa = {
            groupName: 'petaGrupa',
            question: 'Da li želite da se neovlašćeni ulazak u štićeni prostor?',
            state: this.state,
            config: [{
                value: 'Alarmira preko alarmnog sistema',
                label: 'Alarmira preko alarmnog sistema',
                onChangeHandler: this.updateState.bind(this, 'petaGrupa')
            }, {
                value: 'Snimi preko sistema video obezbeđenja',
                label: 'Snimi preko sistema video obezbeđenja',
                onChangeHandler: this.updateState.bind(this, 'petaGrupa')
            }, {
                value: 'Onemogući fizičkom barijerom',
                label: 'Onemogući fizičkom barijerom',
                onChangeHandler: this.updateState.bind(this, 'petaGrupa')
            }]
        };
        const sestaGrupa = {
            groupName: 'sestaGrupa',
            question: 'Da li želite da se prosledi informacija o neovlašćenom ulasku u objekat?',
            state: this.state,
            config: [{
                value: 'Vama kao korisniku sistema',
                label: 'Vama kao korisniku sistema',
                onChangeHandler: this.updateState.bind(this, 'sestaGrupa')
            }, {
                value: 'Kontrolnom centru',
                label: 'Kontrolnom centru',
                onChangeHandler: this.updateState.bind(this, 'sestaGrupa')
            }, {
                value: 'Vama i kontrolnom centru',
                label: 'Vama i kontrolnom centru',
                onChangeHandler: this.updateState.bind(this, 'sestaGrupa')
            }]
        };
        const sedmaGrupa = {
            groupName: 'sedmaGrupa',
            question: 'Da li želite da se uzrok dojave sa štićenog objekta utvrđuje?',
            state: this.state,
            config: [{
                value: 'Od strane nekog od lica koje ste Vi ovlastili',
                label: 'Od strane nekog od lica koje ste Vi ovlastili',
                onChangeHandler: this.updateState.bind(this, 'sedmaGrupa')
            }, {
                value: 'Od strane službenika obezbeđenja iz kontrolnog centra',
                label: 'Od strane službenika obezbeđenja iz kontrolnog centra',
                onChangeHandler: this.updateState.bind(this, 'sedmaGrupa')
            }, {
                value: 'Od strane službenika obezbeđenja u interventnoj patroli',
                label: 'Od strane službenika obezbeđenja u interventnoj patroli',
                onChangeHandler: this.updateState.bind(this, 'sedmaGrupa')
            }]
        };
        const osmaGrupa = {
            groupName: 'osmaGrupa',
            question: 'Da li želite da instalirane sisteme tehničke zaštite održavamo?',
            state: this.state,
            config: [{
                value: 'Preventivno',
                label: 'Preventivno',
                onChangeHandler: this.updateState.bind(this, 'osmaGrupa')
            }, {
                value: 'Korektivno',
                label: 'Korektivno',
                onChangeHandler: this.updateState.bind(this, 'osmaGrupa')
            }, {
                value: 'Preventivno i korektivno',
                label: 'Preventivno i korektivno',
                onChangeHandler: this.updateState.bind(this, 'osmaGrupa')
            }]
        };
        const devetaGrupa = {
            groupName: 'devetaGrupa',
            question: 'Da li želite da poboljšate poslovne procese kroz?',
            state: this.state,
            config: [{
                value: 'Kontrolu radnog vremena zaposlenih',
                label: 'Kontrolu radnog vremena zaposlenih',
                onChangeHandler: this.updateState.bind(this, 'devetaGrupa')
            }, {
                value: 'Kontrolu voznog parka i parking prostora',
                label: 'Kontrolu voznog parka i parking prostora',
                onChangeHandler: this.updateState.bind(this, 'devetaGrupa')
            }, {
                value: 'Kontrolu kretanja posetilaca u Vašem objektu',
                label: 'Kontrolu kretanja posetilaca u Vašem objektu',
                onChangeHandler: this.updateState.bind(this, 'devetaGrupa')
            }]
        };
        return (
            <Aux>
                <ReactTooltip class='bluprintTooltip' getContent={() => {
                    if (tooltipContent) {
                        return (
                            <div className="ws-tooltip-container">
                                <div className="ws-tooltip-title">{tooltipContent.title}</div>
                                <div className="ws-tooltip-content">{tooltipContent.content}</div>
                            </div>)
                    }
                    return tooltipContent
                }} className={classes.Tooltip}/>


                <div className="ws-body">


                    <div className="ws-building-plan ws-header ws-gradient ws-simple-style-cont">
                        <div className="container">
                            <div className={classes.TitleHolder}><h4>PAKETI PO VAŠOJ MERI</h4></div>
                            <div className="ws-plan" data-tip=''>
                                <ImageMapper src={gradjevinskiPlanImg}
                                             map={MAP}
                                             strokeColor={'rgba(0, 0, 0, 0)'}
                                             onMouseEnter={enterArea.bind(this)}
                                             onMouseLeave={leaveArea.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={[classes.Form, 'ws-qa-form', 'ws-simple-style-cont', 'ws-alt', 'ws-simple-style-cont'].join(' ')}>
                        <div className="ws-triangle-reverse-holder ws-triangle-light"></div>
                        <div className="container">
                            <form ref={form => (this.formEl1 = form)} onSubmit={this.onFormSubmit}>
                                <div className="ws-card">
                                    <div className="ws-centered-info-block ws-card-header">
                                        <h6>Bezbednosna-Resenja - Custom-Paketi</h6>
                                        <p>U cilju kreiranja paketa koji su 100% prilagođeni Vama i individualnim
                                            potrebama
                                            za bezbednosnim rešenjima, pripremili smo par pitanja na osnovu kojih ćemo
                                            zajendički doći do najefikasnijeg paketa usluga.
                                        </p>
                                        <p>Odgovori na pitanja se prosleđuju našim kolegama iz sektora prodaje koji će
                                            Vas
                                            kontaktirati u najkraćem roku sa predlogom rešenja.</p>
                                    </div>
                                    <div className="ws-body">

                                        <div className="ws-questions">
                                            <FormGroup {...prvaGrupa} />
                                            <FormGroup {...drugaGrupa} />
                                            <FormGroup {...trecaGrupa} />
                                            <FormGroup {...cetvrtaGrupa} />
                                            <FormGroup {...petaGrupa} />
                                            <FormGroup {...sestaGrupa} />
                                            <FormGroup {...sedmaGrupa} />
                                            <FormGroup {...osmaGrupa} />
                                            <FormGroup {...devetaGrupa} />
                                        </div>

                                    </div>
                                </div>


                                <div className="ws-card ws-contact-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div>
                                                <h4>KONTAKT FORMA</h4>
                                                <p>Poštovani korisnici, popunite Vaše kontakt podatke i neki od naših
                                                    menadžera će Vas kontaktirati kako biste specificirali svoj
                                                    zahtev.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className={classes.ContactForm}>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Ime i prezime / Naziv organizacije"
                                                    onChange={this.onContactFormChange}/>
                                                <input
                                                    name="mail"
                                                    type="mail"
                                                    placeholder="e-mail"
                                                    onChange={this.onContactFormChange}/>
                                                <textarea
                                                    name="comment"
                                                    type="text"
                                                    placeholder="Tekst"
                                                    onChange={this.onContactFormChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ws-footer">
                                        <button className="btn ws-btn ws-btn-confirm"
                                                disabled={!this.state.formValid}
                                                type="submit">Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default CustomPaketi;
