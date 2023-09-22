function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("./books.json");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log("loaded: ", loaded, "data: ", data);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>React/native web components</h1>
      <div className="container">
        {loaded &&
          data.books.map((book, index) => <mit-book
            title={book.title}
            subtitle={book.subtitle}
            author={book.author}
            publisher={book.publisher}
            description={book.description}
            key={index} />)}
      </div>
      <br/>
      <div className="container">
        {loaded &&
            data.books.map((book, index) => <list-book
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
              publisher={book.publisher}
              description={book.description}
              pages={book.pages}
              key={index} />)}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
