const startDate = new Date("2025-07-27T23:25:00");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds");

const array = ["my baby", "my princess", "my girl", "my baby girl", "my sunshine", "my sweetheart", "my wifey", "my sweetie", "my gorgeous girl", "my pretty girl", "my beautiful girl", "my gorgeous princess", "my pretty princess", "my beautiful princess", "my gorgeous wifey", "my pretty wifey", "my beautiful wifey", "my love"];

function updateTimer() {
  const diff = Date.now() - startDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / (1000));

  daysEl.textContent = days.toLocaleString();
  hoursEl.textContent = hours.toLocaleString();
  minutesEl.textContent = minutes.toLocaleString();
  secondsEl.textContent = seconds.toLocaleString();
}
updateTimer();
setInterval(updateTimer, 1000);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

function createText() {
    const text = document.createElement("h3");
    text.classList.add("text");
    const randomIndex = Math.floor(Math.random() * array.length);
    text.textContent = array[randomIndex];
    text.style.left = Math.random() * 100 + "vw";
    text.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 6000);
}

if(window.innerWidth <= 768){
    setInterval(createText, 2500);
    setInterval(createHeart, 3000);
} else {
    setInterval(createText, 4000);
    setInterval(createHeart, 1200);
}