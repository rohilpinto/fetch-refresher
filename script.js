const container = document.querySelector(".container");

const title = document.querySelector(".title");

// const setup = document.querySelector(".setup");

const theJoke = document.querySelector(".joke");

const url = "https://official-joke-api.appspot.com/jokes/programming/ten";

fetch(url)
  .then((data) => data.json())
  .then((data) => {

		data.forEach((joke, index) => {
			const p = document.createElement("p");
			document.body.append(p)

			let { setup, punchline } = data[index];

			p.textContent = setup;
			console.log(setup);
		})
    
  });
