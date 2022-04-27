class UserCard extends HTMLElement {
  constructor() {
    super();
    this.name = "default name";
    this.gender = "Default Gender";
    this.photo = "https://placehold.co/128x128";
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style></style>
    <div class="card">Name: ${this.name}</div>
    <div class="gender">Gender: ${this.gender}</div>
    <img class="photo" src="${this.photo}"> `;
  }

  setData(data) {
    this.name = data.name;
    this.gender = data.gender;
    this.photo = data.photo;
    this.render();
  }
}
customElements.define("user-card", UserCard);
