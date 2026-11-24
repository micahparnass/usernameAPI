async function generateUsername() {

  const response = await fetch("https://animalrandomizer.com/api/random?count=2");

  const data = await response.json();

  const animal1 = data.animals[0].name;
  const animal2 = data.animals[1].name;

  const number = Math.floor(Math.random() * 101);

  const username =
    animal1.replace(/\s/g, "") +
    animal2.replace(/\s/g, "") +
    number;
    
  document.getElementById("username").textContent =
    "Your username: " + username;

}