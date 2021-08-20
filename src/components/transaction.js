import './transaction.css';

function Transaction({invoice,description,amount,date}) {
    return (
        <div className="transaction">
            <p>{invoice}</p>
            <p>{description}</p>
            <p>{amount}</p>
            <p>{date}</p>
        </div>
    )
}

export default Transaction;