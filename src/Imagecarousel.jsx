import React, { useRef } from 'react';
import Mycard from './Mycard.jsx';
import './Imagecarousel.css';

const Imagecarousel = () => {
    const boxRef = useRef(null);

    const btnpressprev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
            console.log(width);
        }
    };

    const btnpressnext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
            console.log(width);
        }
    };

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

            <div className="product-container" ref={boxRef}>
                <Mycard cardno='1' image="src/image1.png" />
                <Mycard cardno='2' image="src/image2.png" />
                <Mycard cardno='3' image="src/image3.png" />
                <Mycard cardno='4' image="src/image4.png" />
                <Mycard cardno='5' image="src/image5.png" />
            </div>
        </div>
    );
};

export default Imagecarousel;
