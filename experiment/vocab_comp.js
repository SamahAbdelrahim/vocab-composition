var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function(data){
        console.log("starting")
        jsPsych.data.displayData();
    
        var all_trials = jsPsych.data.get().values();
        console.log("Starting to log data");
        console.log(all_trials)
        all_trials.forEach(trial => {
             //logExpData(trial);
             console.log("one trial");
             console.log(trial);

         });

        Promise.all(all_trials.map(trial => logExpData(trial)))
            .then(() => {
                console.log("All data logged, redirecting...");
                window.location.href = "https://app.prolific.com/submissions/complete?cc=C1O4GW39";
            })
            .catch(error => {
                console.error("Failed to log all data", error);
                alert("There was an error saving your data. Please contact the study administrator.");
            });
    }
}); 


let timeline = [];

const words = [
    {"uni_lemma": "banana"}, {"uni_lemma": "shoe"}, {"uni_lemma": "bird"},
    {"uni_lemma": "cat"}, {"uni_lemma": "duck"}, {"uni_lemma": "car"},
    {"uni_lemma": "eye"}, {"uni_lemma": "nose"}, {"uni_lemma": "kitty"},
    {"uni_lemma": "balloon"}, {"uni_lemma": "bubbles"}, {"uni_lemma": "apple"},
    {"uni_lemma": "cheese"}, {"uni_lemma": "cookie"}, {"uni_lemma": "milk"},
    {"uni_lemma": "lighter"}, {"uni_lemma": "play pen"}, {"uni_lemma": "tablecloth"},
    {"uni_lemma": "overalls"}
]; // Replace with 748 words

const words_array = words.map(w => w.uni_lemma);

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Split the words into roughly equal groups
const numGroups = 3;
const groupSize = Math.ceil(words_array.length / numGroups);
const wordGroups = Array.from({ length: numGroups }, (_, i) => 
    words_array.slice(i * groupSize, (i + 1) * groupSize)
);

// Select a random group, shuffle it, and pick 20 words
const chosenArray = wordGroups[Math.floor(Math.random() * numGroups)];
shuffleArray(chosenArray);
const selectedWords = chosenArray.slice(0, 20);

console.log(selectedWords);

const trial1 = {
    type: jsPsychInstructions,
    pages: [
        `
        <div style="text-align: center; margin: 50px;">
            <img src="stanford.png" style="max-width: 300px;">
        </div>
        <div style="text-align: center; max-width: 600px; margin: auto; font-size: 18px; line-height: 1.5;">
            <p>By answering the following questions, you are participating in a study conducted by cognitive scientists in the Stanford Department of Psychology.</p>
            <p>If you have questions, contact us at <a href="mailto:languagecoglab@gmail.com">languagecoglab@gmail.com</a>.</p>
            <p><strong>You must be at least 18 years old to participate.</strong> Your participation is voluntary, and you may withdraw at any time.</p>
            <p>Your anonymity is assured. Click next to begin.</p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_next: "Next",
    button_label_previous: "Back",
    button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; margin: 10px;">%choice%</button>',
};

timeline.push(trial1);

console.log("Logging Variables");

// Opening instructions
const opening = {
    type: jsPsychInstructions,
    pages: [
        `
        <div style="text-align: center; margin: 50px;">
            <h2>Welcome to the Experiment</h2>
        </div>
        <div style="text-align: center; max-width: 600px; margin: auto; font-size: 18px; line-height: 1.5;">
            <p>In this experiment, you will see individual words on each trial.</p>
            <p>Your task is to make a judgment about each word.</p>
            <p>Click 'Next' to begin.</p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_next: "Next",
    button_label_previous: "Back",
    on_finish: function(data) {
        // Capture Prolific variables
        const subject_id = jsPsych.data.getURLVariable("PROLIFIC_PID") || "NA";
        const study_id = jsPsych.data.getURLVariable("STUDY_ID") || "NA";
        const session_id = jsPsych.data.getURLVariable("SESSION_ID") || "NA";

        console.log("Study ID:", study_id, "Session ID:", session_id, "Subject ID:", subject_id);

        jsPsych.data.addProperties({ subject_id, study_id, session_id });

        console.log("Stored Prolific Data:", jsPsych.data.get().values());
    },
};

timeline.push(opening);

const instructions_solidity = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: `
            <div style="text-align: center; max-width: 700px; margin: auto; font-size: 18px; line-height: 1.6;">
                <p>One judgment in this task is whether a word refers to something <b>solid</b>.</p>
                
                <p>For example, consider the sentence:</p>
                <p><b>"I need several pens."</b></p>
                <p>In this sentence, <b>pen</b> refers to a <b>solid object</b>.</p>
                
                <p>Now, think about the sentence:</p>
                <p><b>"I need some water."</b></p>
                <p>Here, <b>water</b> is <b>not solid</b>.</p>
                
                <p>Next, we’d like you to judge whether other words refer to something solid.</p>
                
                <p><b>Note:</b> When you see the word <b style="color: purple;">"Purple"</b>, always click <b>"Solid"</b>.</p>

                <p style="margin-top: 20px; font-weight: bold;">Let’s begin!</p>
            </div>`,
            choices: ['Continue'],
            button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; margin: 10px;">%choice%</button>'
        }
    ]
};


