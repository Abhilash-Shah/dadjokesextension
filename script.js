fetch("https://icanhazdadjoke.com/slack") //fetcch api
  .then((data) => data.json()) //data convert json format
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text; //find joke in json file
    const jokeElement = document.getElementById("jokeElement"); // p access
    jokeElement.innerHTML = jokeText;
  });
