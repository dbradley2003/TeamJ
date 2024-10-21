import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../style/popup.css"

const PopupMenu = () => {
    const [show, setShow] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClose = () => setShow(false);

    useEffect(() => {
        setShow(true);  // Show the modal on page load
    }, []);

    const introSection =
    `
    We are the future of decentralized finance. As a cutting-edge decentralized exchange service, 
    we specialize in forex and cryptocurrency trading with a focus on delivering seamless conversions, 
    including our pioneering integration of BRICS payment solutions for participating countries.

    `





    const slides = [
        { id: 1, title: "Welcome to World Link Bank Exchange", content: introSection },
        { id: 2, title: "Get Started", content: "Create an account to start using our amazing platform!" },
    ];

    const handleNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);  // Loop back to the first slide
        }
    };

    const handleLogin = () => {
        navigate('/login')
       
    };

    const handleRegister = () => {
        navigate('/register')
    }

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(slides.length - 1);  // Loop to the last slide
        }
    };

    const navigate = useNavigate();
    return (
        <body class=" z-900bg-gray-900 text-white">
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header d-flex flex-direction column">
                            <h5 className="modal-title">{slides[currentSlide].title}</h5>
                            {/* <button type="button" className="btn-close" onClick={handleClose}></button> */}
                        </div>
                        <div className="modal-body position-relative">
                        
                        {/* Left Arrow */}
  <div className="arrow arrow-left" onClick={handlePrevSlide}>
    &#10094; {/* HTML code for a left arrow symbol */}
  </div>

  {/* Slide Content */}
  <div className="slide-content">
    <p>{slides[currentSlide].content}</p>
  </div>

  {/* Right Arrow */}
  <div className="arrow arrow-right" onClick={handleNextSlide}>
    &#10095; {/* HTML code for a right arrow symbol */}
  </div>
  </div>

                        
                        <div className="modal-footer">
                           
                            <button type="button" className="btn btn-primary" onClick={handleLogin}>
                               Login
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleRegister}>
                               Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        {/* Modal Backdrop */}
        {show && <div className="modal-backdrop fade show"></div>}
    </body>
    );
};

export default PopupMenu;
