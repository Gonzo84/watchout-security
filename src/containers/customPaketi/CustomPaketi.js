import React, {Component} from 'react';


import Aux from '../../hoc/Auxiliary/Auxiliary';


import classes from './CustomPaketi.scss';

import paketiPoMeriImg from '../../assets/images/paketi-po-meri.jpg'
import gradjevinskiPlanImg from '../../assets/images/gradjevinski-plan.jpg'


class CustomPaketi extends Component {

    render() {
        return (
            <Aux>
                <div className="ws-header ws-gradient">
                    <div className="container">
                        <div className="ws-slider-cont">
                            <img src={paketiPoMeriImg} alt="alt"/>
                        </div>
                    </div>
                </div>


                <div className="ws-body">


                    <div className="ws-border-holder"></div>

                    <div className="ws-simple-style-cont ws-building-plan">
                        <div className="container">
                            <div className="ws-plan">
                                <img src={gradjevinskiPlanImg} alt="plan"/>
                            </div>
                        </div>
                    </div>

                    <div className="ws-simple-style-cont ws-qa-form">
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
                                    <div className="row">
                                        <div className="col-12 col-sm-6 ws-info">
                                            <h6>Grupa Pitanja 1</h6>
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
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                               <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Da
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Ne
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Ne znam
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

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
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                               <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 ws-info">
                                            <h6>Grupa Pitanja 3</h6>
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
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                               <span>
                                    <i className="fas fa-question-circle"></i>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </span>
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 ws-info">
                                            <h6>Grupa Pitanja 4</h6>
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
                                                <ul>
                                                    <li>
                                                        <button type="button" className="btn ws-btn-option"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn ws-btn-option ws-active"></button>
                                                        Lorem Ipsum is simply
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ws-footer">
                                    <button className="btn ws-btn ws-btn-confirm">Submit</button>
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