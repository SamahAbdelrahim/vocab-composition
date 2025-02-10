

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


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var words_array = [];
let words = [{"theword":"air conditioner"},{"theword":"airplane"},{"theword":"ankle"},{"theword":"ant"},{"theword":"apple"},{"theword":"applesauce"},{"theword":"apricot"},{"theword":"apron"},{"theword":"backyard"},{"theword":"bag"},{"theword":"balcony"},{"theword":"banana"},{"theword":"bank"},{"theword":"bath"},{"theword":"battery"},{"theword":"beads"},{"theword":"beard"},{"theword":"bed"},{"theword":"bedroom"},{"theword":"beet"},{"theword":"beetle"},{"theword":"belly button"},{"theword":"biscuit"},{"theword":"blood"},{"theword":"blouse"},{"theword":"board game"},{"theword":"body"},{"theword":"book"},{"theword":"bowl"},{"theword":"bracelet"},{"theword":"brain"},{"theword":"breast"},{"theword":"bridge"},{"theword":"broom"},{"theword":"brush (object)"},{"theword":"bucket"},{"theword":"bun"},{"theword":"bus"},{"theword":"bush"},{"theword":"butt"},{"theword":"buttocks"},{"theword":"cabbage"},{"theword":"cake"},{"theword":"camera"},{"theword":"cap"},{"theword":"card"},{"theword":"cart"},{"theword":"cassava"},{"theword":"cell phone"},{"theword":"cheese"},{"theword":"chicken"},{"theword":"chicken (animal)"},{"theword":"chickpea"},{"theword":"chin"},{"theword":"chocolate"},{"theword":"chopstick"},{"theword":"clam"},{"theword":"closet"},{"theword":"cloth"},{"theword":"clothes"},{"theword":"clothing"},{"theword":"cockroach"},{"theword":"cocoa"},{"theword":"coffee"},{"theword":"coffee table"},{"theword":"coke"},{"theword":"colors"},{"theword":"comb (object)"},{"theword":"computer"},{"theword":"cookie"},{"theword":"corridor"},{"theword":"cow"},{"theword":"crayon"},{"theword":"crocodile"},{"theword":"croissant"},{"theword":"croquette"},{"theword":"crow"},{"theword":"cucumber"},{"theword":"cupboard"},{"theword":"cushion"},{"theword":"dessert"},{"theword":"diaper"},{"theword":"dining room"},{"theword":"dinosaur"},{"theword":"dish"},{"theword":"dog"},{"theword":"dolphin"},{"theword":"donut"},{"theword":"dragon"},{"theword":"dragonfly"},{"theword":"dress (object)"},{"theword":"dress shoe"},{"theword":"dried seaweed"},{"theword":"drink (beverage)"},{"theword":"drum"},{"theword":"drum (object)"},{"theword":"dryer"},{"theword":"dumpling"},{"theword":"dustpan"},{"theword":"ear"},{"theword":"eggplant"},{"theword":"elbow"},{"theword":"elevator"},{"theword":"eye"},{"theword":"eyelash"},{"theword":"fan"},{"theword":"finger"},{"theword":"fire"},{"theword":"fireplace"},{"theword":"flag"},{"theword":"floor"},{"theword":"flour"},{"theword":"foot"},{"theword":"forehead"},{"theword":"fork"},{"theword":"frost"},{"theword":"garden"},{"theword":"gas"},{"theword":"glass"},{"theword":"glove"},{"theword":"goat"},{"theword":"goose"},{"theword":"gorilla"},{"theword":"green beans"},{"theword":"ground"},{"theword":"guava"},{"theword":"gum"},{"theword":"gun"},{"theword":"hair clip"},{"theword":"ham"},{"theword":"hammer"},{"theword":"hanger"},{"theword":"hat"},{"theword":"head"},{"theword":"headband"},{"theword":"helmet"},{"theword":"hen"},{"theword":"high chair"},{"theword":"hip"},{"theword":"hippopotamus"},{"theword":"hole"},{"theword":"honey"},{"theword":"hot dog"},{"theword":"house"},{"theword":"ice cream"},{"theword":"icicle"},{"theword":"insect"},{"theword":"jam"},{"theword":"jar"},{"theword":"jeans"},{"theword":"jello"},{"theword":"ketchup"},{"theword":"keys"},{"theword":"kimchi"},{"theword":"kitchen"},{"theword":"kite"},{"theword":"kitty"},{"theword":"kiwi"},{"theword":"knee"},{"theword":"knife"},{"theword":"ladder"},{"theword":"ladybug"},{"theword":"lake"},{"theword":"lamb"},{"theword":"lamp"},{"theword":"lawn mower"},{"theword":"leaf"},{"theword":"lemon"},{"theword":"lettuce"},{"theword":"locomotive"},{"theword":"lollipop"},{"theword":"macaroni"},{"theword":"mango"},{"theword":"marker"},{"theword":"mat"},{"theword":"matches"},{"theword":"meatball"},{"theword":"microphone"},{"theword":"microwave"},{"theword":"mirror"},{"theword":"money"},{"theword":"monkey"},{"theword":"moon"},{"theword":"mop (object)"},{"theword":"motorcycle"},{"theword":"mountain"},{"theword":"mouth"},{"theword":"muffin"},{"theword":"mug"},{"theword":"mushroom"},{"theword":"mustache"},{"theword":"nail (body part)"},{"theword":"nail (finger)"},{"theword":"nail (object)"},{"theword":"neck"},{"theword":"necklace"},{"theword":"neighborhood"},{"theword":"nose"},{"theword":"nugget"},{"theword":"nut"},{"theword":"olive"},{"theword":"orange (food)"},{"theword":"oven"},{"theword":"overalls"},{"theword":"paint (object)"},{"theword":"painting"},{"theword":"pajamas"},{"theword":"palm"},{"theword":"pan"},{"theword":"papaya"},{"theword":"paper"},{"theword":"parrot"},{"theword":"pasta"},{"theword":"peach"},{"theword":"peacock"},{"theword":"peanut butter"},{"theword":"pencil"},{"theword":"penguin"},{"theword":"penis"},{"theword":"photo"},{"theword":"pie"},{"theword":"pillow"},{"theword":"pineapple"},{"theword":"pipe"},{"theword":"pizza"},{"theword":"plug"},{"theword":"plum"},{"theword":"pocket"},{"theword":"police car"},{"theword":"pork"},{"theword":"porridge"},{"theword":"pot"},{"theword":"present"},{"theword":"pretzel"},{"theword":"pudding"},{"theword":"puddle"},{"theword":"puppet"},{"theword":"puppy"},{"theword":"puree"},{"theword":"puzzle"},{"theword":"quesadilla"},{"theword":"rabbit"},{"theword":"radiator"},{"theword":"radio"},{"theword":"radish"},{"theword":"rag"},{"theword":"raisin"},{"theword":"rice"},{"theword":"rice cake"},{"theword":"road"},{"theword":"rock (object)"},{"theword":"roof"},{"theword":"room"},{"theword":"rooster"},{"theword":"rope"},{"theword":"salami"},{"theword":"salt"},{"theword":"samosa"},{"theword":"sand"},{"theword":"sandal"},{"theword":"sandbox"},{"theword":"sandwich"},{"theword":"sausage"},{"theword":"scallion"},{"theword":"scissors"},{"theword":"seal (animal)"},{"theword":"seesaw"},{"theword":"shed"},{"theword":"sheep"},{"theword":"ship"},{"theword":"shoulder"},{"theword":"shovel"},{"theword":"shower"},{"theword":"shrimp"},{"theword":"sidewalk"},{"theword":"sink"},{"theword":"skate (object)"},{"theword":"sled"},{"theword":"slipper"},{"theword":"smoke"},{"theword":"snack"},{"theword":"snail"},{"theword":"sneaker"},{"theword":"snow"},{"theword":"snowsuit"},{"theword":"soda"},{"theword":"soil"},{"theword":"song"},{"theword":"soup"},{"theword":"sour cream"},{"theword":"soy sauce"},{"theword":"spade"},{"theword":"spaghetti"},{"theword":"sparrow"},{"theword":"spider"},{"theword":"spoon"},{"theword":"sprinkler"},{"theword":"stairs"},{"theword":"steak"},{"theword":"stick"},{"theword":"sticker"},{"theword":"stool"},{"theword":"stork"},{"theword":"story"},{"theword":"sunglasses"},{"theword":"swallow (animal)"},{"theword":"sweets"},{"theword":"swimsuit"},{"theword":"table"},{"theword":"tablecloth"},{"theword":"taco"},{"theword":"tail"},{"theword":"tape"},{"theword":"tape (object)"},{"theword":"taxi"},{"theword":"tea"},{"theword":"teapot"},{"theword":"teddybear"},{"theword":"telephone"},{"theword":"thing"},{"theword":"thunder"},{"theword":"toast"},{"theword":"toe"},{"theword":"tofu"},{"theword":"toilet"},{"theword":"tongue"},{"theword":"toothpaste"},{"theword":"tortilla"},{"theword":"towel"},{"theword":"toy (object)"},{"theword":"tracksuit"},{"theword":"traffic"},{"theword":"train"},{"theword":"trampoline"},{"theword":"tray"},{"theword":"tricycle"},{"theword":"trumpet"},{"theword":"tunnel"},{"theword":"turkey"},{"theword":"umbrella"},{"theword":"underpants"},{"theword":"vacuum cleaner"},{"theword":"vagina"},{"theword":"vest"},{"theword":"vinegar"},{"theword":"vitamin"},{"theword":"voice recorder"},{"theword":"wallet"},{"theword":"wardrobe"},{"theword":"washing machine"},{"theword":"water (not beverage)"},{"theword":"watering can"},{"theword":"watermelon"},{"theword":"whale"},{"theword":"whistle (object)"},{"theword":"wind"},{"theword":"wolf"},{"theword":"yard"},{"theword":"yogurt drink"}] 
for (let i = 0; i < words.length; ++i) {
    var word = words[i];
    words_array.push(word);
};

