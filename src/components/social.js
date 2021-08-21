import './trial.css';
import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';

function SocialForm () {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [school, setSchool] = useState('');
    const [studyyear, setStudyyear] = useState();
    const [donations, setDonations] = useState();
    return (
        <div>
            <Header/>
        <div className="trial">
            <h1>Social Security Membership</h1>
            <div className="form">
            <form>
                <input type="text" value={firstname} placeholder="Given Name"/>
                <input type="text" value={lastname} placeholder="Last Name"/>
                <input type="email" value={email} placeholder="Email"/>
                <input type="text" value={displayname} placeholder="Display Name"/>
                <input type="password" value={password} placeholder="Password"/>
                <input type="password" value={repassword} placeholder="Re-enter Password"/>
                <input type="text" value={school} placeholder="Name of School"/>
                <input type="number" value={studyyear} placeholder="Year of Study"/>
                <input type="number" value={donations} placeholder="My Donations"/>
                <a href="#" className="button">Apply</a>
            </form>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default SocialForm;