// ------------------------------------------------------------------------------------------
const generatePracticeTrial = (prompt, correctAnswer, feedbackCorrect, feedbackIncorrect) => {
    return {
        timeline: [
            {
                type: jsPsychSurveyMultiChoice,
                questions: [
                    {
                        prompt: `<div style="font-size: 20px; text-align: center; max-width: 700px; margin: auto;">${prompt}</div>`,
                        options: ['solid', 'non-solid'],
                        required: true,
                    }
                ],
                data: { correct_answer: correctAnswer },
            },
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: function () {
                    let lastResponse = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                    let correctAnswer = jsPsych.timelineVariable('correct_answer');
                    let isCorrect = lastResponse === correctAnswer;
                    
                    jsPsych.data.addDataToLastTrial({ correct: isCorrect });

                    return `
                        <div style="text-align: center; font-size: 22px; max-width: 700px; margin: auto; padding: 20px; 
                                    border-radius: 10px; background-color: ${isCorrect ? '#d4edda' : '#f8d7da'}; 
                                    color: ${isCorrect ? '#155724' : '#721c24'};">
                            <p><b>${isCorrect ? 'Correct!' : 'Incorrect!'}</b></p>
                            <p>${isCorrect ? feedbackCorrect : feedbackIncorrect}</p>
                        </div>
                    `;
                },
                choices: ['Continue'],
                button_html: '<button class="jspsych-btn" style="font-size: 18px; padding: 10px 20px; margin-top: 10px;">%choice%</button>'
            }
        ],
        timeline_variables: [{ correct_answer: correctAnswer }]
    };
};

// Define the two practice trials
const practice_solidity1 = generatePracticeTrial(
    "In the sentence [this is a block of metal], a block of metal is:",
    "solid",
    "Now, let's go forward!",
    "A block of metal is a solid object. Let's go forward!"
);

const practice_solidity2 = generatePracticeTrial(
    "In the sentence [this is a pile of sand], a pile of sand is:",
    "non-solid",
    "Now let's begin!",
    "A pile of sand is a non-solid entity. Now let's begin!"
);

//--------------------------------------------------------------------------------------------
// Define the main experiment trials
// Function to create a formatted solidity trial
const generateSolidityTrial = (prompt) => {
    return {
        timeline: [
            {
                type: jsPsychSurveyMultiChoice,
                questions: [
                    {
                        prompt: `<div style="font-size: 22px; text-align: center; max-width: 700px; margin: auto;">${prompt}</div>`,
                        options: ['solid', 'non-solid', 'unclear/unknown'],
                        required: true,
                    }
                ],
                data: { word: prompt },
            },
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: function () {
                    let currentWord = jsPsych.timelineVariable('uni_lemma');
                    let response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                    let blockname = "solidity";

                    jsPsych.data.addDataToLastTrial({
                        theword: currentWord,
                        theblock: blockname,
                    });

                    return `
                        <div style="text-align: center; font-size: 22px; max-width: 700px; margin: auto; padding: 20px; 
                                    border-radius: 10px; background-color: #f0f0f0; color: #333;">
                            <p><b>You selected:</b> ${response}</p>
                            <p>Click "Next" to continue.</p>
                        </div>
                    `;
                },
                choices: ['Next'],
                button_html: '<button class="jspsych-btn" style="font-size: 18px; padding: 10px 20px; margin-top: 10px;">%choice%</button>'
            }
        ],
    };
};

// Generate the main solidity trials
const block_solidity = {
    timeline: [generateSolidityTrial(jsPsych.timelineVariable('uni_lemma'))],
    timeline_variables: selectedWords,
    randomize_order: true
};

// Attention check with feedback
const attention_solidity = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: `
                        <div style="font-size: 22px; text-align: center; max-width: 700px; margin: auto;">
                            <span style="background-color: purple; color: white; padding: 3px 6px; border-radius: 5px;">purple</span>
                        </div>
                    `,
                    options: ['solid', 'non-solid', 'unclear/unknown'],
                    required: true,
                }
            ],
            data: { word: "purple" },
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: function () {
                let response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                let isCorrect = response === 'solid';

                jsPsych.data.addDataToLastTrial({
                    correct: isCorrect,
                    theword: "purple",
                    theblock: "attention_solidity",
                });

                return `
                    <div style="text-align: center; font-size: 22px; max-width: 700px; margin: auto; padding: 20px; 
                                border-radius: 10px; background-color: ${isCorrect ? '#d4edda' : '#f8d7da'}; 
                                color: ${isCorrect ? '#155724' : '#721c24'};">
                        <p><b>${isCorrect ? 'Correct!' : 'Incorrect!'}</b></p>
                        <p>${isCorrect ? 
                            'You correctly identified <span style="color: purple;"><b>purple</b></span> as solid.' : 
                            'Remember: when you see <span style="color: purple;"><b>purple</b></span>, click "solid".'}
                        </p>
                    </div>
                `;
            },
            choices: ['Next'],
            button_html: '<button class="jspsych-btn" style="font-size: 18px; padding: 10px 20px;">%choice%</button>'
        }
    ]
};


// Full Solidity Block
const solidity = {
    timeline: [instructions_solidity, practice_solidity1, practice_solidity2, block_solidity, attention_solidity],
    randomization: false,
};

timeline.push(solidity);