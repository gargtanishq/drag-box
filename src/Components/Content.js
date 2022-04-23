import React from 'react';

const Content = ({ stylePosition, positionBox, fromDiffPage, showHeader }) => {
    console.log(showHeader);

    return (
        <div className="display-content" style={stylePosition}>
            <div className='box' style={{ border: fromDiffPage ? '5px solid blue' : 'none' }}>
                <span className='text-box'>I'm At <span className='positions'>{positionBox.length !== 0 ? positionBox : 'Dargged'}</span> Position!!</span>
                <span className='text-box'>Drag me around</span>
            </div>
        </div>
    );
}

export default Content;