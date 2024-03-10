let horas = document.getElementsByClassName("horas");

for (let i = 0; i < horas.length; i++) {
  horas[i].addEventListener("click", function () {
    let clase = this.classList;

    if (clase.contains("bg-danger") && clase.contains("bg-opacity-50")) {
      this.classList.remove("bg-danger", "bg-opacity-50");
    } else {
      this.classList.add("bg-danger", "bg-opacity-50");
    }
  });
}
