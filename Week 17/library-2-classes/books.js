class Book extends HTMLElement {
  constructor() {
    super();
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const author = this.getAttribute("author");
    const publisher = this.getAttribute("publisher");
    const description = this.getAttribute("description");

    this.innerHTML = `
    <div class="card">
      <h5 class="card-header">${title}</h5>
      <div class="card-body">
        <h5>${subtitle}</h5>
            <p class="card-text">
            <table class="table">
                <tr>
                    <td class="text-success font-weight-bold">Title:</td>
                    <td>${title}</td>
                </tr>
                <tr>
                    <td class="text-success font-weight-bold">Subtitle:</td>
                    <td>${subtitle}</td>
                </tr>
                <tr>
                    <td class="text-success font-weight-bold">Author:</td>
                    <td>${author}</td>
                </tr>
                <tr>
                    <td class="text-success font-weight-bold">Publisher:</td>
                    <td>${publisher}</td>
                </tr>
                <tr>
                    <td class="text-success font-weight-bold">Description:</td>
                    <td>${description}</td>
                </tr>
            </table>
            </p>
      </div>
    </div>
`;
  }
}

customElements.define("mit-book", Book);

class Run extends HTMLElement {
  constructor() {
    super();
    const date = this.getAttribute("date");
    const speed = this.getAttribute("speed");
    const temp = this.getAttribute("temp");

    this.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Date: ${date}</li>
            <li class="list-group-item">Speed: ${speed}</li>
            <li class="list-group-item">Temperature: ${temp}</li>
        </ul>
    `;
  }
}

customElements.define("list-run", Run);

/*<div class="card">
            <h5 class="card-header">Eloquent JavaScript, Second Edition</h5>
            <div class="card-body">
              <h5>A Modern Introduction to Programming</h5>
                  <p class="card-text">
                  <table class="table">
                      <tr>
                          <td class="text-success font-weight-bold">Title:</td>
                          <td>Eloquent JavaScript, Second Edition</td>
                      </tr>
                      <tr>
                          <td class="text-success font-weight-bold">Subtitle:</td>
                          <td>A Modern Introduction to Programming</td>
                      </tr>
                      <tr>
                          <td class="text-success font-weight-bold">Author:</td>
                          <td>Marijn Haverbeke</td>
                      </tr>
                      <tr>
                          <td class="text-success font-weight-bold">Publisher:</td>
                          <td>No Starch Press</td>
                      </tr>
                      <tr>
                          <td class="text-success font-weight-bold">Description:</td>
                          <td>JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.</td>
                      </tr>
                  </table>
                  </p>
            </div>
          </div>*/