var words1= words_array.slice(0,120);
var words2 = words_array.slice(120,240);
var words3 = words_array.slice(240,359);


var arrayof_arrays = [words1, words2, words3]; 



var chosenarrayindex = Math.floor(Math.random() * arrayof_arrays.length);
var chosenarray = arrayof_arrays[chosenarrayindex];


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords = chosenarray.slice(0, 20);


var trial1 = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 18px;">' +
        '<p>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.</p>' +
        '<p>If you have questions about this research, please contact us at <a href="mailto:languagecoglab@gmail.com">languagecoglab@gmail.com</a>.</p>' +
        '<p>You must be at least 18 years old to participate. Your participation in this research is voluntary.</p>' +
        '<p>You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.</p>' +
        '<p>Your anonymity is assured.</p>' +
        '<p> Click next to begin.</p>' +
        '</div>'
    ],
    show_clickable_nav: true,
    button_label: 'Next', // Customize the button label
    button_html: '<button class="jspsych-btn" style="font-size: 30px; padding: 10px 20px;">%choice%</button>' // Customize the button style
};


timeline.push(trial1)


// USE THIS FUNCTION TO LOG VARIABLES
console.log('Logging Variables') ;


var opening = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 30px;">' +'<p> <font size="4">In this experiment, on each trial you will see an individual word. We will ask you to make a judgment about this word.<font> <p>'  +
        '</div>'   
    ],
    on_finish: function(data) {// capture info from Prolific
        var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
        var study_id = jsPsych.data.getURLVariable('STUDY_ID');
        var session_id = jsPsych.data.getURLVariable('SESSION_ID');
        
        console.log("subject");
        console.log(subject_id);
        
        jsPsych.data.addProperties({
            subject_id: subject_id,
            study_id: study_id,
            session_id: session_id,
        });
        console.log("from object data")
        console.log(data.subject_id, data.study_id, data.session_id) },
    show_clickable_nav: true,

};

