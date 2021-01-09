fetch(`https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7
`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=ndC4Ogn5uL7lmHXQjY4vkPgYdN2WECja&q=${data}&limit=1&offset=0&rating=g&lang=en`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          console.log(data);
      });
  });
