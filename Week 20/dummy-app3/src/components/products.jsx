import React from "react";
import axios from "axios";
import {
  Card,
  Accordion,
  Button,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { fetching } from "../fetch";

const products = [
  { name: "Apples", country: "Italy", cost: 3, instock: 10 },
  { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
  { name: "Beans", country: "USA", cost: 2, instock: 5 },
  { name: "Cabbage", country: "USA", cost: 1, instock: 8 },
  { name: "Bananas", country: "Colombia", cost: 4, instock: 5 },
  { name: "Watermelon", country: "Ghana", cost: 6, instock: 6 },
  { name: "Tomatoes", country: "Mexico", cost: 2, instock: 12 },
  { name: "Coffee", country: "Brazil", cost: 10, instock: 5 },
  { name: "Goava", country: "Thailand", cost: 3, instock: 4 },
];
//=========Cart=============

const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  console.log(`useDataApi called`);

  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const Products = (props) => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  //  Fetch Data
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/api/products");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:1337/api/products",
    {
      data: [],
    }
  );

  console.log(`Rendering Products ${JSON.stringify(data)}`);

  // Fetch Data
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name === name);
    console.log(`add to Cart ${JSON.stringify(item)}`);
    setCart([...cart, ...item]);
    if (item[0].instock > 0) {
      item[0].instock = item[0].instock - 1;
    } else {
      let newCart = cart.filter((item, index) => !item[0]);
      setCart(newCart);
    }
  };

  const deleteCartItem = (index) => {
    let newCart = cart.filter((item, i) => index !== i);
    setCart(newCart);
    console.log(cart);
  };

  console.log("ITEMS: ", items);
  let list = items.map((item, index) => {
    let n = index + 500;
    let picsum = "https://picsum.photos/" + n;

    return (
      <li key={index}>
        <Image src={picsum} width={70} roundedCircle></Image>
        <br />
        <Button variant="primary" size="large">
          {item.name}
          :&nbsp;${item.cost}
          <br />
          Instock: {item.instock}
        </Button>
        <br />
        <input name={item.name} type="submit" onClick={addToCart}></input>
      </li>
    );
  });

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      deleteCartItem(eventKey - 1)
    );

    return (
      <Button type="button" onClick={decoratedOnClick}>
        {children}
      </Button>
    );
  }

  let cartList = cart.map((item, index) => {
    return (
      <Accordion defaultActiveKey="0">
        <Card key={index}>
          <Card.Header>
            <CustomToggle as={Button} variant="link" eventKey={1 + index}>
              {item.name}
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {item.name} from {item.country}; ${item.cost}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });

  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    return newTotal;
  };

  function restockProducts() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query:
        "query {\n	products {\n    data {\n      attributes {\n        name\n        cost\n      instock\n      }\n    }\n  }\n}",
      variables: {},
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    /*fetch("http://localhost:1337/graphql", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let json = result.data.products.data;
        const newSet = json.map((item) => {
          return {
            name: item.attributes.name,
            cost: item.attributes.cost,
            instock: item.attributes.instock,
          };
        });
        console.log(newSet);
        setItems([...newSet]);
      })
      .catch((error) => console.log("error: ", error));*/

    // uses the fetch.js module to make fetch requests to localhost:1337/graphql:
    fetching.handleAPI(requestOptions).then((persistedItem) => {
      console.log("Persisted:", persistedItem);
      setItems([...persistedItem]);
      console.log("Persisted 1:", items);
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts();
            console.log("Restock called on http://localhost:1337/graphql");
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value="http://localhost:1337/graphql"
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">ReStock Products</button>
        </form>
      </Row>
    </Container>
  );
};
export default Products;
