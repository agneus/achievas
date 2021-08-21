import './trial.css';
import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';

function TrialForm () {

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
            <h1>Trial Membership.</h1>
            <div className="form">
            <form>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Given Name"/>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="text" value={displayname} onChange={(e) => setDisplayname(e.target.value)} placeholder="Display Name"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} placeholder="Re-enter Password"/>
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Name of School"/>
                <input type="number" value={studyyear} onChange={(e) => setStudyyear(e.target.value)} placeholder="Year of Study"/>
                <input type="number" value={donations} onChange={(e) => setDonations(e.target.value)} placeholder="My Donations"/>
                <a href="#" className="button">Apply</a>
            </form>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default TrialForm;