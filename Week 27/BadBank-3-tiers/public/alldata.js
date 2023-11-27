function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className="card text-center">
      <div className="card-header">
        <strong>All Data in Store</strong>
      </div>
      <br />
      <button className="btn btn-primary" type="submit">
        Show All Data
      </button>
      <br />
      <div id="allDataStatus">{JSON.stringify(ctx)}</div>
    </div>
  );
}
