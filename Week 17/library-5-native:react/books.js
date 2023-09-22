class Book extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
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
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const author = this.getAttribute("author");
    const publisher = this.getAttribute("publisher");
    const description = this.getAttribute("description");
    const pages = this.getAttribute("pages");

    this.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Title: ${title}</li>
            <li class="list-group-item">Subtitle: ${subtitle}</li>
            <li class="list-group-item">Author: ${author}</li>
            <li class="list-group-item">Publisher: ${publisher}</li>
            <li class="list-group-item">Description: ${description}</li>
            <li class="list-group-item">Pages: ${pages}</li>
        </ul>
        <br/>
    `;
  }
}

customElements.define("list-book", Run);