import React, {Component} from 'react';


import classes from './Home.scss';
import SimpleSlider from "../../components/carousel/Carousel";


class Home extends Component {

    render() {
        return (
            <div className= {[classes.wsHeader, classes.wsGradient].join(' ')}>
                <div className="container">
                    <div className={classes.wsSliderCont}>
                        <SimpleSlider/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;