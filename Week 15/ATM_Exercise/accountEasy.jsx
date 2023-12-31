const ATMDeposit = ({onChange}) => {
    return (
        <label className="label-huge">
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit" value="Submit"></input>
        </label>
        
    );
};
 
const Account = () => {
    let transactionState = 0;
    const [totalState, setTotalState] = React.useState(0);
    let status = `Account balance: $${totalState}`;
    console.log('Account rendered');
    alert(status);

    const handleChange = event => {
        console.log(`handle change: ${event.target.value}.`);
        transactionState = Number(event.target.value);
    };

    const handleSubmit = event => {
        setTotalState(totalState + transactionState);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(
    <Account />,
    document.getElementById('root')
);