const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  const descriptionEl = document.getElementById("description");
  const personalMessage = document.getElementById("personal-message");

  value.classList.remove("normal", "attention");

  let description = "";
  let recomendacao = "";

  if (bmi < 18.5) {
    description = "Magreza";
    recomendacao =
      "Seu IMC indica magreza. Procure uma alimentação nutritiva e acompanhamento profissional para ganhar peso de forma saudável.";
    value.classList.add("attention");
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "Normal";
    recomendacao =
      "Parabéns! Seu IMC está na faixa considerada saudável. Continue mantendo hábitos equilibrados de alimentação e atividade física.";
    value.classList.add("normal");
  } else if (bmi > 25 && bmi <= 30) {
    description = "Sobrepeso";
    recomendacao =
      "Seu IMC indica sobrepeso. Pequenas mudanças na alimentação e a prática regular de exercícios podem ajudar a melhorar sua saúde.";
    value.classList.add("attention");
  } else if (bmi > 30 && bmi <= 35) {
    description = "Obesidade I";
    recomendacao =
      "Seu IMC indica obesidade grau I. Busque orientação de profissionais de saúde e adote hábitos graduais e sustentáveis.";
    value.classList.add("attention");
  } else if (bmi > 35 && bmi <= 40) {
    description = "Obesidade II";
    recomendacao =
      "Seu IMC indica obesidade grau II. É importante procurar acompanhamento médico e nutricional para cuidar da sua saúde.";
    value.classList.add("attention");
  } else {
    description = "Obesidade III";
    recomendacao =
      "Seu IMC indica obesidade grau III. Procure uma Unidade Básica de Saúde para receber orientação adequada e acompanhamento especializado.";
    value.classList.add("attention");
  }

  value.textContent = bmi.replace(".", ",");
  descriptionEl.textContent = description;
  personalMessage.textContent = recomendacao;

  document.getElementById("infos").classList.remove("hidden");
  document.getElementById("education").classList.remove("hidden");
});
