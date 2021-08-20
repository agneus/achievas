import './details.css';


function Details () {
    return (
        <div className="details">
            <h2>Details</h2>
            <div className="items">
            <div className="firstitem">
                <p>Membership Type</p>
                <p>Status</p>
                <p>Commencement Date</p>
                <p>Expiration Date</p>
                <p>Action</p>
            </div>
            <div className="seconditem">
                <p>Trial</p>
                <p>Active</p>
                <p>1/04/2020</p>
                <p>24/7/2021</p>
                <p><a href="#">Renew</a>
                <a href="#">Upgrade</a>
                </p>
                
            </div>
            </div>
        </div>
    )
};

export default Details;