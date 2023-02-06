import OneSlide from './OneSlide'
import Slider from "react-slick";

function SliderImg({hashtag, info}) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <Slider {...settings} className='slide'>
                <div className='slide'>
                    <div className='imgs'>
                        <OneSlide runningCrew={info[hashtag].slice(0, 4)}></OneSlide>
                    </div>
                </div>
                <div className='slide'>
                    <div className='imgs'>
                        <OneSlide runningCrew={info[hashtag].slice(4, 8)}></OneSlide>
                    </div>
                </div>
                <div className='slide'>
                    <div className='imgs'>
                        <OneSlide runningCrew={info[hashtag].slice(8, 12)}></OneSlide>
                    </div>
                </div>
            </Slider>
        </>
    )
}
export default SliderImg;

