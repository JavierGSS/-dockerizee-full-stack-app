const ATMDeposit = ({onChange, isDeposit}) => {

    // we add an array 'choice' to specify whether we deal with a deposit or not:
    const choice = ["Deposit", "Cash Back"];
    return (
        <label className="label-huge">

            {/*we include an h3 tag that will print 'Deposit' or 'Cash Back' depending on 
            whether we deal with a deposit or not. Notice that Number will translate a 
            Boolean into a 0 (when F) or 1 (when T), so that we pick the correct element
            in the choice array. The default number is 0, so the default text is 'Deposit': */}
            <h3>{choice[Number(!isDeposit)]}</h3> 
            <input type="number" id="input" onChange={onChange} placeholder="Enter amount..."></input>
            <input type="submit" value="Submit"></input>
        </label>
        
    );
};
 
const Account = () => {
    let deposit = 0; //state of this transaction
    const [totalState, setTotalState] = React.useState(0);

    // we create a new state variable to handle deposits; we initialize it with true:
    const [isDeposit, setIsDeposit] = React.useState(true);
    let status = `Account balance: $${totalState}`;
    console.log('Account rendered');

    const handleChange = event => {
        console.log(`handle change: ${event.target.value}.`);
        deposit = Number(event.target.value);
    };

    const handleSubmit = event => {

        // we create a new variable newTotal whose value depends on whether 
        // isDeposit is true or false:
        let newTotal = totalState;

        // this series of if-statements determine the newTotal variable and restricts withdraws:
        if (isDeposit == true) {
            newTotal = totalState + deposit;
         } else {
            if (totalState - deposit >= 0) {
                newTotal = totalState - deposit;
            } else {
                if (totalState > 0) {
                    alert(`Insufficient funds. Please enter an amount less than or equal to $${totalState}.`);
                    newTotal = totalState;
                }
                if (totalState == 0) {
                    alert(`Your accout balance is $${totalState}. You are not authorized to withdraw any money.`);
                    newTotal = totalState;
                }
            }
        }
        
        setTotalState(newTotal);

        // event.target.reset() clears the input field upon submission:
        event.target.reset();
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>

            {/* we add two buttons to handle deposits and cash backs, which fire a state update */}
            <button className="button1" onClick={() => setIsDeposit(true)}>Deposit</button>
            <button className="button2" onClick={() => setIsDeposit(false)}>Cash Back</button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(
    <Account />,
    document.getElementById('root')
);