import React, { useEffect } from 'react';
import dayjs from 'dayjs';

const TimerClock = ({ setTime, time }) => {
    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = dayjs(new Date()).format('HH:mm:ss');
            setTime(currentTime);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [setTime]);

    return (<span className='timer'>{time}</span>)
}

export default TimerClock;