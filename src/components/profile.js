import './profile.css';
import EditIcon from '@material-ui/icons/Edit';


function Profile () {
    return (
        <div className="profile">
        <div className="title">
        <h2>My Profile</h2>
        <EditIcon className="icon"/>
        </div>
        <div className="items">
            <div className="firstitem">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Display Name</p>
                <p>Name of School</p>
                <p>Email Address</p>
            </div>
        </div>
        </div>
    )
}

export default Profile;