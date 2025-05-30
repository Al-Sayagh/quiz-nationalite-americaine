// questions.js - Contient toutes vos questions dans un format JavaScript

const stateData = {
    capitals: {
        'Alabama': 'Montgomery', 'Alaska': 'Juneau', 'Arizona': 'Phoenix', 'Arkansas': 'Little Rock', 
        'California': 'Sacramento', 'Colorado': 'Denver', 'Connecticut': 'Hartford', 'Delaware': 'Dover', 
        'Florida': 'Tallahassee', 'Georgia': 'Atlanta', 'Hawaii': 'Honolulu', 'Idaho': 'Boise', 
        'Illinois': 'Springfield', 'Indiana': 'Indianapolis', 'Iowa': 'Des Moines', 'Kansas': 'Topeka', 
        'Kentucky': 'Frankfort', 'Louisiana': 'Baton Rouge', 'Maine': 'Augusta', 'Maryland': 'Annapolis', 
        'Massachusetts': 'Boston', 'Michigan': 'Lansing', 'Minnesota': 'Saint Paul', 
        'Mississippi': 'Jackson', 'Missouri': 'Jefferson City', 'Montana': 'Helena', 
        'Nebraska': 'Lincoln', 'Nevada': 'Carson City', 'New Hampshire': 'Concord', 
        'New Jersey': 'Trenton', 'New Mexico': 'Santa Fe', 'New York': 'Albany', 
        'North Carolina': 'Raleigh', 'North Dakota': 'Bismarck', 'Ohio': 'Columbus', 
        'Oklahoma': 'Oklahoma City', 'Oregon': 'Salem', 'Pennsylvania': 'Harrisburg', 
        'Rhode Island': 'Providence', 'South Carolina': 'Columbia', 'South Dakota': 'Pierre', 
        'Tennessee': 'Nashville', 'Texas': 'Austin', 'Utah': 'Salt Lake City', 'Vermont': 'Montpelier', 
        'Virginia': 'Richmond', 'Washington': 'Olympia', 'West Virginia': 'Charleston', 
        'Wisconsin': 'Madison', 'Wyoming': 'Cheyenne', 
        'Washington D.C.': "Washington D.C." // Special case: DC is its own capital for this context
    },
    // Placeholder for other state-specific data if needed (e.g., current officials, if you choose to maintain it)
    // officials: {
    //     'California': { governor: "Gavin Newsom", senators: ["Alex Padilla", "Laphonza Butler"] },
    //     // ... etc. This would be very high maintenance.
    // }
};

