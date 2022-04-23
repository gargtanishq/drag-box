import React, { useEffect, useState, lazy } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

// import Footer from './Components/Footer';
const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));


function Home({ fromDiffPage, setFromDiffPage }) {
    const [positionBox, setPositionBox] = useState('');
    const [stylePosition, setStylePosition] = useState();
    const [dragging, setDragging] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const navigate = useNavigate();

    const moveStart = (e) => {
        e.preventDefault();
        setDragging(true);
    }

    const moveEnd = (e) => {
        e.preventDefault();
        setDragging(false);
    }

    const moving = (e) => {
        let parent = document.querySelector('.display-content');
        let parentBox = parent.getBoundingClientRect();
        let draggable = document.querySelector('.box');
        let darggableBox = draggable.getBoundingClientRect();
        e.preventDefault();
        if (dragging) {
            setPositionBox('');
            if ((e.clientX >= parentBox.left && (e.clientX + darggableBox.width <= parentBox.right)) &&
                (e.clientY >= parentBox.top && (e.clientY + darggableBox.height <= parentBox.bottom))
            ) {
                //add darggableBox.width darggableBox.height accoints for
                draggable.style.left = `${e.clientX}px`;
                draggable.style.top = `${e.clientY}px`;
            }
            else {
                //if mouse went out of bounds in Horizontal dir.
                if (e.clientX + darggableBox.width >= parentBox.right) {
                    draggable.style.left = `${parentBox.right - darggableBox.width}px`;
                }
                //if mouse went out of bounds in Vertical dir.
                if (e.clientY + darggableBox.height >= parentBox.bottom) {
                    draggable.style.top = `${parentBox.bottom - darggableBox.height}px`;
                }
            }
        }
    };

    const toggleHeader = (e) => {
        if (e.key === '`') {
            setShowHeader(false);
        } else if (e.key === 'Enter') {
            setShowHeader(true);
        } else {
            return
        }

    };

    const onClickHandler = () => {
        navigate('/PageTwo');
    }

    useEffect(() => {
        document.addEventListener('mousedown', moveStart);
        document.addEventListener('mousemove', moving);
        document.addEventListener('mouseup', moveEnd);
        document.addEventListener('keypress', toggleHeader);

        return () => {
            document.removeEventListener('mousedown', moveStart);
            document.removeEventListener('mousemove', moving);
            document.removeEventListener('mouseup', moveEnd);
            document.addEventListener('keypress', toggleHeader);
        }
    })

    useEffect(() => {
        let box = document.querySelector('.box');
        box.style.top = 'unset';
        box.style.left = 'unset';
        if (fromDiffPage) {
            setStylePosition({
                justifyContent: 'center',
                alignItems: 'center',
            })
            setPositionBox('Center')
            //blue border for 1sec and then romove
            setTimeout(() => {
                setFromDiffPage(false);
            }, 1000)
        }
        if (!showHeader) {
            setStylePosition({
                height: 'calc(100% - 4rem)',
            })
        }
        if (positionBox === 'Center') {
            setStylePosition({
                justifyContent: 'center',
                alignItems: 'center',
                height: showHeader ? '' : 'calc(100% - 4rem)',
            })
        } else if (positionBox === 'Lower Right') {
            setStylePosition({
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: showHeader ? '' : 'calc(100% - 4rem)'
            })
        }
    }, [positionBox, showHeader])

    return (
        <div className="wrapper">
            {showHeader && (
                <Header
                    setPositionBox={setPositionBox}
                    positionBox={positionBox}
                />
            )}
            <Content
                showHeader={showHeader}
                stylePosition={stylePosition}
                positionBox={positionBox}
                fromDiffPage={fromDiffPage}
            // setFromDiffPage={setFromDiffPage}
            />
            <footer>
                <button onClick={onClickHandler}>Go To Page 2</button>
                {/* &copy; Draggable Box */}
            </footer>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;