import React, {Component} from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src="https://picsum.photos/500/500" alt=""/>
                    <h3>1</h3>
                </div>
                <div>
                    <img src="https://picsum.photos/500/500" alt=""/>
                    <h3>2</h3>
                </div>
                <div>
                    <img src="https://picsum.photos/500/500" alt=""/>
                    <h3>3</h3>
                </div>
            </Slider>
        );
    }
}

export default Carousel;