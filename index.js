window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  function getLines(t) {
    const div = document.createElement("div");
    const length = 10;
    const index = getRandomInt(length, t.length - length);
    div.innerHTML = t.substring(index-length, index);
    document.body.appendChild(div);
  }

  fetch("constitution.txt").then((file) => file.text()).then((t) => {
    for (let i = 0; i < 10; i++) getLines(t);
  })
});