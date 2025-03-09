
import { words_array } from "./words.js";

console.log(words_array);  

var jsPsych = initJsPsych({
    use_webaudio: false,
    override_safe_mode: true,
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
                //window.location.href = "https://app.prolific.com/submissions/complete?cc=C1O4GW39";
            })
            .catch(error => {
                console.error("Failed to log all data", error);
                alert("There was an error saving your data. Please contact the study administrator.");
            });
    }
}); 


let timeline = [];

//const words_array = words.map(w => w.uni_lemma);

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the full word array first to ensure randomness across all words
shuffleArray(words_array);

// Split the shuffled words into roughly equal groups
const numGroups = 3;
const groupSize = Math.ceil(words_array.length / numGroups);
const wordGroups = Array.from({ length: numGroups }, (_, i) => 
    words_array.slice(i * groupSize, (i + 1) * groupSize)
);

// Randomly select one group
const chosenGroup = wordGroups[Math.floor(Math.random() * numGroups)];

// Shuffle the selected group (extra randomization within the chosen group)
shuffleArray(chosenGroup);

// Pick 20 random words from the selected group
const selectedWords = chosenGroup.slice(0, 20);
const selectedWords3 = [...selectedWords]; 


console.log(words_array);

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

console.log("Logging Variables 1");

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
const block_solidity = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: function() { 
                        return jsPsych.timelineVariable('uni_lemma'); // Ensures the variable is properly retrieved
                    },
                    options: ['solid', 'non-solid', 'unclear/unknown'],
                    required: true,
                }
            ],
            on_finish: function(data) {
                var currentWord = jsPsych.timelineVariable('uni_lemma'); // Correctly access the variable
                var blockname = "solidity";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });
            }
        }
    ],
    timeline_variables: selectedWords, // Ensure this is an array of objects like [{ uni_lemma: "word1" }, { uni_lemma: "word2" }]
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

// -----------------------------------------------------------------------------------------------//

const instructions_category = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: `
            <div style="text-align: center; max-width: 700px; margin: auto; font-size: 18px; line-height: 1.6;">
                <p>One judgment in this task is about <b>word category</b>.</p>
                
                <p>For example, consider the sentence:</p>
                <p><b>"I need several pens."</b></p>
                <p>In this sentence, <b>pen</b> belongs to a <b>category that is organized by shape</b>. All pens have the same shape but could have different colors or be made of different materials.</p>
                
                <p>Now, think about the sentence:</p>
                <p><b>"I need some water."</b></p>
                <p>Here, <b>water</b> belongs to a <b>category that is organized by material</b>. Water can be many colors and take many shapes, but it is always made of water.</p>
                
                <p>Next, we’d like you to judge how other words are organized.</p>

                <p><b>Note:</b> When you see the word <b style="color: purple; background-color: lavender;">"Lavender"</b>, always click <b>"Color"</b>.</p>

                <p style="margin-top: 20px; font-weight: bold;">Let’s begin!</p>
            </div>`,
            choices: ['Continue'],
            button_html: '<button class="jspsych-btn" style="font-size: 20px; padding: 12px 24px; margin: 10px;">%choice%</button>'
        }
    ]
};


// Practice trial 1
const generatePracticeCategoryTrial = (prompt, correctAnswer, feedbackCorrect, feedbackIncorrect, theword) => {
    return {
        timeline: [
            {
                type: jsPsychSurveyMultiChoice,
                questions: [
                    {
                        prompt: `<div style="font-size: 20px; text-align: center; max-width: 700px; margin: auto;">${prompt}</div>`,
                        options: ['shape', 'material', 'color'],
                        required: true,
                    }
                ],
                data: { correct_answer: correctAnswer, theword: theword, theblock: "practice_category" },
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

// Define the two practice category trials
const practice_category1 = generatePracticeCategoryTrial(
    "In the sentence [This is a square table], 'square' belongs to a category that is organized by:",
    "shape",
    "Correct! Now let's go forward!",
    "Incorrect! 'Square' is organized around shape. All squares have the same shape. Let's go forward!",
    "square"
);

const practice_category2 = generatePracticeCategoryTrial(
    "In the sentence [This is a red table], 'red' belongs to a category that is organized by:",
    "color",
    "Correct! Now let's begin!",
    "Incorrect! 'Red' is organized around color. Red things always have the same color 'red'. Now let's begin!",
    "red"
);

// Define the main category trials
const block_category = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: function() { 
                        return `<div style="font-size: 22px; text-align: center; max-width: 700px; margin: auto;">
                                    <b>${jsPsych.timelineVariable('uni_lemma')}</b> belongs to a category that is organized by:
                                </div>`;
                    },
                    options: ['shape', 'color', 'material', 'none of these'],
                    required: true,
                    add_other_option: true,
                }
            ],
            on_finish: function(data) {
                var currentWord = jsPsych.timelineVariable('uni_lemma');
                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: "category_organization",
                });
            }
        }
    ],
    timeline_variables: selectedWords3, // Ensure this is an array of objects like [{ uni_lemma: "word1" }, { uni_lemma: "word2" }]
    randomize_order: true
};


// Attention check with feedback
const attention_category = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: `
                        <div style="font-size: 22px; text-align: center; max-width: 700px; margin: auto;">
                            <span style="background-color: lavender; color: purple; padding: 3px 6px; border-radius: 5px;">
                                lavender
                            </span> belongs to a category that is organized by:
                        </div>
                    `,
                    options: ['shape', 'color', 'material', 'none of these'],
                    required: true,
                }
            ],
            data: { word: "lavender" },
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: function () {
                let response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                let isCorrect = response === 'color';

                jsPsych.data.addDataToLastTrial({
                    correct: isCorrect,
                    theword: "lavender",
                    theblock: "attention_category",
                });
            },
            choices: ['Continue'],
            button_html: '<button class="jspsych-btn" style="font-size: 18px; padding: 10px 20px; margin-top: 10px;">%choice%</button>'
        }
    ]
};

// Full Category Block
const category = {
    timeline: [instructions_category, practice_category1, practice_category2, block_category, attention_category],
    randomization: false,
};

timeline.push(category)
//-----------------------------------------------------------------------------------------------//

jsPsych.run(timeline);