timeline.push(opening);

var practice_solidity1= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "In the sentence [this is a block of metal], a block of metal is: ",
                    options: ['solid', 'non-solid'],
                    required: true,
                },
    
            ],
            on_finish: function(data) {
                var currentWord = "In the sentence [this is a block of metal], a block of metal is:";
                console.log("testing");
                console.log(jsPsych.data.getLastTrialData().values()[0].response.Q0);

                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'solid'; 
                var blockname = "practice_solidity";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });

                jsPsych.data.addDataToLastTrial({
                    correct: isCorrect,
                });


                var feedbackMessage = isCorrect ? "Correct! Now, let's go forward!" : "Incorrect! a block of metal is a solid object. Let's go forward! "; 
                alert(feedbackMessage); 
                
            } 
        }
    ],
};

var practice_solidity2= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "In the sentence [this is a pile of sand], a pile of sand is: ",
                    options: ['solid', 'non-solid'],
                    required: true,
                },
    
            ],
            on_finish: function(data) {
                var currentWord = "In the sentence [this is a pile of sand], a pile of sand is:";
                console.log("testing");
                //console.log(jsPsych.data.get().values()[2].response.Q0);
                console.log(jsPsych.data.getLastTrialData().values()[0].response.Q0);


                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'non-solid'; 
                var blockname = "practice_solidity";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });

                jsPsych.data.addDataToLastTrial({
                    correct: isCorrect,
                });


                var feedbackMessage = isCorrect ? "Correct! Now let's begin" : "Incorrect! a pile of sand is a non-solid entity. Now let's begin! "; 
                alert(feedbackMessage); 
                
            } 
        }
    ],
};

// trial : 1
const instructions_solidity = {
    timeline:[
        {
            type: jsPsychHtmlButtonResponse,
            stimulus:
            '<p> <font size="4"> One judgment is whether the word refers to something solid. <font> <p>' +
            '<p> <font size="4"> For example, consider the sentence <b>“I need several pens”</b>. <font><p>' +
            '<p> <font size="4"> In this sentence, <b>[pen]</b> refers to a <b>solid object</b>.<font> <p>' +
            '<p> <font size="4"> Now think about the sentence <b>“I need some water”</b>, <b>[Water]</b> is <b>not solid</b>. <font> <p>' +
            '<p> <font size="4"> Next, we’d like you to judge whether other words refer to something solid. <font> <p> '+
            '<p> <font size="4"> <b>Note</b>: when you see the word <b>"Purple"</b> click <b>"solid"</b> <font> <p>' +
            '<p> <font size="4"> Let’s begin! <font> <p>',
            choices: ['Continue'], 

        }, ]
}
//timeline.push(instructions_solidity);


// trial: 2 to length of words-1 ( 2 and 5 words = 6 trials now )
var block_solidity = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: jsPsych.timelineVariable('theword'),
                    options: ['solid', 'non-solid', 'unclear/unknown'],
                    required: true,
                }
      
            ],
            
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('theword');
                var blockname = "solidity";


                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });

            } 
        }
    ],
    timeline_variables: selectedWords,
    randomize_order: true
};

var attention_solidity = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "purple", 
        options: ['solid', 'non-solid', 'unclear/unknown'], 
        required: true,
        horizontal: false
      }, 
    ],
    on_finish: function(data) {
        // Access the value of 'uni_lemma' for the current trial
        var currentWord = "purple";
        var blockname = "attention_solidity";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};

var solidity = {
    timeline: [instructions_solidity, practice_solidity1,practice_solidity2 ,block_solidity, attention_solidity], 
    randomization: false,
}

//timeline.push(solidity);

