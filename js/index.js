

const getadvice = document.querySelector('.advice');
const adviceAdd = document.querySelector('.quote');
const adviceQn = document.querySelector('.dice');

const adviceFunction = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    console.log(data);

    // Update UI
    adviceAdd.textContent = `"${data.slip.advice}"`;
    getadvice.textContent = `Advice #${data.slip.id}`;
  } catch (error) {
    console.error(error);
  }
};

// Call once on page load
adviceFunction();

// Call again whenever dice is clicked
adviceQn.addEventListener("click", adviceFunction);
