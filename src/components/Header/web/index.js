import React from 'react'
import './web.css'

function web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                    <i class="fi fi-rr-edit option-icon"></i> Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                    <i class="fi fi-rs-laptop option-icon"></i> Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                    <i class="fi fi-rr-briefcase option-icon"></i> Work
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                    <i class="fi fi-rs-user option-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}

export default web