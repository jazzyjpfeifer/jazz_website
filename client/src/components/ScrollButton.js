import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {FaArrowUp} from "react-icons/all";
import './ScrollButton.scss'

const ScrollButton = () => {

        const [visible, setVisible] = useState(false);


        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 400){
                setVisible(true)
            } else if (scrolled <= 400) {
                setVisible(false)
            }
        };

            const scrollToTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior:"smooth"
                });
                window.history.pushState("", "", "/");
            };

            window.addEventListener('scroll', toggleVisible);


        return (
            <Button className="btn-dark btn-scroll animate__animated animate__fadeIn"
                    style={{display: visible ? 'inline' : 'none'}}
                    onClick={scrollToTop}
            >
                <FaArrowUp />
            </Button>
        );
}

export default ScrollButton;
