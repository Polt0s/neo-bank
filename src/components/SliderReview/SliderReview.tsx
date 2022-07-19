import React from 'react';

interface ISliderReview {
    data: Array<React.ReactElement>;
    slidesPerView?: number;
}

export const SliderReview = ({ data, slidesPerView }: ISliderReview) => {
    const [current, setCurrent] = React.useState<number>(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(data) || length <= 0) {
        return null;
    }

    return (
        <div>
            <button onClick={prevSlide}>prev</button>
            <button onClick={nextSlide}>next</button>

            {data.map((item, index) => (
                <div key={index}>
                    {index === current && item}
                </div>
            ))}
        </div>
    );
};
