// quiz-app.js - Intégration complète du quiz

class QuizApp {
    constructor() {
        this.localStorageKey = 'usCivicsQuizProgress'; // Clé pour localStorage
        this.allQuestionsData = [];
        this.stateData = {};
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

        // Timer related properties
        this.questionTimerInterval = null;
        this.questionTimeLimit = 30; // Temps par question en secondes (configurable)
        this.questionTimeRemaining = 0;
        this.timeSpentPerQuestion = []; // Tableau pour stocker le temps passé sur chaque question


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

    // --- Méthodes pour localStorage ---
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
            selectedQuestions: this.selectedQuestions,
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
        this.selectedQuestions = savedState.selectedQuestions;
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
            typeof window.quizData.stateData !== 'undefined') {

            this.allQuestionsData = JSON.parse(JSON.stringify(window.quizData.allQuestions));
            this.stateData = JSON.parse(JSON.stringify(window.quizData.stateData));

            console.log("Questions loaded: " + this.allQuestionsData.length);
            console.log("State data (capitals) loaded.");

            this.setupEventListeners();
            this.setupStateSelector();

            const savedState = this.loadQuizState();
            if (savedState && savedState.selectedQuestions && savedState.selectedQuestions.length > 0 &&
                savedState.currentQuestionIndex < savedState.selectedQuestions.length) {
                if (confirm("A previous quiz session was found. Would you like to resume?")) {
                    this.showLoading(true, "Resuming previous quiz...");
                    this.restoreQuizFromState(savedState);
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
            console.error('Quiz data (questions or stateData) is not available or in the wrong format.');
            this.displayGlobalError('Failed to load quiz data. Please try refreshing the page.');
            this.showLoading(false);
        }
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
            this.showScreen(this.elements.categorySelectorScreen);
            this.displayCategories();
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

    handleNavChangeCategory() {
        const quizInProgress = this.selectedQuestions.length > 0 && this.currentQuestionIndex < this.selectedQuestions.length && this.userAnswers.some(ans => ans !== null);
        if (quizInProgress) {
            if (!confirm("Are you sure you want to change categories? Your current quiz progress will be lost.")) {
                return;
            }
        }
        this.clearSavedQuizState();
        this.showScreen(this.elements.categorySelectorScreen);
        this.displayCategories();
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

        if (this.elements.stateSelectInput) this.elements.stateSelectInput.value = '';
        if (this.elements.confirmStateBtn) this.elements.confirmStateBtn.disabled = true;

        this.showScreen(this.elements.modeSelectorScreen);
        this.focusElement(this.elements.startPracticeModeBtn);
    }

    handleBackToCategoriesFromResults() {
        this.showScreen(this.elements.categorySelectorScreen);
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
        const categories = this.getUniqueCategories();
        this.elements.categoryGrid.innerHTML = '';
        const categorySelectorHeading = document.getElementById('categorySelectorHeading');
        if (categorySelectorHeading) {
            let modeText = '';
            if (this.currentMode === 'exam') modeText = ' (Exam Mode - ' + this.examQuestionCount + ' Qs)';
            else if (this.currentMode === 'practice') modeText = ' (Practice Mode)';
            categorySelectorHeading.innerHTML = `<span class="icon" aria-hidden="true">🗂️</span> Choose Category ${modeText}`;
        }

        const mixedCard = this.createCategoryCard('Mixed Questions' + (this.currentMode === 'exam' ? ' (Exam)' : ''),
            this.currentMode === 'exam' ? 'Official questions' : this.allQuestionsData.length + ' questions',
            '🎲');
        mixedCard.addEventListener('click', () => this.handleCategorySelection('all', 'Mixed Questions'));
        this.elements.categoryGrid.appendChild(mixedCard);

        categories.forEach(category => {
            const questionsInCategory = this.allQuestionsData.filter(q => q.category === category);
            const officialCountInCategory = questionsInCategory.filter(q => q.isOfficial).length;

            let countForDisplay = questionsInCategory.length + ' questions';
            let cardDisabled = false;
            let cardTitleAttr = '';

            if (this.currentMode === 'exam') {
                countForDisplay = officialCountInCategory + ' official';
                if (officialCountInCategory === 0) {
                    cardDisabled = true;
                    cardTitleAttr = "No official questions in this category for an exam.";
                } else if (officialCountInCategory < this.examQuestionCount) {
                    countForDisplay += ` (short exam: ${officialCountInCategory} Qs)`;
                } else {
                    countForDisplay += ` (${this.examQuestionCount} Qs exam)`;
                }
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
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData));
        } else if (filterFn) {
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData.filter(filterFn)));
        } else {
            baseQuestions = JSON.parse(JSON.stringify(this.allQuestionsData.filter(q => q.category === key)));
        }

        if (this.currentMode === 'exam') {
            this.selectedQuestions = baseQuestions.filter(q => q.isOfficial === true);
            this.selectedQuestions = this.shuffleArray(this.selectedQuestions);
            if (this.selectedQuestions.length === 0) {
                alert("No official questions available for an exam in this selection. Please choose another option or try Practice Mode.");
                this.displayCategories();
                this.focusElement(this.elements.categoryGrid.querySelector('.category-card:not(:disabled)'));
                return;
            }
            this.selectedQuestions = this.selectedQuestions.slice(0, Math.min(this.selectedQuestions.length, this.examQuestionCount));

            if (this.selectedQuestions.length === 0) {
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
            if (key !== 'all' && this.selectedQuestions.length > 20) {
                this.selectedQuestions = this.selectedQuestions.slice(0, 20);
            } else if (key === 'all' && this.selectedQuestions.length > 50) {
                this.selectedQuestions = this.selectedQuestions.slice(0, 50);
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

    getCategoryIcon(category) {
        const icons = {
            'Principles of American Democracy': '🏛️',
            'Principles of American Government': '🏛️',
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
            'U.S. Arts & Literature': '📚'
        };
        return icons[category] || '📌';
    }

    getUniqueCategories() {
        return [...new Set(this.allQuestionsData.map(q => q.category).filter(Boolean))].sort();
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
        this.saveQuizState();
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
            const orPattern = /\s*\(or\s*(.*?)\)\s*$/;
            const mainAnswerPart = correctAnswerData.replace(orPattern, '').trim();
            let possibleAnswers = [normalize(mainAnswerPart)];
            const match = correctAnswerData.match(orPattern);
            if (match && match[1]) {
                match[1].split(/\s*,\s*or\s*|\s*,\s*|\s+or\s+/)
                     .forEach(alt => {
                         const normalizedAlt = normalize(alt.trim());
                         if (normalizedAlt) {
                             possibleAnswers.push(normalizedAlt);
                         }
                     });
            }
            possibleAnswers = [...new Set(possibleAnswers.filter(Boolean))];
            return possibleAnswers.some(pa => pa === normalizedSelectedOptionText);
        }
        return normalize(correctAnswerData) === normalizedSelectedOptionText;
    }


    processStateSpecificQuestion(questionInstance) {
        let processedInstance = JSON.parse(JSON.stringify(questionInstance));

        if (processedInstance.isStateSpecific && this.selectedState) {
            if (processedInstance.question.includes('YOUR STATE')) {
                processedInstance.question = processedInstance.question.replace(/YOUR STATE/g, this.selectedState);
            }
            if (processedInstance.stateInfoType === "capital" &&
                (processedInstance.options[0] === "(Populated by JS)" || processedInstance.correctAnswer === "(Populated by JS)")) {
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
        return processedInstance;
    }

    // --- Méthodes du Minuteur ---
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
            // MODIFICATION ICI: Si une réponse a été donnée et que le temps calculé est 0, enregistrer au moins 1 seconde.
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
                timerDisplay.textContent = `Temps: ${time}s`;
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
        console.log("Temps écoulé pour la question: " + (this.currentQuestionIndex + 1));
    
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
            explanationContent.innerHTML = `<p class='text-accent'><strong>Temps écoulé !</strong> La bonne réponse était marquée.</p> ${currentDisplayQuestion.explanation || "Aucune explication disponible."}`;
            explanationDiv.style.display = 'block';
        }
    
        document.getElementById('nextButton').disabled = false; 
    
        setTimeout(() => {
            this.nextQuestion(); 
        }, 2500); 
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
                    <button id="nextButton" class="btn btn-primary" ${this.userAnswers[this.currentQuestionIndex] === null && this.currentMode === 'exam' && this.selectedQuestions.length > 0 ? 'disabled' : ''}>
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
        this.startQuestionTimer(); 
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
        if (userAnswerIndex === null) return;

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
        if(this.userAnswers[this.currentQuestionIndex] !== null && this.currentMode === 'exam') { 
            return;
        }

        if (this.currentMode === 'exam' && this.questionTimerInterval) {
            this.stopQuestionTimer(true);
        }
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;

        document.querySelectorAll('.answer-option').forEach((btn, i) => {
            btn.setAttribute('aria-checked', String(i === selectedIndex));
            btn.classList.toggle('selected', i === selectedIndex);
            btn.disabled = true; 
        });

        const nextButton = document.getElementById('nextButton');
        if (nextButton) nextButton.disabled = false;

        if (this.currentMode !== 'exam') { 
            const selectedOptionText = currentDisplayQuestion.options[selectedIndex];
            const isCorrect = this._isCorrectAnswer(selectedOptionText, currentDisplayQuestion.correctAnswer);

            document.querySelectorAll('.answer-option')[selectedIndex]?.classList.add(isCorrect ? 'correct' : 'incorrect');

            currentDisplayQuestion.options.forEach((opt, i) => {
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
                this.score--;
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
        if (this.userAnswers[this.currentQuestionIndex] === null && this.currentMode === 'exam' && !this.questionTimerInterval && this.questionTimeRemaining > 0) {
            alert("Please select an answer before proceeding.");
            return;
        }
        if (this.questionTimerInterval) {
            this.stopQuestionTimer(true);
        }
        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion(); 
            this.saveQuizState();
        } else {
            this.clearSavedQuizState();
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
            const questionUserSaw = this.processStateSpecificQuestion(JSON.parse(JSON.stringify(originalQuestionData)));

            if (userAnswerIndex !== null && userAnswerIndex !== undefined && questionUserSaw.options && userAnswerIndex < questionUserSaw.options.length) {
                const selectedOptionText = questionUserSaw.options[userAnswerIndex];
                if (this._isCorrectAnswer(selectedOptionText, questionUserSaw.correctAnswer)) {
                    this.score++;
                    this.correctlyAnsweredFlags[index] = true;
                }
            }
        });
        this.showResults();
    }

    collectDetailedResults() {
        this.detailedQuizResults = this.selectedQuestions.map((originalQuestionData, index) => {
            const questionUserSaw = this.processStateSpecificQuestion(JSON.parse(JSON.stringify(originalQuestionData)));
            const userAnswerIndex = this.userAnswers[index];
            const isCorrect = this.correctlyAnsweredFlags[index];
            let userAnswerText = "No answer";
            if (userAnswerIndex !== null && userAnswerIndex !== undefined && questionUserSaw.options && userAnswerIndex < questionUserSaw.options.length) {
                userAnswerText = questionUserSaw.options[userAnswerIndex];
            }
            let correctAnswerForDisplay = originalQuestionData.correctAnswer;
            if (Array.isArray(correctAnswerForDisplay)) {
                correctAnswerForDisplay = correctAnswerForDisplay.join('; or ');
            }

            return {
                questionId: originalQuestionData.id || `q-${index}`,
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
                timeSpent: this.timeSpentPerQuestion[index] !== undefined ? this.timeSpentPerQuestion[index] : (this.currentMode === 'exam' ? this.questionTimeLimit : 0)
            };
        });
    }

    showResults() {
        this.stopQuestionTimer(false); 
        this.updateTimerDisplay(false); 
        this.clearSavedQuizState();
        this.showLoading(true, "Finalizing results...");
        this.collectDetailedResults();
        this.showScreen(this.elements.resultsScreen);

        const finalScoreValue = this.score;
        const totalQuestions = this.detailedQuizResults.length > 0 ? this.detailedQuizResults.length : 1;
        const percentage = Math.round((finalScoreValue / totalQuestions) * 100);

        this.elements.finalScoreDisplay.textContent = percentage + '%';
        this.elements.finalScoreDisplay.className = 'final-score text-center';
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
                reviewItemMainClass += ' review-item-no-answer';
            }

            let reviewItemHTML = `<div class="${reviewItemMainClass}">
                <p class="review-question-text"><span class="question-number-review">Question ${index + 1}:</span> ${result.questionText}`;
            if (this.currentMode === 'exam' && result.timeSpent !== undefined) { 
                 reviewItemHTML += ` <span class="text-muted" style="font-size:0.8em; font-weight:normal;">(Temps: ${this._formatTime(result.timeSpent)})</span>`;
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
            } else {
                reviewItemHTML += `<p class="text-muted"><strong>Your answer:</strong> ${this.currentMode === 'exam' ? 'Temps écoulé / Pas de réponse' : 'Pas de réponse fournie'}</p>
                                   <p class="text-accent"><strong>Correct answer(s):</strong> ${result.correctAnswerText}</p>`;
            }
            reviewItemHTML += `<p><em>Explanation:</em> ${result.explanation}</p></div></div>
            ${index < this.detailedQuizResults.length - 1 ? '<hr class="review-separator">' : ''}`;
            this.elements.resultsDetailsContainer.innerHTML += reviewItemHTML;
        });
        this.showLoading(false);
        this.focusElement(this.elements.resultsHeading);
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
            console.error("No detailed results available to display.");
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
                <p class="mt-1"><strong>Temps total du quiz:</strong> <span class="stat-value">${this._formatTime(totalTimeSpentSeconds)}</span></p>
                <p><strong>Temps moyen par question:</strong> <span class="stat-value">${this._formatTime(parseFloat(averageTimePerQuestionSeconds))}</span></p>
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
        if (officialQuestions.length > 0) {
            if (this.elements.officialStatsCard) this.elements.officialStatsCard.style.display = 'block';
            const correctOfficial = officialQuestions.filter(r => r.isCorrect).length;
            const percentOfficial = Math.round((correctOfficial / officialQuestions.length) * 100);
            this.elements.officialStatsContainer.innerHTML = `
                <p><strong>Official Questions:</strong> <span class="stat-value">${correctOfficial}/${officialQuestions.length} (${percentOfficial}%)</span></p>
                <div class="progress-bar-stat"><div class="progress-fill-stat" style="width: ${percentOfficial}%; background-color: ${this.getProgressBarColor(percentOfficial)};">${percentOfficial > 0 ? percentOfficial + '%' : ''}</div></div>
            `;
        } else {
            if (this.elements.officialStatsCard) this.elements.officialStatsCard.style.display = 'none';
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
            this.detailedQuizResults.forEach((result, i) => { // i est l'index ici
                let timeDisplay = this._formatTime(result.timeSpent || 0);
                if (result.timeSpent === this.questionTimeLimit && (result.userAnswerIndex === null || result.userAnswerIndex === undefined)) {
                    timeDisplay += ' <span class="text-accent" style="font-size:0.8em; font-style:italic;">(Limite atteinte)</span>';
                }
                // Affichage du texte complet de la question et de l'attribut title
                questionsTimeHTML += `
                    <li title="${result.questionText.replace(/"/g, '"')}">
                        <span class="question-stat-number">Question ${i + 1}:</span>
                        <span class="question-stat-text">${result.questionText}</span>
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
                titleForRestart = foundFilter.title;
            } else {
                console.warn("Filter key for restart not found, defaulting to 'Mixed Questions':", this.selectedCategoryOrFilterKey);
                this.selectedCategoryOrFilterKey = 'all';
                titleForRestart = 'Mixed Questions';
            }
        } else if (this.selectedCategoryOrFilterKey === 'all' || (this.currentMode === 'exam' && this.selectedCategoryOrFilterKey === 'all')) {
            titleForRestart = 'Mixed Questions';
        } else if (this.currentMode === 'exam') {
            titleForRestart = this.selectedCategoryOrFilterKey;
        }
        this.handleCategorySelection(this.selectedCategoryOrFilterKey, titleForRestart, filterFnToRestart);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!window.quizApp) {
        window.quizApp = new QuizApp();
    }
});