//trial: 7
const instructions_countmass = {
    type: jsPsychHtmlButtonResponse,
    stimulus:
    '<p> <font size="4"> One judgment is whether a word is a count or a mass noun. A <b>count noun</b> refers to objects that can be divided into <b>individual units and counted</b>.<font> <p>' +
    '<p> <font size="4"> For example, consider the sentence: <b>“I need several pens”</b>. <font> <p>' +
    '<p> <font size="4"> [<b>Pen</b>] is a count noun.</font> <p>' +
    '<p> <font size="4">A noun that refers to <b>undifferentiated and uncountable substances</b> is called a <b>mass noun</b>. <font> <p>' +
    '<p> <font size="4"> For example, consider the sentence: <b>“I need some water”</b>. <font> <p>' +
    '<p> <font size="4"> [<b>Water</b>] is a mass noun.<font> <p>'+ 
    '<p> <font size="4"> Next, we’d like you to judge whether other words are count or mass nouns. <font> <p> '+
    '<p> <font size="4"> <b>Note</b>: when you see the word <b>"Grey"</b> click <b>"count noun"</b> <font> <p>' +
    '<p> <font size="4"> Let’s begin! <font> <p>',
    choices: ['Continue']
};
//timeline.push(instructions_countmass);


var words_array2 = [];
let words_c2 = [{"theword":"ankle"},{"theword":"applesauce"},{"theword":"apron"},{"theword":"arm"},{"theword":"armchair"},{"theword":"atole"},{"theword":"back (body part)"},{"theword":"backyard"},{"theword":"bag"},{"theword":"balcony"},{"theword":"ball"},{"theword":"balloon"},{"theword":"bank"},{"theword":"basin"},{"theword":"basket"},{"theword":"bathroom"},{"theword":"bathtub"},{"theword":"beads"},{"theword":"beans"},{"theword":"bed"},{"theword":"bee"},{"theword":"beet"},{"theword":"belly button"},{"theword":"bib"},{"theword":"bicycle"},{"theword":"bird"},{"theword":"biscuit"},{"theword":"boat"},{"theword":"body"},{"theword":"book"},{"theword":"boots"},{"theword":"boulder"},{"theword":"bracelet"},{"theword":"brain"},{"theword":"breast"},{"theword":"brush (object)"},{"theword":"bubbles"},{"theword":"bug"},{"theword":"bun"},{"theword":"bus"},{"theword":"butt"},{"theword":"butter"},{"theword":"buttocks"},{"theword":"button"},{"theword":"cabbage"},{"theword":"calf"},{"theword":"camel"},{"theword":"camera"},{"theword":"can (object)"},{"theword":"candy"},{"theword":"cap"},{"theword":"car"},{"theword":"carpet"},{"theword":"carrot"},{"theword":"cassava"},{"theword":"cat"},{"theword":"caterpillar"},{"theword":"cd"},{"theword":"cereal"},{"theword":"chair"},{"theword":"chalk"},{"theword":"cheek"},{"theword":"cherry"},{"theword":"chick"},{"theword":"chicken"},{"theword":"chicken (animal)"},{"theword":"chickpea"},{"theword":"chili"},{"theword":"chin"},{"theword":"clam"},{"theword":"clay"},{"theword":"closet"},{"theword":"clothes"},{"theword":"clothing"},{"theword":"cloud"},{"theword":"clown"},{"theword":"coke"},{"theword":"colors"},{"theword":"computer"},{"theword":"cook"},{"theword":"corridor"},{"theword":"cottage cheese"},{"theword":"cotton"},{"theword":"crab"},{"theword":"cracker"},{"theword":"crane"},{"theword":"crayon"},{"theword":"crib"},{"theword":"crocodile"},{"theword":"cucumber"},{"theword":"cupboard"},{"theword":"curtain"},{"theword":"cutlet"},{"theword":"digger"},{"theword":"dining room"},{"theword":"dog"},{"theword":"door"},{"theword":"doorbell"},{"theword":"dragon"},{"theword":"dragonfly"},{"theword":"drawer"},{"theword":"dress shoe"},{"theword":"drink (beverage)"},{"theword":"dryer"},{"theword":"duck"},{"theword":"dumpling"},{"theword":"dustpan"},{"theword":"eagle"},{"theword":"earring"},{"theword":"earth"},{"theword":"elbow"},{"theword":"elevator"},{"theword":"eye"},{"theword":"face"},{"theword":"fan"},{"theword":"faucet"},{"theword":"finger"},{"theword":"fingernail"},{"theword":"fir"},{"theword":"fire"},{"theword":"fish (food)"},{"theword":"flag"},{"theword":"floor"},{"theword":"flour"},{"theword":"flower pot"},{"theword":"fly (animal)"},{"theword":"fork"},{"theword":"fountain"},{"theword":"fox"},{"theword":"french fries"},{"theword":"frost"},{"theword":"fruit"},{"theword":"furniture"},{"theword":"garage"},{"theword":"garden"},{"theword":"gas"},{"theword":"glove"},{"theword":"glue (object)"},{"theword":"goat"},{"theword":"goose"},{"theword":"green beans"},{"theword":"gum"},{"theword":"gun"},{"theword":"gut"},{"theword":"handkerchief"},{"theword":"headband"},{"theword":"hedgehog"},{"theword":"helicopter"},{"theword":"hen"},{"theword":"hip"},{"theword":"hippopotamus"},{"theword":"hole"},{"theword":"honey"},{"theword":"house"},{"theword":"ice cream"},{"theword":"insect"},{"theword":"jam"},{"theword":"jeans"},{"theword":"jeep"},{"theword":"jello"},{"theword":"jelly"},{"theword":"juice"},{"theword":"kefir"},{"theword":"ketchup"},{"theword":"kimchi"},{"theword":"kite"},{"theword":"kitty"},{"theword":"knee"},{"theword":"koala"},{"theword":"ladder"},{"theword":"lamp"},{"theword":"lawn mower"},{"theword":"leg"},{"theword":"lemon"},{"theword":"light"},{"theword":"light (object)"},{"theword":"living room"},{"theword":"lollipop"},{"theword":"macaroni"},{"theword":"mango"},{"theword":"marker"},{"theword":"mask"},{"theword":"mat"},{"theword":"matches"},{"theword":"meatball"},{"theword":"microphone"},{"theword":"microwave"},{"theword":"milk"},{"theword":"mitten"},{"theword":"mold"},{"theword":"mop (object)"},{"theword":"mud"},{"theword":"muffin"},{"theword":"mug"},{"theword":"mushroom"},{"theword":"mustache"},{"theword":"nail (body part)"},{"theword":"nail (object)"},{"theword":"napkin"},{"theword":"neck"},{"theword":"neighborhood"},{"theword":"newspaper"},{"theword":"nugget"},{"theword":"oven"},{"theword":"overalls"},{"theword":"owl"},{"theword":"pacifier"},{"theword":"paint (object)"},{"theword":"painting"},{"theword":"pajamas"},{"theword":"panda"},{"theword":"pants"},{"theword":"papaya"},{"theword":"paper"},{"theword":"park"},{"theword":"parking lot"},{"theword":"parrot"},{"theword":"patio"},{"theword":"peach"},{"theword":"peacock"},{"theword":"peanut"},{"theword":"pear"},{"theword":"pen"},{"theword":"pencil"},{"theword":"penis"},{"theword":"penny"},{"theword":"photo"},{"theword":"piano"},{"theword":"pie"},{"theword":"pig"},{"theword":"pigeon"},{"theword":"piglet"},{"theword":"pillow"},{"theword":"pineapple"},{"theword":"pipe"},{"theword":"plantain"},{"theword":"plate"},{"theword":"pocket"},{"theword":"pomegranate"},{"theword":"pony"},{"theword":"pool"},{"theword":"porch"},{"theword":"porridge"},{"theword":"pot"},{"theword":"pudding"},{"theword":"puppet"},{"theword":"puree"},{"theword":"purse"},{"theword":"push"},{"theword":"quesadilla"},{"theword":"rabbit"},{"theword":"racket"},{"theword":"radiator"},{"theword":"radish"},{"theword":"raisin"},{"theword":"rake (object)"},{"theword":"raspberry"},{"theword":"remote control"},{"theword":"ribbon"},{"theword":"rice cake"},{"theword":"road"},{"theword":"robot"},{"theword":"roof"},{"theword":"rooster"},{"theword":"salt"},{"theword":"samosa"},{"theword":"sandal"},{"theword":"sandbox"},{"theword":"sandwich"},{"theword":"sausage"},{"theword":"scallion"},{"theword":"scarf"},{"theword":"seesaw"},{"theword":"shark"},{"theword":"shed"},{"theword":"sheep"},{"theword":"ship"},{"theword":"shoe"},{"theword":"shovel"},{"theword":"skate (object)"},{"theword":"sky"},{"theword":"sled"},{"theword":"sleeve"},{"theword":"smoke"},{"theword":"smoothie"},{"theword":"snail"},{"theword":"snake"},{"theword":"sneaker"},{"theword":"snow"},{"theword":"snowman"},{"theword":"sour cream"},{"theword":"soy milk"},{"theword":"soy sauce"},{"theword":"spaghetti"},{"theword":"sparrow"},{"theword":"spider"},{"theword":"spinach"},{"theword":"sprinkler"},{"theword":"steak"},{"theword":"sticker"},{"theword":"stool"},{"theword":"stork"},{"theword":"stroller"},{"theword":"sugar"},{"theword":"sun"},{"theword":"sweater"},{"theword":"sweet potato"},{"theword":"t-shirt"},{"theword":"tail"},{"theword":"tangerine"},{"theword":"tape (object)"},{"theword":"taxi"},{"theword":"tea"},{"theword":"thing"},{"theword":"thumb"},{"theword":"thunder"},{"theword":"tiger"},{"theword":"tights"},{"theword":"toast"},{"theword":"tofu"},{"theword":"toilet"},{"theword":"tongue"},{"theword":"toothpaste"},{"theword":"top"},{"theword":"tracksuit"},{"theword":"traffic light"},{"theword":"trampoline"},{"theword":"tray"},{"theword":"trolley"},{"theword":"trumpet"},{"theword":"tummy"},{"theword":"tuna"},{"theword":"tunnel"},{"theword":"turkey"},{"theword":"umbrella"},{"theword":"underpants"},{"theword":"vacuum cleaner"},{"theword":"vegetable"},{"theword":"video"},{"theword":"vitamin"},{"theword":"voice recorder"},{"theword":"waist"},{"theword":"washing machine"},{"theword":"watch (object)"},{"theword":"water (not beverage)"},{"theword":"watering can"},{"theword":"waves"},{"theword":"wind"},{"theword":"window"},{"theword":"wolf"},{"theword":"wood"},{"theword":"worm"},{"theword":"yogurt"}] 
for (let i = 0; i < words_c2.length; ++i) {
    var word = words_c2[i];
    words_array2.push(word);
};

