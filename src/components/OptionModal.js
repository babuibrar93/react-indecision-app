import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
     (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose= {props.handleOkayoption}
        contentLabel= "Selected Option"
        closeTimeoutMS= {200}
        className="modal"
        >
        <h3 modal__tittle> Selected Options </h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleOkayoption}> Okay </button>
        </Modal>
    );

export default OptionModal;