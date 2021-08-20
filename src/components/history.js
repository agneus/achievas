import './history.css';
import Transaction from './transaction';


function History () {
    return (
        <div className="history">
            <h2>Payment History</h2>
            <Transaction invoice="Invoice" description="Description"
            amount="Amount" date="Date"/>
            <Transaction invoice="6789" description="Gold Membership"
            amount="HK$500" date="03/04/2020"/>
            <Transaction invoice="6789" description="Gold Membership"
            amount="HK$500" date="03/04/2020"/>
            <Transaction invoice="6789" description="Gold Membership"
            amount="HK$500" date="03/04/2020"/>

        </div>
    )
}

export default History;