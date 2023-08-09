function SignUp(){

    const [values, handleChange] = useForm(
        {year:'',
        firstName:'',
        lastName:'',
        age:'',
        id:'',
        checkbox: false,
        birth:''
    });

    const [errors, setError] = React.useState({
        yearError:'',
        firstNameError:'',
        lastNameError:'',
        ageError:'',
        idError:'',
        birthError:'',
    });

    function validate() {
        if (!values.year) {
            setError({...errors, yearError:'Please enter a year.'})
        } 
        else if (!values.firstName) {
            setError({...errors, firstNameError:'Please enter your first name.'})
        }
        else if (!values.lastName) {
            setError({...errors, lastNameError:'Please enter your last name.'})
        } 
        else if (!values.age) {
            setError({...errors, ageError:'Please enter your age.'})
        }
        else if (!values.id) {
            setError({...errors, idError:'Please enter your ID.'})
        }
        else if (!values.birth) {
            setError({...errors, birthError:'Please enter your birthday.'})
        } else {
            setError({
                ...errors,
                yearError:'',
                firstNameError:'',
                lastNameError:'',
                ageError:'',
                idError:'',
                birthError:''
            })
        }
    }

    function handle() {
        validate();
        console.log('Values: ', values);
    }

    function fun() {
        if (`${values.lastName}`.toLowerCase().includes('garcia') == true) {
            alert(`Mr(s). ${values.lastName}, stop playing games. You were born on ${values.birth}.`);
        } 
        else if (!values.lastName || !values.birth) {
            alert('Please enter a valid last name.');
        }
        else {
            alert(`Mr(s). ${values.lastName}, good evening. You were born on ${values.birth}.`);
        }
    }

    return (
        <>
            <h1>Hello!</h1>
            <h3 style={{marginTop: '-15px', marginBottom: '0px'}}>Please select:</h3>
            <select name="year" id="year" value={values.year} onChange={handleChange} style={{marginBottom: '8px'}}>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
            <div style={{color: 'red'}}>{errors.yearError}</div>

            <div>First Name</div>
            <input value={values.firstName} id ="firstName" name="firstName" type="text" onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.firstNameError}</div>
            <div>Last Name</div>
            <input value={values.lastName} name="lastName" type="text" onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.lastNameError}</div>
            <div>Age</div>
            <input value={values.age} name="age" type="number" onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.ageError}</div>
            <div>ID</div>
            <input value={values.id} name="id" type="number" onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.idError}</div>
            <div>Date of birth</div>
            <input value={values.birth} name="birth" type="date" id="birth" onChange={handleChange}
                min="1900-01-01" max="2050-12-31">
            </input>
            <div style={{color: 'red'}}>{errors.birthError}</div>

            <div><input value={values.checkbox} name="checkbox" type="checkbox" onChange={handleChange} />Remember me</div>
            
            <div style={{marginTop: '8px'}}><button onClick={handle}>Submit1</button></div>

            <div style={{height: '8px'}}></div>
            <div><u>Response from manager:</u></div>

            <div><button style={{marginTop: '8px'}} onClick={fun}>Submit2</button></div>
        </>
    );
}

ReactDOM.render(
    <SignUp />,
    document.getElementById('root')
)