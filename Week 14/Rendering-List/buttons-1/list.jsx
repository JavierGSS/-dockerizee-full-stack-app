const links = [
    <a href="www.google.com" style={{color: 'blue'}}>Google</a>,
    <a href="www.nyt.com" style={{color: 'blue'}}>NYT</a>,
    <a href="www.elespectador.com" style={{color: 'blue'}}>El Espectador</a>
];

const linksList = links.map((number, index) => {
    return <li key={index.toString()}>{number}</li>
})

ReactDOM.render(
    <ul>{linksList}</ul>,
    document.getElementById("root")
  );