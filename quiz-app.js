// quiz-app.js - Intégration complète du quiz avec questions dynamiques du Congrès

class QuizApp {
    constructor() {
        this.localStorageKey = 'usCivicsQuizProgress';
        this.baseAllQuestionsData = []; // Pour stocker les questions originales de questions.js
        this.allQuestionsData = [];    // Questions actives (peut inclure celles générées)
        this.stateData = {};
        this.congressMembersData = []; // Pour les données de congress.js

        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.correctlyAnsweredFlags = [];
        this.detailedQuizResults = [];

        this.currentMode = null;
        this.selectedState = '';
        this.selectedCategoryOrFilterKey = '';
        this.currentQuizTitle = '';

        this.examQuestionCount = 10;

        this.questionTimerInterval = null;
        this.questionTimeLimit = 30;
        this.questionTimeRemaining = 0;
        this.timeSpentPerQuestion = [];

        this.elements = {
            modeSelectorScreen: document.getElementById('modeSelectorScreen'),
            startPracticeModeBtn: document.getElementById('startPracticeModeBtn'),
            startExamModeBtn: document.getElementById('startExamModeBtn'),
            stateSelectorScreen: document.getElementById('stateSelectorScreen'),
            categorySelectorScreen: document.getElementById('categorySelector'),
            progressContainer: document.getElementById('progressContainer'),
            quizContentScreen: document.getElementById('quizContentSection'),
            resultsScreen: document.getElementById('resultsScreen'),
            loadingScreen: document.getElementById('loadingScreen'),
            stateSelectInput: document.getElementById('stateSelect'),
            confirmStateBtn: document.getElementById('confirmStateBtn'),
            categoryGrid: document.querySelector('.category-selection-grid'),
            activeQuestionContainer: document.getElementById('activeQuestionContainer'),
            progressCategoryTitle: document.getElementById('progressCategoryTitle'),
            currentQuestionStat: document.getElementById('currentQuestionStat'),
            totalQuestionsStat: document.getElementById('totalQuestionsStat'),
            currentScoreStat: document.getElementById('currentScoreStat'),
            progressFill: document.getElementById('progressFill'),
            finalScoreDisplay: document.getElementById('finalScore'),
            resultMessage: document.getElementById('resultMessage'),
            resultsDetailsContainer: document.getElementById('resultsDetailsContainer'),
            restartQuizBtn: document.getElementById('restartQuizBtn'),
            navChangeCategoryBtn: document.getElementById('navChangeCategoryBtn'),
            navBackToHomeBtn: document.getElementById('navBackToHomeBtn'),
            backToCategoriesResultsBtn: document.getElementById('backToCategoriesResultsBtn'),
            backToHomeResultsBtn: document.getElementById('backToHomeResultsBtn'),
            statisticsScreen: document.getElementById('statisticsScreen'),
            overallStatsContainer: document.getElementById('overallStatsContainer'),
            categoryStatsContainer: document.getElementById('categoryStatsContainer'),
            difficultyStatsContainer: document.getElementById('difficultyStatsContainer'),
            officialStatsCard: document.getElementById('officialStatsCard'),
            officialStatsContainer: document.getElementById('officialStatsContainer'),
            incorrectReviewContainer: document.getElementById('incorrectReviewContainer'),
            viewDetailedStatsBtn: document.getElementById('viewDetailedStatsBtn'),
            backToResultsScreenBtn: document.getElementById('backToResultsScreenBtn'),
            homeFromStatsBtn: document.getElementById('homeFromStatsBtn'),
            timeStatsCard: document.getElementById('timeStatsCard'),
            timePerQuestionStatsContainer: document.getElementById('timePerQuestionStatsContainer'),
            appRoot: document.getElementById('quizAppRoot')
        };

        this.init();
    }

    saveQuizState() {
        if (!this.currentMode || this.selectedQuestions.length === 0 || this.currentQuestionIndex >= this.selectedQuestions.length) {
            this.clearSavedQuizState();
            return;
        }
        const stateToSave = {
            currentMode: this.currentMode,
            selectedState: this.selectedState,
            selectedCategoryOrFilterKey: this.selectedCategoryOrFilterKey,
            currentQuizTitle: this.currentQuizTitle,
            selectedQuestions: this.selectedQuestions, // Important : ces questions peuvent inclure celles générées pour l'état
            userAnswers: this.userAnswers,
            correctlyAnsweredFlags: this.correctlyAnsweredFlags,
            currentQuestionIndex: this.currentQuestionIndex,
            score: this.score,
            timeSpentPerQuestion: this.timeSpentPerQuestion,
            timestamp: Date.now()
        };
        try {
            localStorage.setItem(this.localStorageKey, JSON.stringify(stateToSave));
        } catch (e) {
            console.error("Error saving quiz state to localStorage:", e);
        }
    }

    loadQuizState() {
        try {
            const savedStateJSON = localStorage.getItem(this.localStorageKey);
            if (savedStateJSON) {
                return JSON.parse(savedStateJSON);
            }
        } catch (e) {
            console.error("Error loading quiz state from localStorage:", e);
        }
        return null;
    }

    clearSavedQuizState() {
        try {
            localStorage.removeItem(this.localStorageKey);
            console.log("Saved quiz state cleared.");
        } catch (e) {
            console.error("Error clearing saved quiz state:", e);
        }
    }
    
    restoreQuizFromState(savedState) {
        this.currentMode = savedState.currentMode;
        this.selectedState = savedState.selectedState;
        this.selectedCategoryOrFilterKey = savedState.selectedCategoryOrFilterKey;
        this.currentQuizTitle = savedState.currentQuizTitle;
        
        // Les selectedQuestions sont restaurées directement depuis l'état sauvegardé.
        // Cela inclut les questions spécifiques à l'état qui ont été générées lors de cette session.
        this.selectedQuestions = savedState.selectedQuestions;
        
        // Il n'est pas nécessaire de régénérer les questions spécifiques à l'état ici,
        // car elles sont déjà dans `savedState.selectedQuestions`.
        // Cependant, this.allQuestionsData doit être correctement initialisé pour que d'autres logiques (comme recommencer un quiz) fonctionnent.
        // Nous reconstruisons allQuestionsData en fonction de l'état sauvegardé.
        this.allQuestionsData = JSON.parse(JSON.stringify(this.baseAllQuestionsData));
        if (this.selectedState) {
            const stateCongressQs = this.generateStateCongressQuestions(this.selectedState);
            if (stateCongressQs.length > 0) {
                this.allQuestionsData.push(...stateCongressQs);
            }
            // Ajoutez d'autres questions spécifiques à l'état si nécessaire (gouverneur, etc.)
        }

        this.userAnswers = savedState.userAnswers;
        this.correctlyAnsweredFlags = savedState.correctlyAnsweredFlags;
        this.currentQuestionIndex = savedState.currentQuestionIndex;
        this.score = savedState.score;
        this.timeSpentPerQuestion = savedState.timeSpentPerQuestion || new Array(this.selectedQuestions.length).fill(0);
    
        console.log("Quiz state restored from a previous session.");
    
        this.elements.progressCategoryTitle.textContent = this.currentQuizTitle;
        this.elements.totalQuestionsStat.textContent = this.selectedQuestions.length;
    
        this.showScreen(this.elements.progressContainer);
        this.elements.quizContentScreen.style.display = 'block';
        this.displayQuestion();
    }
    

    init() {
        this.showLoading(true, "Initializing Quiz...");
        if (typeof window.quizData !== 'undefined' &&
            typeof window.quizData.allQuestions !== 'undefined' && Array.isArray(window.quizData.allQuestions) &&
            typeof window.quizData.stateData !== 'undefined' &&
            typeof window.congressMembers !== 'undefined' && Array.isArray(window.congressMembers)) {

            this.baseAllQuestionsData = JSON.parse(JSON.stringify(window.quizData.allQuestions));
            this.allQuestionsData = JSON.parse(JSON.stringify(this.baseAllQuestionsData)); // Copie de travail initiale
            this.stateData = JSON.parse(JSON.stringify(window.quizData.stateData));
            this.congressMembersData = JSON.parse(JSON.stringify(window.congressMembers));

            console.log("Base questions loaded: " + this.baseAllQuestionsData.length);
            console.log("State data loaded.");
            console.log("Congress members loaded: " + this.congressMembersData.length);

            this.setupEventListeners();
            this.setupStateSelector();

            const savedState = this.loadQuizState();
            if (savedState && savedState.selectedQuestions && savedState.selectedQuestions.length > 0 &&
                savedState.currentQuestionIndex < savedState.selectedQuestions.length) {
                if (confirm("A previous quiz session was found. Would you like to resume?")) {
                    this.showLoading(true, "Resuming previous quiz...");
                    this.restoreQuizFromState(savedState); // Cette méthode s'assurera que allQuestionsData est correct aussi
                } else {
                    this.clearSavedQuizState();
                    this.showScreen(this.elements.modeSelectorScreen);
                    this.focusElement(this.elements.startPracticeModeBtn);
                }
            } else {
                if (savedState) this.clearSavedQuizState();
                this.showScreen(this.elements.modeSelectorScreen);
                this.focusElement(this.elements.startPracticeModeBtn);
            }
            this.showLoading(false);
        } else {
            console.error('Essential quiz data (quizData.allQuestions, quizData.stateData, or congressMembers) is not available or in the wrong format.');
            this.displayGlobalError('Failed to load essential quiz data. Please try refreshing the page.');
            this.showLoading(false);
        }
    }

