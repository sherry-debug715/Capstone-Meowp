import React from 'react'
import ReactDom from 'react-dom'
// import '../context/Modal.css'

const MODAL_STYLES = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '32px',
    padding: '20px 10px 24px',
    boxShadow: 'rgb(0 0 0 / 45%) 0px 2px 10px',
    width: '520px',
    minHeight: '650px'
}

const OVERLAY_STYLE = {
    position:'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    // zIndex: 1000

}

export default function Modal( { open, children, onClose }) {
    if(!open) return null
    // if open is false, don't show content; else, render
    // content.
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
