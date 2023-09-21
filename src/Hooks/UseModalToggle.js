import { useState } from 'react';

function UseModalToggle() {
    const [showModal, setShowModal] = useState(true);

    const openModal = () => {
        setShowModal(true); 
        if (typeof window !== 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        setShowModal(false); 
        document.body.style.overflow = 'unset';
    };

    return {
        showModal,
        setShowModal,
        openModal,
        closeModal
    };
}

export default UseModalToggle;