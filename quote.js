const quoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("tweet-quote");
const spinner = document.querySelector('#js-spinner');


const endpoint = "https://type.fit/api/quotes";


quoteButton.addEventListener("click", getQuote);

async function getQuote() {
  spinner.classList.remove("hidden")
  quoteButton.disabled = true;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    const randomNumber = Math.floor(Math.random() * 1600);

    //console.log(math);
    const display  = json[randomNumber].text + " - " + json[randomNumber].author
    displayQuote(display);
    setTweetButton(display);
  } catch (err) {
    alert("An error occured");
  }finally{
    quoteButton.disabled = false;
    spinner.classList.add("hidden")
  }
}

const displayQuote = (quote) => {
  const quoteText = document.getElementById("text-quotes");
  quoteText.textContent = quote;
};

const setTweetButton = (quote) => {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);

}



