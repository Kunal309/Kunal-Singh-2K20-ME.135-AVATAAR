import React from 'react';

const Mycard = ({ cardno, image }) => {
    return (
        <div className="my-card">
            <img src={image} alt={`Card ${cardno}`} style={{ width: '500px', height: '350px' }} />
        </div>
    );
};

export default Mycard;
