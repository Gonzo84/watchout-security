import React, {Component} from 'react';
import Slider from 'react-slick';

import classes from './Carousel.scss'
import HeaderItem from '../../containers/home/headerItem/HeaderItem';
import ResenjaItem from '../../containers/home/resenjaItem/ResenjaItem';

class Carousel extends Component {
    render() {
        const settings = {
            dots: this.props.dots || true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: parseInt(this.props.slidesToShow),
            slidesToScroll: parseInt(this.props.slidesToScroll) || 1,
            autoplay: true
        };
        const slideItems = this.props.config.map(function (item, index) {
            let slideItem = <img key={index} src={item.backgroundImg} alt=""/>;
            if (item.type === 'header') {
                slideItem = <HeaderItem key={index} backgroundImg={item.backgroundImg} bodyContent={item.bodyContent}/>
            } else if (item.type === 'resenja') {
                slideItem = <ResenjaItem key={index} {...item}/>
            }
            return (
                slideItem
            )
        });
        return (
            <Slider {...settings} className={classes.CarouselBody}>
                {slideItems}
            </Slider>
        );
    }
}

export default Carousel;