var wordsc1= words_array2.slice(0,117);
var wordsc2 = words_array2.slice(117,234);
var wordsc3 = words_array2.slice(234,353);


var arrayof_arrays_c = [wordsc1, wordsc2, wordsc3]; 



var chosenarrayindex_c = Math.floor(Math.random() * arrayof_arrays_c.length);
var chosenarray_c = arrayof_arrays_c[chosenarrayindex_c];


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray_c);
// Select the first 100 rows
var selectedWords2 = chosenarray_c.slice(0, 20);

var practice_countmass1= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: " In the sentence [would you like a Chair?], a chair is: ",
                    options: ['count noun', 'mass noun'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = " In the sentence [would you like a Chair?], a chair is:";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'count noun'; 
                blockname = "practice_countmass";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect,
                });

                var feedbackMessage = isCorrect ? "Correct! Now let's go forward!" : "Incorrect! chair is a count noun. Let's go forward!"; 
                alert(feedbackMessage); 
            } 
        }
    ],
};

var practice_countmass2= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: " In the sentence [This is so much sugar?], sugar is: ",
                    options: ['count noun', 'mass noun'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = " In the sentence [This is so much sugar?], sugar is: ";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'mass noun'; 
                blockname = "practice_countmass";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect,
                });

                var feedbackMessage = isCorrect ? "Correct! Now let's begin! " : "Incorrect! sugar is a mass noun. Now let's begin!"; 
                alert(feedbackMessage); 
            } 
        }
    ],
};

