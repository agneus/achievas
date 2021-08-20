import './account.css';
import Header from './Header';
import Footer from './Footer';
import Profile from './profile';
import Details from './details';
import History from './history';

function Account () {
    return (
        <div>
        <Header/>
        <div className="account">
            <h1>My Account</h1>
            <Profile/>
            <Details/>
            <History/>
        </div>

        <Footer/>
        </div>
    )
};

export default Account;


