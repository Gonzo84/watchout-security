import React, {Component} from 'react';


import classes from './Home.scss';
import SimpleSlider from "../../components/carousel/Carousel";


class Home extends Component {

    render() {
        return (
            <div className={classes.Home}>
                <SimpleSlider/>
            </div>
        );
    }
}

export default Home;