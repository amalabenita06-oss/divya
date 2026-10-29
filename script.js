// Birthday website for Mary Divya — made by AMALA BENITA 🩵

const surpriseBtn = document.getElementById("surpriseBtn");
const intro = document.getElementById("intro");

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("letterPassword");
const passwordMessage = document.getElementById("passwordMessage");
const secretLetter = document.getElementById("secretLetter");

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

const butterflyBtn = document.getElementById("butterflyBtn");

const correctPassword = "DBAT";

const emojiList = [
  "🩵", "💙", "🤍", "💕", "💖", "💗",
  "✨", "⭐", "🌟", "🌸", "🌷", "🧸",
  "🎀", "🎈", "🎉", "💎", "🌈", "🫂",
  "🥹", "💌", "☁️", "🐻", "🎂", "💐"
];

const butterflyList = ["🦋", "🦋", "🦋", "🌸🦋"];

// Create a floating emoji
function createEmoji() {
  const emoji = document.createElement("span");

  emoji.className = "heart";
  emoji.textContent =
    emojiList[Math.floor(Math.random() * emojiList.length)];

  emoji.style.left = Math.random() * 94 + "vw";
  emoji.style.fontSize = (20 + Math.random() * 20) + "px";
  emoji.style.animationDuration = (3.5 + Math.random() * 2) + "s";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}

// Create a flying butterfly
function createButterfly() {
  const butterfly = document.createElement("span");

  butterfly.className = "butterfly";
  butterfly.textContent =
    butterflyList[Math.floor(Math.random() * butterflyList.length)];

  butterfly.style.left = Math.random() * 90 + "vw";
  butterfly.style.fontSize = (24 + Math.random() * 22) + "px";
  butterfly.style.animationDuration = (4 + Math.random() * 2) + "s";

  document.body.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), 7000);
}

// Animation whenever a button is clicked
function celebrateClick() {
  for (let i = 0; i < 7; i++) {
    setTimeout(createEmoji, i * 80);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(createButterfly, i * 250);
  }
}

// All website buttons get the same celebration effect
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", celebrateClick);
});

// A few floating emojis when the website opens
for (let i = 0; i < 8; i++) {
  setTimeout(createEmoji, i * 250);
}

// Birthday surprise button
if (surpriseBtn && intro) {
  surpriseBtn.addEventListener("click", () => {
    intro.textContent =
      "Mary Divya, my sweetest Gundus! 🧸💙 " +
      "You deserve all the happiness, love and magic in the world! 🥹🌈";

    surpriseBtn.textContent = "Happy Birthday, Gundus! 🩵🎂";
  });
}

// Unlock the secret letter
function unlockLetter() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword.toUpperCase() === correctPassword) {
    secretLetter.hidden = false;

    passwordMessage.textContent =
      "Correct password! Your secret letter is unlocked! 💖🧸";

    passwordMessage.style.color = "#21804a";

    unlockBtn.textContent = "💖 Letter Unlocked!";
  } else {
    secretLetter.hidden = true;

    passwordMessage.textContent =
      "Oops! Wrong password. Try again, Gundus! 🔐🩵";

    passwordMessage.style.color = "#d43b68";

    unlockBtn.textContent = "💖 Unlock My Letter";
  }
}

if (unlockBtn && passwordInput && passwordMessage && secretLetter) {
  unlockBtn.addEventListener("click", unlockLetter);

  // Press Enter to unlock, too
  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      unlockLetter();
    }
  });
}

// Open and close the letter after unlocking
if (letterBtn && letter) {
  letterBtn.addEventListener("click", () => {
    const isHidden = letter.classList.contains("hidden");

    letter.classList.toggle("hidden");

    if (isHidden) {
      letterBtn.textContent = "💌 Close Your Secret Letter";

      setTimeout(() => {
        letter.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } else {
      letterBtn.textContent = "💌 Open Your Secret Letter";
    }
  });
}

// Million hearts for Gundus
if (wishBtn && wishMessage) {
  wishBtn.addEventListener("click", () => {
    wishMessage.textContent =
      "Happy Birthday, Mary Divya (Gundus)! 🩵🧸 " +
      "Sending you endless love, hugs and happiness! 🫂💖🌈🎂";

    for (let i = 0; i < 20; i++) {
      setTimeout(createEmoji, i * 100);
    }

    for (let i = 0; i < 8; i++) {
      setTimeout(createButterfly, i * 180);
    }

    wishBtn.textContent = "You're Loved Forever, Gundus! 💙";
  });
}

// Special butterfly button in the header
if (butterflyBtn) {
  butterflyBtn.addEventListener("click", () => {
    for (let i = 0; i < 15; i++) {
      setTimeout(createButterfly, i * 160);
    }
  });
}

// Keep a few gentle emojis floating in the background
setInterval(createEmoji, 2200);