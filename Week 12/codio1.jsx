"use strict";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: {
      name: "Maradona",
      residence: {
        city: "Tigre",
        country: "Argentina",
      },
      profession: "soccer",
    },
  };

  render() {
    return <Details person={this.state} />; // this line of code adds the property 'person' to
                                            // the object 'props' and returns props thus modified
  }
}

const Details = (props) => {
  // TODO: destructure props
  const {
    details: {
      name: name,
      residence: {
        city: city,
        country: country
      },
      profession: profession,
    }
  } = props.person; //here we destructure props.person

  // below we use the the destructured properties 'name', 'city' etc. to inject them in divs
  return (
    <div style={{ margin: "1em" }}>
      <div id="name">Name: {name}</div>
      <div id="city">City: {city}</div>
      <div id="country">Country: {country}</div>
      <div id="profession">Profession: {profession}</div>
    </div>
  );
};

ReactDOM.render(React.createElement(Person), document.getElementById("root"));