var block_countmass = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: jsPsych.timelineVariable('theword'),
                    options: ['count noun', 'mass noun' , 'unclear/unknown'],
                    required: true ,
                    // on_finish: function(data){
                    //       data.word = selectedWords2['uni_lemma'];
                    //     }
                }
            ],
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('theword');
                var blockname= "count_mass";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord, 
                    theblock: blockname,
                });
            }
        },
    ],
    timeline_variables: selectedWords2,
    randomize_order: true
};

var attention_countmass = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "grey", 
        options: ['count noun', 'mass noun' , 'unclear/unknown'], 
        required: true,
        horizontal: false
      }, 
    ],
    on_finish: function(data) {
        // Access the value of 'uni_lemma' for the current trial
        var currentWord = "grey";
        var blockname = "attention_countmass";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};

var countmass = {
    timeline: [instructions_countmass, practice_countmass1, practice_countmass2 ,block_countmass, attention_countmass], 
    randomization: false,
}

//timeline.push(countmass);

var words_array3 = [];
let words_cat3 = [{"theword":"accident"},{"theword":"alligator"},{"theword":"ambulance"},{"theword":"ankle"},{"theword":"ant"},{"theword":"applesauce"},{"theword":"apricot"},{"theword":"apron"},{"theword":"atole"},{"theword":"back"},{"theword":"back (body part)"},{"theword":"backyard"},{"theword":"balcony"},{"theword":"ball"},{"theword":"bat (object)"},{"theword":"bath"},{"theword":"bathtub"},{"theword":"battery"},{"theword":"bed"},{"theword":"bedroom"},{"theword":"bell"},{"theword":"belt"},{"theword":"bench"},{"theword":"biscuit"},{"theword":"blood"},{"theword":"blouse"},{"theword":"board game"},{"theword":"body"},{"theword":"book"},{"theword":"boots"},{"theword":"boulder"},{"theword":"bowl"},{"theword":"box"},{"theword":"brain"},{"theword":"branch"},{"theword":"breast"},{"theword":"bubbles"},{"theword":"bucket"},{"theword":"bug"},{"theword":"bull"},{"theword":"bus"},{"theword":"bush"},{"theword":"buttocks"},{"theword":"camel"},{"theword":"camera"},{"theword":"candle"},{"theword":"car"},{"theword":"carpet"},{"theword":"caterpillar"},{"theword":"chair"},{"theword":"cheerios"},{"theword":"cheese"},{"theword":"chick"},{"theword":"chicken"},{"theword":"chicken (food)"},{"theword":"chin"},{"theword":"closet"},{"theword":"cloth"},{"theword":"clown"},{"theword":"coat"},{"theword":"cockroach"},{"theword":"cocoa"},{"theword":"coin"},{"theword":"coke"},{"theword":"compote"},{"theword":"computer"},{"theword":"corn"},{"theword":"cottage cheese"},{"theword":"couch"},{"theword":"cow"},{"theword":"crane"},{"theword":"crayon"},{"theword":"croissant"},{"theword":"cucumber"},{"theword":"curtain"},{"theword":"dessert"},{"theword":"digger"},{"theword":"dinosaur"},{"theword":"doll"},{"theword":"donut"},{"theword":"door"},{"theword":"doorbell"},{"theword":"dragon"},{"theword":"dragonfly"},{"theword":"drawer"},{"theword":"dress (object)"},{"theword":"dress shoe"},{"theword":"dried seaweed"},{"theword":"dryer"},{"theword":"duck"},{"theword":"dumpling"},{"theword":"dustpan"},{"theword":"eagle"},{"theword":"ear"},{"theword":"earring"},{"theword":"eggplant"},{"theword":"elbow"},{"theword":"elevator"},{"theword":"eyebrow"},{"theword":"eyelash"},{"theword":"face"},{"theword":"fan"},{"theword":"faucet"},{"theword":"finger"},{"theword":"fingernail"},{"theword":"fir"},{"theword":"fireplace"},{"theword":"firetruck"},{"theword":"flour"},{"theword":"flower pot"},{"theword":"fly (animal)"},{"theword":"foot"},{"theword":"frog"},{"theword":"fruit"},{"theword":"garbage"},{"theword":"garden"},{"theword":"gas"},{"theword":"giraffe"},{"theword":"glasses"},{"theword":"glove"},{"theword":"gloves"},{"theword":"glue (object)"},{"theword":"goat"},{"theword":"goose"},{"theword":"grapes"},{"theword":"ground"},{"theword":"guitar"},{"theword":"gum"},{"theword":"gun"},{"theword":"gut"},{"theword":"hair"},{"theword":"hair clip"},{"theword":"hair dryer"},{"theword":"hammer"},{"theword":"handkerchief"},{"theword":"hanger"},{"theword":"head"},{"theword":"headband"},{"theword":"heart"},{"theword":"helicopter"},{"theword":"hen"},{"theword":"high chair"},{"theword":"hip"},{"theword":"hippopotamus"},{"theword":"hole"},{"theword":"honey"},{"theword":"hose"},{"theword":"hot dog"},{"theword":"house"},{"theword":"ice cream"},{"theword":"insect"},{"theword":"iron (object)"},{"theword":"jacket"},{"theword":"jam"},{"theword":"jar"},{"theword":"jeans"},{"theword":"jeep"},{"theword":"jello"},{"theword":"juice"},{"theword":"kayak"},{"theword":"keys"},{"theword":"kitchen"},{"theword":"kite"},{"theword":"kitty"},{"theword":"knife"},{"theword":"lake"},{"theword":"lamp"},{"theword":"leaf"},{"theword":"lemon"},{"theword":"light"},{"theword":"light (object)"},{"theword":"lion"},{"theword":"lip"},{"theword":"living room"},{"theword":"lollipop"},{"theword":"macaroni"},{"theword":"mango"},{"theword":"mat"},{"theword":"matches"},{"theword":"meat"},{"theword":"melon"},{"theword":"minibus"},{"theword":"mirror"},{"theword":"mitten"},{"theword":"mosquito"},{"theword":"motorcycle"},{"theword":"mountain"},{"theword":"mouth"},{"theword":"mug"},{"theword":"music"},{"theword":"nail (finger)"},{"theword":"napkin"},{"theword":"neck"},{"theword":"necklace"},{"theword":"neighborhood"},{"theword":"notebook"},{"theword":"nugget"},{"theword":"olive"},{"theword":"orange (food)"},{"theword":"oven"},{"theword":"owie"},{"theword":"pacifier"},{"theword":"painting"},{"theword":"pajamas"},{"theword":"palm"},{"theword":"panda"},{"theword":"pants"},{"theword":"paper"},{"theword":"park"},{"theword":"parking lot"},{"theword":"pastry"},{"theword":"patio"},{"theword":"peach"},{"theword":"peacock"},{"theword":"peanut"},{"theword":"peanut butter"},{"theword":"pear"},{"theword":"pencil"},{"theword":"persimmon"},{"theword":"phone"},{"theword":"piano"},{"theword":"pickle"},{"theword":"picture"},{"theword":"piglet"},{"theword":"pill"},{"theword":"pipe"},{"theword":"plant"},{"theword":"plate"},{"theword":"pocket"},{"theword":"police car"},{"theword":"pomegranate"},{"theword":"pony"},{"theword":"porch"},{"theword":"porridge"},{"theword":"pudding"},{"theword":"push"},{"theword":"puzzle"},{"theword":"rabbit"},{"theword":"radiator"},{"theword":"radish"},{"theword":"rag"},{"theword":"raincoat"},{"theword":"raspberry"},{"theword":"refrigerator"},{"theword":"remote control"},{"theword":"ribbon"},{"theword":"rice"},{"theword":"road"},{"theword":"rooster"},{"theword":"rope"},{"theword":"salt"},{"theword":"samosa"},{"theword":"sandbox"},{"theword":"sauce"},{"theword":"sausage"},{"theword":"scallion"},{"theword":"scarf"},{"theword":"sea"},{"theword":"shed"},{"theword":"ship"},{"theword":"shovel"},{"theword":"shower"},{"theword":"shrimp"},{"theword":"sidewalk"},{"theword":"skirt"},{"theword":"sled"},{"theword":"sleeve"},{"theword":"slipper"},{"theword":"smoothie"},{"theword":"snail"},{"theword":"snake"},{"theword":"sneaker"},{"theword":"snow"},{"theword":"snowsuit"},{"theword":"soap"},{"theword":"soda"},{"theword":"soil"},{"theword":"song"},{"theword":"soy milk"},{"theword":"sparrow"},{"theword":"spider"},{"theword":"spinach"},{"theword":"sponge"},{"theword":"stairs"},{"theword":"steak"},{"theword":"stick"},{"theword":"sticker"},{"theword":"stone"},{"theword":"story"},{"theword":"straw"},{"theword":"stroller"},{"theword":"sunglasses"},{"theword":"swallow (animal)"},{"theword":"sweet potato"},{"theword":"swimsuit"},{"theword":"table"},{"theword":"tablecloth"},{"theword":"tape (object)"},{"theword":"thing"},{"theword":"thumb"},{"theword":"thunder"},{"theword":"tiger"},{"theword":"tofu"},{"theword":"tongue"},{"theword":"top"},{"theword":"tortilla"},{"theword":"toy (object)"},{"theword":"traffic"},{"theword":"train"},{"theword":"trampoline"},{"theword":"trash can"},{"theword":"tray"},{"theword":"tricycle"},{"theword":"trolley"},{"theword":"tuna"},{"theword":"turkey"},{"theword":"turtle"},{"theword":"tv"},{"theword":"underpants"},{"theword":"vegetable"},{"theword":"vest"},{"theword":"video"},{"theword":"vinegar"},{"theword":"vitamin"},{"theword":"wallet"},{"theword":"washing machine"},{"theword":"watch (object)"},{"theword":"watering can"},{"theword":"whale"},{"theword":"wheel"},{"theword":"wind"},{"theword":"window"},{"theword":"wolf"},{"theword":"worm"},{"theword":"yard"},{"theword":"yogurt"},{"theword":"yogurt drink"},{"theword":"zipper"}] 
for (let i = 0; i < words_cat3.length; ++i) {
    var word = words_cat3[i];
    words_array3.push(word);
};

