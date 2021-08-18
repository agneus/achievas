import React from 'react'
import './Member.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Member = ({title, subtitle, access}) => {
    return (
        <div className="member">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{access}</p>
            
            
                    <div className="item">
                        <CheckCircleIcon/>
                        <p>Key Concept Video</p>
                    </div>
                    
                    <div className="item">
                        <CheckCircleIcon/>
                        <p>Revision Notes</p>
                    </div>
                    <div className="item">
                        <CheckCircleIcon/>
                        <p>Questions Bank</p>
                    </div>
                    <div className="item">
                        <CancelIcon/>
                        <p>Past Paper Questions</p>
                    </div>
                    
            

        </div>
    )
};

export default Member;