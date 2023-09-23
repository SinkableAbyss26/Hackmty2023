// Importar la API de Google AI
const googleAI = require("google-ai");

// Crear el modelo de lenguaje
const modelo = new googleAI.AutoMLLanguageModel({
  projectId: "YOUR_PROJECT_ID",
  modelId: "YOUR_MODEL_ID",
});

// Crear el evento de envío del formulario
document.querySelector("form").addEventListener("submit", (event) => {
  // Obtener la pregunta del usuario
  const pregunta = document.querySelector("#pregunta").value;

  // Enviar la pregunta al modelo de lenguaje
  modelo.predict({
    content: pregunta,
  }, (error, respuesta) => {
    // Mostrar la respuesta del modelo
    document.querySelector("#respuesta").innerHTML = respuesta;
  });

  // Cancelar el evento de envío
  event.preventDefault();
});