var wordscat1= words_array3.slice(0,112);
var wordscat2 = words_array3.slice(112,224);
var wordscat3 = words_array3.slice(224,338);


var arrayof_arrays_cat = [wordscat1, wordscat2, wordscat3]; 



var chosenarrayindex_cat = Math.floor(Math.random() * arrayof_arrays_cat.length);
var chosenarray_cat = arrayof_arrays_cat[chosenarrayindex_cat];


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray_cat);
// Select the first 100 rows
var selectedWords3 = chosenarray_cat.slice(0, 20);

const instructions_category = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 
    '<p> <font size="4"> One judgment is about the word category. Consider the sentence: <b>“I need several pens”</b>. <font> <p>' +
    '<p> <font size="4"> <b>[Pen]</b> belongs to a <b>category that is organized by shape</b>. All pens have the same shape but could have different colors, or made of different materials.<font> <p>' +
    '<p> <font size="4"> Now consider the sentence: <b>“I need some water”</b>.<font> <p>' +
    '<p> <font size="4"> <b>[Water]</b> belongs to a category of entities organized by <b>material</b>. Water can be many colors and can take many shapes but it always has to be made of water.  <font> <p>'+
    '<p> <font size="4"> Next, you will be asked to make some judgments about other words and how they are organized. Some of these may be tricky, but just try your best.<font> <p>'+
    '<p> <font size="4"> <b>Note</b>: when you see the word <b>"Lavender"</b> click <b>"color"</b> <font> <p>' +
    '<p><font size="4"> Let’s begin! <font> <p>' ,
    choices: ['Continue']
};
//timeline.push(instructions_category);

