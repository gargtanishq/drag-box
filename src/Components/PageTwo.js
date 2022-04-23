import React from 'react';
import { useNavigate } from "react-router-dom";


const PageTwo = ({ setFromDiffPage }) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        setFromDiffPage(true);
        navigate('/')
    }
    return (
        <div className='pageTwo'>
            <h1>Page 2</h1>
            <a href='https://gargtanishq.github.io/calculator-reactjs/' target="_blank" rel="noreferrer">
                <h2>
                    Open Calculator
                </h2>
                <span className='pg-span'>
                    A simple calculator app
                </span>
            </a>
            <a href='https://event-calendar-app-4e9bf.web.app/' target="_blank" rel="noreferrer">
                <h2>
                    Open Event Calender
                </h2>
                <span className='pg-span'>
                    Check for dates btw Apr 15-18
                </span>
            </a>
            <button onClick={onClickHandler}>Go Back</button>

        </div>
    )
}

export default PageTwo;