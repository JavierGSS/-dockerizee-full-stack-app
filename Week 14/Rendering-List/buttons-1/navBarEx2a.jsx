// Ex 2 - remove any item from navbar with less than 2 in stock
function NavBar({ stockitems, minstock }) {
  const [stock, setStock] = React.useState(stockitems);
  const [cart, setCart] = React.useState([]);
  const { Button } = ReactBootstrap;
  console.log(cart);

  const cartItem = e => {
    let [name, num] = e.target.innerHTML.split(":");
    let theItem = stock.filter(item => item.name == name);
    setCart([...cart, ...theItem]);
    let newStock = stock.map(item => {
      if (item.name == name) {
      item.instock--;
      return item;
      }
    });
    setStock(newStock);
    let newList = stock.filter(item => item.instock > minstock);
    setStock(newList);
    console.log(newList);
  };

  let list2 = cart.map((item, index) => {
    return (
      <Button onClick={cartItem} key={index.toString()}>
        {item.name}
      </Button>
    );
  });

  let list1 = stock.map((item, index) => {
    return (
      <Button onClick={cartItem} key={index.toString()}>
        {item.name}:{item.instock}
      </Button>
    );

  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{list1}</ul>
      <h1>You Picked</h1>
      <div>{list2}</div>
      <h2>That's it!</h2>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} minstock={0} />,
  document.getElementById("root")
);
