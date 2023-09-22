function About() {
  const ctx = React.useContext(UserContext);
  ctx.counter.push(Number(ctx.counter[ctx.counter.length - 1]) * 2);

  return (
    <div>
      <h3>About Component</h3>
      {JSON.stringify(ctx.counter)}
    </div>
  );
}
