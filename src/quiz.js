const questions = [
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

         const percentage = Math.round((score / (questions.length * 100)) * 100);
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