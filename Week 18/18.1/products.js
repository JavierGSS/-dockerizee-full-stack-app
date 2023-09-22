function Products() {
  const ctx = React.useContext(UserContext);
  ctx.counter.push(Number(ctx.counter[ctx.counter.length - 1]) + 1);

  return (
    <div>
      <h3>Products Component</h3>
      {JSON.stringify(ctx.counter)}
    </div>
  );
}