const allQuestions = [
    {
        id: 1,
        sourceId: "19-Q1",
        question: "What is the supreme law of the land? (2019 Version)",
        options: ["The Declaration of Independence", "The Constitution", "The Bill of Rights", "The Articles of Confederation"],
        correctAnswer: "The Constitution",
        explanation: "The U.S. Constitution is the supreme law of the land. It establishes the framework of the U.S. government and outlines the rights and freedoms of its citizens. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 2,
        sourceId: "19-Q2",
        question: "What does the Constitution do? (2019 Version)",
        options: ["Declares war on other countries", "Only sets up the government", "Prints money", "Sets up, defines the government, and protects basic rights of Americans"],
        correctAnswer: "Sets up, defines the government, and protects basic rights of Americans",
        explanation: "The Constitution establishes the structure of the government, defines its powers and limitations, and protects the fundamental rights of American citizens. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 3,
        sourceId: "19-Q3",
        question: "The idea of self-government is in the first three words of the Constitution. What are these words? (2019 Version)",
        options: ["We the People", "Congress shall make", "I pledge allegiance", "Four score and seven"],
        correctAnswer: "We the People",
        explanation: "The phrase 'We the People' signifies that the power of the U.S. government comes from its citizens, embodying the principle of self-government. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 4,
        sourceId: "19-Q4",
        question: "What is an amendment? (2019 Version)",
        options: ["A new law passed by a state", "A change (to the Constitution) or an addition (to the Constitution)", "A presidential pardon", "A Supreme Court opinion"],
        correctAnswer: "A change (to the Constitution) or an addition (to the Constitution)",
        explanation: "An amendment is a formal alteration or addition to the U.S. Constitution, allowing it to adapt to changing times and societal values. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {   
        id: 5,
        sourceId: "19-Q5",
        question: "What do we call the first ten amendments to the Constitution? (2019 Version)",
        options: ["The Articles of Confederation", "The Bill of Rights", "The Declaration of Rights", "The Freedom Amendments"],
        correctAnswer: "The Bill of Rights",
        explanation: "The first ten amendments are known as the Bill of Rights. They guarantee fundamental rights and freedoms. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 6,
        sourceId: "19-Q6",
        question: "What is one right or freedom from the First Amendment?* (2019 Version)",
        options: ["Right to bear arms", "Freedom of speech (or religion, assembly, press, petition the government)", "Right to vote", "Right to a jury trial"],
        correctAnswer: "Freedom of speech (or religion, assembly, press, petition the government)",
        explanation: "The First Amendment protects several fundamental freedoms: speech, religion, assembly, press, and the right to petition the government. Any of these is a correct answer. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 7,
        sourceId: "19-Q7",
        question: "How many amendments does the Constitution have? (2019 Version)",
        options: ["Ten (10)", "Twenty-one (21)", "Twenty-seven (27)", "Thirty-three (33)"],
        correctAnswer: "Twenty-seven (27)",
        explanation: "As per the 2019 USCIS guide, the U.S. Constitution has twenty-seven (27) amendments.",
        category: "Principles of American Democracy",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 8,
        sourceId: "19-Q8",
        question: "What did the Declaration of Independence do? (2019 Version)",
        options: ["Established the U.S. Constitution", "Freed the slaves", "Announced our independence (from Great Britain)", "Created the first U.S. bank"],
        correctAnswer: "Announced our independence (from Great Britain)",
        explanation: "The Declaration of Independence announced the colonies' separation from Great Britain, declared their right to self-government, and listed grievances against the British king. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 9,
        sourceId: "19-Q9",
        question: "What are two rights in the Declaration of Independence? (2019 Version)",
        options: ["Right to vote and right to bear arms", "Life and liberty (and pursuit of happiness)", "Freedom of speech and freedom of religion", "Right to property and right to a fair trial"],
        correctAnswer: "Life and liberty (and pursuit of happiness)",
        explanation: "The Declaration of Independence states that all men are endowed with certain unalienable rights, including 'Life, Liberty and the pursuit of Happiness'. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 10,
        sourceId: "19-Q10",
        question: "What is freedom of religion? (2019 Version)",
        options: ["You must belong to a specific church", "The government can establish a national religion", "You can practice any religion, or not practice a religion", "Religious practice is only allowed in private homes"],
        correctAnswer: "You can practice any religion, or not practice a religion",
        explanation: "Freedom of religion means individuals are free to worship or not worship as they choose, and the government cannot establish an official religion. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 11,
        sourceId: "19-Q11",
        question: "What is the economic system in the United States?* (2019 Version)",
        options: ["Socialist economy", "Communist economy", "Capitalist economy (or market economy)", "Barter economy"],
        correctAnswer: "Capitalist economy (or market economy)",
        explanation: "The United States operates under a capitalist or market economy, where private individuals and businesses largely control production and prices. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "Principles of American Democracy",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 12,
        sourceId: "19-Q12",
        question: "What is the 'rule of law'? (2019 Version)",
        options: ["Only government officials must follow the law", "Leaders are exempt from the law sometimes", "Everyone, including leaders and government, must follow the law; no one is above the law", "Laws are optional guidelines for citizens"],
        correctAnswer: "Everyone, including leaders and government, must follow the law; no one is above the law",
        explanation: "The 'rule of law' is the principle that all people and institutions, including the government itself, are subject to and accountable to law that is fairly applied and enforced. (Source: USCIS 2019 Guide)",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 13,
        sourceId: "19-Q13",
        question: "Name one branch or part of the government.* (2019 Version)",
        options: ["The military", "State governors", "Congress (or legislative, President/executive, the courts/judicial)", "The National Security Agency"],
        correctAnswer: "Congress (or legislative, President/executive, the courts/judicial)",
        explanation: "The U.S. government is divided into three branches: Legislative (Congress), Executive (President), and Judicial (the Courts). Any one of these, or their descriptive terms, is correct. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 14,
        sourceId: "19-Q14",
        question: "What stops one branch of government from becoming too powerful? (2019 Version)",
        options: ["Presidential veto power only", "Checks and balances (or separation of powers)", "The Supreme Court's authority only", "Congressional override power only"],
        correctAnswer: "Checks and balances (or separation of powers)",
        explanation: "The system of checks and balances and the separation of powers among the legislative, executive, and judicial branches ensure that no single branch becomes too dominant. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 15,
        sourceId: "19-Q15",
        question: "Who is in charge of the executive branch? (2019 Version)",
        options: ["The Speaker of the House", "The Chief Justice of the Supreme Court", "The President", "The Secretary of State"],
        correctAnswer: "The President",
        explanation: "The President of the United States is the head of the executive branch of the federal government. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 16,
        sourceId: "19-Q16",
        question: "Who makes federal laws? (2019 Version)",
        options: ["The President", "The Supreme Court", "State legislatures", "Congress (or Senate and House of Representatives, or U.S./national legislature)"],
        correctAnswer: "Congress (or Senate and House of Representatives, or U.S./national legislature)",
        explanation: "Federal laws in the United States are made by Congress, which consists of the Senate and the House of Representatives. The term U.S. or national legislature is also acceptable. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 17,
        sourceId: "19-Q17",
        question: "What are the two parts of the U.S. Congress?* (2019 Version)",
        options: ["The President and the Cabinet", "The Supreme Court and Federal Courts", "The Senate and House of Representatives", "The Democratic and Republican parties"],
        correctAnswer: "The Senate and House of Representatives",
        explanation: "The U.S. Congress is a bicameral legislature, consisting of two chambers: the Senate and the House of Representatives. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 18,
        sourceId: "19-Q18",
        question: "How many U.S. Senators are there? (2019 Version)",
        options: ["Fifty (50)", "One hundred (100)", "Four hundred thirty-five (435)", "It varies by state population"],
        correctAnswer: "One hundred (100)",
        explanation: "There are one hundred (100) U.S. Senators, two from each of the 50 states. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 19,
        sourceId: "19-Q19",
        question: "We elect a U.S. Senator for how many years? (2019 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "For life, unless impeached"],
        correctAnswer: "Six (6) years",
        explanation: "U.S. Senators are elected for a term of six (6) years. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 20,
        sourceId: "19-Q20",
        question: "Who is one of YOUR STATE’s U.S. Senators now?* (2019 Version)",
        options: ["The current Governor of the state", "Refer to official government resources", "The state's Attorney General", "A famous historical figure from the state"],
        correctAnswer: "Refer to official government resources",
        explanation: "The names of U.S. Senators change due to elections. Applicants should provide the name of one current U.S. Senator representing their state at the time of their interview. This information can be found on official government websites. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration. DC/territory residents have specific answers.)",
        category: "System of Government",
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "senator",
        isOfficial: true
    },
    {
        id: 21,
        sourceId: "19-Q21",
        question: "The House of Representatives has how many voting members? (2019 Version)",
        options: ["One hundred (100)", "Two hundred (200)", "Four hundred thirty-five (435)", "Five hundred thirty-eight (538)"],
        correctAnswer: "Four hundred thirty-five (435)",
        explanation: "The U.S. House of Representatives has four hundred thirty-five (435) voting members. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 22,
        sourceId: "19-Q22",
        question: "We elect a U.S. Representative for how many years? (2019 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "Eight (8) years"],
        correctAnswer: "Two (2) years",
        explanation: "U.S. Representatives are elected for a term of two (2) years. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 23,
        sourceId: "19-Q23",
        question: "Name your U.S. Representative. (2019 Version)",
        options: ["The mayor of your city", "Refer to official government resources (e.g., house.gov)", "One of your state senators", "The local postmaster general"],
        correctAnswer: "Refer to official government resources (e.g., house.gov)",
        explanation: "The name of your U.S. Representative depends on your specific congressional district and changes with elections. This information can be found by entering your ZIP code on the U.S. House of Representatives website. (Source: USCIS 2019 Guide. Residents of territories have specific answers.)",
        category: "System of Government",
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "representative",
        isOfficial: true
    },
    {
        id: 24,
        sourceId: "19-Q24",
        question: "Who does a U.S. Senator represent? (2019 Version)",
        options: ["Only their political party within the state", "The President of the United States", "All people of the state", "Specific congressional districts within the state"],
        correctAnswer: "All people of the state",
        explanation: "A U.S. Senator represents all the people living in the state from which they are elected. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 25,
        sourceId: "19-Q25",
        question: "Why do some states have more Representatives than other states? (2019 Version)",
        options: ["(Because of) the state's land area", "(Because of) the state's population (or they have more people)", "(Because) they were one of the original 13 states", "(Because of) the state's economic output"],
        correctAnswer: "(Because of) the state's population (or they have more people)",
        explanation: "The number of U.S. Representatives a state has is based on its population, as determined by the census. More populous states have more Representatives. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 26,
        sourceId: "19-Q26",
        question: "We elect a President for how many years? (2019 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "Eight (8) years, maximum"],
        correctAnswer: "Four (4) years",
        explanation: "The President of the United States is elected for a term of four (4) years. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 27,
        sourceId: "19-Q27",
        question: "In what month do we vote for President?* (2019 Version)",
        options: ["January", "July", "September", "November"],
        correctAnswer: "November",
        explanation: "Presidential elections in the United States are held on the first Tuesday after the first Monday in November. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 28,
        sourceId: "19-Q28",
        question: "What is the name of the President of the United States now?* (2019 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "The previous President", "The Speaker of the House", "The Chief Justice"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The name of the current U.S. President changes with elections. Applicants should check uscis.gov/citizenship/testupdates for the current name at the time of their interview. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isStateSpecific: false,
        stateInfoType: "president_name",
        isOfficial: true
    },
    {
        id: 29,
        sourceId: "19-Q29",
        question: "What is the name of the Vice President of the United States now?* (2019 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "The Secretary of State", "The previous Vice President", "The Senate Majority Leader"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The name of the current U.S. Vice President changes with elections. Applicants should check uscis.gov/citizenship/testupdates for the current name at the time of their interview. (Source: USCIS 2019 Guide, * denotes potential 65/20 consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isStateSpecific: false,
        stateInfoType: "vp_name",
        isOfficial: true
    },
    {
        id: 30,
        sourceId: "19-Q30",
        question: "If the President can no longer serve, who becomes President? (2019 Version)",
        options: ["The Speaker of the House", "The Vice President", "The Secretary of State", "The Chief Justice of the Supreme Court"],
        correctAnswer: "The Vice President",
        explanation: "According to the U.S. Constitution and presidential succession laws, if the President can no longer serve, the Vice President becomes President. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 31,
        sourceId: "19-Q31",
        question: "If both the President and the Vice President can no longer serve, who becomes President? (2019 Version)",
        options: ["The Secretary of Defense", "The Chief Justice of the Supreme Court", "The Speaker of the House", "The President Pro Tempore of the Senate"],
        correctAnswer: "The Speaker of the House",
        explanation: "According to the Presidential Succession Act, if both the President and Vice President are unable to serve, the Speaker of the House of Representatives is next in line. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 32,
        sourceId: "19-Q32",
        question: "Who is the Commander in Chief of the military? (2019 Version)",
        options: ["The Secretary of Defense", "The Chairman of the Joint Chiefs of Staff", "The President", "A five-star General designated by Congress"],
        correctAnswer: "The President",
        explanation: "The President of the United States is the Commander in Chief of the U.S. Armed Forces. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 33,
        sourceId: "19-Q33",
        question: "Who signs bills to become laws? (2019 Version)",
        options: ["The Vice President", "The Chief Justice of the Supreme Court", "The Speaker of the House", "The President"],
        correctAnswer: "The President",
        explanation: "After a bill has been passed by both houses of Congress, it is sent to the President, who can sign it into law. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 34,
        sourceId: "19-Q34",
        question: "Who vetoes bills? (2019 Version)",
        options: ["The Supreme Court", "The President", "The Senate Majority Leader", "Any member of Congress by objection"],
        correctAnswer: "The President",
        explanation: "The President has the power to veto (reject) bills passed by Congress, preventing them from becoming law unless Congress overrides the veto. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 35,
        sourceId: "19-Q35",
        question: "What does the President’s Cabinet do? (2019 Version)",
        options: ["Makes federal laws", "Interprets federal laws", "Advises the President", "Commands the military directly during wartime"],
        correctAnswer: "Advises the President",
        explanation: "The President's Cabinet, composed of the Vice President and the heads of executive departments, serves as an advisory body to the President. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 36,
        sourceId: "19-Q36",
        question: "What are two Cabinet-level positions? (2019 Version)",
        options: ["Speaker of the House and Senate Majority Leader", "Chief Justice and Associate Justice", "Secretary of State and Secretary of Defense (or Attorney General, Vice President, etc.)", "Director of the FBI and Director of the CIA"],
        correctAnswer: "Secretary of State and Secretary of Defense (or Attorney General, Vice President, etc.)",
        explanation: "Cabinet-level positions include the Secretaries of Agriculture, Commerce, Defense, Education, Energy, Health and Human Services, Homeland Security, Housing and Urban Development, Interior, Labor, State, Transportation, Treasury, Veterans Affairs, as well as Attorney General and Vice President. Any two are correct. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 37,
        sourceId: "19-Q37",
        question: "What does the judicial branch do? (2019 Version)",
        options: ["Enforces laws passed by Congress", "Makes new laws based on court cases", "Reviews laws, explains laws, resolves disputes, and decides if a law goes against the Constitution", "Conducts foreign policy and negotiates treaties"],
        correctAnswer: "Reviews laws, explains laws, resolves disputes, and decides if a law goes against the Constitution",
        explanation: "The judicial branch interprets laws, resolves disputes, and has judicial review. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 38,
        sourceId: "19-Q38",
        question: "What is the highest court in the United States? (2019 Version)",
        options: ["Federal Court of Appeals", "State Supreme Court", "The Supreme Court", "District Court for D.C."],
        correctAnswer: "The Supreme Court",
        explanation: "The Supreme Court is the highest U.S. court. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 39,
        sourceId: "19-Q39",
        question: "How many justices are on the Supreme Court? (2019 Version)",
        options: ["7", "9", "11", "Varies by President"],
        correctAnswer: "9",
        explanation: "There are nine justices on the Supreme Court (check uscis.gov for current number as it can change by law). (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        stateInfoType: "supreme_court_justices_count",
        isOfficial: true
    },
    {
        id: 40,
        sourceId: "19-Q40",
        question: "Who is the Chief Justice of the United States now? (2019 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "Senior Associate Justice", "Attorney General", "President of the U.S."],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The Chief Justice changes; check uscis.gov. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "chief_justice_name",
        isOfficial: true
    },
    {
        id: 41,
        sourceId: "19-Q41",
        question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government? (2019 Version)",
        options: ["Provide schooling", "To print money (or declare war, create an army, make treaties)", "Provide police", "Issue driver's licenses"],
        correctAnswer: "To print money (or declare war, create an army, make treaties)",
        explanation: "Federal powers include printing money, declaring war, creating an army, making treaties. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 42,
        sourceId: "19-Q42",
        question: "Under our Constitution, some powers belong to the states. What is one power of the states? (2019 Version)",
        options: ["Coin money", "Declare war", "To provide schooling and education (or provide police/fire, give driver's license, approve zoning)", "Make treaties"],
        correctAnswer: "To provide schooling and education (or provide police/fire, give driver's license, approve zoning)",
        explanation: "State powers include providing schooling, police/fire, driver's licenses, zoning. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 43,
        sourceId: "19-Q43",
        question: "Who is the Governor of YOUR STATE now? (2019 Version)",
        options: ["State Lieutenant Governor", "Refer to official state government resources", "Mayor of state capital", "A U.S. Senator from the state"],
        correctAnswer: "Refer to official state government resources",
        explanation: "Governor names vary; check state official websites. (DC residents have a specific answer). (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "governor",
        isOfficial: true
    },
    {
        id: 44,
        sourceId: "19-Q44",
        question: "What is the capital of YOUR STATE?* (2019 Version)",
        options: ["(Populated by JS)", "State's most populous city", "State's oldest city", "A randomly selected city"],
        correctAnswer: "(Populated by JS)",
        explanation: "Each state has a capital. (DC/territory residents have specific answers). (Source: USCIS 2019 Guide, * for 65/20)",
        category: "System of Government",
        difficulty: "Easy",
        isStateSpecific: true,
        stateInfoType: "capital",
        isOfficial: true
    },
    {
        id: 45,
        sourceId: "19-Q45",
        question: "What are the two major political parties in the United States?* (2019 Version)",
        options: ["Democratic and Republican", "Labor and Conservative", "Socialist and Libertarian", "Green and Independent"],
        correctAnswer: "Democratic and Republican",
        explanation: "The Democratic and Republican parties are the two major U.S. political parties. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 46,
        sourceId: "19-Q46",
        question: "What is the political party of the President now? (2019 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for current information", "Independent", "Libertarian", "Green Party"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for current information",
        explanation: "The President's party changes; check uscis.gov. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "president_party",
        isOfficial: true
    },
    {
        id: 47,
        sourceId: "19-Q47",
        question: "What is the name of the Speaker of the House of Representatives now? (2019 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "The Vice President", "Senate Majority Leader", "House Minority Leader"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The Speaker's name changes; check uscis.gov. (Source: USCIS 2019 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "speaker_name",
        isOfficial: true
    },
    {
        id: 48,
        sourceId: "19-Q48",
        question: "There are four amendments to the Constitution about who can vote. Describe one of them. (2019 Version)",
        options: ["Only property owners vote", "Citizens eighteen (18) and older can vote (or no poll tax; any citizen; male citizen of any race).", "Only men vote", "Voting is mandatory"],
        correctAnswer: "Citizens eighteen (18) and older can vote (or no poll tax; any citizen; male citizen of any race).",
        explanation: "Voting amendments: 15th (race), 19th (sex), 24th (no poll tax), 26th (age 18). (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 49,
        sourceId: "19-Q49",
        question: "What is one responsibility that is only for United States citizens?* (2019 Version)",
        options: ["Pay taxes", "Obey laws", "Serve on a jury (or vote in a federal election)", "Attend school"],
        correctAnswer: "Serve on a jury (or vote in a federal election)",
        explanation: "Serving on a jury or voting in federal elections are responsibilities for U.S. citizens. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 50,
        sourceId: "19-Q50",
        question: "Name one right only for United States citizens. (2019 Version)",
        options: ["Freedom of speech", "Right to own property", "Vote in a federal election (or run for federal office)", "Freedom of religion"],
        correctAnswer: "Vote in a federal election (or run for federal office)",
        explanation: "Voting in federal elections or running for federal office are rights for U.S. citizens. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 51,
        sourceId: "19-Q51",
        question: "What are two rights of everyone living in the United States? (2019 Version)",
        options: ["Right to vote and run for office", "Freedom of expression and freedom of speech (or assembly, petition, religion, bear arms)", "Right to a U.S. passport and serve on jury", "Right to free housing and employment"],
        correctAnswer: "Freedom of expression and freedom of speech (or assembly, petition, religion, bear arms)",
        explanation: "Rights for everyone in the U.S. include freedom of expression, speech, assembly, petition, religion, and to bear arms. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 52,
        sourceId: "19-Q52",
        question: "What do we show loyalty to when we say the Pledge of Allegiance? (2019 Version)",
        options: ["The President only", "Our home state", "The United States (and the flag)", "The current political party"],
        correctAnswer: "The United States (and the flag)",
        explanation: "The Pledge shows loyalty to the United States and its flag. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 53,
        sourceId: "19-Q53",
        question: "What is one promise you make when you become a United States citizen? (2019 Version)",
        options: ["Never travel abroad", "Defend the Constitution and laws of the United States (or give up loyalty, obey laws, serve nation/military, be loyal)", "Vote for one party", "Become wealthy"],
        correctAnswer: "Defend the Constitution and laws of the United States (or give up loyalty, obey laws, serve nation/military, be loyal)",
        explanation: "Promises include defending the Constitution, obeying laws, serving the nation. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 54,
        sourceId: "19-Q54",
        question: "How old do citizens have to be to vote for President?* (2019 Version)",
        options: ["16", "Eighteen (18) and older", "21", "25"],
        correctAnswer: "Eighteen (18) and older",
        explanation: "Citizens must be 18 or older to vote for President. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 55,
        sourceId: "19-Q55",
        question: "What are two ways that Americans can participate in their democracy? (2019 Version)",
        options: ["Pay taxes and follow traffic laws", "Vote and join a political party (or help campaign, join civic/community group, give opinion, call officials, support/oppose issue, run for office, write newspaper)", "Watch news daily", "Serve in military and work for government"],
        correctAnswer: "Vote and join a political party (or help campaign, join civic/community group, give opinion, call officials, support/oppose issue, run for office, write newspaper)",
        explanation: "Examples: vote, join a party, help a campaign. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 56,
        sourceId: "19-Q56",
        question: "When is the last day you can send in federal income tax forms?* (2019 Version)",
        options: ["January 1st", "April 15", "July 4th", "December 31st"],
        correctAnswer: "April 15",
        explanation: "Typically April 15 is the tax deadline. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 57,
        sourceId: "19-Q57",
        question: "When must all men register for the Selective Service? (2019 Version)",
        options: ["At age 16", "At age eighteen (18) (or between 18 and 26)", "Only during a draft", "It is voluntary"],
        correctAnswer: "At age eighteen (18) (or between 18 and 26)",
        explanation: "Men must register between 18 and 26. (Source: USCIS 2019 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 58,
        sourceId: "19-Q58",
        question: "What is one reason colonists came to America? (2019 Version)",
        options: ["Establish new monarchy", "Vacation", "For freedom (or political liberty, religious freedom, economic opportunity, escape persecution)", "Conquer lands for Britain"],
        correctAnswer: "For freedom (or political liberty, religious freedom, economic opportunity, escape persecution)",
        explanation: "Reasons include freedom, liberty, economic opportunity, escaping persecution. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 59,
        sourceId: "19-Q59",
        question: "Who lived in America before the Europeans arrived? (2019 Version)",
        options: ["No one", "Vikings", "American Indians (or Native Americans)", "Ancient Romans"],
        correctAnswer: "American Indians (or Native Americans)",
        explanation: "American Indians/Native Americans inhabited America first. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 60,
        sourceId: "19-Q60",
        question: "What group of people was taken to America and sold as slaves? (2019 Version)",
        options: ["European indentured servants", "European POWs", "Africans (or people from Africa)", "Chinese laborers"],
        correctAnswer: "Africans (or people from Africa)",
        explanation: "Africans were forcibly taken and sold as slaves. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 61,
        sourceId: "19-Q61",
        question: "Why did the colonists fight the British? (2019 Version)",
        options: ["Wanted British king in America", "Because of high taxes (taxation without representation), British army in houses, or no self-government", "British banned tea export", "Wanted to join France"],
        correctAnswer: "Because of high taxes (taxation without representation), British army in houses, or no self-government",
        explanation: "Reasons include high taxes, quartering of soldiers, lack of self-government. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 62,
        sourceId: "19-Q62",
        question: "Who wrote the Declaration of Independence? (2019 Version)",
        options: ["George Washington", "Benjamin Franklin", "(Thomas) Jefferson", "John Adams"],
        correctAnswer: "(Thomas) Jefferson",
        explanation: "Thomas Jefferson was the primary author. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 63,
        sourceId: "19-Q63",
        question: "When was the Declaration of Independence adopted? (2019 Version)",
        options: ["1492", "1620", "July 4, 1776", "1787"],
        correctAnswer: "July 4, 1776",
        explanation: "It was adopted on July 4, 1776. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 64,
        sourceId: "19-Q64",
        question: "There were 13 original states. Name three. (2019 Version)",
        options: ["California, Texas, Florida", "New Hampshire, Massachusetts, Virginia (or any three from list)", "Ohio, Michigan, Indiana", "Canada, Mexico, Cuba"],
        correctAnswer: "New Hampshire, Massachusetts, Virginia (or any three from list)",
        explanation: "Examples: New Hampshire, Massachusetts, Virginia. (Full list: NH, MA, RI, CT, NY, NJ, PA, DE, MD, VA, NC, SC, GA). (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 65,
        sourceId: "19-Q65",
        question: "What happened at the Constitutional Convention? (2019 Version)",
        options: ["Declaration signed", "Revolutionary War ended", "The Constitution was written (or The Founding Fathers wrote the Constitution)", "Washington inaugurated"],
        correctAnswer: "The Constitution was written (or The Founding Fathers wrote the Constitution)",
        explanation: "The Constitution was written at the Constitutional Convention. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 66,
        sourceId: "19-Q66",
        question: "When was the Constitution written? (2019 Version)",
        options: ["1776", "1787", "1791", "1800"],
        correctAnswer: "1787",
        explanation: "The Constitution was written in 1787. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 67,
        sourceId: "19-Q67",
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers. (2019 Version)",
        options: ["Thomas Jefferson", "(James) Madison (or Alexander Hamilton, John Jay, Publius)", "George Washington", "Benjamin Franklin"],
        correctAnswer: "(James) Madison (or Alexander Hamilton, John Jay, Publius)",
        explanation: "Writers included James Madison, Alexander Hamilton, John Jay (as Publius). (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 68,
        sourceId: "19-Q68",
        question: "What is one thing Benjamin Franklin is famous for? (2019 Version)",
        options: ["First President", "Wrote Declaration", "U.S. diplomat (or oldest member of Constitutional Convention, first Postmaster General, writer of 'Poor Richard’s Almanac', started first free libraries)", "Led Continental Army"],
        correctAnswer: "U.S. diplomat (or oldest member of Constitutional Convention, first Postmaster General, writer of 'Poor Richard’s Almanac', started first free libraries)",
        explanation: "Franklin was a U.S. diplomat, oldest member of Constitutional Convention, etc. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 69,
        sourceId: "19-Q69",
        question: "Who is the 'Father of Our Country'? (2019 Version)",
        options: ["Abraham Lincoln", "Thomas Jefferson", "(George) Washington", "Benjamin Franklin"],
        correctAnswer: "(George) Washington",
        explanation: "George Washington is the 'Father of Our Country'. (Source: USCIS 2019 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 70,
        sourceId: "19-Q70",
        question: "Who was the first President?* (2019 Version)",
        options: ["John Adams", "(George) Washington", "Thomas Jefferson", "Abraham Lincoln"],
        correctAnswer: "(George) Washington",
        explanation: "George Washington was the first President. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 71,
        sourceId: "19-Q71",
        question: "What territory did the United States buy from France in 1803? (2019 Version)",
        options: ["Florida", "Texas", "The Louisiana Territory (or Louisiana)", "Alaska"],
        correctAnswer: "The Louisiana Territory (or Louisiana)",
        explanation: "The U.S. bought the Louisiana Territory from France in 1803. (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 72,
        sourceId: "19-Q72",
        question: "Name one war fought by the United States in the 1800s. (2019 Version)",
        options: ["Revolutionary War", "War of 1812 (or Mexican-American War, Civil War, Spanish-American War)", "World War I", "Korean War"],
        correctAnswer: "War of 1812 (or Mexican-American War, Civil War, Spanish-American War)",
        explanation: "Examples: War of 1812, Civil War. (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 73,
        sourceId: "19-Q73",
        question: "Name the U.S. war between the North and the South. (2019 Version)",
        options: ["War of 1812", "Mexican-American War", "The Civil War (or the War between the States)", "Revolutionary War"],
        correctAnswer: "The Civil War (or the War between the States)",
        explanation: "It was The Civil War (or War between the States). (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 74,
        sourceId: "19-Q74",
        question: "Name one problem that led to the Civil War. (2019 Version)",
        options: ["Foreign alliances", "Slavery (or economic reasons, states' rights)", "Religious differences", "Canadian expansion"],
        correctAnswer: "Slavery (or economic reasons, states' rights)",
        explanation: "Problems: slavery, economic reasons, states' rights. (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 75,
        sourceId: "19-Q75",
        question: "What was one important thing that Abraham Lincoln did?* (2019 Version)",
        options: ["Wrote Declaration", "Freed the slaves (Emancipation Proclamation) (or saved the Union, led U.S. during Civil War)", "First Postmaster General", "Louisiana Purchase"],
        correctAnswer: "Freed the slaves (Emancipation Proclamation) (or saved the Union, led U.S. during Civil War)",
        explanation: "Lincoln freed slaves, saved the Union, led U.S. during Civil War. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 76,
        sourceId: "19-Q76",
        question: "What did the Emancipation Proclamation do? (2019 Version)",
        options: ["Gave women vote", "Freed slaves (in the Confederacy, in Confederate states, in most Southern states)", "Ended Civil War", "Established national parks"],
        correctAnswer: "Freed slaves (in the Confederacy, in Confederate states, in most Southern states)",
        explanation: "It freed slaves in Confederate territories. (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 77,
        sourceId: "19-Q77",
        question: "What did Susan B. Anthony do? (2019 Version)",
        options: ["Wrote 'Uncle Tom's Cabin'", "Fought for women's rights (or fought for civil rights)", "Famous Civil War nurse", "Invented telephone"],
        correctAnswer: "Fought for women's rights (or fought for civil rights)",
        explanation: "Susan B. Anthony fought for women's rights and civil rights. (Source: USCIS 2019 Guide)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 78,
        sourceId: "19-Q78",
        question: "Name one war fought by the United States in the 1900s.* (2019 Version)",
        options: ["Civil War", "World War I (or World War II, Korean War, Vietnam War, Persian Gulf War)", "Revolutionary War", "War of 1812"],
        correctAnswer: "World War I (or World War II, Korean War, Vietnam War, Persian Gulf War)",
        explanation: "Examples: World War I, World War II, Korean War. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 79,
        sourceId: "19-Q79",
        question: "Who was President during World War I? (2019 Version)",
        options: ["Franklin D. Roosevelt", "(Woodrow) Wilson", "Theodore Roosevelt", "Herbert Hoover"],
        correctAnswer: "(Woodrow) Wilson",
        explanation: "Woodrow Wilson was President during WWI. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 80,
        sourceId: "19-Q80",
        question: "Who was President during the Great Depression and World War II? (2019 Version)",
        options: ["Herbert Hoover", "Harry S. Truman", "(Franklin) Roosevelt", "Dwight D. Eisenhower"],
        correctAnswer: "(Franklin) Roosevelt",
        explanation: "Franklin Roosevelt was President during the Great Depression and WWII. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 81,
        sourceId: "19-Q81",
        question: "Who did the United States fight in World War II? (2019 Version)",
        options: ["Great Britain, France, Russia", "Japan, Germany, and Italy", "China, Korea, Vietnam", "Canada, Mexico, Spain"],
        correctAnswer: "Japan, Germany, and Italy",
        explanation: "The U.S. fought Japan, Germany, and Italy in WWII. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 82,
        sourceId: "19-Q82",
        question: "Before he was President, Eisenhower was a general. What war was he in? (2019 Version)",
        options: ["World War I", "World War II", "Korean War", "Vietnam War"],
        correctAnswer: "World War II",
        explanation: "Eisenhower was a general in World War II. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 83,
        sourceId: "19-Q83",
        question: "During the Cold War, what was the main concern of the United States? (2019 Version)",
        options: ["Economic depression", "European monarchies", "Communism", "Climate change"],
        correctAnswer: "Communism",
        explanation: "The main concern was Communism during the Cold War. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 84,
        sourceId: "19-Q84",
        question: "What movement tried to end racial discrimination? (2019 Version)",
        options: ["Temperance movement", "Women's suffrage", "The civil rights (movement)", "Labor movement"],
        correctAnswer: "The civil rights (movement)",
        explanation: "The civil rights movement fought to end racial discrimination. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 85,
        sourceId: "19-Q85",
        question: "What did Martin Luther King, Jr. do?* (2019 Version)",
        options: ["Became President", "Fought for civil rights (or worked for equality for all Americans)", "Invented cotton gin", "Led U.S. in WWII"],
        correctAnswer: "Fought for civil rights (or worked for equality for all Americans)",
        explanation: "Martin Luther King, Jr. fought for civil rights and equality. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 86,
        sourceId: "19-Q86",
        question: "What major event happened on September 11, 2001, in the United States? (2019 Version)",
        options: ["Stock market crash", "Hurricane Katrina", "Terrorists attacked the United States", "Mars landing"],
        correctAnswer: "Terrorists attacked the United States",
        explanation: "Terrorists attacked the U.S. on September 11, 2001. (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 87,
        sourceId: "19-Q87",
        question: "Name one American Indian tribe in the United States. (2019 Version)",
        options: ["Cherokee (or Navajo, Sioux, Chippewa, Choctaw, Pueblo, Apache, Iroquois, Creek, Blackfeet, Seminole, Cheyenne, Arawak, Shawnee, Mohegan, Huron, Oneida, Lakota, Crow, Teton, Hopi, Inuit)", "Vikings", "Celts", "Maori"],
        correctAnswer: "Cherokee (or Navajo, Sioux, Chippewa, Choctaw, Pueblo, Apache, Iroquois, Creek, Blackfeet, Seminole, Cheyenne, Arawak, Shawnee, Mohegan, Huron, Oneida, Lakota, Crow, Teton, Hopi, Inuit)",
        explanation: "Examples: Cherokee, Navajo, Sioux. (USCIS provides a list). (Source: USCIS 2019 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 88,
        sourceId: "19-Q88",
        question: "Name one of the two longest rivers in the United States. (2019 Version)",
        options: ["Colorado River", "Ohio River", "Missouri (River) (or Mississippi River)", "Hudson River"],
        correctAnswer: "Missouri (River) (or Mississippi River)",
        explanation: "The Missouri or Mississippi River. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 89,
        sourceId: "19-Q89",
        question: "What ocean is on the West Coast of the United States? (2019 Version)",
        options: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Indian Ocean"],
        correctAnswer: "Pacific Ocean",
        explanation: "The Pacific Ocean is on the West Coast. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 90,
        sourceId: "19-Q90",
        question: "What ocean is on the East Coast of the United States? (2019 Version)",
        options: ["Pacific Ocean", "Atlantic Ocean", "Southern Ocean", "Arctic Ocean"],
        correctAnswer: "Atlantic Ocean",
        explanation: "The Atlantic Ocean is on the East Coast. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 91,
        sourceId: "19-Q91",
        question: "Name one U.S. territory. (2019 Version)",
        options: ["Hawaii", "Puerto Rico (or U.S. Virgin Islands, American Samoa, Northern Mariana Islands, Guam)", "Cuba", "Greenland"],
        correctAnswer: "Puerto Rico (or U.S. Virgin Islands, American Samoa, Northern Mariana Islands, Guam)",
        explanation: "Examples: Puerto Rico, Guam. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 92,
        sourceId: "19-Q92",
        question: "Name one state that borders Canada. (2019 Version)",
        options: ["California", "Florida", "Maine (or NH, VT, NY, PA, OH, MI, MN, ND, MT, ID, WA, AK)", "Texas"],
        correctAnswer: "Maine (or NH, VT, NY, PA, OH, MI, MN, ND, MT, ID, WA, AK)",
        explanation: "Examples: Maine, New York, Washington. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 93,
        sourceId: "19-Q93",
        question: "Name one state that borders Mexico. (2019 Version)",
        options: ["Florida", "California (or Arizona, New Mexico, Texas)", "Nevada", "Louisiana"],
        correctAnswer: "California (or Arizona, New Mexico, Texas)",
        explanation: "Examples: California, Texas. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 94,
        sourceId: "19-Q94",
        question: "What is the capital of the United States?* (2019 Version)",
        options: ["New York City, NY", "Philadelphia, PA", "Washington, D.C.", "Boston, MA"],
        correctAnswer: "Washington, D.C.",
        explanation: "Washington, D.C. is the U.S. capital. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 95,
        sourceId: "19-Q95",
        question: "Where is the Statue of Liberty?* (2019 Version)",
        options: ["Washington, D.C.", "Boston Harbor, MA", "New York (Harbor) (or Liberty Island; also NJ, near NYC, on Hudson River)", "San Francisco Bay, CA"],
        correctAnswer: "New York (Harbor) (or Liberty Island; also NJ, near NYC, on Hudson River)",
        explanation: "The Statue of Liberty is in New York Harbor (Liberty Island; also acceptable: NJ, near NYC, on Hudson River). (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 96,
        sourceId: "19-Q96",
        question: "Why does the flag have 13 stripes? (2019 Version)",
        options: ["First 13 Presidents", "Because there were 13 original colonies (or stripes represent original colonies)", "13 key amendments", "Arbitrary design"],
        correctAnswer: "Because there were 13 original colonies (or stripes represent original colonies)",
        explanation: "The 13 stripes represent the 13 original colonies. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 97,
        sourceId: "19-Q97",
        question: "Why does the flag have 50 stars?* (2019 Version)",
        options: ["50 amendments", "50 original colonies", "Because there is one star for each state (or each star represents a state, there are 50 states)", "50 famous battles"],
        correctAnswer: "Because there is one star for each state (or each star represents a state, there are 50 states)",
        explanation: "The 50 stars represent the 50 states. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 98,
        sourceId: "19-Q98",
        question: "What is the name of the national anthem? (2019 Version)",
        options: ["America the Beautiful", "God Bless America", "The Star-Spangled Banner", "My Country, 'Tis of Thee"],
        correctAnswer: "The Star-Spangled Banner",
        explanation: "The national anthem is 'The Star-Spangled Banner.' (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 99,
        sourceId: "19-Q99",
        question: "When do we celebrate Independence Day?* (2019 Version)",
        options: ["First Monday in September", "Fourth Thursday in November", "July 4", "Last Monday in May"],
        correctAnswer: "July 4",
        explanation: "Independence Day is July 4th. (Source: USCIS 2019 Guide, * for 65/20)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 100,
        sourceId: "19-Q100",
        question: "Name two national U.S. holidays. (2019 Version)",
        options: ["Halloween & Valentine's Day", "New Year’s Day & Thanksgiving Day (or Christmas, MLK Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day)", "April Fool's Day & Earth Day", "Flag Day & Arbor Day"],
        correctAnswer: "New Year’s Day & Thanksgiving Day (or Christmas, MLK Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day)",
        explanation: "Examples: New Year's Day, Thanksgiving. Full list: New Year’s Day, Martin Luther King, Jr. Day, Presidents’ Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas. (Source: USCIS 2019 Guide)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 101, // Example of question beyond 100
        sourceId: "20-Q1",
        question: "What is the form of government of the United States? (2020 Version)",
        options: ["Direct Democracy", "Monarchy", "Republic (or Constitution-based federal republic, Representative democracy)", "Oligarchy"],
        correctAnswer: "Republic (or Constitution-based federal republic, Representative democracy)",
        explanation: "The United States is a republic, also described as a constitution-based federal republic or a representative democracy. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 101,
        sourceId: "20-Q1",
        question: "What is the form of government of the United States? (2020 Version)",
        options: ["Direct Democracy", "Monarchy", "Republic (or Constitution-based federal republic, Representative democracy)", "Oligarchy"],
        correctAnswer: "Republic (or Constitution-based federal republic, Representative democracy)",
        explanation: "The United States is a republic, also described as a constitution-based federal republic or a representative democracy. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 102,
        sourceId: "20-Q2",
        question: "What is the supreme law of the land?* (2020 Version)",
        options: ["The Bill of Rights", "The Declaration of Independence", "(U.S.) Constitution", "The Articles of Confederation"],
        correctAnswer: "(U.S.) Constitution",
        explanation: "The (U.S.) Constitution is the supreme law. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 103,
        sourceId: "20-Q3",
        question: "Name one thing the U.S. Constitution does. (2020 Version)",
        options: ["Declares independence from other countries", "Forms the government (or defines powers/parts of government, protects rights of the people)", "Establishes state laws as supreme", "Appoints the President directly by congressional vote"],
        correctAnswer: "Forms the government (or defines powers/parts of government, protects rights of the people)",
        explanation: "The U.S. Constitution serves multiple key functions: it forms the government, defines the powers of government, defines the parts of government, and protects the rights of the people. Any one of these is a correct answer. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 104,
        sourceId: "20-Q4",
        question: "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean? (2020 Version)",
        options: ["The government’s power is derived from the states", "The people should govern themselves (or Self-government, Popular sovereignty, Consent of the governed, Example of social contract)", "Only the original colonists are 'the People'", "The military establishes the government for 'the People'"],
        correctAnswer: "The people should govern themselves (or Self-government, Popular sovereignty, Consent of the governed, Example of social contract)",
        explanation: "'We the People' signifies that the authority of the U.S. government originates from its citizens, embodying principles like self-government, popular sovereignty, consent of the governed, and is an example of a social contract. Any one of these is correct. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 105,
        sourceId: "20-Q5",
        question: "How are changes made to the U.S. Constitution? (2020 Version)",
        options: ["By Presidential executive order only", "By a national popular vote (referendum)", "Through Amendments (or the amendment process)", "By majority rulings of the Supreme Court changing its interpretation"],
        correctAnswer: "Through Amendments (or the amendment process)",
        explanation: "Changes to the U.S. Constitution are formally made through the process of amendments, as outlined in Article V of the Constitution. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 106,
        sourceId: "20-Q6",
        question: "What does the Bill of Rights protect? (2020 Version)",
        options: ["The powers of the federal government over states", "The rights of states to secede from the Union", "(The basic) rights of Americans (or people living in the United States)", "The structure and procedures of the U.S. Congress"],
        correctAnswer: "(The basic) rights of Americans (or people living in the United States)",
        explanation: "The Bill of Rights, the first ten amendments, protects the fundamental rights and liberties of Americans and, in many instances, all people living in the United States. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 107,
        sourceId: "20-Q7",
        question: "How many amendments does the U.S. Constitution have?* (2020 Version)",
        options: ["Ten (10)", "Twenty-one (21)", "Twenty-seven (27)", "Thirty-three (33)"],
        correctAnswer: "Twenty-seven (27)",
        explanation: "As of the 2020 USCIS guide, the U.S. Constitution has twenty-seven (27) amendments. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Principles of American Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 108,
        sourceId: "20-Q8",
        question: "Why is the Declaration of Independence important? (2020 Version)",
        options: ["It established the U.S. Constitution and Bill of Rights.", "It says America is free from British control (or all people are created equal, identifies inherent/individual rights/freedoms).", "It formally ended the Civil War.", "It outlined the process for electing the U.S. President."],
        correctAnswer: "It says America is free from British control (or all people are created equal, identifies inherent/individual rights/freedoms).",
        explanation: "The Declaration of Independence is important because it states that America is free from British control, asserts that all people are created equal, and identifies inherent rights and individual freedoms. Any one of these points is correct. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 109,
        sourceId: "20-Q9",
        question: "What founding document said the American colonies were free from Britain? (2020 Version)",
        options: ["The Articles of Confederation", "The U.S. Constitution", "The Bill of Rights", "Declaration of Independence"],
        correctAnswer: "Declaration of Independence",
        explanation: "The Declaration of Independence, adopted on July 4, 1776, formally proclaimed that the thirteen American colonies were independent from Great Britain. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 110,
        sourceId: "20-Q10",
        question: "Name two important ideas from the Declaration of Independence and the U.S. Constitution. (2020 Version)",
        options: ["Federalism and Judicial Review", "Equality and Liberty (or Social contract, Natural rights, Limited government, Self-government)", "States' Rights and Bicameralism", "Monarchy and Theocracy"],
        correctAnswer: "Equality and Liberty (or Social contract, Natural rights, Limited government, Self-government)",
        explanation: "Important ideas found in both the Declaration of Independence and the U.S. Constitution include: Equality, Liberty, Social contract, Natural rights, Limited government, and Self-government. Any two are correct. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 111,
        sourceId: "20-Q11",
        question: "The words 'Life, Liberty, and the pursuit of Happiness' are in what founding document? (2020 Version)",
        options: ["The Bill of Rights", "The Articles of Confederation", "The U.S. Constitution (Preamble)", "Declaration of Independence"],
        correctAnswer: "Declaration of Independence",
        explanation: "This iconic phrase articulating unalienable rights is found in the U.S. Declaration of Independence. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 112,
        sourceId: "20-Q12",
        question: "What is the economic system of the United States?* (2020 Version)",
        options: ["Socialism", "Communism", "Capitalism (or Free market economy)", "Barter system"],
        correctAnswer: "Capitalism (or Free market economy)",
        explanation: "The United States has a capitalist economic system, also referred to as a free market economy. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Principles of American Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 113,
        sourceId: "20-Q13",
        question: "What is the rule of law? (2020 Version)",
        options: ["Laws apply only to citizens, not government officials.", "The President can change laws at will.", "Everyone must follow the law (including leaders and government); No one is above the law.", "Laws are suggestions, not mandatory requirements."],
        correctAnswer: "Everyone must follow the law (including leaders and government); No one is above the law.",
        explanation: "The rule of law means that everyone, including citizens, leaders, and the government, must obey the law, and that no one is above the law. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 114,
        sourceId: "20-Q14",
        question: "Many documents influenced the U.S. Constitution. Name one. (2020 Version)",
        options: ["The English Bill of Rights (1689)", "Declaration of Independence (or Articles of Confederation, Federalist Papers, etc.)", "The French Declaration of the Rights of Man and of the Citizen", "Plato's Republic"],
        correctAnswer: "Declaration of Independence (or Articles of Confederation, Federalist Papers, etc.)",
        explanation: "The U.S. Constitution was influenced by many documents and ideas, including: Declaration of Independence, Articles of Confederation, Federalist Papers, Anti-Federalist Papers, Virginia Declaration of Rights, Fundamental Orders of Connecticut, Mayflower Compact, and Iroquois Great Law of Peace. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 115,
        sourceId: "20-Q15",
        question: "There are three branches of government. Why? (2020 Version)",
        options: ["To make government more efficient and faster.", "So one part does not become too powerful (or Checks and balances, Separation of powers).", "To allow states to have more power than the federal government.", "To ensure the President has ultimate authority."],
        correctAnswer: "So one part does not become too powerful (or Checks and balances, Separation of powers).",
        explanation: "The U.S. government has three branches to prevent any single part from becoming too powerful, through the principles of checks and balances and separation of powers. (Source: USCIS 2020 Guide)",
        category: "Principles of American Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 116,
        sourceId: "20-Q16",
        question: "Name the three branches of government. (2020 Version)",
        options: ["President, Supreme Court, and Treasury", "Federal, State, and Local", "Legislative, executive, and judicial (or Congress, president, and the courts)", "Military, Diplomatic, and Domestic"],
        correctAnswer: "Legislative, executive, and judicial (or Congress, president, and the courts)",
        explanation: "The three branches of the U.S. government are the Legislative (Congress), Executive (President), and Judicial (the courts). (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 117,
        sourceId: "20-Q17",
        question: "The President of the United States is in charge of which branch of government? (2020 Version)",
        options: ["Legislative branch", "Judicial branch", "Executive branch", "Administrative branch"],
        correctAnswer: "Executive branch",
        explanation: "The President is the head of the Executive branch, responsible for enforcing laws. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 118,
        sourceId: "20-Q18",
        question: "What part of the federal government writes laws? (2020 Version)",
        options: ["The Supreme Court", "The President's Cabinet", "(U.S.) Congress (or (U.S. or national) legislature, Legislative branch)", "State Governors"],
        correctAnswer: "(U.S.) Congress (or (U.S. or national) legislature, Legislative branch)",
        explanation: "The U.S. Congress, which is the legislative branch (also called the U.S. or national legislature), is responsible for writing federal laws. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 119,
        sourceId: "20-Q19",
        question: "What are the two parts of the U.S. Congress? (2020 Version)",
        options: ["The House of Lords and House of Commons", "The National Assembly and the Council of States", "Senate and House (of Representatives)", "The Judiciary Committee and the Ways and Means Committee"],
        correctAnswer: "Senate and House (of Representatives)",
        explanation: "The U.S. Congress is bicameral, composed of the Senate and the House of Representatives. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 120,
        sourceId: "20-Q20",
        question: "Name one power of the U.S. Congress.* (2020 Version)",
        options: ["To appoint Supreme Court Justices", "To command the military", "Writes laws (or Declares war, Makes the federal budget)", "To interpret the Constitution"],
        correctAnswer: "Writes laws (or Declares war, Makes the federal budget)",
        explanation: "Key powers of the U.S. Congress include writing laws, declaring war, and making the federal budget. Any one is correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 121,
        sourceId: "20-Q21",
        question: "How many U.S. senators are there? (2020 Version)",
        options: ["Fifty (50) - one for each state", "One hundred (100)", "Four hundred thirty-five (435)", "Determined by state population"],
        correctAnswer: "One hundred (100)",
        explanation: "There are one hundred (100) U.S. senators, two representing each of the 50 states. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 122,
        sourceId: "20-Q22",
        question: "How long is a term for a U.S. senator? (2020 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "For life"],
        correctAnswer: "Six (6) years",
        explanation: "U.S. senators are elected to serve six-year terms. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 123,
        sourceId: "20-Q23",
        question: "Who is one of YOUR STATE’s U.S. senators now? (2020 Version)",
        options: ["The state governor", "Refer to current official government resources", "The mayor of the state capital", "A member of the state legislature"],
        correctAnswer: "Refer to current official government resources",
        explanation: "The names of your state's U.S. senators change with elections. Check official sources like uscis.gov/citizenship/testupdates or your state's official website for current information. (DC/territory residents have specific guidance). (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "senator",
        isOfficial: true
    },
    {
        id: 124,
        sourceId: "20-Q24",
        question: "How many voting members are in the House of Representatives? (2020 Version)",
        options: ["100 (same as Senate)", "270 (Electoral College number)", "Four hundred thirty-five (435)", "535 (total Congress members)"],
        correctAnswer: "Four hundred thirty-five (435)",
        explanation: "The House of Representatives has 435 voting members, apportioned among the states based on population. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 125,
        sourceId: "20-Q25",
        question: "How long is a term for a member of the House of Representatives? (2020 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "Same as a Senator (6 years)"],
        correctAnswer: "Two (2) years",
        explanation: "Members of the House of Representatives are elected to serve two-year terms. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 126,
        sourceId: "20-Q26",
        question: "Why do U.S. representatives serve shorter terms than U.S. senators? (2020 Version)",
        options: ["To allow for more experienced leadership in the Senate", "Because House districts are smaller", "To more closely follow public opinion", "To reduce the cost of elections"],
        correctAnswer: "To more closely follow public opinion",
        explanation: "The shorter two-year terms for U.S. Representatives are intended to make them more responsive and accountable to the changing views of their constituents. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 127,
        sourceId: "20-Q27",
        question: "How many senators does each state have? (2020 Version)",
        options: ["One (1)", "Two (2)", "It depends on the state's population", "It depends on the state's land area"],
        correctAnswer: "Two (2)",
        explanation: "Each state, regardless of its size or population, has two U.S. senators. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 128,
        sourceId: "20-Q28",
        question: "Why does each state have two senators? (2020 Version)",
        options: ["To ensure dominance by larger states", "Equal representation (for small states) (or The Great Compromise/Connecticut Compromise)", "As a tradition from British Parliament", "To make passing laws more difficult"],
        correctAnswer: "Equal representation (for small states) (or The Great Compromise/Connecticut Compromise)",
        explanation: "Each state has two senators to ensure equal representation for all states, especially smaller ones, in one chamber of Congress. This was part of the Great Compromise (Connecticut Compromise) during the Constitutional Convention. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 129,
        sourceId: "20-Q29",
        question: "Name YOUR U.S. representative. (2020 Version)",
        options: ["One of the state's U.S. Senators", "The Governor of your state", "Refer to current official government resources (e.g., house.gov)", "The local post office manager"],
        correctAnswer: "Refer to current official government resources (e.g., house.gov)",
        explanation: "Your U.S. Representative's name depends on your specific congressional district and changes with elections. Find this information on house.gov by entering your ZIP code. (Residents of territories have specific guidance). (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "representative",
        isOfficial: true
    },
    {
        id: 130,
        sourceId: "20-Q30",
        question: "What is the name of the Speaker of the House of Representatives now?* (2020 Version)",
        options: ["The Vice President of the United States", "The President pro tempore of the Senate", "Visit uscis.gov/citizenship/testupdates for the current name", "The House Majority Whip"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The Speaker of the House is elected by the House members and their name changes. Check uscis.gov/citizenship/testupdates for the current Speaker. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "speaker_name",
        isOfficial: true
    },
    {
        id: 131,
        sourceId: "20-Q31",
        question: "Who does a U.S. senator represent? (2020 Version)",
        options: ["Only the members of their political party in the state", "The federal government to the state", "Citizens of their state (or People of their state)", "Their specific congressional district only"],
        correctAnswer: "Citizens of their state (or People of their state)",
        explanation: "A U.S. senator represents all citizens or people of the state from which they are elected. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 132,
        sourceId: "20-Q32",
        question: "Who elects U.S. senators? (2020 Version)",
        options: ["The President", "State legislatures", "Citizens from their state", "The House of Representatives"],
        correctAnswer: "Citizens from their state",
        explanation: "U.S. senators are directly elected by the citizens of the state they represent, as per the 17th Amendment. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 133,
        sourceId: "20-Q33",
        question: "Who does a member of the House of Representatives represent? (2020 Version)",
        options: ["All citizens of their state", "The U.S. Senate in their district", "Citizens in their (congressional) district (or People from/in their district)", "The governor of their state"],
        correctAnswer: "Citizens in their (congressional) district (or People from/in their district)",
        explanation: "A member of the House of Representatives represents the citizens or people residing within their specific congressional district. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 134,
        sourceId: "20-Q34",
        question: "Who elects members of the House of Representatives? (2020 Version)",
        options: ["The U.S. Senate", "The President", "State legislatures", "Citizens from their (congressional) district"],
        correctAnswer: "Citizens from their (congressional) district",
        explanation: "Members of the House of Representatives are elected by the citizens residing in their specific congressional district. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 135,
        sourceId: "20-Q35",
        question: "Some states have more representatives than other states. Why? (2020 Version)",
        options: ["(Because of) the state’s land area", "(Because of) the state’s population (or they have more people, some states have more people)", "(Because) they were one of the original 13 states", "(Because of) the state's economic contribution"],
        correctAnswer: "(Because of) the state’s population (or they have more people, some states have more people)",
        explanation: "The number of representatives a state has in the House is based on its population, determined by the U.S. Census. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 136,
        sourceId: "20-Q36",
        question: "The President of the United States is elected for how many years?* (2020 Version)",
        options: ["Two (2) years", "Four (4) years", "Six (6) years", "Eight (8) years"],
        correctAnswer: "Four (4) years",
        explanation: "The President is elected for a four-year term. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 137,
        sourceId: "20-Q37",
        question: "The President of the United States can serve only two terms. Why? (2020 Version)",
        options: ["It's a tradition started by George Washington", "(Because of) the 22nd Amendment (or To keep the president from becoming too powerful)", "The Constitution originally limited presidential terms", "To allow more people a chance to be president"],
        correctAnswer: "(Because of) the 22nd Amendment (or To keep the president from becoming too powerful)",
        explanation: "The 22nd Amendment to the Constitution limits a president to two elected terms. This is also seen as a measure to prevent any one president from accumulating too much power. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 138,
        sourceId: "20-Q38",
        question: "What is the name of the President of the United States now?* (2020 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "The Speaker of the House of Representatives", "The Chief Justice of the Supreme Court", "The previous U.S. President"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The name of the current President changes with elections. Check official USCIS resources for the name at the time of your interview. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "president_name",
        isOfficial: true
    },
    {
        id: 139,
        sourceId: "20-Q39",
        question: "What is the name of the Vice President of the United States now?* (2020 Version)",
        options: ["Visit uscis.gov/citizenship/testupdates for the current name", "The Secretary of State", "The President pro tempore of the Senate", "The previous U.S. Vice President"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The name of the current Vice President changes with elections. Check official USCIS resources for the name at the time of your interview. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "vp_name",
        isOfficial: true
    },
    {
        id: 140,
        sourceId: "20-Q40",
        question: "If the president can no longer serve, who becomes president? (2020 Version)",
        options: ["The Speaker of the House", "The Chief Justice", "The Vice President (of the United States)", "The Secretary of State"],
        correctAnswer: "The Vice President (of the United States)",
        explanation: "According to the line of presidential succession, the Vice President is first to assume the presidency if the current president can no longer serve. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 141, 
        sourceId: "20-Q41",
        question: "Name one power of the president. (2020 Version)",
        options: ["To make laws", "To declare laws unconstitutional", "Signs bills into law (or Vetoes bills, Enforces laws, Commander in Chief, Chief diplomat)", "To appoint members of Congress"],
        correctAnswer: "Signs bills into law (or Vetoes bills, Enforces laws, Commander in Chief, Chief diplomat)",
        explanation: "The President has several key powers, including: signs bills into law, vetoes bills, enforces laws, serves as Commander in Chief of the military, and acts as chief diplomat. Any one of these is correct. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 142,
        sourceId: "20-Q42",
        question: "Who is Commander in Chief of the U.S. military? (2020 Version)",
        options: ["The Secretary of Defense", "The Chairman of the Joint Chiefs of Staff", "The President (of the United States)", "A five-star general elected by the military"],
        correctAnswer: "The President (of the United States)",
        explanation: "The President holds the role of Commander in Chief of all U.S. military forces. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 143,
        sourceId: "20-Q43",
        question: "Who signs bills to become laws? (2020 Version)",
        options: ["The Vice President", "The Speaker of the House", "The President (of the United States)", "The Chief Justice"],
        correctAnswer: "The President (of the United States)",
        explanation: "After Congress passes a bill, it goes to the President, who can sign it into law. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 144,
        sourceId: "20-Q44",
        question: "Who vetoes bills?* (2020 Version)",
        options: ["The Supreme Court", "The Senate Majority Leader", "The President (of the United States)", "Any member of Congress can veto a bill"],
        correctAnswer: "The President (of the United States)",
        explanation: "The President has the power to veto (reject) bills passed by Congress. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 145,
        sourceId: "20-Q45",
        question: "Who appoints federal judges? (2020 Version)",
        options: ["The U.S. Senate", "State Governors", "The President (of the United States)", "The House of Representatives"],
        correctAnswer: "The President (of the United States)",
        explanation: "Federal judges, including Supreme Court justices, are appointed by the President and must be confirmed by the Senate. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 146,
        sourceId: "20-Q46",
        question: "The executive branch has many parts. Name one. (2020 Version)",
        options: ["The Supreme Court", "The U.S. Congress", "President (of the United States) (or Cabinet, Federal departments and agencies)", "State Legislatures"],
        correctAnswer: "President (of the United States) (or Cabinet, Federal departments and agencies)",
        explanation: "Parts of the executive branch include the President, the Cabinet, and various federal departments and agencies. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 147,
        sourceId: "20-Q47",
        question: "What does the President’s Cabinet do? (2020 Version)",
        options: ["Makes laws for the country", "Interprets the Constitution", "Advises the President (of the United States)", "Commands the U.S. military branches"],
        correctAnswer: "Advises the President (of the United States)",
        explanation: "The President's Cabinet, consisting of the heads of executive departments, advises the President on matters relating to their respective offices. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 148,
        sourceId: "20-Q48",
        question: "What are two Cabinet-level positions? (2020 Version)",
        options: ["Chief Justice and Speaker of the House", "Director of the FBI and CIA Director", "Attorney General and Secretary of Agriculture (or Commerce, Defense, Education, Energy, HHS, Homeland Security, HUD, Interior, Labor, State, Transportation, Treasury, Veterans Affairs, Vice President)", "Governor of a state and Mayor of a large city"],
        correctAnswer: "Attorney General and Secretary of Agriculture (or Commerce, Defense, Education, Energy, HHS, Homeland Security, HUD, Interior, Labor, State, Transportation, Treasury, Veterans Affairs, Vice President)",
        explanation: "There are many Cabinet-level positions. Examples include Attorney General, Secretary of Agriculture, Secretary of Commerce, Secretary of Defense, Secretary of Education, Secretary of Energy, Secretary of Health and Human Services, Secretary of Homeland Security, Secretary of Housing and Urban Development, Secretary of the Interior, Secretary of Labor, Secretary of State, Secretary of Transportation, Secretary of the Treasury, Secretary of Veterans Affairs, and Vice President. Any two are correct. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 149,
        sourceId: "20-Q49",
        question: "Why is the Electoral College important? (2020 Version)",
        options: ["It ensures the popular vote winner always becomes President.", "It decides who is elected president (or It provides a compromise between popular election and congressional selection).", "It directly funds presidential campaigns.", "It is responsible for voter registration drives."],
        correctAnswer: "It decides who is elected president (or It provides a compromise between popular election and congressional selection).",
        explanation: "The Electoral College is important because it is the body that formally elects the U.S. President. It also represents a compromise made by the Founding Fathers between a popular vote election of the president and a congressional election of the president. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Hard",
        isOfficial: true
    },
    {
        id: 150,
        sourceId: "20-Q50",
        question: "What is one part of the judicial branch? (2020 Version)",
        options: ["The U.S. Congress", "The President's Cabinet", "Supreme Court (or Federal Courts)", "State Supreme Courts only"],
        correctAnswer: "Supreme Court (or Federal Courts)",
        explanation: "The judicial branch includes the Supreme Court and other Federal Courts. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 151,
        sourceId: "20-Q51",
        question: "What does the judicial branch do? (2020 Version)",
        options: ["Writes new laws and amends existing ones", "Enforces federal laws across the states", "Reviews laws, explains laws, resolves disputes (disagreements) about the law, decides if a law goes against the (U.S.) Constitution", "Conducts foreign policy and makes treaties"],
        correctAnswer: "Reviews laws, explains laws, resolves disputes (disagreements) about the law, decides if a law goes against the (U.S.) Constitution",
        explanation: "The judicial branch's primary functions include reviewing laws, explaining them, resolving legal disputes, and determining the constitutionality of laws. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 152,
        sourceId: "20-Q52",
        question: "What is the highest court in the United States?* (2020 Version)",
        options: ["The Federal Court of Appeals for the D.C. Circuit", "The State Supreme Court in the most populous state", "Supreme Court", "The International Court of Justice"],
        correctAnswer: "Supreme Court",
        explanation: "The Supreme Court is the highest court in the U.S. federal judicial system. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 153,
        sourceId: "20-Q53",
        question: "How many seats are on the Supreme Court? (2020 Version)",
        options: ["Seven (7)", "Eight (8)", "Nine (9)", "Eleven (11)"],
        correctAnswer: "Nine (9)",
        explanation: "There are currently nine seats on the Supreme Court: one Chief Justice and eight Associate Justices. This number can be changed by Congress. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 154,
        sourceId: "20-Q54",
        question: "How many Supreme Court justices are usually needed to decide a case? (2020 Version)",
        options: ["Three (3)", "Four (4) for a writ of certiorari", "Five (5) for a majority decision", "All nine (9) must agree"],
        correctAnswer: "Five (5) for a majority decision",
        explanation: "A simple majority of the justices hearing a case is needed to decide it. With nine justices, this typically means five. (Four justices are needed to agree to hear a case - grant certiorari). (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 155,
        sourceId: "20-Q55",
        question: "How long do Supreme Court justices serve? (2020 Version)",
        options: ["For a 10-year term", "Until age 70 mandatory retirement", "(For) life (or Lifetime appointment, Until retirement)", "For two presidential terms"],
        correctAnswer: "(For) life (or Lifetime appointment, Until retirement)",
        explanation: "Supreme Court justices hold their offices during good behavior, which generally means for life, or until they choose to retire or resign, or are impeached and removed. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 156,
        sourceId: "20-Q56",
        question: "Supreme Court justices serve for life. Why? (2020 Version)",
        options: ["To ensure they gain maximum experience.", "To be independent (of politics) (or To limit outside (political) influence).", "To reduce the number of presidential appointments.", "Because it is a tradition from the British system."],
        correctAnswer: "To be independent (of politics) (or To limit outside (political) influence).",
        explanation: "Lifetime appointments for Supreme Court justices are intended to ensure their independence from political pressures and to allow them to make decisions based on law rather than transient public opinion or partisan concerns. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 157,
        sourceId: "20-Q57",
        question: "Who is the Chief Justice of the United States now? (2020 Version)",
        options: ["The most recently appointed Associate Justice", "The Attorney General", "Visit uscis.gov/citizenship/testupdates for the current name", "The President of the United States"],
        correctAnswer: "Visit uscis.gov/citizenship/testupdates for the current name",
        explanation: "The name of the Chief Justice changes with appointments. Check official USCIS resources for the current name. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Easy",
        stateInfoType: "chief_justice_name",
        isOfficial: true
    },
    {
        id: 158,
        sourceId: "20-Q58",
        question: "Name one power that is only for the federal government. (2020 Version)",
        options: ["To provide schooling and education", "To issue driver's licenses", "Print paper money (or Mint coins, Declare war, Create an army, Make treaties, Set foreign policy)", "To establish local police forces"],
        correctAnswer: "Print paper money (or Mint coins, Declare war, Create an army, Make treaties, Set foreign policy)",
        explanation: "Powers exclusive to the federal government include: printing money, minting coins, declaring war, creating an army, making treaties, and setting foreign policy. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 159,
        sourceId: "20-Q59",
        question: "Name one power that is only for the states. (2020 Version)",
        options: ["To print money", "To make treaties with foreign nations", "Provide schooling and education (or Provide protection/police, Provide safety/fire depts, Give a driver’s license, Approve zoning/land use)", "To declare war"],
        correctAnswer: "Provide schooling and education (or Provide protection/police, Provide safety/fire depts, Give a driver’s license, Approve zoning/land use)",
        explanation: "Powers primarily reserved for state governments include: providing schooling and education, police and fire protection, issuing driver's licenses, and approving zoning and land use. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 160,
        sourceId: "20-Q60",
        question: "What is the purpose of the 10th Amendment? (2020 Version)",
        options: ["It guarantees freedom of speech.", "It establishes the federal income tax.", "(It states that the) powers not given to the federal government belong to the states or to the people.", "It abolishes slavery."],
        correctAnswer: "(It states that the) powers not given to the federal government belong to the states or to the people.",
        explanation: "The 10th Amendment codifies the principle of federalism by stating that any powers not specifically delegated to the federal government by the Constitution, nor prohibited to the states, are reserved to the states respectively, or to the people. (Source: USCIS 2020 Guide)",
        category: "System of Government", 
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 161,
        sourceId: "20-Q61",
        question: "Who is the governor of YOUR STATE now?* (2020 Version)",
        options: ["The state's Secretary of State", "Refer to current official state government resources", "A U.S. Senator from the state", "The mayor of the state's largest city"],
        correctAnswer: "Refer to current official state government resources",
        explanation: "The name of your state's Governor changes with elections. Check official state government websites or uscis.gov/citizenship/testupdates. (DC residents have a specific answer). (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "System of Government", 
        difficulty: "Medium",
        isStateSpecific: true,
        stateInfoType: "governor",
        isOfficial: true
    },
    {
        id: 162,
        sourceId: "20-Q62",
        question: "What is the capital of YOUR STATE? (2020 Version)", 
        options: ["(Populated by JS based on state selection)", "The city with the most historical landmarks in the state", "The state's primary commercial center", "A city chosen by federal government"],
        correctAnswer: "(Populated by JS based on state selection)",
        explanation: "Each U.S. state has a capital city. The correct capital for your selected state will be an option. (DC/territory residents have specific guidance). (Source: USCIS 2020 Guide)",
        category: "System of Government", 
        difficulty: "Easy",
        isStateSpecific: true,
        stateInfoType: "capital",
        isOfficial: true
    },
    {
        id: 163,
        sourceId: "20-Q63",
        question: "There are four amendments to the U.S. Constitution about who can vote. Describe one of them. (2020 Version)",
        options: ["Only citizens who own land can vote.", "Citizens eighteen (18) and older can vote (or no poll tax; any citizen can vote/men and women; male citizen of any race can vote).", "States can require literacy tests for voting.", "Only members of a political party can vote in federal elections."],
        correctAnswer: "Citizens eighteen (18) and older can vote (or no poll tax; any citizen can vote/men and women; male citizen of any race can vote).",
        explanation: "Amendments concerning voting rights include the 15th (race, color, previous servitude), 19th (sex), 24th (abolishes poll taxes in federal elections), and 26th (voting age to 18). Describing any of these concepts is correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 164,
        sourceId: "20-Q64",
        question: "Who can vote in federal elections, run for federal office, and serve on a jury in the United States? (2020 Version)",
        options: ["Legal permanent residents", "Anyone living in the U.S. for over 5 years", "Citizens (or Citizens of the United States, U.S. citizens)", "All taxpayers regardless of citizenship status"],
        correctAnswer: "Citizens (or Citizens of the United States, U.S. citizens)",
        explanation: "These important civic rights and responsibilities—voting in federal elections, running for federal office, and serving on a jury—are reserved for U.S. citizens. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 165,
        sourceId: "20-Q65",
        question: "What are three rights of everyone living in the United States? (2020 Version)",
        options: ["Right to a federal job, free housing, and free healthcare", "Freedom of expression, freedom of speech, and freedom of assembly (or petition, religion, bear arms)", "Right to vote, run for office, and serve on a jury", "Right to disobey laws and refuse to pay taxes"],
        correctAnswer: "Freedom of expression, freedom of speech, and freedom of assembly (or petition, religion, bear arms)",
        explanation: "Everyone living in the U.S., regardless of citizenship, generally enjoys fundamental rights such as freedom of expression, speech, assembly, petitioning the government, religion, and the right to bear arms. Any three are correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 166,
        sourceId: "20-Q66",
        question: "What do we show loyalty to when we say the Pledge of Allegiance?* (2020 Version)",
        options: ["The President and Congress only", "The Constitution of the United States", "The United States (or The flag)", "Our home state primarily"],
        correctAnswer: "The United States (or The flag)",
        explanation: "The Pledge of Allegiance is a promise of loyalty to the United States of America and to its flag, which symbolizes the republic. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 167,
        sourceId: "20-Q67",
        question: "Name two promises that new citizens make in the Oath of Allegiance. (2020 Version)",
        options: ["To vote in every election and join a political party", "To become wealthy and successful", "Give up loyalty to other countries and defend the (U.S.) Constitution (or obey laws, serve in military/nation, be loyal)", "To only speak English and learn U.S. history"],
        correctAnswer: "Give up loyalty to other countries and defend the (U.S.) Constitution (or obey laws, serve in military/nation, be loyal)",
        explanation: "New citizens promise to: give up loyalty to other countries; defend the Constitution and laws of the U.S.; obey U.S. laws; serve in the U.S. military (if needed); do important work for the nation (if needed); and be loyal to the United States. Any two are correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 168,
        sourceId: "20-Q68",
        question: "How can people become United States citizens? (2020 Version)",
        options: ["By living in the U.S. for 10 years continuously", "By marrying a U.S. citizen automatically", "Naturalize (or Derive citizenship, Be born in the United States)", "By owning property in the United States"],
        correctAnswer: "Naturalize (or Derive citizenship, Be born in the United States)",
        explanation: "The primary ways to become a U.S. citizen are: through naturalization (the legal process for non-citizens), deriving citizenship (typically through parents who are citizens), or by being born in the United States (birthright citizenship under the 14th Amendment). (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 169,
        sourceId: "20-Q69",
        question: "What are two examples of civic participation in the United States? (2020 Version)",
        options: ["Paying taxes and following traffic laws", "Watching news reports and having personal opinions", "Vote and run for office (or join party, help campaign, join civic/community group, give opinion, contact officials, support/oppose issue, write newspaper)", "Working for a federal agency and serving in the military"],
        correctAnswer: "Vote and run for office (or join party, help campaign, join civic/community group, give opinion, contact officials, support/oppose issue, write newspaper)",
        explanation: "Examples of civic participation include: vote, run for office, join a political party, help with a campaign, join a civic group, join a community group, give an elected official your opinion, contact elected officials, support or oppose an issue or policy, or write to a newspaper. Any two are correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 170,
        sourceId: "20-Q70",
        question: "What is one way Americans can serve their country? (2020 Version)",
        options: ["By only buying American-made products", "By criticizing government policies", "Vote (or Pay taxes, Obey the law, Serve in military, Run for office, Work for government)", "By traveling internationally as a tourist"],
        correctAnswer: "Vote (or Pay taxes, Obey the law, Serve in military, Run for office, Work for government)",
        explanation: "Americans can serve their country in many ways, including: voting, paying taxes, obeying the law, serving in the military, running for office, or working for local, state, or federal government. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 171,
        sourceId: "20-Q71",
        question: "Why is it important to pay federal taxes? (2020 Version)",
        options: ["It is voluntary for most citizens", "To receive a tax refund each year", "Required by law (or All people pay to fund federal gov't, Required by Constitution/16th Am., Civic duty)", "To fund political campaigns directly"],
        correctAnswer: "Required by law (or All people pay to fund federal gov't, Required by Constitution/16th Am., Civic duty)",
        explanation: "Paying federal taxes is important because it is required by law, it is how people pay to fund the federal government, it is required by the U.S. Constitution (16th Amendment), and it is a civic duty. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 172,
        sourceId: "20-Q72",
        question: "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why. (2020 Version)",
        options: ["To get a discount on college tuition", "To be eligible for federal student aid, jobs, and citizenship (for immigrants)", "Required by law (or Civic duty, Makes draft fair if needed)", "To receive immediate military training"],
        correctAnswer: "Required by law (or Civic duty, Makes draft fair if needed)",
        explanation: "Registering for the Selective Service is important because it is required by law, it is a civic duty, and it helps make any potential military draft fair. It is also a prerequisite for certain federal benefits. (Source: USCIS 2020 Guide)",
        category: "Rights and Responsibilities",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 173,
        sourceId: "20-Q73",
        question: "The colonists came to America for many reasons. Name one. (2020 Version)",
        options: ["To establish a monarchy separate from Britain", "To engage in wars with Native American tribes", "Freedom (or Political liberty, Religious freedom, Economic opportunity, Escape persecution)", "To find a shorter trade route to Asia"],
        correctAnswer: "Freedom (or Political liberty, Religious freedom, Economic opportunity, Escape persecution)",
        explanation: "Colonists were motivated by a desire for freedom, political liberty, religious freedom, economic opportunity, and to escape persecution in their home countries. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 174,
        sourceId: "20-Q74",
        question: "Who lived in America before the Europeans arrived?* (2020 Version)",
        options: ["The Vikings who established early settlements", "No one; the continent was uninhabited", "American Indians (or Native Americans)", "Spanish conquistadors exploring new trade routes"],
        correctAnswer: "American Indians (or Native Americans)",
        explanation: "American Indians (also called Native Americans) were the original inhabitants of the Americas, with diverse cultures and societies established long before European arrival. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 175,
        sourceId: "20-Q75",
        question: "What group of people was taken and sold as slaves? (2020 Version)",
        options: ["Indentured servants from Ireland", "Chinese immigrants building railroads", "Africans (or People from Africa)", "Political prisoners from England"],
        correctAnswer: "Africans (or People from Africa)",
        explanation: "Millions of Africans (people from Africa) were forcibly captured, transported across the Atlantic, and sold into slavery in the Americas. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 176,
        sourceId: "20-Q76",
        question: "What war did the Americans fight to win independence from Britain? (2020 Version)",
        options: ["The French and Indian War", "The War of 1812", "American Revolution (or The (American) Revolutionary War, War for (American) Independence)", "The Civil War"],
        correctAnswer: "American Revolution (or The (American) Revolutionary War, War for (American) Independence)",
        explanation: "The American Revolution (also known as the American Revolutionary War or the War for American Independence) was fought by the American colonists to gain independence from Great Britain. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 177,
        sourceId: "20-Q77",
        question: "Name one reason why the Americans declared independence from Britain. (2020 Version)",
        options: ["Desire for a stronger monarchy", "High taxes (or Taxation without representation, British soldiers stayed in houses, no self-government, Boston Massacre, Tea Party/Tea Act, Stamp Act, Sugar Act, Townshend Acts, Intolerable Acts)", "To gain more land from France", "To abolish slavery immediately"],
        correctAnswer: "High taxes (or Taxation without representation, British soldiers stayed in houses, no self-government, Boston Massacre, Tea Party/Tea Act, Stamp Act, Sugar Act, Townshend Acts, Intolerable Acts)",
        explanation: "Reasons for declaring independence included: high taxes, taxation without representation, quartering of British soldiers, lack of self-government, events like the Boston Massacre, the Boston Tea Party (Tea Act), and unpopular laws like the Stamp Act, Sugar Act, Townshend Acts, and Intolerable (Coercive) Acts. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 178,
        sourceId: "20-Q78",
        question: "Who wrote the Declaration of Independence?* (2020 Version)",
        options: ["George Washington", "James Madison", "(Thomas) Jefferson", "Benjamin Franklin"],
        correctAnswer: "(Thomas) Jefferson",
        explanation: "Thomas Jefferson was the primary author of the Declaration of Independence. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 179,
        sourceId: "20-Q79",
        question: "When was the Declaration of Independence adopted? (2020 Version)",
        options: ["September 17, 1787 (Constitution signed)", "April 19, 1775 (Start of Revolutionary War)", "July 4, 1776", "October 19, 1781 (Battle of Yorktown)"],
        correctAnswer: "July 4, 1776",
        explanation: "The Second Continental Congress adopted the Declaration of Independence on July 4, 1776. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 180,
        sourceId: "20-Q80",
        question: "The American Revolution had many important events. Name one. (2020 Version)",
        options: ["The Louisiana Purchase", "The Constitutional Convention", "(Battle of) Bunker Hill (or Declaration of Independence, Washington Crossing Delaware/Trenton, Saratoga, Valley Forge, Yorktown)", "The start of the Gold Rush"],
        correctAnswer: "(Battle of) Bunker Hill (or Declaration of Independence, Washington Crossing Delaware/Trenton, Saratoga, Valley Forge, Yorktown)",
        explanation: "Important events of the American Revolution include: (Battle of) Bunker Hill, Declaration of Independence, Washington Crossing the Delaware (Battle of Trenton), (Battle of) Saratoga, Valley Forge (Encampment), and (Battle of) Yorktown (British surrender at Yorktown). Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 181,
        sourceId: "20-Q81",
        question: "There were 13 original states. Name five. (2020 Version)",
        options: ["California, Texas, Florida, Ohio, Illinois", "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York (or NJ, PA, DE, MD, VA, NC, SC, GA)", "Maine, Vermont, Kentucky, Tennessee, Michigan", "Washington, Oregon, Nevada, Arizona, Colorado"],
        correctAnswer: "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York (or NJ, PA, DE, MD, VA, NC, SC, GA)",
        explanation: "The 13 original states were: New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia. Any five are correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 182,
        sourceId: "20-Q82",
        question: "What founding document was written in 1787? (2020 Version)",
        options: ["The Declaration of Independence", "The Articles of Confederation", "(U.S.) Constitution", "The Bill of Rights"],
        correctAnswer: "(U.S.) Constitution",
        explanation: "The U.S. Constitution was written during the Constitutional Convention in Philadelphia in 1787. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 183,
        sourceId: "20-Q83",
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers. (2020 Version)",
        options: ["Thomas Paine", "Patrick Henry", "(James) Madison (or Alexander Hamilton, John Jay, Publius)", "George Mason"],
        correctAnswer: "(James) Madison (or Alexander Hamilton, John Jay, Publius)",
        explanation: "The Federalist Papers were authored by James Madison, Alexander Hamilton, and John Jay (writing under the name 'Publius') to advocate for the ratification of the Constitution. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 184,
        sourceId: "20-Q84",
        question: "Why were the Federalist Papers important? (2020 Version)",
        options: ["They argued against a strong federal government.", "They helped people understand the (U.S.) Constitution (or They supported passing the Constitution).", "They outlined the grievances against King George III.", "They were the first draft of the Bill of Rights."],
        correctAnswer: "They helped people understand the (U.S.) Constitution (or They supported passing the Constitution).",
        explanation: "The Federalist Papers were important because they provided a detailed explanation and defense of the newly drafted Constitution, helping to persuade the public and state conventions to ratify it. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 185,
        sourceId: "20-Q85",
        question: "Benjamin Franklin is famous for many things. Name one. (2020 Version)",
        options: ["First President of the United States", "Invented the cotton gin", "Founded the first free public libraries (or First Postmaster General, Helped write Dec. of Ind., Inventor, U.S. diplomat)", "General of the Continental Army"],
        correctAnswer: "Founded the first free public libraries (or First Postmaster General, Helped write Dec. of Ind., Inventor, U.S. diplomat)",
        explanation: "Benjamin Franklin was known for many achievements: founding the first free public libraries, serving as the first Postmaster General, helping write the Declaration of Independence, being an inventor, and serving as a U.S. diplomat. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 186,
        sourceId: "20-Q86",
        question: "George Washington is famous for many things. Name one.* (2020 Version)",
        options: ["Writer of the Declaration of Independence", "Invented the lightning rod", "'Father of Our Country' (or First president, General of Continental Army, President of Constitutional Convention)", "First Secretary of the Treasury"],
        correctAnswer: "'Father of Our Country' (or First president, General of Continental Army, President of Constitutional Convention)",
        explanation: "George Washington is famous for being the 'Father of Our Country,' the first U.S. President, General of the Continental Army, and President of the Constitutional Convention. Any one is correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 187,
        sourceId: "20-Q87",
        question: "Thomas Jefferson is famous for many things. Name one. (2020 Version)",
        options: ["'Father of the Constitution'", "First Secretary of the Treasury", "Writer of the Declaration of Independence (or Third president, Doubled U.S. size/Louisiana Purchase, First Sec. of State, Founded Univ. of VA, Writer of VA Statute on Religious Freedom)", "Commander of the Continental Army"],
        correctAnswer: "Writer of the Declaration of Independence (or Third president, Doubled U.S. size/Louisiana Purchase, First Sec. of State, Founded Univ. of VA, Writer of VA Statute on Religious Freedom)",
        explanation: "Thomas Jefferson's famous achievements include: writing the Declaration of Independence, serving as the third U.S. President, doubling the size of the U.S. through the Louisiana Purchase, serving as the first Secretary of State, founding the University of Virginia, and writing the Virginia Statute on Religious Freedom. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 188,
        sourceId: "20-Q88",
        question: "James Madison is famous for many things. Name one. (2020 Version)",
        options: ["First President of the United States", "Writer of the Declaration of Independence", "'Father of the Constitution' (or Fourth president, President during War of 1812, One writer of Federalist Papers)", "Inventor of the bifocal glasses"],
        correctAnswer: "'Father of the Constitution' (or Fourth president, President during War of 1812, One writer of Federalist Papers)",
        explanation: "James Madison is known for being the 'Father of the Constitution,' the fourth U.S. President, President during the War of 1812, and one of the writers of the Federalist Papers. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 189,
        sourceId: "20-Q89",
        question: "Alexander Hamilton is famous for many things. Name one. (2020 Version)",
        options: ["Third President of the United States", "Writer of 'Common Sense'", "First Secretary of the Treasury (or One writer of Federalist Papers, Helped establish First Bank of U.S., Aide to Gen. Washington, Member of Continental Congress)", "Primary author of the Bill of Rights"],
        correctAnswer: "First Secretary of the Treasury (or One writer of Federalist Papers, Helped establish First Bank of U.S., Aide to Gen. Washington, Member of Continental Congress)",
        explanation: "Alexander Hamilton's famous achievements include: serving as the first Secretary of the Treasury, being one of the writers of the Federalist Papers, helping establish the First Bank of the United States, serving as an aide to General George Washington, and being a member of the Continental Congress. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 190,
        sourceId: "20-Q90",
        question: "What territory did the United States buy from France in 1803? (2020 Version)",
        options: ["Florida Territory", "Alaska Territory", "Louisiana Territory (or Louisiana)", "Gadsden Purchase"],
        correctAnswer: "Louisiana Territory (or Louisiana)",
        explanation: "The U.S. purchased the Louisiana Territory (also referred to as Louisiana) from France in 1803, effectively doubling the nation's size. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 191,
        sourceId: "20-Q91",
        question: "Name one war fought by the United States in the 1800s. (2020 Version)",
        options: ["Revolutionary War", "World War I", "War of 1812 (or Mexican-American War, Civil War, Spanish-American War)", "Korean War"],
        correctAnswer: "War of 1812 (or Mexican-American War, Civil War, Spanish-American War)",
        explanation: "The United States fought several wars in the 1800s, including the War of 1812, Mexican-American War, Civil War, and Spanish-American War. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 192,
        sourceId: "20-Q92",
        question: "Name the U.S. war between the North and the South. (2020 Version)",
        options: ["The War of 1812", "The Mexican-American War", "The Civil War", "The Revolutionary War"],
        correctAnswer: "The Civil War", 
        explanation: "The U.S. war fought from 1861 to 1865 between the Union (North) and the Confederacy (South) is known as The Civil War. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 193,
        sourceId: "20-Q93",
        question: "The Civil War had many important events. Name one. (2020 Version)",
        options: ["The Boston Tea Party", "The Louisiana Purchase", "(Battle of) Fort Sumter (or Emancipation Proclamation, Vicksburg, Gettysburg, Sherman's March, Appomattox, Antietam/Sharpsburg, Lincoln assassinated)", "The California Gold Rush"],
        correctAnswer: "(Battle of) Fort Sumter (or Emancipation Proclamation, Vicksburg, Gettysburg, Sherman's March, Appomattox, Antietam/Sharpsburg, Lincoln assassinated)",
        explanation: "Important events of the Civil War include: (Battle of) Fort Sumter, Emancipation Proclamation, (Battle of) Vicksburg, (Battle of) Gettysburg, Sherman's March, (Surrender at) Appomattox, (Battle of) Antietam/Sharpsburg, and Lincoln was assassinated. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 194,
        sourceId: "20-Q94",
        question: "Abraham Lincoln is famous for many things. Name one.* (2020 Version)",
        options: ["Wrote the Star-Spangled Banner", "Led the Lewis and Clark Expedition", "Freed the slaves (Emancipation Proclamation) (or Saved Union, Led U.S. during Civil War, 16th president, Delivered Gettysburg Address)", "Invented the cotton gin"],
        correctAnswer: "Freed the slaves (Emancipation Proclamation) (or Saved Union, Led U.S. during Civil War, 16th president, Delivered Gettysburg Address)",
        explanation: "Abraham Lincoln is famous for: freeing the slaves (Emancipation Proclamation), saving (or preserving) the Union, leading the United States during the Civil War, being the 16th president of the United States, and delivering the Gettysburg Address. Any one is correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 195,
        sourceId: "20-Q95",
        question: "What did the Emancipation Proclamation do? (2020 Version)",
        options: ["Ended the Civil War", "Gave women the right to vote", "Freed the slaves (or Freed slaves in Confederacy, in Confederate states, in most Southern states)", "Established income tax"],
        correctAnswer: "Freed the slaves (or Freed slaves in Confederacy, in Confederate states, in most Southern states)",
        explanation: "The Emancipation Proclamation freed slaves in the Confederate states. It was a crucial step toward ending slavery in the United States. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 196,
        sourceId: "20-Q96",
        question: "What U.S. war ended slavery? (2020 Version)",
        options: ["The Revolutionary War", "The War of 1812", "The Mexican-American War", "The Civil War"],
        correctAnswer: "The Civil War",
        explanation: "The Civil War (1861-1865) ultimately led to the abolition of slavery in the United States, formally codified by the 13th Amendment. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 197,
        sourceId: "20-Q97",
        question: "What amendment gives citizenship to all persons born in the United States? (2020 Version)",
        options: ["1st Amendment", "10th Amendment", "13th Amendment", "14th Amendment"],
        correctAnswer: "14th Amendment",
        explanation: "The 14th Amendment to the Constitution, ratified in 1868, grants citizenship to all persons born or naturalized in the United States, including formerly enslaved people, and guarantees all citizens 'equal protection of the laws.' (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 198,
        sourceId: "20-Q98",
        question: "When did all men get the right to vote? (2020 Version)",
        options: ["After the Revolutionary War (1783)", "With the original Constitution (1789)", "After the Civil War (or During Reconstruction, With the 15th Amendment, 1870)", "After World War I (1920)"],
        correctAnswer: "After the Civil War (or During Reconstruction, With the 15th Amendment, 1870)",
        explanation: "The 15th Amendment, ratified in 1870 during Reconstruction after the Civil War, prohibited denying a citizen the right to vote based on 'race, color, or previous condition of servitude,' thus granting suffrage to all men regardless of race. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 199,
        sourceId: "20-Q99",
        question: "Name one leader of the women’s rights movement in the 1800s. (2020 Version)",
        options: ["Clara Barton", "Harriet Beecher Stowe", "Susan B. Anthony (or Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, Lucretia Mott, Lucy Stone)", "Jane Addams"],
        correctAnswer: "Susan B. Anthony (or Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, Lucretia Mott, Lucy Stone)",
        explanation: "Leaders of the women's rights movement in the 1800s included Susan B. Anthony, Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, Lucretia Mott, and Lucy Stone. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 200,
        sourceId: "20-Q100",
        question: "Name one war fought by the United States in the 1900s. (2020 Version)", 
        options: ["Civil War", "War of 1812", "World War I (or World War II, Korean War, Vietnam War, (Persian) Gulf War)", "Spanish-American War"],
        correctAnswer: "World War I (or World War II, Korean War, Vietnam War, (Persian) Gulf War)",
        explanation: "The U.S. fought in several major wars during the 1900s, including World War I, World War II, Korean War, Vietnam War, and the (Persian) Gulf War. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 200,
        sourceId: "20-Q100",
        question: "Name one war fought by the United States in the 1900s. (2020 Version)",
        options: ["Civil War", "War of 1812", "World War I (or World War II, Korean War, Vietnam War, (Persian) Gulf War)", "Spanish-American War"],
        correctAnswer: "World War I (or World War II, Korean War, Vietnam War, (Persian) Gulf War)",
        explanation: "The U.S. fought in several major wars during the 1900s, including World War I, World War II, Korean War, Vietnam War, and the (Persian) Gulf War. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 201,
        sourceId: "20-Q101",
        question: "Why did the United States enter World War I? (2020 Version)",
        options: ["To gain new territories in Europe", "To directly defend U.S. soil from invasion", "Because Germany attacked U.S. (civilian) ships (or To support Allied Powers, To oppose Central Powers)", "To establish a global democratic government"],
        correctAnswer: "Because Germany attacked U.S. (civilian) ships (or To support Allied Powers, To oppose Central Powers)",
        explanation: "The U.S. entered WWI due to factors like Germany's unrestricted submarine warfare (attacking U.S. ships), to support the Allied Powers (England, France, Italy, Russia), and to oppose the Central Powers (Germany, Austria-Hungary, Ottoman Empire, Bulgaria). Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 202,
        sourceId: "20-Q102",
        question: "When did all women get the right to vote? (2020 Version)",
        options: ["1865 (after Civil War)", "1900 (start of 20th century)", "1920 (or After World War I, With the 19th Amendment)", "1945 (after World War II)"],
        correctAnswer: "1920 (or After World War I, With the 19th Amendment)",
        explanation: "All women gained the right to vote with the ratification of the 19th Amendment in 1920, which occurred after World War I. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 203,
        sourceId: "20-Q103",
        question: "What was the Great Depression? (2020 Version)",
        options: ["A period of major social reforms", "A short economic downturn after WWI", "Longest economic recession in modern history", "A series of dust storms in the Midwest"],
        correctAnswer: "Longest economic recession in modern history",
        explanation: "The Great Depression, primarily during the 1930s, was the longest and most severe economic recession experienced by the industrialized Western world. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 204,
        sourceId: "20-Q104",
        question: "When did the Great Depression start? (2020 Version)",
        options: ["1918 (End of WWI)", "1925 (Mid-Roaring Twenties)", "The Great Crash (1929) (or Stock market crash of 1929)", "1933 (Start of New Deal)"],
        correctAnswer: "The Great Crash (1929) (or Stock market crash of 1929)",
        explanation: "The Great Depression is generally considered to have started with the stock market crash in October 1929, known as the Great Crash. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 205,
        sourceId: "20-Q105",
        question: "Who was president during the Great Depression and World War II? (2020 Version)", 
        options: ["Herbert Hoover", "Harry S. Truman", "(Franklin) Roosevelt", "Dwight D. Eisenhower"],
        correctAnswer: "(Franklin) Roosevelt",
        explanation: "Franklin D. Roosevelt served as president throughout most of the Great Depression and World War II. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 206,
        sourceId: "20-Q106",
        question: "Why did the United States enter World War II? (2020 Version)",
        options: ["To annex territories in Europe and Asia", "To establish global economic dominance", "(Bombing of) Pearl Harbor (or Japanese attacked Pearl Harbor, To support Allied Powers, To oppose Axis Powers)", "Because of the Treaty of Versailles terms"],
        correctAnswer: "(Bombing of) Pearl Harbor (or Japanese attacked Pearl Harbor, To support Allied Powers, To oppose Axis Powers)",
        explanation: "The U.S. entered WWII after the Japanese bombing of Pearl Harbor. Other reasons include supporting the Allied Powers (England, France, Russia, etc.) and opposing the Axis Powers (Germany, Italy, Japan). Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 207,
        sourceId: "20-Q107",
        question: "Dwight Eisenhower is famous for many things. Name one. (2020 Version)",
        options: ["President during the Vietnam War", "Author of the New Deal programs", "General during World War II (or President at end of/during Korean War, 34th president, Signed Federal-Aid Highway Act 1956/Created Interstate System)", "First Secretary of Defense"],
        correctAnswer: "General during World War II (or President at end of/during Korean War, 34th president, Signed Federal-Aid Highway Act 1956/Created Interstate System)",
        explanation: "Dwight D. Eisenhower was famous for being a General during WWII, President at the end of (or during) the Korean War, the 34th U.S. President, and for signing the Federal-Aid Highway Act of 1956 which created the Interstate System. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 208,
        sourceId: "20-Q108",
        question: "Who was the United States’ main rival during the Cold War? (2020 Version)",
        options: ["China", "Germany", "Soviet Union (or USSR, Russia)", "Japan"],
        correctAnswer: "Soviet Union (or USSR, Russia)",
        explanation: "The main rival of the United States during the Cold War period (approx. 1947-1991) was the Soviet Union (also referred to as the USSR or Russia in this context). (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 209,
        sourceId: "20-Q109",
        question: "During the Cold War, what was one main concern of the United States? (2020 Version)",
        options: ["Economic competition from Europe", "Environmental degradation", "Communism (or Nuclear war)", "Territorial disputes with Canada"],
        correctAnswer: "Communism (or Nuclear war)",
        explanation: "A primary concern for the United States during the Cold War was the spread of Communism and the threat of nuclear war with the Soviet Union. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 210,
        sourceId: "20-Q110",
        question: "Why did the United States enter the Korean War? (2020 Version)",
        options: ["To gain control of Korean natural resources", "In response to a direct attack on U.S. soil", "To stop the spread of communism", "To support Japanese expansion in Asia"],
        correctAnswer: "To stop the spread of communism",
        explanation: "The United States entered the Korean War (1950-1953) primarily to prevent North Korea (supported by communist powers) from conquering South Korea and thus stop the spread of communism in Asia. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 211,
        sourceId: "20-Q111",
        question: "Why did the United States enter the Vietnam War? (2020 Version)",
        options: ["To establish a U.S. colony in Southeast Asia", "To support French colonial rule", "To stop the spread of communism", "In response to the Tet Offensive"],
        correctAnswer: "To stop the spread of communism",
        explanation: "The U.S. involvement in the Vietnam War escalated significantly with the goal of preventing a communist takeover of South Vietnam and halting the spread of communism in Southeast Asia. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 212,
        sourceId: "20-Q112",
        question: "What did the civil rights movement do? (2020 Version)",
        options: ["Fought for states' rights to secede", "Advocated for stricter immigration laws", "Fought to end racial discrimination", "Promoted segregation in schools and public places"],
        correctAnswer: "Fought to end racial discrimination",
        explanation: "The civil rights movement was a decades-long struggle by African Americans and their allies to end institutionalized racial discrimination, disenfranchisement, and racial segregation in the United States. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 213,
        sourceId: "20-Q113",
        question: "Martin Luther King, Jr. is famous for many things. Name one.* (2020 Version)",
        options: ["Serving as U.S. President", "Leading the U.S. military", "Fought for civil rights (or Worked for equality, Worked to ensure people not judged by skin color but content of character)", "Writing the Emancipation Proclamation"],
        correctAnswer: "Fought for civil rights (or Worked for equality, Worked to ensure people not judged by skin color but content of character)",
        explanation: "Martin Luther King, Jr. is famous for fighting for civil rights, working for equality for all Americans, and working to ensure that people would 'not be judged by the color of their skin, but by the content of their character.' Any one is correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 214,
        sourceId: "20-Q114",
        question: "Why did the United States enter the Persian Gulf War? (2020 Version)",
        options: ["To overthrow the government of Iran", "To establish U.S. military bases in Saudi Arabia", "To force the Iraqi military from Kuwait", "To respond to terrorist attacks on U.S. soil"],
        correctAnswer: "To force the Iraqi military from Kuwait",
        explanation: "The United States, leading an international coalition, entered the Persian Gulf War in 1991 to liberate Kuwait after it was invaded by Iraq under Saddam Hussein. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 215,
        sourceId: "20-Q115",
        question: "What major event happened on September 11, 2001 in the United States?* (2020 Version)",
        options: ["A major stock market crash leading to a recession", "The Oklahoma City bombing", "Terrorists attacked the United States (or crashed planes into World Trade Center, Pentagon, and a field in Pennsylvania)", "Hurricane Katrina made landfall in New Orleans"],
        correctAnswer: "Terrorists attacked the United States (or crashed planes into World Trade Center, Pentagon, and a field in Pennsylvania)",
        explanation: "On September 11, 2001, terrorists attacked the United States. They took over two planes and crashed them into the World Trade Center in New York City. Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia. Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania. Any of these descriptions is correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 216,
        sourceId: "20-Q116",
        question: "Name one U.S. military conflict after the September 11, 2001 attacks. (2020 Version)",
        options: ["The Persian Gulf War", "The Vietnam War", "(Global) War on Terror (or War in Afghanistan, War in Iraq)", "The Korean War"],
        correctAnswer: "(Global) War on Terror (or War in Afghanistan, War in Iraq)",
        explanation: "U.S. military conflicts after September 11, 2001, include the (Global) War on Terror, the War in Afghanistan, and the War in Iraq. Any one is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 217,
        sourceId: "20-Q117",
        question: "Name one American Indian tribe in the United States. (2020 Version)", 
        options: ["Apache (or Blackfeet, Cayuga, Cherokee, Cheyenne, Chippewa, Choctaw, Creek, Crow, Hopi, Huron, Inupiat, Lakota, Mohawk, Mohegan, Navajo, Oneida, Onondaga, Pueblo, Seminole, Seneca, Shawnee, Sioux, Teton, Tuscarora, etc.)", "Maasai", "Ainu", "Sami"],
        correctAnswer: "Apache (or Blackfeet, Cayuga, Cherokee, Cheyenne, Chippewa, Choctaw, Creek, Crow, Hopi, Huron, Inupiat, Lakota, Mohawk, Mohegan, Navajo, Oneida, Onondaga, Pueblo, Seminole, Seneca, Shawnee, Sioux, Teton, Tuscarora, etc.)",
        explanation: "There are many federally recognized American Indian tribes. The list includes Apache, Blackfeet, Cayuga, Cherokee, etc. (A complete list can be found at bia.gov). Any one from the official list is correct. (Source: USCIS 2020 Guide)",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },
    {
        id: 218,
        sourceId: "20-Q118",
        question: "Name one example of an American innovation. (2020 Version)",
        options: ["The printing press", "Gunpowder", "Light bulb (or Automobile, Skyscrapers, Airplane, Assembly line, Landing on moon, Integrated circuit/IC)", "The steam engine"],
        correctAnswer: "Light bulb (or Automobile, Skyscrapers, Airplane, Assembly line, Landing on moon, Integrated circuit/IC)",
        explanation: "Examples of American innovations include: light bulb, automobile (cars, internal combustion engine), skyscrapers, airplane, assembly line, landing on the moon, and the integrated circuit (IC). Any one is correct. (Source: USCIS 2020 Guide)",
        category: "Science & Technology in U.S.",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 219,
        sourceId: "20-Q119",
        question: "What is the capital of the United States? (2020 Version)", 
        options: ["New York City, NY", "Los Angeles, CA", "Washington, D.C.", "Chicago, IL"],
        correctAnswer: "Washington, D.C.",
        explanation: "The capital of the United States is Washington, D.C. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Symbols", 
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 220,
        sourceId: "20-Q120",
        question: "Where is the Statue of Liberty? (2020 Version)", 
        options: ["San Francisco Bay", "Boston Harbor", "New York (Harbor) (or Liberty Island; also NJ, near NYC, on Hudson River)", "Washington, D.C. near the Potomac River"],
        correctAnswer: "New York (Harbor) (or Liberty Island; also NJ, near NYC, on Hudson River)",
        explanation: "The Statue of Liberty is in New York Harbor, on Liberty Island. Answers like New Jersey, near New York City, or on the Hudson River are also acceptable. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 221,
        sourceId: "20-Q121",
        question: "Why does the flag have 13 stripes?* (2020 Version)", 
        options: ["For the 13 original U.S. Presidents", "For the 13 articles of the Constitution", "(Because there were) 13 original colonies (or (Because the stripes) represent the original colonies)", "For the 13 ships in the original U.S. Navy"],
        correctAnswer: "(Because there were) 13 original colonies (or (Because the stripes) represent the original colonies)",
        explanation: "The 13 stripes represent the 13 original colonies that declared independence. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 222,
        sourceId: "20-Q122",
        question: "Why does the flag have 50 stars? (2020 Version)", 
        options: ["For the 50 states in the Union", "For the first 50 senators", "(Because there is) one star for each state (or (Because) each star represents a state, (Because there are) 50 states)", "For the 50 signers of the Declaration of Independence"],
        correctAnswer: "(Because there is) one star for each state (or (Because) each star represents a state, (Because there are) 50 states)",
        explanation: "The 50 stars represent the 50 states of the United States. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 223,
        sourceId: "20-Q123",
        question: "What is the name of the national anthem? (2020 Version)", 
        options: ["America, the Beautiful", "God Bless the USA", "The Star-Spangled Banner", "My Country, 'Tis of Thee"],
        correctAnswer: "The Star-Spangled Banner",
        explanation: "The U.S. national anthem is 'The Star-Spangled Banner.' (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 224,
        sourceId: "20-Q124",
        question: "The Nation’s first motto was “E Pluribus Unum.” What does that mean? (2020 Version)",
        options: ["In God We Trust", "Liberty and Justice for All", "Out of many, one (or We all become one)", "A New Order of the Ages"],
        correctAnswer: "Out of many, one (or We all become one)",
        explanation: "E Pluribus Unum is a Latin phrase meaning 'Out of many, one,' signifying the unity of the states and of the diverse people of the U.S. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Symbols",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 225,
        sourceId: "20-Q125",
        question: "What is Independence Day? (2020 Version)",
        options: ["A holiday to celebrate the end of the Civil War", "A holiday to celebrate U.S. independence (from Britain) (or The country’s birthday)", "A day to honor U.S. military veterans", "A day to celebrate the U.S. Constitution"],
        correctAnswer: "A holiday to celebrate U.S. independence (from Britain) (or The country’s birthday)",
        explanation: "Independence Day (July 4th) celebrates the U.S. declaration of independence from Great Britain in 1776; it is also considered the country's birthday. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 226,
        sourceId: "20-Q126",
        question: "Name three national U.S. holidays.* (2020 Version)", 
        options: ["Halloween, Valentine's Day, St. Patrick's Day", "Arbor Day, Flag Day, Earth Day", "New Year’s Day, Martin Luther King, Jr. Day, Presidents Day (or Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas)", "May Day, Boxing Day, April Fool's Day"],
        correctAnswer: "New Year’s Day, Martin Luther King, Jr. Day, Presidents Day (or Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas)",
        explanation: "National U.S. holidays include: New Year’s Day, Martin Luther King, Jr. Day, Presidents Day (Washington’s Birthday), Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving Day, Christmas Day. Any three are correct. (Source: USCIS 2020 Guide, * denotes 65/20 special consideration)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 227,
        sourceId: "20-Q127",
        question: "What is Memorial Day? (2020 Version)",
        options: ["A holiday to celebrate the start of summer", "A holiday to honor all U.S. presidents", "A holiday to honor soldiers who died in military service", "A holiday to honor all current members of the military"],
        correctAnswer: "A holiday to honor soldiers who died in military service",
        explanation: "Memorial Day is a federal holiday for honoring and mourning the U.S. military personnel who have died while serving in the United States Armed Forces. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 228,
        sourceId: "20-Q128",
        question: "What is Veterans Day? (2020 Version)", 
        options: ["A holiday to honor soldiers who died in combat only", "A holiday to honor people in the (U.S.) military (or who have served in the U.S. military)", "A day to celebrate U.S. independence", "A day to remember the victims of September 11th"],
        correctAnswer: "A holiday to honor people in the (U.S.) military (or who have served in the U.S. military)",
        explanation: "Veterans Day is a U.S. federal holiday observed annually on November 11, for honoring all military veterans – those who have served in the United States Armed Forces. (Source: USCIS 2020 Guide)",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },
    {
        id: 291,
        sourceId: "Q291",
        question: "What is the name of the U.S. national anthem?",
        options: ["America the Beautiful", "The Star-Spangled Banner", "God Bless America", "My Country, 'Tis of Thee"],
        correctAnswer: "The Star-Spangled Banner",
        explanation: "Written by Francis Scott Key in 1814, 'The Star-Spangled Banner' became the official national anthem in 1931.",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 292,
        sourceId: "Q292",
        question: "Which U.S. President served more than two terms in office?",
        options: ["George Washington", "Thomas Jefferson", "Franklin D. Roosevelt", "Theodore Roosevelt"],
        correctAnswer: "Franklin D. Roosevelt",
        explanation: "FDR was elected to four terms (1932, 1936, 1940, 1944) and served until his death in 1945. The 22nd Amendment now limits presidents to two terms.",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 293,
        sourceId: "Q293",
        question: "What is the economic system of the United States?",
        options: ["Socialist economy", "Communist economy", "Capitalist (market) economy", "Command economy"],
        correctAnswer: "Capitalist (market) economy",
        explanation: "The U.S. has a mixed capitalist economy where private individuals and businesses own most of the means of production, with some government regulation.",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 294,
        sourceId: "Q294",
        question: "Which American inventor is credited with inventing the light bulb and founded General Electric?",
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
        correctAnswer: "Thomas Edison",
        explanation: "Thomas Edison improved upon existing light bulb designs and created a practical, long-lasting incandescent light bulb, among his 1,093 patents.",
        category: "Science & Technology in U.S.",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 295,
        sourceId: "Q295",
        question: "What does the Constitution say is the supreme law of the land?",
        options: ["The Declaration of Independence", "The Bill of Rights", "The Constitution", "Federal laws"],
        correctAnswer: "The Constitution",
        explanation: "Article VI of the Constitution establishes that the Constitution is the supreme law of the land, taking precedence over state laws.",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 296,
        sourceId: "Q296",
        question: "Which American holiday celebrates the first successful harvest of the Plymouth colonists in 1621?",
        options: ["Independence Day", "Thanksgiving", "Columbus Day", "Memorial Day"],
        correctAnswer: "Thanksgiving",
        explanation: "Thanksgiving commemorates the feast shared by Plymouth colonists and Wampanoag Indians in 1621, celebrated nationally since 1863.",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 297,
        sourceId: "Q297",
        question: "What is the name of the U.S. space agency responsible for space exploration?",
        options: ["NSA", "NASA", "NOAA", "NIH"],
        correctAnswer: "NASA",
        explanation: "The National Aeronautics and Space Administration (NASA) was established in 1958 and is responsible for the U.S. civilian space program.",
        category: "Science & Technology in U.S.",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 298,
        sourceId: "Q298",
        question: "Which mountain range runs along the eastern United States from Georgia to Maine?",
        options: ["Rocky Mountains", "Sierra Nevada", "Appalachian Mountains", "Cascade Range"],
        correctAnswer: "Appalachian Mountains",
        explanation: "The Appalachian Mountains are one of the oldest mountain ranges in North America, stretching about 2,000 miles along the eastern U.S.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 299,
        sourceId: "Q299",
        question: "What are the first ten amendments to the Constitution called?",
        options: ["The Preamble", "The Articles of Confederation", "The Bill of Rights", "The Declaration of Rights"],
        correctAnswer: "The Bill of Rights",
        explanation: "The Bill of Rights, ratified in 1791, protects fundamental individual liberties and limits government power.",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 300,
        sourceId: "Q300",
        question: "Which U.S. President appears on Mount Rushmore along with Washington, Jefferson, and Lincoln?",
        options: ["Franklin D. Roosevelt", "Theodore Roosevelt", "Andrew Jackson", "Thomas Paine"],
        correctAnswer: "Theodore Roosevelt",
        explanation: "Mount Rushmore features George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln, carved between 1927-1941.",
        category: "Integrated Civics: Symbols",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 301,
        sourceId: "Q301",
        question: "What is the minimum age requirement to be President of the United States?",
        options: ["30 years old", "35 years old", "40 years old", "45 years old"],
        correctAnswer: "35 years old",
        explanation: "Article II of the Constitution requires the President to be at least 35 years old, a natural-born citizen, and a U.S. resident for 14 years.",
        category: "System of Government",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 302,
        sourceId: "Q302",
        question: "Which American city is known as the 'Motor City' due to its automobile manufacturing history?",
        options: ["Chicago, Illinois", "Detroit, Michigan", "Pittsburgh, Pennsylvania", "Cleveland, Ohio"],
        correctAnswer: "Detroit, Michigan",
        explanation: "Detroit earned this nickname as the center of the American automotive industry, home to Ford, General Motors, and Chrysler.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 303,
        sourceId: "Q303",
        question: "What document declared American independence from Britain?",
        options: ["The Constitution", "The Articles of Confederation", "The Declaration of Independence", "The Federalist Papers"],
        correctAnswer: "The Declaration of Independence",
        explanation: "Adopted on July 4, 1776, the Declaration of Independence announced the thirteen colonies' decision to separate from British rule.",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 304,
        sourceId: "Q304",
        question: "Which amendment gave women the right to vote?",
        options: ["15th Amendment", "19th Amendment", "21st Amendment", "26th Amendment"],
        correctAnswer: "19th Amendment",
        explanation: "Ratified in 1920, the 19th Amendment prohibited denial of voting rights based on sex, granting women the right to vote nationwide.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 305,
        sourceId: "Q305",
        question: "What is the largest state in the United States by land area?",
        options: ["Texas", "California", "Alaska", "Montana"],
        correctAnswer: "Alaska",
        explanation: "Alaska covers approximately 663,300 square miles, making it more than twice the size of Texas, the second-largest state.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 306,
        sourceId: "Q306",
        question: "Who wrote the Declaration of Independence?",
        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
        correctAnswer: "Thomas Jefferson",
        explanation: "Thomas Jefferson was the primary author of the Declaration of Independence, though it was edited by the Continental Congress.",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 307,
        sourceId: "Q307",
        question: "What is the name of the President's official home?",
        options: ["Capitol Building", "The White House", "Camp David", "Blair House"],
        correctAnswer: "The White House",
        explanation: "The White House, located at 1600 Pennsylvania Avenue in Washington, D.C., has been the official residence of U.S. Presidents since 1800.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 308,
        sourceId: "Q308",
        question: "Which river forms much of the border between the United States and Mexico?",
        options: ["Colorado River", "Rio Grande", "Mississippi River", "Columbia River"],
        correctAnswer: "Rio Grande",
        explanation: "The Rio Grande flows from Colorado through New Mexico and forms the border between Texas and Mexico before emptying into the Gulf of Mexico.",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 309,
        sourceId: "Q309",
        question: "What are the two major political parties in the United States today?",
        options: ["Federalist and Anti-Federalist", "Whig and Democratic", "Republican and Democratic", "Liberal and Conservative"],
        correctAnswer: "Republican and Democratic",
        explanation: "The Republican Party (GOP) and Democratic Party have been the two dominant political parties in the U.S. since the mid-1800s.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 310,
        sourceId: "Q310",
        question: "Which American author wrote 'To Kill a Mockingbird,' addressing themes of racial injustice in the American South?",
        options: ["William Faulkner", "Harper Lee", "Flannery O'Connor", "Zora Neale Hurston"],
        correctAnswer: "Harper Lee",
        explanation: "Harper Lee's 1960 novel won the Pulitzer Prize and became a classic of American literature, addressing racism through a child's perspective.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 311,
        sourceId: "Q311",
        question: "What is the highest court in the United States?",
        options: ["Court of Appeals", "District Court", "Supreme Court", "Federal Court"],
        correctAnswer: "Supreme Court",
        explanation: "The U.S. Supreme Court is the highest judicial authority, with final appellate jurisdiction and the power to interpret the Constitution.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 312,
        sourceId: "Q312",
        question: "Which U.S. territory was purchased from Russia in 1867 for $7.2 million?",
        options: ["Hawaii", "Alaska", "Puerto Rico", "Philippines"],
        correctAnswer: "Alaska",
        explanation: "Known as 'Seward's Folly' at the time, the purchase of Alaska proved valuable for its natural resources and strategic location.",
        category: "American History: 1800s",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 313,
        sourceId: "Q313",
        question: "What is the name of the American music genre that originated in New Orleans and features improvisation?",
        options: ["Blues", "Country", "Jazz", "Rock and Roll"],
        correctAnswer: "Jazz",
        explanation: "Jazz emerged in New Orleans in the early 20th century, combining African American musical traditions with European harmonic structures.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 314,
        sourceId: "Q314",
        question: "How many senators does each state have in the U.S. Senate?",
        options: ["One", "Two", "Based on population", "Based on land area"],
        correctAnswer: "Two",
        explanation: "The Constitution provides equal representation in the Senate, with each state having exactly two senators regardless of population size.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 315,
        sourceId: "Q315",
        question: "Which war was fought between the North and South in the United States from 1861-1865?",
        options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
        correctAnswer: "Civil War",
        explanation: "The American Civil War was fought primarily over slavery and states' rights, resulting in the preservation of the Union and end of slavery.",
        category: "American History: 1800s",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 316,
        sourceId: "Q316",
        question: "What is the name of the famous highway that connected Chicago to Los Angeles, symbolizing American mobility?",
        options: ["Interstate 10", "Route 66", "Highway 101", "Interstate 40"],
        correctAnswer: "Route 66",
        explanation: "Known as the 'Main Street of America,' Route 66 was established in 1926 and became an iconic symbol of American road culture.",
        category: "U.S. Culture & Society",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 317,
        sourceId: "Q317",
        question: "Which American President is known for the 'New Deal' programs during the Great Depression?",
        options: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry Truman", "Theodore Roosevelt"],
        correctAnswer: "Franklin D. Roosevelt",
        explanation: "FDR's New Deal programs (1933-1939) aimed to provide relief, recovery, and reform during the Great Depression.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 318,
        sourceId: "Q318",
        question: "What is the capital of the United States?",
        options: ["New York City", "Philadelphia", "Washington, D.C.", "Boston"],
        correctAnswer: "Washington, D.C.",
        explanation: "Washington, D.C. (District of Columbia) has been the nation's capital since 1800, located between Maryland and Virginia.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 319,
        sourceId: "Q319",
        question: "Which American inventor is credited with inventing the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Samuel Morse", "Benjamin Franklin"],
        correctAnswer: "Alexander Graham Bell",
        explanation: "Alexander Graham Bell received the first U.S. patent for the telephone in 1876, though the invention had multiple contributors.",
        category: "Science & Technology in U.S.",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 320,
        sourceId: "Q320",
        question: "What does the 13th Amendment to the Constitution prohibit?",
        options: ["Alcohol", "Slavery", "Women voting", "Poll taxes"],
        correctAnswer: "Slavery",
        explanation: "Ratified in 1865, the 13th Amendment abolished slavery and involuntary servitude throughout the United States.",
        category: "Principles of American Democracy",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 321,
        sourceId: "Q321",
        question: "Which American novelist wrote 'The Great Gatsby,' depicting the Jazz Age and American Dream?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        correctAnswer: "F. Scott Fitzgerald",
        explanation: "Published in 1925, 'The Great Gatsby' is considered one of the greatest American novels, exploring themes of wealth, love, and the American Dream.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 322,
        sourceId: "Q322",
        question: "What is the longest river in the United States?",
        options: ["Mississippi River", "Missouri River", "Colorado River", "Ohio River"],
        correctAnswer: "Missouri River",
        explanation: "The Missouri River is approximately 2,341 miles long, slightly longer than the Mississippi River, and flows into the Mississippi.",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 323,
        sourceId: "Q323",
        question: "Which amendment protects freedom of speech, religion, and the press?",
        options: ["1st Amendment", "2nd Amendment", "4th Amendment", "5th Amendment"],
        correctAnswer: "1st Amendment",
        explanation: "The First Amendment protects five basic freedoms: speech, religion, press, assembly, and petition.",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 324,
        sourceId: "Q324",
        question: "What is the name of the national cemetery where the Tomb of the Unknown Soldier is located?",
        options: ["Gettysburg National Cemetery", "Arlington National Cemetery", "Normandy American Cemetery", "National Memorial Cemetery"],
        correctAnswer: "Arlington National Cemetery",
        explanation: "Located in Virginia, Arlington National Cemetery is the burial site for military personnel and the location of the Tomb of the Unknown Soldier.",
        category: "Integrated Civics: Symbols",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 325,
        sourceId: "Q325",
        question: "Which American social reformer led the women's suffrage movement and co-founded the National Woman Suffrage Association?",
        options: ["Elizabeth Cady Stanton", "Susan B. Anthony", "Lucretia Mott", "Frances Willard"],
        correctAnswer: "Susan B. Anthony",
        explanation: "Susan B. Anthony was arrested for voting illegally in 1872 and became a symbol of the women's suffrage movement until her death in 1906.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 326,
        sourceId: "Q326",
        question: "What is the term length for a U.S. Representative?",
        options: ["2 years", "4 years", "6 years", "8 years"],
        correctAnswer: "2 years",
        explanation: "Members of the House of Representatives serve two-year terms and face re-election every even-numbered year.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 327,
        sourceId: "Q327",
        question: "Which American entrepreneur founded the Ford Motor Company and revolutionized manufacturing with the assembly line?",
        options: ["John D. Rockefeller", "Andrew Carnegie", "Henry Ford", "Cornelius Vanderbilt"],
        correctAnswer: "Henry Ford",
        explanation: "Henry Ford's introduction of the moving assembly line in 1913 revolutionized manufacturing and made automobiles affordable for ordinary Americans.",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 328,
        sourceId: "Q328",
        question: "Which U.S. national park is famous for its Old Faithful geyser?",
        options: ["Grand Canyon National Park", "Yosemite National Park", "Yellowstone National Park", "Glacier National Park"],
        correctAnswer: "Yellowstone National Park",
        explanation: "Established in 1872, Yellowstone was the world's first national park and is famous for its geothermal features including Old Faithful.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 329,
        sourceId: "Q329",
        question: "What is the name of the American civil rights leader who delivered the 'I Have a Dream' speech?",
        options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Frederick Douglass"],
        correctAnswer: "Martin Luther King Jr.",
        explanation: "Dr. King delivered this famous speech during the March on Washington for Jobs and Freedom on August 28, 1963.",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 330,
        sourceId: "Q330",
        question: "Which ocean borders the United States on the west coast?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
        explanation: "The Pacific Ocean borders the western United States, including California, Oregon, Washington, and Alaska.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 331,
        sourceId: "Q331",
        question: "What is the term length for a U.S. Senator?",
        options: ["2 years", "4 years", "6 years", "8 years"],
        correctAnswer: "6 years",
        explanation: "U.S. Senators serve six-year terms, with approximately one-third of Senate seats up for election every two years.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 332,
        sourceId: "Q332",
        question: "Which American astronaut was the first person to walk on the moon in 1969?",
        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        correctAnswer: "Neil Armstrong",
        explanation: "Neil Armstrong commanded Apollo 11 and became the first human to step onto the lunar surface on July 20, 1969.",
        category: "Science & Technology in U.S.",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 333,
        sourceId: "Q333",
        question: "What does 'E pluribus unum' mean on U.S. currency?",
        options: ["In God We Trust", "Out of many, one", "Liberty and justice", "United we stand"],
        correctAnswer: "Out of many, one",
        explanation: "This Latin phrase means 'out of many, one' and reflects the unity of the states forming one nation.",
        category: "Integrated Civics: Symbols",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 334,
        sourceId: "Q334",
        question: "Which American general led the Continental Army during the Revolutionary War?",
        options: ["Benedict Arnold", "Marquis de Lafayette", "George Washington", "Nathanael Greene"],
        correctAnswer: "George Washington",
        explanation: "George Washington commanded the Continental Army from 1775 to 1783, leading the colonies to victory over Britain.",
        category: "American History: Colonial Period and Independence",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 335,
        sourceId: "Q335",
        question: "What is the name of the famous baseball stadium in Boston known as 'America's Most Beloved Ballpark'?",
        options: ["Yankee Stadium", "Wrigley Field", "Fenway Park", "Dodger Stadium"],
        correctAnswer: "Fenway Park",
        explanation: "Fenway Park, home of the Boston Red Sox since 1912, is famous for its 'Green Monster' left field wall and historic atmosphere.",
        category: "U.S. Culture & Society",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 336,
        sourceId: "Q336",
        question: "Which amendment protects the right to bear arms?",
        options: ["1st Amendment", "2nd Amendment", "3rd Amendment", "4th Amendment"],
        correctAnswer: "2nd Amendment",
        explanation: "The Second Amendment states: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.'",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 337,
        sourceId: "Q337",
        question: "What is the name of the large canyon in Arizona formed by the Colorado River?",
        options: ["Bryce Canyon", "Zion Canyon", "Grand Canyon", "Antelope Canyon"],
        correctAnswer: "Grand Canyon",
        explanation: "The Grand Canyon, carved by the Colorado River over millions of years, is 277 miles long and up to 18 miles wide.",
        category: "Integrated Civics: Geography",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 338,
        sourceId: "Q338",
        question: "Which American poet wrote 'The Road Not Taken' and is associated with New England rural life?",
        options: ["Walt Whitman", "Emily Dickinson", "Robert Frost", "Langston Hughes"],
        correctAnswer: "Robert Frost",
        explanation: "Robert Frost won four Pulitzer Prizes for Poetry and is known for his realistic depictions of rural New England life.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 339,
        sourceId: "Q339",
        question: "What is the minimum age requirement to vote in federal elections?",
        options: ["16 years old", "18 years old", "21 years old", "25 years old"],
        correctAnswer: "18 years old",
        explanation: "The 26th Amendment, ratified in 1971, lowered the voting age from 21 to 18 for all federal, state, and local elections.",
        category: "Principles of American Democracy",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 340,
        sourceId: "Q340",
        question: "Which American composer wrote 'Stars and Stripes Forever,' the official national march?",
        options: ["George Gershwin", "Aaron Copland", "John Philip Sousa", "Leonard Bernstein"],
        correctAnswer: "John Philip Sousa",
        explanation: "Known as 'The March King,' Sousa composed over 130 marches, with 'Stars and Stripes Forever' designated as the national march in 1987.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 341,
        sourceId: "Q341",
        question: "What is the main purpose of the judicial branch of government?",
        options: ["Make laws", "Enforce laws", "Interpret laws", "Collect taxes"],
        correctAnswer: "Interpret laws",
        explanation: "The judicial branch, headed by the Supreme Court, interprets laws and determines their constitutionality.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 342,
        sourceId: "Q342",
        question: "Which American holiday honors military personnel who died in service to their country?",
        options: ["Veterans Day", "Memorial Day", "Independence Day", "Armed Forces Day"],
        correctAnswer: "Memorial Day",
        explanation: "Memorial Day, observed on the last Monday in May, specifically honors those who died while serving in the U.S. military.",
        category: "Integrated Civics: Holidays",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 343,
        sourceId: "Q343",
        question: "What is the name of the famous bridge connecting San Francisco to Marin County?",
        options: ["Bay Bridge", "Golden Gate Bridge", "Brooklyn Bridge", "George Washington Bridge"],
        correctAnswer: "Golden Gate Bridge",
        explanation: "Completed in 1937, the Golden Gate Bridge is an iconic symbol of San Francisco and was once the world's longest suspension bridge.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 344,
        sourceId: "Q344",
        question: "Which U.S. President was never elected as President or Vice President?",
        options: ["Lyndon Johnson", "Gerald Ford", "Harry Truman", "Calvin Coolidge"],
        correctAnswer: "Gerald Ford",
        explanation: "Gerald Ford became Vice President when Spiro Agnew resigned, then became President when Nixon resigned, never winning a national election.",
        category: "American History: Recent History",
        difficulty: "Hard",
        isOfficial: false
    },

    {
        id: 345,
        sourceId: "Q345",
        question: "What is the name of the American dance style that originated in African American communities and became central to hip-hop culture?",
        options: ["Tap dancing", "Ballet", "Breakdancing", "Square dancing"],
        correctAnswer: "Breakdancing",
        explanation: "Breaking (breakdancing) emerged in the 1970s in New York City and became one of the four elements of hip-hop culture.",
        category: "U.S. Culture & Society",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 346,
        sourceId: "Q346",
        question: "Which body of water separates Alaska from Russia?",
        options: ["Arctic Ocean", "Bering Strait", "Gulf of Alaska", "Chukchi Sea"],
        correctAnswer: "Bering Strait",
        explanation: "The Bering Strait, about 55 miles wide at its narrowest point, separates Alaska from Russia's Chukchi Peninsula.",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 347,
        sourceId: "Q347",
        question: "What is the name of the American folk hero known for his enormous size and strength as a lumberjack?",
        options: ["John Henry", "Paul Bunyan", "Pecos Bill", "Johnny Appleseed"],
        correctAnswer: "Paul Bunyan",
        explanation: "Paul Bunyan and his blue ox Babe are legendary figures in American folklore, representing the frontier spirit and logging industry.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 348,
        sourceId: "Q348",
        question: "Which U.S. President established the Peace Corps?",
        options: ["Dwight Eisenhower", "John F. Kennedy", "Lyndon Johnson", "Richard Nixon"],
        correctAnswer: "John F. Kennedy",
        explanation: "President Kennedy established the Peace Corps in 1961 to promote world peace and friendship through volunteer service abroad.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 349,
        sourceId: "Q349",
        question: "What is the name of the traditional American food associated with baseball games?",
        options: ["Apple pie", "Hot dogs", "Hamburgers", "Popcorn"],
        correctAnswer: "Hot dogs",
        explanation: "Hot dogs became synonymous with baseball in the early 1900s and remain a staple at ballparks across America.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },
    {
        id: 350,
        sourceId: "Q350",
        question: "Which American President resigned from office due to the Watergate scandal?",
        options: ["Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter"],
        correctAnswer: "Richard Nixon",
        explanation: "Richard Nixon resigned on August 9, 1974, becoming the first U.S. President to resign from office, following the Watergate scandal.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 351,
        sourceId: "Q351",
        question: "What is the name of the American music festival that took place in 1969 and became a symbol of the counterculture movement?",
        options: ["Monterey Pop Festival", "Woodstock", "Live Aid", "Newport Folk Festival"],
        correctAnswer: "Woodstock",
        explanation: "The Woodstock Music & Art Fair, held in August 1969, attracted over 400,000 people and epitomized the 1960s counterculture movement.",
        category: "U.S. Culture & Society",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 352,
        sourceId: "Q352",
        question: "Which amendment ended Prohibition by repealing the 18th Amendment?",
        options: ["19th Amendment", "20th Amendment", "21st Amendment", "22nd Amendment"],
        correctAnswer: "21st Amendment",
        explanation: "The 21st Amendment, ratified in 1933, is the only amendment to repeal another amendment, ending the nationwide prohibition of alcohol.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 353,
        sourceId: "Q353",
        question: "What is the name of the American stock exchange located on Wall Street in New York City?",
        options: ["NASDAQ", "New York Stock Exchange", "American Stock Exchange", "Chicago Board of Trade"],
        correctAnswer: "New York Stock Exchange",
        explanation: "The NYSE, founded in 1792, is the world's largest stock exchange by market capitalization and a symbol of American capitalism.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 354,
        sourceId: "Q354",
        question: "Which American civil rights activist refused to give up her bus seat, sparking the Montgomery Bus Boycott?",
        options: ["Ruby Bridges", "Rosa Parks", "Diane Nash", "Dorothy Height"],
        correctAnswer: "Rosa Parks",
        explanation: "Rosa Parks' arrest on December 1, 1955, for refusing to give up her seat to a white passenger sparked the 381-day Montgomery Bus Boycott.",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 355,
        sourceId: "Q355",
        question: "What is the name of the American military cemetery in France where many World War I soldiers are buried?",
        options: ["Normandy American Cemetery", "Meuse-Argonne American Cemetery", "Cambridge American Cemetery", "Henri-Chapelle American Cemetery"],
        correctAnswer: "Meuse-Argonne American Cemetery",
        explanation: "Located in France, this cemetery is the largest American military cemetery in Europe, with over 14,000 graves from WWI.",
        category: "American History: Recent History",
        difficulty: "Hard",
        isOfficial: false
    },

    {
        id: 356,
        sourceId: "Q356",
        question: "Which American breakfast food is often served with maple syrup and originated from Native American traditions?",
        options: ["Bacon and eggs", "Pancakes", "Cereal", "Toast"],
        correctAnswer: "Pancakes",
        explanation: "Native Americans made pancakes from cornmeal, and European settlers adapted the recipe, making pancakes a distinctly American breakfast tradition.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 357,
        sourceId: "Q357",
        question: "What is the name of the American federal law enforcement agency responsible for investigating federal crimes?",
        options: ["CIA", "FBI", "NSA", "DEA"],
        correctAnswer: "FBI",
        explanation: "The Federal Bureau of Investigation (FBI) was established in 1908 and is the primary federal law enforcement agency in the United States.",
        category: "System of Government",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 358,
        sourceId: "Q358",
        question: "Which American region is known as 'Tornado Alley' due to frequent tornado activity?",
        options: ["Pacific Northwest", "New England", "Great Plains", "Southeast"],
        correctAnswer: "Great Plains",
        explanation: "Tornado Alley typically includes parts of Texas, Oklahoma, Kansas, and Nebraska, where geographic conditions favor tornado formation.",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 359,
        sourceId: "Q359",
        question: "What is the name of the American labor union leader who founded the American Federation of Labor (AFL)?",
        options: ["John L. Lewis", "Samuel Gompers", "Eugene Debs", "Walter Reuther"],
        correctAnswer: "Samuel Gompers",
        explanation: "Samuel Gompers served as president of the AFL from 1886 to 1924 and was instrumental in establishing organized labor in America.",
        category: "American History: Recent History",
        difficulty: "Hard",
        isOfficial: false
    },

    {
        id: 360,
        sourceId: "Q360",
        question: "Which American fast food originated in the Southwest and consists of a flour tortilla wrapped around various fillings?",
        options: ["Taco", "Burrito", "Enchilada", "Quesadilla"],
        correctAnswer: "Burrito",
        explanation: "The burrito as we know it today developed in Mexican-American communities in the Southwest and became popular throughout the U.S.",
        category: "U.S. Culture & Society",
        difficulty: "Easy",
        isOfficial: false
    },

    {
        id: 361,
        sourceId: "Q361",
        question: "What is the name of the American Indian tribe that helped the Pilgrims survive their first winter?",
        options: ["Cherokee", "Iroquois", "Wampanoag", "Sioux"],
        correctAnswer: "Wampanoag",
        explanation: "The Wampanoag people, led by Chief Massasoit, taught the Pilgrims how to grow corn and other crops, helping them survive in the New World.",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 362,
        sourceId: "Q362",
        question: "Which American author wrote the novel '1984' that depicted a dystopian future society?",
        options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Kurt Vonnegut"],
        correctAnswer: "George Orwell",
        explanation: "Though British, George Orwell's '1984' has had enormous influence on American political discourse and understanding of government surveillance.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 363,
        sourceId: "Q363",
        question: "What is the term for the process by which immigrants become U.S. citizens?",
        options: ["Immigration", "Assimilation", "Naturalization", "Documentation"],
        correctAnswer: "Naturalization",
        explanation: "Naturalization is the legal process through which foreign nationals become U.S. citizens after meeting specific requirements.",
        category: "Principles of American Democracy",
        difficulty: "Medium",
        isOfficial: true
    },

    {
        id: 364,
        sourceId: "Q364",
        question: "Which American candy bar was named after a racehorse and became popular during the Great Depression?",
        options: ["Snickers", "Baby Ruth", "Milky Way", "Butterfinger"],
        correctAnswer: "Baby Ruth",
        explanation: "The Baby Ruth candy bar was named after President Grover Cleveland's daughter Ruth, though some claim it was named after baseball player Babe Ruth.",
        category: "U.S. Culture & Society",
        difficulty: "Hard",
        isOfficial: false
    },

    {
        id: 365,
        sourceId: "Q365",
        question: "What is the name of the American naval base in Hawaii that was attacked on December 7, 1941?",
        options: ["Pearl Harbor", "Hickam Field", "Schofield Barracks", "Kaneohe Bay"],
        correctAnswer: "Pearl Harbor",
        explanation: "The attack on Pearl Harbor led to the United States' entry into World War II and President Roosevelt's 'Day of Infamy' speech.",
        category: "American History: Recent History",
        difficulty: "Easy",
        isOfficial: true
    },

    {
        id: 366,
        sourceId: "Q366",
        question: "Which American state is known for producing the most corn?",
        options: ["Nebraska", "Illinois", "Iowa", "Indiana"],
        correctAnswer: "Iowa",
        explanation: "Iowa consistently leads the nation in corn production, with over 2 billion bushels produced annually in recent years.",
        category: "Integrated Civics: Geography",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 367,
        sourceId: "Q367",
        question: "What is the name of the American dance that became popular during the 1920s Jazz Age?",
        options: ["Waltz", "Charleston", "Tango", "Foxtrot"],
        correctAnswer: "Charleston",
        explanation: "The Charleston dance became a symbol of the Roaring Twenties and the liberation of American youth culture during the Jazz Age.",
        category: "U.S. Culture & Society",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 368,
        sourceId: "Q368",
        question: "Which American university is the oldest institution of higher education in the United States?",
        options: ["Yale University", "Princeton University", "Harvard University", "Columbia University"],
        correctAnswer: "Harvard University",
        explanation: "Harvard University, founded in 1636 in Cambridge, Massachusetts, is the oldest institution of higher education in the United States.",
        category: "U.S. Arts & Literature",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 369,
        sourceId: "Q369",
        question: "What is the name of the American frontier figure known for his exploration of Kentucky and his coonskin cap?",
        options: ["Davy Crockett", "Daniel Boone", "Kit Carson", "Jim Bowie"],
        correctAnswer: "Daniel Boone",
        explanation: "Daniel Boone blazed the Wilderness Road through the Cumberland Gap and helped establish Kentucky as a frontier settlement.",
        category: "American History: Colonial Period and Independence",
        difficulty: "Medium",
        isOfficial: false
    },

    {
        id: 370,
        sourceId: "Q370",
        question: "Which American social movement of the 1960s advocated for environmental protection and conservation?",
        options: ["Civil Rights Movement", "Women's Liberation Movement", "Environmental Movement", "Anti-War Movement"],
        correctAnswer: "Environmental Movement",
        explanation: "The modern environmental movement gained momentum in the 1960s, leading to Earth Day 1970 and major environmental legislation.",
        category: "American History: Recent History",
        difficulty: "Medium",
        isOfficial: false
    }];

// Exporting stateData along with allQuestions so quiz-app.js can access it
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allQuestions, stateData };
} else {
    // Make it available globally for browser script tag inclusion
    window.quizData = { allQuestions, stateData };
}