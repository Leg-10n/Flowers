onload = () => {
  setTimeout(() => {
      document.body.classList.remove("not-loaded");
  }, 1000);
  setTimeout(() => {
      let textElement = document.querySelector(".text");
      if (textElement) {
          textElement.style.display = "block";
          textElement.style.opacity = "1";
          textElement.style.animation = "text-appear 2s forwards";
      }
  }, 12000);

  setTimeout(() => {
      let textElement = document.querySelector(".text");
      if (textElement) {
          textElement.style.animation = "text-disappear 2s forwards";
      }
  }, 26000);

  setTimeout(() => {
    let textElement = document.querySelector(".second-text");
    if (textElement) {
        textElement.style.display = "block";
        textElement.style.animation = "text-appear 2s forwards";
    }
}, 28000);

setTimeout(() => {
    let textElement = document.querySelector(".second-text");
    if (textElement) {
        textElement.style.animation = "text-disappear 2s forwards";
    }
}, 42000);

setTimeout(() => {
    let textElement = document.querySelector(".third-text");
    if (textElement) {
        textElement.style.display = "block";
        textElement.style.animation = "text-appear 2s forwards";
    }
}, 44000);

setTimeout(() => {
    let textElement = document.querySelector(".third-text");
    if (textElement) {
        textElement.style.animation = "text-disappear 2s forwards";
    }
}, 58000);

  setTimeout(() => {
      let finalTextElement = document.querySelector(".final-text");
      if (finalTextElement) {
          finalTextElement.style.display = "block";
          finalTextElement.style.animation = "final-text-appear 2s forwards";
      }
  }, 60000);

  setTimeout(() => {
    document.body.classList.remove("flowers-disappear");
}, 10000);
};
