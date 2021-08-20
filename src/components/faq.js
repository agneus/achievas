import React from 'react';
import './faq.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const FAQ = ({question, answer}) => {
    return (
        <div className="faq">
            <div className="question">
                <h2>{question}</h2>
                <ArrowDropDownIcon className="arrow"/>
            </div>
            <p>{answer}</p>

        </div>
    )
}

export default FAQ;