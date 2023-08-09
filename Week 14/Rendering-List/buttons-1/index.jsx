// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar(props) {
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`);
  

  const {Button} = ReactBootstrap;
  
  const updatedList = props.menuitems.filter((index) => index % 2 != 0); 
  
  const handleClick = e => {
    setClicks([...clicks, e.target.innerHTML]);
    alert(`button clicked: ${e.target.innerHTML}`);
  }
  
  const updateNums = updatedList.map((number, index) => {
      return <Button key={index.toString()} onClick={handleClick}>{number}</Button>;
  })
  
  // note that React needs to have a single Parent
  return <ul>{updateNums}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NavBar menuitems={numbers} />,
  document.getElementById("root")
);
