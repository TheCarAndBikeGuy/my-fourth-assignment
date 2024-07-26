const form = document.getElementById("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/messagesa", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});
