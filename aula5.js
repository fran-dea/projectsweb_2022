function dark() {
    var corpo = document.querySelector("body");
    var ti = document.querySelectorAll("h2");
    var divs = document.querySelectorAll("div");
    var button = document.querySelector("Button");

    // não entendi como usa array e for pra ler os itens da lista ent vo faze um por um mesmo, já que só tem 2 h2 e só quero 1 div

    const tit1 = ti[0];
    const tit2 = ti[1];
    const social = divs[2];

    corpo.classList.toggle("darkmode");
    tit1.classList.toggle("dark");
    tit2.classList.toggle("dark");
    social.classList.toggle("dark");
    if (button.value == "OFF"){
        button.textContent="Light Mode";
        button.value = "ON";
    }
    else{
        button.textContent="Dark Mode";
        button.value = "OFF";
    }
  }