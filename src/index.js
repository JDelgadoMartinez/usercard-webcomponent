import "./components/UserCard.js";

const URL = "https://randomuser.me/api";

const createCard = (data) => {
  const gender = data.gender;
  const name = data.name.first + data.name.last;
  const country = data.location.country;
  const city = data.location.city;
  const date = data.dob.date;
  const email = data.email;
  const phone = data.phone;
  const photo = data.picture.large;

  const userData = {
    gender, name, country, city, date, email, phone, photo
  };
  const userCard = document.querySelector("user-card");
  userCard.setData(userData);
};
fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("Fallo");
    }
  })
  .then(data => createCard(data.results[0]));
