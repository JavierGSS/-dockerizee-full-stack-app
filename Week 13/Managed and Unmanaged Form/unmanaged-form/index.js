function SignUp() {
    function handle() {
        console.log(document.getElementById('year').value);
    }

    return (
        <>
            <select id="year">
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
            </select>
            <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp />,
    document.getElementById('root')
);