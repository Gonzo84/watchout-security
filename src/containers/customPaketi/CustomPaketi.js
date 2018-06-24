import React, {Component} from 'react';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip'


import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/header/Header';
import FormGroup from '../../components/formGroup/FormGroup'

import ImageMapper from 'react-image-mapper';


import classes from './CustomPaketi.scss';

import paketiPoMeriImg from '../../assets/images/customPaketi/custom.jpg'
import gradjevinskiPlanImg from '../../assets/images/customPaketi/bluprint.png';

const MAP = {
    name: "my-map",
    areas: [
        {shape: "circle", coords: [72, 95, 18]},
        {shape: "circle", coords: [72, 292, 18]},
        {shape: "circle", coords: [207, 305, 18]},
        {shape: "circle", coords: [207, 358, 18]},
        {shape: "circle", coords: [207, 545, 18]},
        {shape: "circle", coords: [320, 470, 18]},
        {shape: "circle", coords: [355, 392, 18]},
        {shape: "circle", coords: [355, 365, 18]},
        {shape: "circle", coords: [320, 305, 18]},
        {shape: "circle", coords: [320, 108, 18]},
        {shape: "circle", coords: [665, 238, 18]},
        {shape: "circle", coords: [445, 498, 18]},
        {shape: "circle", coords: [405, 268, 18]},
        {shape: "circle", coords: [72, 365, 18]},
        {shape: "circle", coords: [815, 108, 18]},
        {shape: "circle", coords: [885, 38, 18]},
        {shape: "circle", coords: [885, 615, 18]},
        {shape: "circle", coords: [772, 543, 18]}
    ]
};

const tooltipMap = ['PARKING RAMPA', 'CITAC KARTICA', 'CITAC KARTICA 2', 'IP DOME KAMERA', 'SPOLJNA SIRENA', 'DETEKTOR DIMA', 'INTERFON SLUSALICA', 'TASTATURA SIFRATOR', 'DETEKTOR POKRETA', 'DALJINSKI UPRAVLJAC', 'PANIK TASTER', 'NVR SNIMAC', 'ALARMNA CENTRALA', 'INTERFON POZIVNO TABLO', 'IP BULLET KAMERA', 'IC BARIJERA', 'IC BARIJERA', 'IC BARIJERA', 'SPOLJNI DETEKTOR POKRETA'];

class CustomPaketi extends Component {
    state = {
        formValid: false
    };

    checkFormValidity = (form) => {
        if (form.checkValidity()) {
            this.setState({formValid: true})
        }
    };

    render() {
        const headerConfig = {
            backgroundImg: paketiPoMeriImg,
            title: 'PAKETI PO VASOJ MERI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu justo malesuada, vestibulum nibh sed, congue neque. Fusce id erat felis. Aenean vel tortor libero. Quisque vitae purus eget magna porta vehicula.'
        };
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
        let grupaPitanja = null;
        if (this.state.formValid) {
            grupaPitanja =
                <div className="row">
                    <div className="col-12 col-sm-6 ws-info">
                        <h6>Grupa Pitanja 2</h6>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. </p>
                    </div>

                    <div className="col-12 col-sm-6 ws-questions">
                        <div>
                                <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                            <form>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                            </form>
                        </div>
                        <div>
                               <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                            <form>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                                <div>
                                    <input type="radio" name="fruit" value="apple"
                                           className="btn ws-btn-option"/>
                                    <label>Lorem Ipsum is simply</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        }

        const prvaGrupa = {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            config: [{
                groupName: 'first',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'first',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'first',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'first',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }]
        };

        const drugaGrupa = {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            config: [{
                groupName: 'second',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'second',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'second',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }]
        };

        const trecaGrupa = {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            config: [{
                groupName: 'third',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'third',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }, {
                groupName: 'third',
                value: 'trt',
                label: 'Lorem Ipsum is simply',
                onChangeHandler: () => this.checkFormValidity(this.formEl1)
            }]
        };
        return (
            <Aux>
                <ReactTooltip class='bluprintTooltip' getContent={() => {
                    return tooltipContent
                }} className={classes.Tooltip}/>
                <Header {...headerConfig}/>


                <div className="ws-body">

                    <div className="ws-border-holder"></div>

                    <div className="ws-simple-style-cont ws-building-plan">
                        <div className="container">
                            <div className="ws-plan" data-tip=''>
                                <ImageMapper src={gradjevinskiPlanImg}
                                             map={MAP}
                                             strokeColor={'rgba(0, 0, 0, 0)'}
                                             onMouseEnter={enterArea.bind(this)}
                                             onMouseLeave={leaveArea.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className={[classes.Form, 'ws-qa-form', 'ws-simple-style-cont'].join(' ')}>
                        <div className="container">
                            <div className="ws-card">
                                <div className="ws-centered-info-block ws-card-header">
                                    <h6>Q&A Forma</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                    </p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. </p>
                                </div>
                                <div className="ws-body">
                                    <form className="row" ref={form => (this.formEl1 = form)}>
                                        <div className="col-12 col-sm-6 ws-info">
                                            <h6>Grupa Pitanja 1</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since
                                                the
                                                1500s,
                                                when an unknown printer took a galley of type and scrambled it to
                                                make a
                                                type specimen book. </p>
                                        </div>

                                        <div className="col-12 col-sm-6 ws-questions">
                                            <FormGroup {...prvaGrupa} />
                                            <FormGroup {...drugaGrupa} />
                                            <FormGroup {...trecaGrupa} />
                                        </div>
                                    </form>
                                    {grupaPitanja}
                                </div>
                                <div className="ws-footer">
                                    <button className="btn ws-btn ws-btn-confirm"
                                            disabled={!this.state.formValid}>Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default CustomPaketi;