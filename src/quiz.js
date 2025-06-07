const questions = [
   // Preguntas originales
   {
      question: "¿Qué significa EDIT en el contexto de tecnologías educativas?",
      options: [
         "Entornos Digitales Inmersivos Tridimensionales",
         "Editores Digitales Integrados para Textos",
         "Espacios Dinámicos de Interacción Tecnológica",
         "Elementos Didácticos de Información Textual"
      ],
      correct: 0,
      explanation: "Los EDIT combinan realidad virtual, realidad aumentada y mundos virtuales para crear experiencias de aprendizaje inmersivas en 3D.",
      hint: "Piensa en tecnologías como realidad virtual y aumentada que crean espacios en 3D"
   },
   {
      question: "¿Cuál es el principal beneficio de usar mundos virtuales para enseñar programación?",
      options: [
         "Reducir costos de enseñanza",
         "Visualizar conceptos abstractos como estructuras de control",
         "Eliminar la necesidad de computadoras",
         "Acelerar la velocidad de escritura de código"
      ],
      correct: 1,
      explanation: "Los mundos virtuales permiten que conceptos abstractos como bucles y condicionales sean más fáciles de entender visualmente.",
      hint: "Los conceptos de programación como 'si-entonces' o 'repetir' son difíciles de imaginar mentalmente"
   },
   {
      question: "¿Qué teoría educativa se adapta mejor a los entornos virtuales inmersivos?",
      options: [
         "Memorización por repetición",
         "Constructivismo (aprender haciendo)",
         "Enseñanza solo por libros",
         "Aprendizaje pasivo"
      ],
      correct: 1,
      explanation: "El constructivismo permite que los estudiantes 'construyan' su conocimiento explorando y experimentando activamente en el mundo virtual.",
      hint: "¿Cuál método permite que el estudiante sea activo y experimente por sí mismo?"
   },
   {
      question: "¿Qué es la 'investigación-acción' en educación?",
      options: [
         "Solo observar a los estudiantes sin intervenir",
         "Investigadores y docentes trabajando juntos para mejorar la enseñanza",
         "Hacer experimentos en laboratorio",
         "Leer solo artículos científicos"
      ],
      correct: 1,
      explanation: "La investigación-acción involucra a los propios docentes como investigadores que mejoran su práctica mientras investigan.",
      hint: "Es una metodología donde los participantes no solo son observados, sino que participan activamente"
   },
   {
      question: "¿Qué característica hace especial a un mundo virtual 'interoperable'?",
      options: [
         "Solo funciona en una computadora",
         "Puede conectarse e intercambiar información con otras plataformas",
         "Es muy caro de usar",
         "Solo permite un usuario a la vez"
      ],
      correct: 1,
      explanation: "La interoperabilidad permite que diferentes herramientas y plataformas educativas trabajen juntas y compartan recursos.",
      hint: "Como cuando puedes usar tu cuenta de Google en diferentes aplicaciones"
   },
   {
      question: "¿Cuál es una ventaja principal de la gamificación en educación?",
      options: [
         "Hacer que el aprendizaje sea divertido y motivante",
         "Reemplazar completamente a los profesores",
         "Eliminar todas las evaluaciones",
         "Reducir el tiempo de estudio a cero"
      ],
      correct: 0,
      explanation: "La gamificación usa elementos de juegos como puntos y niveles para hacer el aprendizaje más atractivo y mantener a los estudiantes motivados.",
      hint: "Piensa en por qué los videojuegos son tan atractivos y adictivos"
   },
   {
      question: "¿Qué problema común enfrentan los estudiantes al aprender programación?",
      options: [
         "Las computadoras son muy caras",
         "Es difícil visualizar cómo funciona el código internamente",
         "Los lenguajes de programación cambian muy rápido",
         "No hay suficientes trabajos de programación"
      ],
      correct: 1,
      explanation: "Los conceptos de programación como variables, bucles y funciones son abstractos y difíciles de 'ver' mentalmente para principiantes.",
      hint: "Los conceptos como 'variables' y 'bucles' no se pueden tocar o ver físicamente"
   },
   {
      question: "¿Qué permite un entorno 'multimodal' en educación?",
      options: [
         "Solo usar texto para enseñar",
         "Combinar texto, audio, video e interacción en 3D",
         "Enseñar solo una materia a la vez",
         "Usar únicamente realidad virtual"
      ],
      correct: 1,
      explanation: "Los entornos multimodales integran diferentes tipos de medios (visual, auditivo, táctil) para adaptarse a diferentes estilos de aprendizaje.",
      hint: "Como cuando puedes ver, escuchar y tocar cosas al mismo tiempo para aprender mejor"
   },
   {
      question: "¿Cuál es el objetivo principal de usar tecnología inmersiva en programación?",
      options: [
         "Reemplazar todos los métodos tradicionales",
         "Hacer que conceptos abstractos sean más fáciles de entender",
         "Reducir el tiempo de clase",
         "Eliminar la necesidad de práctica"
      ],
      correct: 1,
      explanation: "La tecnología inmersiva ayuda a los estudiantes a 'ver' y 'experimentar' conceptos de programación que normalmente solo existen en su mente.",
      hint: "El objetivo es ayudar a entender mejor, no eliminar otras formas de aprender"
   },
   {
      question: "¿Qué beneficio tiene la colaboración en mundos virtuales para aprender programación?",
      options: [
         "Los estudiantes pueden trabajar juntos en el mismo espacio virtual",
         "Elimina la necesidad de comunicación",
         "Solo permite trabajo individual",
         "Reduce la interacción social"
      ],
      correct: 0,
      explanation: "Los mundos virtuales permiten que estudiantes de diferentes lugares trabajen juntos como si estuvieran en el mismo salón de clases.",
      hint: "Como videojuegos multijugador, pero para aprender programación en equipo"
   },

   // NUEVAS PREGUNTAS AGREGADAS
   {
      question: "¿Qué es un algoritmo en programación?",
      options: [
         "Un tipo de computadora muy rápida",
         "Una secuencia de pasos para resolver un problema",
         "Un lenguaje de programación específico",
         "Una herramienta para diseñar interfaces"
      ],
      correct: 1,
      explanation: "Un algoritmo es una serie de instrucciones paso a paso que describe cómo resolver un problema o completar una tarea de manera eficiente.",
      hint: "Piensa en una receta de cocina: pasos ordenados para lograr un resultado"
   },
   {
      question: "¿Cuál es la diferencia principal entre Realidad Virtual (VR) y Realidad Aumentada (AR)?",
      options: [
         "No hay diferencia, son lo mismo",
         "VR crea un mundo completamente virtual, AR añade elementos virtuales al mundo real",
         "AR es más cara que VR",
         "VR solo funciona con videojuegos"
      ],
      correct: 1,
      explanation: "La VR sumerge completamente al usuario en un entorno virtual, mientras que la AR superpone elementos digitales sobre el mundo real.",
      hint: "Una te aísla del mundo real, la otra lo combina con elementos digitales"
   },
   {
      question: "¿Qué es una variable en programación?",
      options: [
         "Un error en el código",
         "Un contenedor que almacena información que puede cambiar",
         "Una función matemática compleja",
         "Un tipo de computadora"
      ],
      correct: 1,
      explanation: "Una variable es como una caja con etiqueta donde puedes guardar diferentes tipos de información (números, texto, etc.) y cambiar su contenido cuando sea necesario.",
      hint: "Imagina una caja con una etiqueta donde puedes guardar y cambiar cosas"
   },
   {
      question: "¿Cuál es el propósito principal de un bucle (loop) en programación?",
      options: [
         "Crear errores en el programa",
         "Repetir una acción varias veces automáticamente",
         "Borrar información del programa",
         "Conectarse a internet"
      ],
      correct: 1,
      explanation: "Los bucles permiten ejecutar el mismo código múltiples veces sin tener que escribirlo repetidamente, haciendo los programas más eficientes.",
      hint: "Como poner una canción en repetición: hace lo mismo una y otra vez"
   },
   {
      question: "¿Qué significa 'debugging' en programación?",
      options: [
         "Escribir código nuevo",
         "Encontrar y corregir errores en el código",
         "Diseñar la interfaz de usuario",
         "Publicar el programa en internet"
      ],
      correct: 1,
      explanation: "Debugging es el proceso de identificar, analizar y eliminar errores (bugs) en el código para que el programa funcione correctamente.",
      hint: "Como ser detective: buscar pistas para encontrar qué está mal y arreglarlo"
   },
   {
      question: "¿Qué ventaja ofrece Minecraft Education Edition para enseñar programación?",
      options: [
         "Es completamente gratuito",
         "Permite visualizar conceptos de programación en un entorno familiar y divertido",
         "Solo funciona en smartphones",
         "Reemplaza completamente a los profesores"
      ],
      correct: 1,
      explanation: "Minecraft Education Edition usa un entorno conocido y atractivo para los estudiantes, donde pueden ver sus comandos de programación ejecutarse en tiempo real.",
      hint: "Los estudiantes ya conocen Minecraft, así que programar en él se siente como jugar"
   },
   {
      question: "¿Qué es una función en programación?",
      options: [
         "Un tipo de computadora",
         "Un bloque de código reutilizable que realiza una tarea específica",
         "Un error que hay que evitar",
         "Una marca de software"
      ],
      correct: 1,
      explanation: "Una función es como una pequeña máquina que toma información, hace algo con ella, y devuelve un resultado. Puede usarse muchas veces en el programa.",
      hint: "Como una licuadora: le das ingredientes, hace su trabajo, y te da un resultado"
   },
   {
      question: "¿Cuál es la importancia del feedback inmediato en el aprendizaje gamificado?",
      options: [
         "No es importante",
         "Mantiene a los estudiantes motivados y les permite corregir errores rápidamente",
         "Solo sirve para dar puntos",
         "Hace que el aprendizaje sea más lento"
      ],
      correct: 1,
      explanation: "El feedback inmediato permite a los estudiantes saber instantáneamente si van por buen camino, mantiene su motivación alta y facilita la corrección de errores.",
      hint: "Como en los videojuegos: sabes inmediatamente si lo hiciste bien o mal"
   },
   {
      question: "¿Qué es la 'sintaxis' en un lenguaje de programación?",
      options: [
         "Los colores que usa el programa",
         "Las reglas de gramática y estructura que debe seguir el código",
         "La velocidad del programa",
         "El tamaño de los archivos"
      ],
      correct: 1,
      explanation: "La sintaxis son las reglas específicas sobre cómo escribir código en un lenguaje de programación, similar a la gramática en los idiomas humanos.",
      hint: "Como las reglas de gramática en español: hay una forma correcta de escribir las oraciones"
   },
   {
      question: "¿Cuál es una característica clave de los entornos virtuales colaborativos?",
      options: [
         "Solo permite una persona a la vez",
         "Múltiples usuarios pueden interactuar y trabajar juntos en tiempo real",
         "No requiere internet",
         "Solo funciona en computadoras muy caras"
      ],
      correct: 1,
      explanation: "Los entornos virtuales colaborativos permiten que varias personas trabajen juntas simultáneamente, compartiendo ideas y resolviendo problemas en equipo.",
      hint: "Como Google Docs, pero en un mundo virtual donde todos pueden verse y trabajar juntos"
   },
   {
      question: "¿Qué tipo de pensamiento desarrolla la programación?",
      options: [
         "Solo pensamiento matemático",
         "Pensamiento lógico, resolución de problemas y creatividad",
         "Únicamente memorización",
         "Solo pensamiento artístico"
      ],
      correct: 1,
      explanation: "La programación desarrolla múltiples habilidades: pensamiento lógico para estructurar soluciones, resolución de problemas para superar obstáculos, y creatividad para encontrar soluciones innovadoras.",
      hint: "Combina la lógica de las matemáticas con la creatividad del arte"
   },
   {
      question: "¿Qué significa 'código abierto' (open source) en software?",
      options: [
         "Software que funciona sin internet",
         "Software cuyo código fuente está disponible públicamente para ser estudiado y modificado",
         "Software que solo funciona en código",
         "Software que es muy fácil de usar"
      ],
      correct: 1,
      explanation: "El software de código abierto permite que cualquiera vea, estudie, modifique y comparta el código, promoviendo la colaboración y el aprendizaje.",
      hint: "Como una receta de cocina que está disponible para que todos la vean y mejoren"
   },
   {
      question: "¿Cuál es el papel del error en el aprendizaje de programación?",
      options: [
         "Los errores deben evitarse completamente",
         "Los errores son oportunidades valiosas de aprendizaje",
         "Los errores solo frustran a los estudiantes",
         "Los errores no tienen importancia"
      ],
      correct: 1,
      explanation: "En programación, los errores son maestros excelentes. Cada error enseña algo nuevo y ayuda a desarrollar habilidades de resolución de problemas.",
      hint: "Como aprender a andar en bicicleta: cada caída te enseña mejor balance"
   },
   {
      question: "¿Qué ventaja tiene usar avatares en entornos virtuales educativos?",
      options: [
         "Solo es para entretenimiento",
         "Permite mayor identificación y inmersión en el proceso de aprendizaje",
         "Hace que el aprendizaje sea más lento",
         "No tiene ninguna ventaja real"
      ],
      correct: 1,
      explanation: "Los avatares ayudan a los estudiantes a sentirse más presentes y conectados con el entorno virtual, aumentando su compromiso con el aprendizaje.",
      hint: "Te sientes más parte del mundo virtual cuando tienes una representación de ti mismo"
   },
   {
      question: "¿Qué es la 'escalabilidad' en el contexto de plataformas educativas virtuales?",
      options: [
         "Qué tan grande es la pantalla",
         "La capacidad de adaptarse a diferentes números de usuarios sin perder calidad",
         "Qué tan rápido funciona",
         "El costo de la plataforma"
      ],
      correct: 1,
      explanation: "La escalabilidad se refiere a la capacidad de una plataforma de manejar eficientemente desde pocos usuarios hasta miles, manteniendo la calidad de la experiencia.",
      hint: "Como un restaurante que puede servir bien tanto a 10 como a 1000 personas"
   }
];
      let currentQuestion = 0;
      let score = 0;
      let streak = 0;
      let level = 1;
      let selectedAnswer = null;
      let answered = false;
      let hintUsed = false;

      function initQuiz() {
         showQuestion();
         updateStats();
         updateProgress();
      }

      function showQuestion() {
         const question = questions[currentQuestion];
         document.getElementById('question-number').textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
         document.getElementById('question-text').textContent = question.question;

         const answersContainer = document.getElementById('answers');
         answersContainer.innerHTML = '';

         question.options.forEach((option, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.textContent = option;
            answerElement.onclick = () => selectAnswer(index);
            answersContainer.appendChild(answerElement);
         });

         document.getElementById('feedback').classList.add('hidden');
         document.getElementById('next-btn').disabled = true;
         document.getElementById('prev-btn').disabled = currentQuestion === 0;
         answered = false;
         selectedAnswer = null;
         hintUsed = false;
      }

      function selectAnswer(index) {
         if (answered) return;

         selectedAnswer = index;
         const answerOptions = document.querySelectorAll('.answer-option');
         
         answerOptions.forEach((option, i) => {
            option.classList.remove('selected');
            if (i === index) {
               option.classList.add('selected');
            }
         });

         document.getElementById('next-btn').disabled = false;
      }

      function checkAnswer() {
         if (selectedAnswer === null || answered) return;

         answered = true;
         const question = questions[currentQuestion];
         const answerOptions = document.querySelectorAll('.answer-option');
         const feedbackElement = document.getElementById('feedback');

         answerOptions.forEach((option, index) => {
            if (index === question.correct) {
               option.classList.add('correct');
            } else if (index === selectedAnswer) {
               option.classList.add('incorrect');
            }
         });

         if (selectedAnswer === question.correct) {
            let points = 100;
            if (hintUsed) points -= 10;
            
            score += points;
            streak++;
            
            if (streak > 0 && streak % 3 === 0) {
               level++;
               score += 50; // Bonus por nivel
               showCelebration();
            }

            feedbackElement.className = 'feedback correct';
            feedbackElement.textContent = `¡Correcto! +${points} puntos. ${question.explanation}`;
         } else {
            streak = 0;
            feedbackElement.className = 'feedback incorrect';
            feedbackElement.textContent = `Incorrecto. ${question.explanation}`;
         }

         feedbackElement.classList.remove('hidden');
         updateStats();
      }

      function showHint() {
         if (hintUsed || answered) return;
         
         hintUsed = true;
         score = Math.max(0, score - 10);
         
         const question = questions[currentQuestion];

         // Modal de pista profesional
         const hintModal = document.createElement('div');
         hintModal.className = 'hint-modal-bg';
         hintModal.innerHTML = `
            <div class="hint-modal-content">
               <h3>💡 Pista (-10 puntos)</h3>
               <p style="margin-bottom: 1.5rem; line-height: 1.6;">${question.hint}</p>
               <button onclick="this.closest('.hint-modal-bg').remove()">Entendido</button>
            </div>
         `;
         document.body.appendChild(hintModal);
         updateStats();
      }

      function nextQuestion() {
         if (!answered) {
            checkAnswer();
            return;
         }

         if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
            updateProgress();
         } else {
            showResults();
         }
      }

      function prevQuestion() {
         if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
            updateProgress();
         }
      }

      function updateStats() {
         document.getElementById('score').textContent = score;
         document.getElementById('streak').textContent = streak;
         document.getElementById('level').textContent = level;
      }

      function updateProgress() {
         const progress = ((currentQuestion + 1) / questions.length) * 100;
         document.getElementById('progress').style.width = `${progress}%`;
      }

      function showCelebration() {
         document.querySelector('.quiz-container').classList.add('celebration');
         setTimeout(() => {
            document.querySelector('.quiz-container').classList.remove('celebration');
         }, 600);
      }

      function showResults() {
         document.getElementById('quiz-content').classList.add('hidden');
         document.getElementById('results').classList.remove('hidden');

         const maxPossibleScore = questions.length * 100;
         const percentage = Math.round((score / maxPossibleScore) * 100);
         document.getElementById('final-score').textContent = `${percentage}%`;

         let achievement = '';
         let message = '';

          if (percentage >= 90) {
            achievement = '🏆 ¡Experto! - Dominas perfectamente los conceptos del quiz';
            message = 'Excelente comprensión de los temas sobre tecnologías inmersivas y programación.';
          } else if (percentage >= 70) {
            achievement = '🥈 ¡Muy bien! - Buen dominio de los conceptos principales';
            message = 'Tienes una sólida comprensión de los temas tratados en el quiz.';
          } else if (percentage >= 50) {
            achievement = '🥉 ¡En desarrollo! - Conoces los conceptos básicos';
            message = 'Repasa los conceptos clave sobre entornos virtuales y programación.';
          } else {
            achievement = '¡Ánimo! Sigue practicando para mejorar tus conocimientos.';
            message = 'Haz clic en el siguiente botón para volver a intentar el quiz.';
          }

          document.getElementById('achievement').textContent = achievement;
          document.getElementById('performance-message').textContent = message;
        }

      function restartQuiz() {
         currentQuestion = 0;
         score = 0;
         streak = 0;
         level = 1;
         selectedAnswer = null;
         answered = false;

         document.getElementById('quiz-content').classList.remove('hidden');
         document.getElementById('results').classList.add('hidden');

         initQuiz();
      }

      document.getElementById('next-btn').onclick = nextQuestion;
      document.getElementById('prev-btn').onclick = prevQuestion;
      document.getElementById('hint-btn').onclick = showHint;

      initQuiz();