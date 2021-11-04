import { hemblock } from "../../declarations/hemblock";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hemblock actor, calling the greet method
  const greeting = await hemblock.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
