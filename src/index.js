import { intervalGenerator } from "../functions";

const form = document.getElementById("form");
const list = document.getElementById("list");
const code = document.getElementById("code");

form.addEventListener("submit", (e) => {
  list.innerHTML = "";
  code.innerHTML = "";

  e.preventDefault();
  const f = new FormData(e.target);
  const j = JSON.stringify(Object.fromEntries(f));

  const gen = intervalGenerator(JSON.parse(j));

  if (gen.length > 0) {
    gen.map((t) => {
      let li = document.createElement("li");
      li.innerHTML = `<b>${t.start}</b> -  <b>${t.end}</b>`;
      list.append(li);
    });

    code.innerHTML = JSON.stringify(gen);
  } else {
    alert("Check your form values ");
  }
});