    setupEventListeners() {
        this.elements.startPracticeModeBtn?.addEventListener('click', () => {
            this.currentMode = 'practice';
            this.showScreen(this.elements.stateSelectorScreen);
            this.focusElement(this.elements.stateSelectInput);
        });
        this.elements.startExamModeBtn?.addEventListener('click', () => {
            this.currentMode = 'exam';
            this.showScreen(this.elements.stateSelectorScreen);
            this.focusElement(this.elements.stateSelectInput);
        });

        this.elements.stateSelectInput?.addEventListener('change', (e) => {
            this.selectedState = e.target.value;
            if (this.elements.confirmStateBtn) this.elements.confirmStateBtn.disabled = !this.selectedState;
        });

        this.elements.confirmStateBtn?.addEventListener('click', () => {
            if (!this.selectedState) {
                alert("Please select a state.");
                return;
            }
            // Réinitialiser allQuestionsData aux questions de base (de questions.js)
            this.allQuestionsData = JSON.parse(JSON.stringify(this.baseAllQuestionsData));

            // Générer et ajouter les questions spécifiques à l'état (Congrès)
            const stateCongressQs = this.generateStateCongressQuestions(this.selectedState);
            if (stateCongressQs.length > 0) {
                this.allQuestionsData.push(...stateCongressQs);
                console.log(`Added ${stateCongressQs.length} state-specific congress questions for ${this.selectedState}. Total questions now: ${this.allQuestionsData.length}`);
            } else {
                console.log(`No specific congress questions generated for ${this.selectedState}.`);
            }
            // Ajoutez ici la génération de question pour le gouverneur si vous l'implémentez.

            this.showScreen(this.elements.categorySelectorScreen);
            this.displayCategories(); // displayCategories utilisera this.allQuestionsData mis à jour
            if (this.elements.categoryGrid.querySelector('.category-card')) {
                this.focusElement(this.elements.categoryGrid.querySelector('.category-card'));
            }
        });

        this.elements.restartQuizBtn?.addEventListener('click', () => this.restartQuiz());
        this.elements.navChangeCategoryBtn?.addEventListener('click', () => this.handleNavChangeCategory());
        this.elements.navBackToHomeBtn?.addEventListener('click', () => this.handleNavBackToHome());
        this.elements.backToCategoriesResultsBtn?.addEventListener('click', () => this.handleBackToCategoriesFromResults());
        this.elements.backToHomeResultsBtn?.addEventListener('click', () => this.handleNavBackToHome());
        this.elements.viewDetailedStatsBtn?.addEventListener('click', () => this.displayDetailedStatistics());
        this.elements.backToResultsScreenBtn?.addEventListener('click', () => {
            this.showScreen(this.elements.resultsScreen);
            this.focusElement(this.elements.viewDetailedStatsBtn);
        });
        this.elements.homeFromStatsBtn?.addEventListener('click', () => this.handleNavBackToHome());
    }
    
    generateStateCongressQuestions(stateName) {
        const stateSpecificQuestions = [];
        if (!this.congressMembersData || this.congressMembersData.length === 0) {
            console.warn("Congress data not available for generating state questions.");
            return stateSpecificQuestions;
        }

        const stateSenators = this.congressMembersData.filter(
            member => member.state === stateName && member.activity === "senator"
        );
        const stateRepresentatives = this.congressMembersData.filter(
            member => member.state === stateName && member.activity === "representative"
        );

        // Fonction pour obtenir des distracteurs (personnes d'autres états ou avec d'autres rôles)
        const getDistractors = (correctAnswerName, listToAvoidSameRoleInState = [], count = 3) => {
            const distractors = [];
            // Priorité aux personnes d'autres états
            const otherStateMembers = this.shuffleArray(
                this.congressMembersData.filter(m => m.state !== stateName && m.name !== correctAnswerName)
            );
            
            for (const member of otherStateMembers) {
                if (distractors.length >= count) break;
                if (!distractors.includes(member.name)) {
                    distractors.push(member.name);
                }
            }

            // Si pas assez, compléter avec d'autres rôles dans le même état (sauf si évité)
            if (distractors.length < count) {
                 const sameStateOtherRoles = this.shuffleArray(
                    this.congressMembersData.filter(m => m.state === stateName && m.name !== correctAnswerName && !listToAvoidSameRoleInState.find(s => s.name === m.name) )
                );
                for (const member of sameStateOtherRoles) {
                    if (distractors.length >= count) break;
                     if (!distractors.includes(member.name)) {
                        distractors.push(member.name);
                    }
                }
            }
            
            // Fallback très simple si on manque toujours
            const allCongressNames = this.shuffleArray(this.congressMembersData.map(m => m.name));
            while (distractors.length < count) {
                const randomName = allCongressNames.find(name => name !== correctAnswerName && !distractors.includes(name));
                if (randomName) {
                    distractors.push(randomName);
                } else {
                    distractors.push(`Fictitious Official ${distractors.length + 1}`); // Ultime fallback
                }
            }
            return distractors.slice(0, count); // S'assurer qu'on a bien 'count' distracteurs
        };

        // Questions pour les Sénateurs (une question par sénateur)
        stateSenators.forEach((senator) => {
            const correctAnswer = senator.name;
            // Pour les distracteurs d'un sénateur, éviter l'autre sénateur du même état
            const otherSenatorFromState = stateSenators.find(s => s.name !== senator.name);
            const avoidInDistractors = otherSenatorFromState ? [otherSenatorFromState] : [];

            const options = this.shuffleArray([correctAnswer, ...getDistractors(correctAnswer, avoidInDistractors)]);
            stateSpecificQuestions.push({
                id: `state-senator-${stateName.replace(/\s+/g, '-')}-${senator.name.replace(/\s+/g, '-')}`, // ID unique
                sourceId: `gen-sen-${senator.id}`,
                question: `Who is one of the U.S. Senators from ${stateName}? (Unofficial)`,
                options: options,
                correctAnswer: correctAnswer,
                explanation: `${correctAnswer} (${senator.party}) is a U.S. Senator representing ${stateName}. There are two senators from each state. (Unofficial question based on available data. For official tests, always verify current officials.)`,
                category: "State Officials (Unofficial)",
                difficulty: "Medium",
                isOfficial: false,
                isStateSpecific: true
            });
        });

        // Question pour UN des Représentants (si l'état en a)
        if (stateRepresentatives.length > 0) {
            // Choisir un représentant au hasard comme bonne réponse
            const randomRepresentative = stateRepresentatives[Math.floor(Math.random() * stateRepresentatives.length)];
            const correctAnswer = randomRepresentative.name;
             // Pour les distracteurs, éviter les autres représentants du même état pour cette question spécifique
            const otherRepsFromState = stateRepresentatives.filter(r => r.name !== randomRepresentative.name);

            const options = this.shuffleArray([correctAnswer, ...getDistractors(correctAnswer, otherRepsFromState)]);

            stateSpecificQuestions.push({
                id: `state-rep-${stateName.replace(/\s+/g, '-')}-${randomRepresentative.name.replace(/\s+/g, '-')}`, // ID unique
                sourceId: `gen-rep-${randomRepresentative.id}`,
                question: `Who is one of the U.S. Representatives from ${stateName}? (Unofficial)`,
                options: options,
                correctAnswer: correctAnswer,
                explanation: `U.S. Representatives are elected for 2-year terms from congressional districts. ${correctAnswer} (${randomRepresentative.party}) is one of the representatives for ${stateName}. (Unofficial question based on available data. For official tests, verify your specific representative.)`,
                category: "State Officials (Unofficial)",
                difficulty: "Medium",
                isOfficial: false,
                isStateSpecific: true
            });
        }
        return stateSpecificQuestions;
    }

    getUniqueCategories() {
        // Inclut dynamiquement la catégorie des officiels de l'état si des questions existent
        const categoriesFromData = [...new Set(this.allQuestionsData.map(q => q.category).filter(Boolean))];
        // S'assurer que la catégorie des officiels de l'état est là si des questions ont été générées pour elle
        if (this.allQuestionsData.some(q => q.category === "State Officials (Unofficial)")) {
            if (!categoriesFromData.includes("State Officials (Unofficial)")) {
                categoriesFromData.push("State Officials (Unofficial)");
            }
        }
        return categoriesFromData.sort();
    }

