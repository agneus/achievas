import React from 'react';
import './faq.css';


const FAQ = ({question, answer}) => {
    return (
        <div className="faq">
            <div className="card">
                <div className="question">
                <h2>{question}</h2>
                </div>
                <div className="answer">
                <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ;