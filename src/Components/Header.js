import React, { lazy, Suspense, useState } from 'react';
const TimerClock = lazy(() => import('./TimerClock'));


const Header = ({setPositionBox, positionBox }) => {
    const [time, setTime] = useState();
    return (
        <header>
            <div className='right-content'>
                <span>Position</span>
                <input
                    type="radio"
                    value="Center"
                    name="position-box"
                    onChange={(e) => setPositionBox('Center')}
                    checked={positionBox === 'Center'}
                /> Center
                <input
                    type="radio"
                    value="lower Right"
                    name="position-box"
                    onChange={(e) => setPositionBox('Lower Right')}
                    checked={positionBox === 'Lower Right'}
                /> Bottom Right
            </div>
            <div className='left-content'>
                <span className='text-show-hide'>Press <span className='header-keys'>`</span> key to hide the window. <span className='header-keys'>ENTER</span> to show it again</span>
                <Suspense fallback={<span className='timer'>Getting Timer</span>}>
                    <TimerClock setTime={setTime} time={time} />
                </Suspense>
            </div>
        </header>
    )
}

export default Header;