    getCategoryIcon(category) {
        const icons = {
            'Principles of American Democracy': '🏛️',
            'Principles of American Government': '🏛️', // Ajouté car présent dans questions.js
            'System of Government': '⚖️',
            'Rights and Responsibilities': '🗳️',
            'American History: Colonial Period and Independence': '📜',
            'American History: 1800s': '🎩',
            'American History: Recent History': '📰',
            'Integrated Civics: Geography': '🗺️',
            'Integrated Civics: Symbols': '🇺🇸',
            'Integrated Civics: Holidays': '🎆',
            'Science & Technology in U.S.': '🚀',
            'U.S. Culture & Society': '🎭',
            'U.S. Arts & Literature': '📚',
            'State Officials (Unofficial)': '🏘️' // Nouvelle icône pour la catégorie d'officiels d'état
        };
        return icons[category] || '📌';
    }

    // --- Le reste de vos méthodes (showLoading, displayGlobalError, focusElement, setupStateSelector,
    //      handleNavChangeCategory, handleNavBackToHome, handleBackToCategoriesFromResults, showScreen,
    //      displayCategories, handleCategorySelection, createCategoryCard, shuffleArray, startQuiz,
    //      _isCorrectAnswer, processStateSpecificQuestion, startQuestionTimer, stopQuestionTimer,
    //      updateTimerDisplay, handleTimeUp, displayQuestion, getDifficultyBadge, getAnswerOptionsHTML,
    //      attachQuestionEventListeners, restoreAnswerState, selectAnswer, updateProgress, previousQuestion,
    //      nextQuestion, calculateExamScoreAndShowResults, collectDetailedResults, showResults,
    //      _formatTime, getProgressBarColor, displayDetailedStatistics, restartQuiz)
    //      devrait en grande partie rester le même que dans la version précédente,
    //      sauf ajustements mineurs si nécessaire en fonction de la nouvelle logique.
    //      J'ai intégré les méthodes les plus critiques ci-dessus.

    // ... (Collez ici TOUTES les autres méthodes de la version précédente de quiz-app.js qui ne sont pas déjà redéfinies ci-dessus) ...
    // Assurez-vous que processStateSpecificQuestion ne traite que le stateInfoType "capital" s'il reste.
    // Les nouvelles questions sur les membres du congrès ne doivent pas passer par la logique de
    // génération d'options pour les capitales.
    processStateSpecificQuestion(questionInstance) {
        let processedInstance = JSON.parse(JSON.stringify(questionInstance));

        // Logique pour les questions de type 'capital'
        if (processedInstance.isStateSpecific && this.selectedState && processedInstance.stateInfoType === "capital") {
            if (processedInstance.question.includes('YOUR STATE')) {
                processedInstance.question = processedInstance.question.replace(/YOUR STATE/g, this.selectedState);
            }
            if ((processedInstance.options[0] === "(Populated by JS)" || processedInstance.correctAnswer === "(Populated by JS)")) {
                const capital = this.stateData.capitals ? this.stateData.capitals[this.selectedState] : null;
                if (capital) {
                    const distractors = [
                        this.selectedState + " City", "Town of " + this.selectedState,
                        "Old " + this.selectedState + " Village", "New " + this.selectedState,
                        "Central " + this.selectedState, "Metro " + this.selectedState,
                        "Springfield", "Columbus", "Albany", "Sacramento"
                    ].filter(d => d.toLowerCase() !== capital.toLowerCase() && !d.startsWith(this.selectedState));

                    let finalOptionsSet = new Set([capital]);
                    let shuffledDistractors = this.shuffleArray(distractors);

                    for (let i = 0; finalOptionsSet.size < 4 && i < shuffledDistractors.length; ++i) {
                        if (!Array.from(finalOptionsSet).map(o => o.toLowerCase()).includes(shuffledDistractors[i].toLowerCase())) {
                            finalOptionsSet.add(shuffledDistractors[i]);
                        }
                    }
                    let fallbackCounter = 0;
                    const allCapitals = Object.values(this.stateData.capitals || {});
                    while (finalOptionsSet.size < 4 && fallbackCounter < allCapitals.length) {
                        const randomCapital = allCapitals[Math.floor(Math.random() * allCapitals.length)];
                        if (randomCapital.toLowerCase() !== capital.toLowerCase() && !Array.from(finalOptionsSet).map(o => o.toLowerCase()).includes(randomCapital.toLowerCase())) {
                            finalOptionsSet.add(randomCapital);
                        }
                        fallbackCounter++;
                    }
                    if (finalOptionsSet.size < 4) {
                        const placeholders = ["City Example A", "City Example B", "City Example C", "City Example D"];
                        let phIndex = 0;
                        while (finalOptionsSet.size < 4) {
                            if (!Array.from(finalOptionsSet).map(o => o.toLowerCase()).includes(placeholders[phIndex].toLowerCase())) {
                                finalOptionsSet.add(placeholders[phIndex]);
                            }
                            phIndex = (phIndex + 1) % placeholders.length;
                        }
                    }
                    processedInstance.options = this.shuffleArray(Array.from(finalOptionsSet));
                    processedInstance.correctAnswer = capital;
                } else {
                    processedInstance.options = ["Capital data not found.", "Option B", "Option C", "Option D"];
                    processedInstance.correctAnswer = "Capital data not found.";
                }
            }
        } 
        // Ne pas traiter les questions 'senator' ou 'representative' ici pour la génération d'options,
        // car elles sont déjà générées avec leurs options dans generateStateCongressQuestions.
        // S'assurer juste que le nom de l'état est bien remplacé dans le texte de la question si 'YOUR STATE' est présent.
        else if (processedInstance.isStateSpecific && this.selectedState && processedInstance.question.includes('YOUR STATE')) {
            processedInstance.question = processedInstance.question.replace(/YOUR STATE/g, this.selectedState);
        }
        
        return processedInstance;
    }
    showLoading(show, message = "Loading questions...") {
        if (!this.elements.loadingScreen) return;
        const pElement = this.elements.loadingScreen.querySelector('p');
        if (pElement) pElement.textContent = message;

        if (show) {
            this.elements.loadingScreen.style.display = 'flex';
            setTimeout(() => this.elements.loadingScreen.classList.add('show'), 10);
        } else {
            this.elements.loadingScreen.classList.remove('show');
            setTimeout(() => this.elements.loadingScreen.style.display = 'none', 300);
        }
    }

    displayGlobalError(message) {
        if (!this.elements.appRoot) return;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'quiz-section error-message card';
        errorDiv.innerHTML = '<h3 class="text-accent"><span class="icon">⚠️</span> Error</h3><p>' + message + '</p><button class="btn btn-secondary" onclick="window.location.reload()">Try Reloading</button>';
        const existingError = this.elements.appRoot.querySelector('.error-message');
        if (existingError) existingError.remove();
        this.elements.appRoot.insertBefore(errorDiv, this.elements.appRoot.firstChild);
    }

    focusElement(element) {
        if (element && typeof element.focus === 'function') {
            requestAnimationFrame(() => requestAnimationFrame(() => element.focus()));
        }
    }

