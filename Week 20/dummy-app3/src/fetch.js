export const fetching = {
  handleAPI: (requestOptions) =>
    fetch("http://localhost:1337/graphql", requestOptions)
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
        return Promise.resolve(newSet);
      })
      .catch((error) => console.log("error: ", error)),
};