var practice_category1= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "In the sentence [this is a square table], a 'square' belongs to a category that is organized by:",
                    options: ['shape', 'material', 'color'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = "In the sentence [this is a square table], a 'square' belongs to a category that is organized by:";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'shape'; 
                var blockname = "practice_category" ;

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect
                });

                var feedbackMessage = isCorrect ? "Correct! Now let's go forward!" : "Incorrect! square is organized around shape, all squares are of the same shape. Let's go forward!"; 
                alert(feedbackMessage); 
            } 
        }
    ],
};

var practice_category2= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "In the sentence [this is a red table], 'red' belongs to a category that is organized by:",
                    options: ['shape', 'material', 'color'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = "In the sentence [this is a red table], 'red' belongs to a category that is organized by:";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'color'; 
                var blockname = "practice_category" ;

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect
                });

                var feedbackMessage = isCorrect ? "Correct! Now let's begin" : "Incorrect! red is organized around color, red things should always be of the same color 'red'. Now let's begin!"; 
                alert(feedbackMessage); 
            } 
        }
    ],
};


var block_category = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    // prompt: jsPsych.timelineVariable('uni_lemma') + 'belongs to a category that is organized by: ' ,
                    prompt: () => `${jsPsych.timelineVariable('theword')} belongs to a category that is organized by:`,
                    options: ['shape', 'color', 'material', 'none of these'],
                    required: true ,
                    add_other_option: true,
                    // on_finish: function(data){
                    //       data.word = selectedWords3['uni_lemma'];
                    //     }
                },    
            ],
        
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('theword');
                var blockname = "category_organization";
                jsPsych.data.addDataToLastTrial({
                    theword: currentWord, 
                    theblock: blockname,
                });
            },
        },
    ],
    timeline_variables: selectedWords3,
    randomize_order: true
};

var attention_category = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "lavender", 
        options: ['shape', 'color', 'material', 'none of these'], 
        required: true,
        horizontal: false
      }, 
    ],
    on_finish: function(data) {
        // Access the value of 'uni_lemma' for the current trial
        var currentWord = "lavender";
        var blockname = "attention_category";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};
console.log(jsPsych.timelineVariable('theword'));

//timeline.push(block_category);

var category = {
    timeline: [instructions_category,practice_category1, practice_category2 ,block_category, attention_category ],
    randomization: false,
}



var block_array = [solidity, countmass, category];
//var blocks = shuffleArray(block_array);
var blocks = jsPsych.randomization.sampleWithoutReplacement(block_array, 3);

console.log("blockarray");
console.log(blocks);
console.log(blocks[0]); 


timeline.push(blocks[0]); 
timeline.push(blocks[1]); 
timeline.push(blocks[2]); 

var goodbye = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 30px;">' +
        '<p> <b>Thank you for your participation and we appreciate you helping science. </b> </p>' +
        '<p> please click next to get redirected ...  </p>' +
        '</div>'
    ],
    show_clickable_nav: true,

};

timeline.push(goodbye);


jsPsych.run(timeline);






// https://github.com/levante-framework/core-tasks/blob/main/task-launcher/src/tasks/math/trials/sliderStimulus.js