    setupStateSelector() {
        const states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
            'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming', 'Washington D.C.'
        ];
        if (this.elements.stateSelectInput) {
            this.elements.stateSelectInput.innerHTML = '<option value="">-- Select State --</option>';
            states.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                this.elements.stateSelectInput.appendChild(option);
            });
        } else {
            console.error("#stateSelect element not found during setupStateSelector");
        }
    }
    
    handleNavChangeCategory() {
        const quizInProgress = this.selectedQuestions.length > 0 && this.currentQuestionIndex < this.selectedQuestions.length && this.userAnswers.some(ans => ans !== null);
        if (quizInProgress) {
            if (!confirm("Are you sure you want to change categories? Your current quiz progress will be lost.")) {
                return;
            }
        }
        this.clearSavedQuizState();
        this.showScreen(this.elements.categorySelectorScreen);
        this.displayCategories(); // Assurez-vous que allQuestionsData est correct avant cet appel
        if (this.elements.categoryGrid.querySelector('.category-card')) {
            this.focusElement(this.elements.categoryGrid.querySelector('.category-card'));
        }
    }

    handleNavBackToHome() {
        const quizInProgress = this.selectedQuestions.length > 0 && this.currentQuestionIndex < this.selectedQuestions.length && this.userAnswers.some(ans => ans !== null);
        if (quizInProgress) {
            if (!confirm("Are you sure you want to go back to the home screen? Your current quiz progress will be lost.")) {
                return;
            }
        }
        this.clearSavedQuizState();
        this.currentMode = null;
        this.selectedState = '';
        this.selectedCategoryOrFilterKey = '';
        this.currentQuizTitle = '';
        this.selectedQuestions = [];
        this.userAnswers = [];
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.detailedQuizResults = [];
        this.timeSpentPerQuestion = [];
        this.allQuestionsData = JSON.parse(JSON.stringify(this.baseAllQuestionsData)); // Réinitialiser aux questions de base

        if (this.elements.stateSelectInput) this.elements.stateSelectInput.value = '';
        if (this.elements.confirmStateBtn) this.elements.confirmStateBtn.disabled = true;

        this.showScreen(this.elements.modeSelectorScreen);
        this.focusElement(this.elements.startPracticeModeBtn);
    }

    handleBackToCategoriesFromResults() {
        this.showScreen(this.elements.categorySelectorScreen);
        // allQuestionsData devrait déjà être correctement défini (avec les questions d'état si un état a été sélectionné)
        this.displayCategories();
        if (this.elements.resultsDetailsContainer) this.elements.resultsDetailsContainer.innerHTML = '';
        if (this.elements.categoryGrid.querySelector('.category-card')) {
            this.focusElement(this.elements.categoryGrid.querySelector('.category-card'));
        }
    }

    showScreen(screenElement) {
        [this.elements.modeSelectorScreen, this.elements.stateSelectorScreen,
        this.elements.categorySelectorScreen, this.elements.progressContainer,
        this.elements.quizContentScreen, this.elements.resultsScreen,
        this.elements.statisticsScreen
        ].forEach(el => {
            if (el) el.style.display = 'none';
        });

        if (screenElement) {
            screenElement.style.display = 'block';
            screenElement.classList.remove('fade-in-section');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    screenElement.classList.add('fade-in-section');
                });
            });
        }
    }
    
    displayCategories() {
        const categories = this.getUniqueCategories(); // S'assure que cela inclut la nouvelle catégorie si elle a des questions
        this.elements.categoryGrid.innerHTML = '';
        const categorySelectorHeading = document.getElementById('categorySelectorHeading');
        if (categorySelectorHeading) {
            let modeText = this.currentMode === 'exam' ? ` (Exam Mode - ${this.examQuestionCount} Qs)` : ' (Practice Mode)';
            categorySelectorHeading.innerHTML = `<span class="icon" aria-hidden="true">🗂️</span> Choose Category ${modeText}`;
        }

        // Carte pour "Mixed Questions"
        let mixedQuestionsPool = this.allQuestionsData;
        let mixedCardSubtext = `${mixedQuestionsPool.length} questions`;
        if (this.currentMode === 'exam') {
            mixedQuestionsPool = this.allQuestionsData.filter(q => q.isOfficial);
            mixedCardSubtext = mixedQuestionsPool.length > 0 ? (mixedQuestionsPool.length < this.examQuestionCount ? `Official questions (${mixedQuestionsPool.length} Qs exam)` : `Official questions (${this.examQuestionCount} Qs exam)`) : "No official questions";
        }
        const mixedCard = this.createCategoryCard('Mixed Questions' + (this.currentMode === 'exam' ? ' (Exam)' : ''), mixedCardSubtext, '🎲');
        mixedCard.disabled = (this.currentMode === 'exam' && mixedQuestionsPool.length === 0);
        mixedCard.addEventListener('click', () => this.handleCategorySelection('all', 'Mixed Questions'));
        this.elements.categoryGrid.appendChild(mixedCard);
        
        // Cartes pour chaque catégorie
        categories.forEach(category => {
            const questionsInCategory = this.allQuestionsData.filter(q => q.category === category);
            let officialCountInCategory = questionsInCategory.filter(q => q.isOfficial).length;
            
            // Pour la catégorie spécifique à l'état, toutes ses questions sont non officielles par défaut
            if (category === "State Officials (Unofficial)") {
                 officialCountInCategory = 0; 
            }

            let countForDisplay = `${questionsInCategory.length} questions`;
            let cardDisabled = false;
            let cardTitleAttr = '';

            if (this.currentMode === 'exam') {
                countForDisplay = `${officialCountInCategory} official`;
                if (officialCountInCategory === 0) {
                    cardDisabled = true;
                    cardTitleAttr = "No official questions in this category for an exam.";
                } else if (officialCountInCategory < this.examQuestionCount) {
                    countForDisplay += ` (short exam: ${officialCountInCategory} Qs)`;
                } else {
                    countForDisplay += ` (${this.examQuestionCount} Qs exam)`;
                }
            }
             // Désactiver la catégorie "State Officials" en mode examen
            if (this.currentMode === 'exam' && category === "State Officials (Unofficial)") {
                cardDisabled = true;
                cardTitleAttr = "State official questions are not available in Exam Mode.";
                countForDisplay = "Practice Mode only";
            }


            const icon = this.getCategoryIcon(category);
            const card = this.createCategoryCard(category + (this.currentMode === 'exam' ? ' (Exam)' : ''), countForDisplay, icon);
            card.disabled = cardDisabled;
            if (cardTitleAttr) card.title = cardTitleAttr;

            if (!cardDisabled) {
                card.addEventListener('click', () => this.handleCategorySelection(category, category));
            }
            this.elements.categoryGrid.appendChild(card);
        });

        if (this.currentMode === 'practice') {
            const filterHeader = document.createElement('h4');
            filterHeader.className = 'category-group-title';
            filterHeader.innerHTML = '<span class="icon">🔍</span> Filtered Practice';
            this.elements.categoryGrid.appendChild(filterHeader);

            const filters = [
                { key: 'FilterOfficial', title: 'Official Questions Only', filterFn: q => q.isOfficial === true, icon: '📋' },
                { key: 'FilterEasy', title: 'Easy Questions', filterFn: q => q.difficulty === 'Easy', icon: '🟢' },
                { key: 'FilterMedium', title: 'Medium Questions', filterFn: q => q.difficulty === 'Medium', icon: '🟡' },
                { key: 'FilterHard', title: 'Hard Questions', filterFn: q => q.difficulty === 'Hard', icon: '🔴' },
                { key: 'Filter6520', title: '65/20 Special Consideration', filterFn: q => q.explanation && q.explanation.includes('65/20'), icon: '⭐' }
            ];

            filters.forEach(({ key, title, filterFn, icon }) => {
                const count = this.allQuestionsData.filter(filterFn).length;
                if (count > 0) {
                    const card = this.createCategoryCard(title + " (Practice)", count + " questions", icon);
                    card.addEventListener('click', () => this.handleCategorySelection(key, title, filterFn));
                    this.elements.categoryGrid.appendChild(card);
                }
            });
        }
    }

    handleCategorySelection(key, titleForDisplay, filterFn = null) {
        this.selectedCategoryOrFilterKey = key;
        this.currentQuizTitle = `${titleForDisplay} (${this.currentMode === 'exam' ? 'Exam' : 'Practice'})`;

        let baseQuestions;
        if (key === 'all') {
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData)); // Utilise le allQuestionsData actuel (avec les questions d'état)
        } else if (filterFn) {
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData.filter(filterFn)));
        } else {
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData.filter(q => q.category === key)));
        }

        if (this.currentMode === 'exam') {
            // En mode examen, ne prendre que les questions officielles
            this.selectedQuestions = baseQuestions.filter(q => q.isOfficial === true);
            this.selectedQuestions = this.shuffleArray(this.selectedQuestions);
            if (this.selectedQuestions.length === 0) {
                alert("No official questions available for an exam in this selection. Please choose another option or try Practice Mode.");
                this.displayCategories();
                this.focusElement(this.elements.categoryGrid.querySelector('.category-card:not(:disabled)'));
                return;
            }
            this.selectedQuestions = this.selectedQuestions.slice(0, Math.min(this.selectedQuestions.length, this.examQuestionCount));

            if (this.selectedQuestions.length === 0) { // Vérification redondante mais sûre
                alert("An error occurred selecting questions for the exam. Please try again.");
                this.displayCategories();
                this.focusElement(this.elements.categoryGrid.querySelector('.category-card:not(:disabled)'));
                return;
            }
            if (this.selectedQuestions.length < this.examQuestionCount && this.selectedQuestions.length > 0) {
                console.warn(`Exam for "${titleForDisplay}" will have only ${this.selectedQuestions.length} questions due to availability.`);
            }
        } else { // Practice Mode
            this.selectedQuestions = this.shuffleArray(baseQuestions);
            const maxPracticeQuestions = key === 'all' ? 50 : (key === "State Officials (Unofficial)" ? questionsInCategory.length : 20);
             if (this.selectedQuestions.length > maxPracticeQuestions) {
                this.selectedQuestions = this.selectedQuestions.slice(0, maxPracticeQuestions);
            }
        }
        this.startQuiz();
    }
    
    createCategoryCard(title, countText, icon) {
        const card = document.createElement('button');
        card.className = 'category-card';
        card.innerHTML =
            `<span class="category-icon" aria-hidden="true">${icon}</span>` +
            `<span class="category-title">${title}</span>` +
            `<span class="category-count">${countText}</span>`;
        return card;
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    startQuiz() {
        this.showLoading(true, "Preparing " + this.currentQuizTitle + " quiz...");
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = new Array(this.selectedQuestions.length).fill(null);
        this.correctlyAnsweredFlags = new Array(this.selectedQuestions.length).fill(false);
        this.detailedQuizResults = [];
        this.timeSpentPerQuestion = new Array(this.selectedQuestions.length).fill(0);

        this.clearSavedQuizState();

        this.elements.progressCategoryTitle.textContent = this.currentQuizTitle;
        this.elements.totalQuestionsStat.textContent = this.selectedQuestions.length;
        this.elements.currentScoreStat.textContent = this.currentMode === 'exam' ? "N/A" : this.score;

        this.showScreen(this.elements.progressContainer);
        this.elements.quizContentScreen.style.display = 'block';

        if (this.selectedQuestions.length === 0) {
            this.elements.activeQuestionContainer.innerHTML = '<p class="text-center text-accent">No questions available for this selection.</p><div class="controls" style="justify-content: center;"><button id="backToCatFromEmpty" class="btn btn-primary">Back to Categories</button></div>';
            document.getElementById('backToCatFromEmpty')?.addEventListener('click', () => {
                this.showScreen(this.elements.categorySelectorScreen);
                this.displayCategories();
                if (this.elements.categoryGrid.querySelector('.category-card')) {
                    this.focusElement(this.elements.categoryGrid.querySelector('.category-card'));
                }
            });
            this.showLoading(false);
            this.focusElement(document.getElementById('backToCatFromEmpty'));
            return;
        }

        this.displayQuestion();
        this.saveQuizState(); // Sauvegarder l'état initial du quiz
        this.showLoading(false);
    }
    
    _isCorrectAnswer(selectedOptionText, correctAnswerData) {
        if (selectedOptionText === null || selectedOptionText === undefined) return false;
        
        const normalize = (text) => String(text).trim().toLowerCase().replace(/\s+/g, ' ');
        const normalizedSelectedOptionText = normalize(selectedOptionText);

        if (Array.isArray(correctAnswerData)) {
            return correctAnswerData.some(ca => normalize(ca) === normalizedSelectedOptionText);
        }

        if (typeof correctAnswerData === 'string') {
            const normalizedCorrectAnswerDataString = normalize(correctAnswerData);
            if (normalizedSelectedOptionText === normalizedCorrectAnswerDataString) {
                return true;
            }
            // Gérer les alternatives comme "Answer A (or Answer B, or Answer C)"
            const orPattern = /\s*\(or\s*(.*?)\)\s*$/; // Capturer le contenu entre (or ...)
            const mainAnswerPart = correctAnswerData.replace(orPattern, '').trim();
            let possibleAnswers = [normalize(mainAnswerPart)];
            const match = correctAnswerData.match(orPattern);

            if (match && match[1]) { // Si une correspondance (or ...) est trouvée
                 // Séparer par ", or " ou juste "," ou " or " (espaces flexibles)
                match[1].split(/\s*,\s*or\s*|\s*,\s*|\s+or\s+/) 
                     .forEach(alt => {
                         const normalizedAlt = normalize(alt.trim());
                         if (normalizedAlt) { // S'assurer que l'alternative n'est pas vide après trim/normalize
                             possibleAnswers.push(normalizedAlt);
                         }
                     });
            }
            // Éliminer les doublons potentiels et les chaînes vides après normalisation
            possibleAnswers = [...new Set(possibleAnswers.filter(Boolean))]; 
            return possibleAnswers.some(pa => pa === normalizedSelectedOptionText);
        }
        // Fallback pour d'autres types de données (booléens, nombres convertis en chaînes)
        return normalize(correctAnswerData) === normalizedSelectedOptionText;
    }

    startQuestionTimer() {
        if (this.currentMode !== 'exam') {
            this.updateTimerDisplay(false);
            return;
        }
        this.stopQuestionTimer(false); 
        this.questionTimeRemaining = this.questionTimeLimit;
        this.updateTimerDisplay(true, this.questionTimeRemaining);

        this.questionTimerInterval = setInterval(() => {
            this.questionTimeRemaining--;
            this.updateTimerDisplay(true, this.questionTimeRemaining);
            if (this.questionTimeRemaining <= 0) {
                this.handleTimeUp();
            }
        }, 1000);
    }

    stopQuestionTimer(recordTime = true) {
        clearInterval(this.questionTimerInterval);
        this.questionTimerInterval = null;

        if (recordTime && this.currentMode === 'exam' && this.currentQuestionIndex < this.selectedQuestions.length) {
            let timeTaken = this.questionTimeLimit - Math.max(0, this.questionTimeRemaining);
            if (this.userAnswers[this.currentQuestionIndex] !== null && timeTaken === 0) { 
                timeTaken = 1; 
            }
            this.timeSpentPerQuestion[this.currentQuestionIndex] = timeTaken;
        }
    }

    updateTimerDisplay(show, time = 0) {
        const timerDisplay = document.getElementById('questionTimerDisplay');
        if (timerDisplay) {
            if (show && this.currentMode === 'exam') {
                timerDisplay.textContent = `Time: ${time}s`;
                timerDisplay.style.display = 'inline-block';
                if (time <= 5 && time > 0) { 
                    timerDisplay.classList.add('low-time');
                } else {
                    timerDisplay.classList.remove('low-time');
                }
            } else {
                timerDisplay.style.display = 'none';
                timerDisplay.classList.remove('low-time');
            }
        }
    }
    
    handleTimeUp() {
        this.stopQuestionTimer(true); 
        console.log("Time up for question: " + (this.currentQuestionIndex + 1));
    
        const currentDisplayQuestion = this.processStateSpecificQuestion(this.selectedQuestions[this.currentQuestionIndex]);
        const explanationDiv = document.getElementById('explanation');
        const explanationContent = document.getElementById('explanationContent');
    
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.disabled = true; 
            if (this.userAnswers[this.currentQuestionIndex] === null && this._isCorrectAnswer(btn.textContent, currentDisplayQuestion.correctAnswer)) {
                btn.classList.add('correct');
            }
        });
    
        if (explanationDiv && explanationContent && this.userAnswers[this.currentQuestionIndex] === null) {
            explanationContent.innerHTML = `<p class='text-accent'><strong>Time's up!</strong> The correct answer was marked.</p> ${currentDisplayQuestion.explanation || "No explanation available."}`;
            explanationDiv.style.display = 'block';
        }
    
        document.getElementById('nextButton').disabled = false; 
        this.focusElement(document.getElementById('nextButton')); // Focus pour faciliter la navigation
    
        // En mode examen, ne pas avancer automatiquement, laisser l'utilisateur cliquer sur Next
        // Sauf si vous voulez une pénalité de temps ou autre chose
    }

    displayQuestion() {
        const originalQuestionData = this.selectedQuestions[this.currentQuestionIndex];
        if (!originalQuestionData) {
            this.showResults();
            return;
        }
        this.updateProgress();
        const currentDisplayQuestion = this.processStateSpecificQuestion(originalQuestionData);

        const questionHTML =
            `<div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${this.currentQuestionIndex + 1} of ${this.selectedQuestions.length}</span>
                    <div>
                        <span id="questionTimerDisplay" class="question-timer" style="display:none;"></span>
                        ${this.getDifficultyBadge(currentDisplayQuestion.difficulty)}
                        ${currentDisplayQuestion.isOfficial ? '<span class="official-badge">OFFICIAL</span>' : ''}
                    </div>
                </div>
                ${currentDisplayQuestion.category && this.currentMode !== 'exam' ? `<span class="category-tag">${currentDisplayQuestion.category}</span>` : ''}
                <p class="question-text" id="questionTextId${this.currentQuestionIndex}">${currentDisplayQuestion.question}</p>
                <div class="answer-options" role="radiogroup" aria-labelledby="questionTextId${this.currentQuestionIndex}">
                    ${this.getAnswerOptionsHTML(currentDisplayQuestion)} 
                </div>
                <div id="explanation" class="explanation" style="display: ${this.currentMode === 'exam' || this.userAnswers[this.currentQuestionIndex] === null ? 'none' : 'block'};">
                    <h4><span class="explanation-icon" aria-hidden="true">💡</span> Explanation</h4>
                    <div id="explanationContent">${currentDisplayQuestion.explanation || "No explanation available."}</div>
                </div>
                <div class="controls">
                    <button id="prevButton" class="btn btn-secondary" ${this.currentQuestionIndex === 0 || this.currentMode === 'exam' ? 'disabled' : ''}>Previous</button> 
                    <button id="nextButton" class="btn btn-primary" ${this.userAnswers[this.currentQuestionIndex] === null && this.currentMode === 'exam' && this.questionTimeRemaining > 0 ? 'disabled' : ''}>
                        ${this.currentQuestionIndex === this.selectedQuestions.length - 1 ? (this.currentMode === 'exam' ? 'View Results' : 'Finish Quiz') : 'Next'}
                    </button>
                </div>
            </div>`;
        this.elements.activeQuestionContainer.innerHTML = questionHTML;
        this.attachQuestionEventListeners(currentDisplayQuestion);

        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            this.restoreAnswerState(currentDisplayQuestion);
        } else {
            if (this.selectedQuestions.length > 0 && this.elements.activeQuestionContainer.querySelector('.answer-option')) {
                this.focusElement(this.elements.activeQuestionContainer.querySelector('.answer-option'));
            }
        }
        if (this.currentMode === 'exam' && this.userAnswers[this.currentQuestionIndex] === null) { // Démarrer le minuteur uniquement si la question n'a pas été répondue
             this.startQuestionTimer();
        } else if (this.currentMode === 'exam' && this.userAnswers[this.currentQuestionIndex] !== null) {
            // Si la réponse est déjà là (restauration), afficher le temps mais ne pas redémarrer le minuteur.
            this.updateTimerDisplay(true, Math.max(0, this.questionTimeLimit - (this.timeSpentPerQuestion[this.currentQuestionIndex] || 0)));
        } else {
             this.updateTimerDisplay(false); // Cacher le minuteur en mode pratique
        }
    }

    getDifficultyBadge(difficulty) {
        if (!difficulty) return '';
        const difficultyClass = String(difficulty).toLowerCase();
        return `<span class="difficulty-badge ${difficultyClass}">${difficulty}</span>`;
    }

    getAnswerOptionsHTML(questionDataForDisplay) {
        const options = Array.isArray(questionDataForDisplay.options) && questionDataForDisplay.options.length > 0 ? questionDataForDisplay.options : ["No options available"];
        return options.map((option, index) => {
            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            return `<button class="answer-option" role="radio" aria-checked="${isSelected}" data-index="${index}">${option}</button>`;
        }).join('');
    }

    attachQuestionEventListeners(currentDisplayQuestion) {
        const answerButtons = this.elements.activeQuestionContainer.querySelectorAll('.answer-option');
        answerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedIndex = parseInt(e.currentTarget.dataset.index);
                this.selectAnswer(selectedIndex, currentDisplayQuestion);
            });
        });
        document.getElementById('prevButton')?.addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextButton')?.addEventListener('click', () => this.nextQuestion());
    }
    
    restoreAnswerState(currentDisplayQuestion) {
        const userAnswerIndex = this.userAnswers[this.currentQuestionIndex];
        if (userAnswerIndex === null || userAnswerIndex === undefined) return;

        const answerButtons = document.querySelectorAll('.answer-option');
        answerButtons.forEach((btn, i) => {
            btn.setAttribute('aria-checked', String(i === userAnswerIndex));
            btn.classList.toggle('selected', i === userAnswerIndex);
            btn.disabled = true; 
        });

        const nextButton = document.getElementById('nextButton');
        if (nextButton) nextButton.disabled = false;

        if (this.currentMode !== 'exam') { 
            const selectedOptionText = currentDisplayQuestion.options[userAnswerIndex];
            const isCorrect = this._isCorrectAnswer(selectedOptionText, currentDisplayQuestion.correctAnswer);
            
            answerButtons[userAnswerIndex]?.classList.add(isCorrect ? 'correct' : 'incorrect');

            currentDisplayQuestion.options.forEach((opt, i) => {
                if (this._isCorrectAnswer(opt, currentDisplayQuestion.correctAnswer)) {
                    answerButtons[i]?.classList.add('correct');
                }
            });

            const explanationDiv = document.getElementById('explanation');
            if (explanationDiv) {
                explanationDiv.style.display = 'block';
                document.getElementById('explanationContent').innerHTML = currentDisplayQuestion.explanation || "No explanation available.";
                explanationDiv.classList.remove('fade-in'); void explanationDiv.offsetWidth; explanationDiv.classList.add('fade-in');
            }
        } else { 
             answerButtons.forEach(btn => btn.disabled = true);
        }
        if (nextButton) this.focusElement(nextButton);
    }

    selectAnswer(selectedIndex, currentDisplayQuestion) {
        if(this.userAnswers[this.currentQuestionIndex] !== null && this.currentMode === 'exam' && this.questionTimeRemaining > 0) { 
            return; // Ne pas permettre de changer de réponse en mode examen une fois sélectionnée (si le temps n'est pas écoulé)
        }

        if (this.currentMode === 'exam' && this.questionTimerInterval) { // Arrêter le minuteur dès qu'une réponse est sélectionnée
            this.stopQuestionTimer(true);
        }
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;

        document.querySelectorAll('.answer-option').forEach((btn, i) => {
            btn.setAttribute('aria-checked', String(i === selectedIndex));
            btn.classList.toggle('selected', i === selectedIndex);
            btn.disabled = true; // Désactiver les options après sélection
        });

        const nextButton = document.getElementById('nextButton');
        if (nextButton) nextButton.disabled = false; // Activer le bouton Suivant

        if (this.currentMode !== 'exam') { // Mode Pratique: afficher correction et explication
            const selectedOptionText = currentDisplayQuestion.options[selectedIndex];
            const isCorrect = this._isCorrectAnswer(selectedOptionText, currentDisplayQuestion.correctAnswer);

            document.querySelectorAll('.answer-option')[selectedIndex]?.classList.add(isCorrect ? 'correct' : 'incorrect');

            currentDisplayQuestion.options.forEach((opt, i) => { // Marquer la/les bonne(s) réponse(s)
                if (this._isCorrectAnswer(opt, currentDisplayQuestion.correctAnswer)) {
                    document.querySelectorAll('.answer-option')[i]?.classList.add('correct');
                }
            });

            const explanationDiv = document.getElementById('explanation');
            if (explanationDiv) {
                document.getElementById('explanationContent').innerHTML = currentDisplayQuestion.explanation || "No explanation available.";
                explanationDiv.style.display = 'block';
                explanationDiv.classList.remove('fade-in'); void explanationDiv.offsetWidth; explanationDiv.classList.add('fade-in');
            }

            const alreadyCountedAsCorrect = this.correctlyAnsweredFlags[this.currentQuestionIndex];
            if (isCorrect && !alreadyCountedAsCorrect) {
                this.score++;
                this.correctlyAnsweredFlags[this.currentQuestionIndex] = true;
            } else if (!isCorrect && alreadyCountedAsCorrect) { 
                this.score--; // Si l'utilisateur change une réponse correcte pour une incorrecte
                this.correctlyAnsweredFlags[this.currentQuestionIndex] = false;
            }
            this.updateProgress();
        }
        this.saveQuizState();
        if (nextButton) this.focusElement(nextButton);
    }
    
    updateProgress() {
        this.elements.currentQuestionStat.textContent = this.currentQuestionIndex + 1;
        this.elements.currentScoreStat.textContent = this.currentMode === 'exam' ? "N/A" : this.score;
        const progressPercent = this.selectedQuestions.length > 0 ? ((this.currentQuestionIndex + 1) / this.selectedQuestions.length) * 100 : 0;
        this.elements.progressFill.style.width = progressPercent + '%';
    }

    previousQuestion() {
        if (this.currentMode === 'exam' || this.currentQuestionIndex === 0) return;
        this.currentQuestionIndex--;
        this.displayQuestion(); 
        this.saveQuizState();
    }

    nextQuestion() {
        // Si l'utilisateur n'a pas répondu et que le temps n'est pas écoulé en mode examen, ne pas avancer.
        if (this.currentMode === 'exam' && this.userAnswers[this.currentQuestionIndex] === null && this.questionTimeRemaining > 0) {
            // Optionnel: alerter l'utilisateur ou simplement ne rien faire.
            // Pour l'instant, le bouton 'Next' est désactivé dans ce cas, donc ce `if` ne devrait pas être souvent atteint.
            // Cependant, si `handleTimeUp` appelle `nextQuestion`, ce serait un cas à gérer.
             console.log("User clicked Next in exam mode without answering, and time is not up. (This path should be rare if 'Next' button logic is correct).");
             return;
        }
        
        if (this.questionTimerInterval) { // Arrête le minuteur s'il est actif (au cas où handleTimeUp n'aurait pas été appelé)
            this.stopQuestionTimer(true);
        }

        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion(); 
            this.saveQuizState();
        } else {
            this.clearSavedQuizState(); // Effacer l'état sauvegardé car le quiz est terminé
            if (this.currentMode === 'exam') {
                this.calculateExamScoreAndShowResults();
            } else {
                this.showResults();
            }
        }
    }
    
    calculateExamScoreAndShowResults() {
        this.score = 0;
        this.correctlyAnsweredFlags = new Array(this.selectedQuestions.length).fill(false);
        this.selectedQuestions.forEach((originalQuestionData, index) => {
            const userAnswerIndex = this.userAnswers[index];
            // Utiliser la question telle qu'elle a été VUE par l'utilisateur (traitée)
            const questionUserSaw = this.processStateSpecificQuestion(JSON.parse(JSON.stringify(originalQuestionData)));

            if (userAnswerIndex !== null && userAnswerIndex !== undefined && questionUserSaw.options && userAnswerIndex < questionUserSaw.options.length) {
                const selectedOptionText = questionUserSaw.options[userAnswerIndex];
                if (this._isCorrectAnswer(selectedOptionText, questionUserSaw.correctAnswer)) {
                    this.score++;
                    this.correctlyAnsweredFlags[index] = true;
                }
            }
            // Si userAnswerIndex est null (temps écoulé), la réponse est incorrecte, score non incrémenté.
        });
        this.showResults();
    }

    collectDetailedResults() {
        this.detailedQuizResults = this.selectedQuestions.map((originalQuestionData, index) => {
            const questionUserSaw = this.processStateSpecificQuestion(JSON.parse(JSON.stringify(originalQuestionData)));
            const userAnswerIndex = this.userAnswers[index];
            const isCorrect = this.correctlyAnsweredFlags[index];
            let userAnswerText = "No answer"; // Par défaut
            if (userAnswerIndex !== null && userAnswerIndex !== undefined && questionUserSaw.options && userAnswerIndex < questionUserSaw.options.length) {
                userAnswerText = questionUserSaw.options[userAnswerIndex];
            } else if (this.currentMode === 'exam' && (this.timeSpentPerQuestion[index] || 0) >= this.questionTimeLimit) {
                userAnswerText = "Time Expired / No Answer";
            }


            let correctAnswerForDisplay = questionUserSaw.correctAnswer; // Utiliser la bonne réponse de la question traitée
            if (Array.isArray(correctAnswerForDisplay)) {
                correctAnswerForDisplay = correctAnswerForDisplay.join('; or ');
            }

            return {
                questionId: originalQuestionData.id || `q-${index}`, // Utiliser l'ID original
                questionText: questionUserSaw.question,
                options: questionUserSaw.options,
                userAnswerIndex: userAnswerIndex,
                userAnswerText: userAnswerText,
                correctAnswerText: String(correctAnswerForDisplay),
                isCorrect: isCorrect,
                explanation: questionUserSaw.explanation || "No explanation available.",
                category: originalQuestionData.category || 'N/A',
                difficulty: originalQuestionData.difficulty || 'N/A',
                isOfficial: originalQuestionData.isOfficial || false,
                timeSpent: this.timeSpentPerQuestion[index] !== undefined ? this.timeSpentPerQuestion[index] : (this.currentMode === 'exam' && userAnswerIndex === null ? this.questionTimeLimit : 0)
            };
        });
    }
    
    showResults() {
        this.stopQuestionTimer(false); 
        this.updateTimerDisplay(false); 
        this.clearSavedQuizState(); // Quiz terminé, plus besoin de l'état de reprise.
        this.showLoading(true, "Finalizing results...");
        this.collectDetailedResults();
        this.showScreen(this.elements.resultsScreen);

        const finalScoreValue = this.score;
        const totalQuestions = this.detailedQuizResults.length > 0 ? this.detailedQuizResults.length : 1;
        const percentage = Math.round((finalScoreValue / totalQuestions) * 100);

        this.elements.finalScoreDisplay.textContent = percentage + '%';
        this.elements.finalScoreDisplay.className = 'final-score text-center'; // Reset classes
        this.elements.finalScoreDisplay.classList.add(percentage >= 60 ? 'pass' : 'fail');

        const messages = {
            perfect: "Perfect score! You're a true American civics expert! 🌟",
            excellent: "Excellent work! You have a strong grasp of American civics! 🎉",
            good: "Good job! You passed with a solid understanding! 👏",
            fail: "Keep studying! You'll get there with more practice! 📚"
        };
        let messageKey = percentage === 100 ? 'perfect' : (percentage >= 80 ? 'excellent' : (percentage >= 60 ? 'good' : 'fail'));
        this.elements.resultMessage.textContent = messages[messageKey];

        this.elements.resultsDetailsContainer.innerHTML = '<h3 class="review-title">Review Your Answers:</h3>';
        this.detailedQuizResults.forEach((result, index) => {
            let reviewItemMainClass = 'review-item';
            if (result.userAnswerIndex !== null && result.userAnswerIndex !== undefined) {
                reviewItemMainClass += result.isCorrect ? ' review-item-correct' : ' review-item-incorrect';
            } else {
                reviewItemMainClass += ' review-item-no-answer'; // Pour les questions non répondues / temps écoulé
            }

            let reviewItemHTML = `<div class="${reviewItemMainClass}">
                <p class="review-question-text"><span class="question-number-review">Question ${index + 1}:</span> ${result.questionText}`;
            if (this.currentMode === 'exam' && result.timeSpent !== undefined) { 
                 reviewItemHTML += ` <span class="text-muted" style="font-size:0.8em; font-weight:normal;">(Time: ${this._formatTime(result.timeSpent)})</span>`;
            }
            reviewItemHTML += `</p><div class="review-options-container">`;

            (result.options || []).forEach((optionText, optionIdx) => {
                let optionClasses = 'answer-option review-mode';
                const isThisOptionTheCorrectAnswer = this._isCorrectAnswer(optionText, result.correctAnswerText);
                if ((result.userAnswerIndex !== null && result.userAnswerIndex !== undefined) && optionIdx === result.userAnswerIndex) {
                    optionClasses += ' user-selected';
                    optionClasses += result.isCorrect ? ' correct' : ' incorrect';
                } else if (isThisOptionTheCorrectAnswer) {
                    optionClasses += ' correct-answer';
                }
                reviewItemHTML += `<button class="${optionClasses}" disabled>${optionText}</button>`;
            });
            reviewItemHTML += `</div><div class="review-explanation">`;
            if (result.userAnswerIndex !== null && result.userAnswerIndex !== undefined) {
                reviewItemHTML += `<p><strong>Your answer:</strong> ${result.userAnswerText}</p>`;
                if (!result.isCorrect) {
                    reviewItemHTML += `<p class="text-accent"><strong>Correct answer(s):</strong> ${result.correctAnswerText}</p>`;
                }
            } else { // Cas où aucune réponse n'a été fournie ou temps écoulé
                reviewItemHTML += `<p class="text-muted"><strong>Your answer:</strong> ${this.currentMode === 'exam' ? 'Time Expired / No Answer' : 'No answer provided'}</p>
                                   <p class="text-accent"><strong>Correct answer(s):</strong> ${result.correctAnswerText}</p>`;
            }
            reviewItemHTML += `<p><em>Explanation:</em> ${result.explanation}</p></div></div>
            ${index < this.detailedQuizResults.length - 1 ? '<hr class="review-separator">' : ''}`;
            this.elements.resultsDetailsContainer.innerHTML += reviewItemHTML;
        });
        this.showLoading(false);
        this.focusElement(this.elements.resultsHeading || this.elements.finalScoreDisplay);
    }

    _formatTime(totalSeconds) { 
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60); 
        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        }
        return `${seconds}s`;
    };
    
    getProgressBarColor(percentage) {
        if (percentage >= 75) return 'var(--color-success)';
        if (percentage >= 50) return 'var(--color-warning)';
        return 'var(--color-error)';
    }
    
    displayDetailedStatistics() {
        if (!this.detailedQuizResults || this.detailedQuizResults.length === 0) {
            this.elements.overallStatsContainer.innerHTML = '<p class="text-center text-muted">No statistics available for this quiz attempt.</p>';
            this.elements.categoryStatsContainer.innerHTML = '';
            this.elements.difficultyStatsContainer.innerHTML = '';
            this.elements.officialStatsContainer.innerHTML = '';
            this.elements.incorrectReviewContainer.innerHTML = '';
            if (this.elements.officialStatsCard) this.elements.officialStatsCard.style.display = 'none';
            if (this.elements.timeStatsCard) this.elements.timeStatsCard.style.display = 'none'; 
            this.showScreen(this.elements.statisticsScreen);
            this.focusElement(this.elements.homeFromStatsBtn || this.elements.backToResultsScreenBtn);
            return;
        }

        this.showLoading(true, "Generating statistics...");

        const totalQuestions = this.detailedQuizResults.length;
        const correctAnswers = this.detailedQuizResults.filter(r => r.isCorrect).length;
        const overallPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        
        let overallStatsHTML = `
            <p><strong>Total Questions:</strong> <span class="stat-value">${totalQuestions}</span></p>
            <p><strong>Correct Answers:</strong> <span class="stat-value text-success">${correctAnswers}</span></p>
            <p><strong>Incorrect Answers:</strong> <span class="stat-value text-accent">${totalQuestions - correctAnswers}</span></p>
            <p><strong>Overall Score:</strong> <span class="stat-value ${overallPercentage >= 60 ? 'text-success' : 'text-accent'}">${overallPercentage}%</span></p>
            <div class="progress-bar-stat"><div class="progress-fill-stat" style="width: ${overallPercentage}%; background-color: ${this.getProgressBarColor(overallPercentage)};">${overallPercentage > 0 ? overallPercentage + '%' : ''}</div></div>
        `;

        if (this.currentMode === 'exam') { 
            const totalTimeSpentSeconds = this.detailedQuizResults.reduce((sum, r) => sum + (r.timeSpent || 0), 0);
            const averageTimePerQuestionSeconds = totalQuestions > 0 ? (totalTimeSpentSeconds / totalQuestions).toFixed(1) : 0;
            overallStatsHTML += `
                <p class="mt-1"><strong>Total quiz time:</strong> <span class="stat-value">${this._formatTime(totalTimeSpentSeconds)}</span></p>
                <p><strong>Average time per question:</strong> <span class="stat-value">${this._formatTime(parseFloat(averageTimePerQuestionSeconds))}</span></p>
            `;
        }
        this.elements.overallStatsContainer.innerHTML = overallStatsHTML;


        const statsByCategory = this.detailedQuizResults.reduce((acc, result) => {
            const cat = result.category || 'Uncategorized';
            if (!acc[cat]) acc[cat] = { correct: 0, total: 0 };
            acc[cat].total++;
            if (result.isCorrect) acc[cat].correct++;
            return acc;
        }, {});
        let categoryHTML = '<ul>';
        let hasCategoryData = false;
        for (const category in statsByCategory) {
            if (statsByCategory[category].total > 0) {
                hasCategoryData = true;
                const { correct, total } = statsByCategory[category];
                const percent = Math.round((correct / total) * 100);
                categoryHTML += `
                    <li>
                        <strong>${category}:</strong> ${correct}/${total} (${percent}%)
                        <div class="progress-bar-stat"><div class="progress-fill-stat" style="width: ${percent}%; background-color: ${this.getProgressBarColor(percent)};">${percent > 0 ? percent + '%' : ''}</div></div>
                    </li>`;
            }
        }
        categoryHTML += '</ul>';
        this.elements.categoryStatsContainer.innerHTML = hasCategoryData ? categoryHTML : '<p class="text-center text-muted">No questions from specific categories were included in this quiz.</p>';

        const statsByDifficulty = this.detailedQuizResults.reduce((acc, result) => {
            const diff = result.difficulty || 'N/A';
            if (!acc[diff]) acc[diff] = { correct: 0, total: 0 };
            acc[diff].total++;
            if (result.isCorrect) acc[diff].correct++;
            return acc;
        }, {});
        let difficultyHTML = '<ul>';
        let hasDifficultyData = false;
        ['Easy', 'Medium', 'Hard', 'N/A'].forEach(diffLevel => {
            if (statsByDifficulty[diffLevel] && statsByDifficulty[diffLevel].total > 0) {
                hasDifficultyData = true;
                const { correct, total } = statsByDifficulty[diffLevel];
                const percent = Math.round((correct / total) * 100);
                difficultyHTML += `
                    <li>
                        <strong>${diffLevel}:</strong> ${correct}/${total} (${percent}%)
                        <div class="progress-bar-stat"><div class="progress-fill-stat" style="width: ${percent}%; background-color: ${this.getProgressBarColor(percent)};">${percent > 0 ? percent + '%' : ''}</div></div>
                    </li>`;
            }
        });
        difficultyHTML += '</ul>';
        this.elements.difficultyStatsContainer.innerHTML = hasDifficultyData ? difficultyHTML : '<p class="text-center text-muted">Difficulty levels were not specified for questions in this quiz.</p>';

        const officialQuestions = this.detailedQuizResults.filter(r => r.isOfficial);
        if (officialQuestions.length > 0 && this.elements.officialStatsCard) {
             this.elements.officialStatsCard.style.display = 'block';
            const correctOfficial = officialQuestions.filter(r => r.isCorrect).length;
            const percentOfficial = Math.round((correctOfficial / officialQuestions.length) * 100);
            this.elements.officialStatsContainer.innerHTML = `
                <p><strong>Official Questions:</strong> <span class="stat-value">${correctOfficial}/${officialQuestions.length} (${percentOfficial}%)</span></p>
                <div class="progress-bar-stat"><div class="progress-fill-stat" style="width: ${percentOfficial}%; background-color: ${this.getProgressBarColor(percentOfficial)};">${percentOfficial > 0 ? percentOfficial + '%' : ''}</div></div>
            `;
        } else if (this.elements.officialStatsCard) {
            this.elements.officialStatsCard.style.display = 'none';
        }

        const incorrectQuestions = this.detailedQuizResults.filter(r => !r.isCorrect);
        if (incorrectQuestions.length > 0) {
            this.elements.incorrectReviewContainer.innerHTML = `<h4 class="text-center text-accent mt-1 review-title" style="font-size: 1.5rem; border-bottom-style: solid; border-bottom-width: 2px;">Review Incorrect Answers (${incorrectQuestions.length})</h4>
             <p class="text-center text-muted mb-1">You can review these questions in detail on the main results summary page by clicking "Back to Results Summary".</p>`;
        } else {
            this.elements.incorrectReviewContainer.innerHTML = '<p class="text-success text-center mt-1" style="font-size: 1.2rem; font-weight: var(--font-weight-medium);">🎉 Congratulations! No incorrect answers to review.</p>';
        }

        if (this.currentMode === 'exam' && this.elements.timeStatsCard && this.elements.timePerQuestionStatsContainer) {
            this.elements.timeStatsCard.style.display = 'block';
            let questionsTimeHTML = '<ul>';
            this.detailedQuizResults.forEach((result, i) => {
                let timeDisplay = this._formatTime(result.timeSpent || 0);
                if (result.timeSpent >= this.questionTimeLimit && (result.userAnswerIndex === null || result.userAnswerIndex === undefined)) {
                    timeDisplay += ' <span class="text-accent" style="font-size:0.8em; font-style:italic;">(Time limit reached)</span>';
                }
                questionsTimeHTML += `
                    <li title="${result.questionText.replace(/"/g, '"')}">
                        <span class="question-stat-number">Question ${i + 1}:</span>
                        <span class="question-stat-text">${result.questionText.length > 70 ? result.questionText.substring(0, 67) + '...' : result.questionText}</span>
                        <span class="question-stat-time">${timeDisplay}</span>
                    </li>`;
            });
            questionsTimeHTML += '</ul>';
            this.elements.timePerQuestionStatsContainer.innerHTML = questionsTimeHTML;
        } else if (this.elements.timeStatsCard) {
            this.elements.timeStatsCard.style.display = 'none';
        }

        this.showScreen(this.elements.statisticsScreen);
        this.showLoading(false);
        this.focusElement(this.elements.backToResultsScreenBtn);
    }

    restartQuiz() {
        this.clearSavedQuizState();
        let filterFnToRestart = null;
        // this.allQuestionsData est déjà initialisé avec les questions de base + celles de l'état (si un état a été sélectionné)
        // au moment où restartQuiz est appelé depuis l'écran des résultats.
        // Donc, this.selectedCategoryOrFilterKey et titleForRestart devraient refléter le quiz qui vient de se terminer.
        
        let titleForRestart = this.currentQuizTitle.replace(` (${this.currentMode === 'exam' ? 'Exam' : 'Practice'})`, '');

        if (this.currentMode === 'practice' && this.selectedCategoryOrFilterKey.startsWith('Filter')) {
            const filters = [
                { key: 'FilterOfficial', title: 'Official Questions Only', filterFn: q => q.isOfficial === true },
                { key: 'FilterEasy', title: 'Easy Questions', filterFn: q => q.difficulty === 'Easy' },
                { key: 'FilterMedium', title: 'Medium Questions', filterFn: q => q.difficulty === 'Medium' },
                { key: 'FilterHard', title: 'Hard Questions', filterFn: q => q.difficulty === 'Hard' },
                { key: 'Filter6520', title: '65/20 Special Consideration', filterFn: q => q.explanation && q.explanation.includes('65/20') }
            ];
            const foundFilter = filters.find(f => f.key === this.selectedCategoryOrFilterKey);
            if (foundFilter) {
                filterFnToRestart = foundFilter.filterFn;
                titleForRestart = foundFilter.title; // Utiliser le titre du filtre pour l'affichage
            } else {
                console.warn("Filter key for restart not found, defaulting to previous title's base:", this.selectedCategoryOrFilterKey);
                // Si le filtre n'est pas trouvé, on pourrait choisir un comportement par défaut ou garder le titre actuel
            }
        } 
        // Pas besoin de reconstruire allQuestionsData ici, car il devrait déjà être correct pour l'état actuel.
        // handleCategorySelection va filtrer à partir de ce this.allQuestionsData.
        this.handleCategorySelection(this.selectedCategoryOrFilterKey, titleForRestart, filterFnToRestart);
    }

} // Fin de la classe QuizApp

document.addEventListener('DOMContentLoaded', () => {
    if (!window.quizApp) {
        window.quizApp = new QuizApp();
    }
});