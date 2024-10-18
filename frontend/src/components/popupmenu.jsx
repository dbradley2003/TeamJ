import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PopupMenu = () => {
    const [show, setShow] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClose = () => setShow(false);

    useEffect(() => {
        setShow(true);  // Show the modal on page load
    }, []);

    const slides = [
        { id: 1, title: "Welcome to World Link Exchange", content: "Please login to access more features." },
        { id: 2, title: "Our Features", content: "We offer collaboration tools, project management, and more." },
        { id: 3, title: "Get Started", content: "Create an account to start using our amazing platform!" },
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

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(slides.length - 1);  // Loop to the last slide
        }
    };

    const navigate = useNavigate();
    return (
        <div className='front-background'>
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{slides[currentSlide].title}</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                        <p>{slides[currentSlide].content}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handlePrevSlide}>
                                Previous
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleNextSlide}>
                               Next
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleLogin}>
                               Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        {/* Modal Backdrop */}
        {show && <div className="modal-backdrop fade show"></div>}
    </div>
    );
};

export default PopupMenu;
