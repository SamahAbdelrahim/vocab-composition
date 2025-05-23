

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
// var subject_id = jsPsych.randomization.randomID(15);

// jsPsych.data.addProperties({
//     subject: subject_id,
//   });


var words_array = [];
let words = [{"uni_lemma":"banana"},{"uni_lemma":"shoe"},{"uni_lemma":"bird"},{"uni_lemma":"cat"},{"uni_lemma":"duck"},{"uni_lemma":"car"},{"uni_lemma":"eye"},{"uni_lemma":"nose"},{"uni_lemma":"kitty"},{"uni_lemma":"balloon"},{"uni_lemma":"bubbles"},{"uni_lemma":"apple"},{"uni_lemma":"cheese"},{"uni_lemma":"cookie"},{"uni_lemma":"milk"},{"uni_lemma":"hat"},{"uni_lemma":"ear"},{"uni_lemma":"bear"},{"uni_lemma":"fish (animal)"},{"uni_lemma":"truck"},{"uni_lemma":"juice"},{"uni_lemma":"water (beverage)"},{"uni_lemma":"diaper"},{"uni_lemma":"owie"},{"uni_lemma":"bottle"},{"uni_lemma":"cow"},{"uni_lemma":"airplane"},{"uni_lemma":"cracker"},{"uni_lemma":"sock"},{"uni_lemma":"belly button"},{"uni_lemma":"hair"},{"uni_lemma":"mouth"},{"uni_lemma":"cup"},{"uni_lemma":"spoon"},{"uni_lemma":"bed"},{"uni_lemma":"door"},{"uni_lemma":"tree"},{"uni_lemma":"water (not beverage)"},{"uni_lemma":"bee"},{"uni_lemma":"bunny"},{"uni_lemma":"horse"},{"uni_lemma":"monkey"},{"uni_lemma":"pig"},{"uni_lemma":"puppy"},{"uni_lemma":"boat"},{"uni_lemma":"bus"},{"uni_lemma":"train"},{"uni_lemma":"toy (object)"},{"uni_lemma":"pizza"},{"uni_lemma":"foot"},{"uni_lemma":"hand"},{"uni_lemma":"head"},{"uni_lemma":"toe"},{"uni_lemma":"tummy"},{"uni_lemma":"blanket"},{"uni_lemma":"key"},{"uni_lemma":"light (object)"},{"uni_lemma":"telephone"},{"uni_lemma":"chair"},{"uni_lemma":"potty"},{"uni_lemma":"flower"},{"uni_lemma":"moon"},{"uni_lemma":"bug"},{"uni_lemma":"chicken (animal)"},{"uni_lemma":"elephant"},{"uni_lemma":"frog"},{"uni_lemma":"turtle"},{"uni_lemma":"bicycle"},{"uni_lemma":"blocks"},{"uni_lemma":"doll"},{"uni_lemma":"bread"},{"uni_lemma":"cake"},{"uni_lemma":"cereal"},{"uni_lemma":"chicken (food)"},{"uni_lemma":"drink (beverage)"},{"uni_lemma":"egg"},{"uni_lemma":"grapes"},{"uni_lemma":"ice cream"},{"uni_lemma":"orange (food)"},{"uni_lemma":"boots"},{"uni_lemma":"pants"},{"uni_lemma":"shirt"},{"uni_lemma":"arm"},{"uni_lemma":"butt"},{"uni_lemma":"finger"},{"uni_lemma":"tooth"},{"uni_lemma":"bowl"},{"uni_lemma":"box"},{"uni_lemma":"brush (object)"},{"uni_lemma":"fork"},{"uni_lemma":"pillow"},{"uni_lemma":"toothbrush"},{"uni_lemma":"bathtub"},{"uni_lemma":"tv"},{"uni_lemma":"rain"},{"uni_lemma":"rock (object)"},{"uni_lemma":"star"},{"uni_lemma":"sun"},{"uni_lemma":"swing (object)"},{"uni_lemma":"butterfly"},{"uni_lemma":"lion"},{"uni_lemma":"mouse"},{"uni_lemma":"owl"},{"uni_lemma":"sheep"},{"uni_lemma":"teddybear"},{"uni_lemma":"tiger"},{"uni_lemma":"crayon"},{"uni_lemma":"candy"},{"uni_lemma":"carrot"},{"uni_lemma":"fish (food)"},{"uni_lemma":"food"},{"uni_lemma":"french fries"},{"uni_lemma":"ice"},{"uni_lemma":"strawberry"},{"uni_lemma":"yogurt"},{"uni_lemma":"button"},{"uni_lemma":"coat"},{"uni_lemma":"jacket"},{"uni_lemma":"pajamas"},{"uni_lemma":"cheek"},{"uni_lemma":"face"},{"uni_lemma":"knee"},{"uni_lemma":"leg"},{"uni_lemma":"tongue"},{"uni_lemma":"paper"},{"uni_lemma":"soap"},{"uni_lemma":"towel"},{"uni_lemma":"bathroom"},{"uni_lemma":"table"},{"uni_lemma":"grass"},{"uni_lemma":"slide (object)"},{"uni_lemma":"animal"},{"uni_lemma":"giraffe"},{"uni_lemma":"firetruck"},{"uni_lemma":"stroller"},{"uni_lemma":"pen"},{"uni_lemma":"puzzle"},{"uni_lemma":"story"},{"uni_lemma":"cheerios"},{"uni_lemma":"chocolate"},{"uni_lemma":"corn"},{"uni_lemma":"pasta"},{"uni_lemma":"pancake"},{"uni_lemma":"peanut butter"},{"uni_lemma":"popcorn"},{"uni_lemma":"chips"},{"uni_lemma":"sandwich"},{"uni_lemma":"toast"},{"uni_lemma":"bib"},{"uni_lemma":"chin"},{"uni_lemma":"broom"},{"uni_lemma":"clock"},{"uni_lemma":"glasses"},{"uni_lemma":"money"},{"uni_lemma":"picture"},{"uni_lemma":"plate"},{"uni_lemma":"trash"},{"uni_lemma":"vacuum"},{"uni_lemma":"couch"},{"uni_lemma":"kitchen"},{"uni_lemma":"room"},{"uni_lemma":"shower"},{"uni_lemma":"stairs"},{"uni_lemma":"window"},{"uni_lemma":"pool"},{"uni_lemma":"sky"},{"uni_lemma":"snow"},{"uni_lemma":"stick"},{"uni_lemma":"alligator"},{"uni_lemma":"ant"},{"uni_lemma":"squirrel"},{"uni_lemma":"zebra"},{"uni_lemma":"helicopter"},{"uni_lemma":"motorcycle"},{"uni_lemma":"tractor"},{"uni_lemma":"pencil"},{"uni_lemma":"present"},{"uni_lemma":"applesauce"},{"uni_lemma":"beans"},{"uni_lemma":"butter"},{"uni_lemma":"coffee"},{"uni_lemma":"hamburger"},{"uni_lemma":"peas"},{"uni_lemma":"popsicle"},{"uni_lemma":"potato"},{"uni_lemma":"pumpkin"},{"uni_lemma":"raisin"},{"uni_lemma":"soup"},{"uni_lemma":"dress (object)"},{"uni_lemma":"shorts"},{"uni_lemma":"sweater"},{"uni_lemma":"zipper"},{"uni_lemma":"lip"},{"uni_lemma":"basket"},{"uni_lemma":"comb (object)"},{"uni_lemma":"knife"},{"uni_lemma":"medicine"},{"uni_lemma":"napkin"},{"uni_lemma":"purse"},{"uni_lemma":"scissors"},{"uni_lemma":"tissue"},{"uni_lemma":"watch (object)"},{"uni_lemma":"bedroom"},{"uni_lemma":"crib"},{"uni_lemma":"refrigerator"},{"uni_lemma":"sink"},{"uni_lemma":"cloud"},{"uni_lemma":"street"},{"uni_lemma":"deer"},{"uni_lemma":"penguin"},{"uni_lemma":"bat (object)"},{"uni_lemma":"chalk"},{"uni_lemma":"game"},{"uni_lemma":"play dough"},{"uni_lemma":"pastry"},{"uni_lemma":"meat"},{"uni_lemma":"muffin"},{"uni_lemma":"pickle"},{"uni_lemma":"pretzel"},{"uni_lemma":"belt"},{"uni_lemma":"glove"},{"uni_lemma":"necklace"},{"uni_lemma":"slipper"},{"uni_lemma":"penis"},{"uni_lemma":"bucket"},{"uni_lemma":"camera"},{"uni_lemma":"glass"},{"uni_lemma":"hammer"},{"uni_lemma":"plant"},{"uni_lemma":"tape (object)"},{"uni_lemma":"closet"},{"uni_lemma":"garage"},{"uni_lemma":"high chair"},{"uni_lemma":"oven"},{"uni_lemma":"flag"},{"uni_lemma":"shovel"},{"uni_lemma":"wind"},{"uni_lemma":"goose"},{"uni_lemma":"lamb"},{"uni_lemma":"pony"},{"uni_lemma":"rooster"},{"uni_lemma":"turkey"},{"uni_lemma":"green beans"},{"uni_lemma":"jelly"},{"uni_lemma":"lollipop"},{"uni_lemma":"nut"},{"uni_lemma":"sauce"},{"uni_lemma":"soda"},{"uni_lemma":"vitamin"},{"uni_lemma":"jeans"},{"uni_lemma":"mitten"},{"uni_lemma":"underpants"},{"uni_lemma":"shoulder"},{"uni_lemma":"can (object)"},{"uni_lemma":"dish"},{"uni_lemma":"penny"},{"uni_lemma":"radio"},{"uni_lemma":"drawer"},{"uni_lemma":"dryer"},{"uni_lemma":"living room"},{"uni_lemma":"rocking chair"},{"uni_lemma":"stove"},{"uni_lemma":"washing machine"},{"uni_lemma":"yard"},{"uni_lemma":"hose"},{"uni_lemma":"ladder"},{"uni_lemma":"lawn mower"},{"uni_lemma":"sandbox"},{"uni_lemma":"sidewalk"},{"uni_lemma":"snowman"},{"uni_lemma":"donkey"},{"uni_lemma":"moose"},{"uni_lemma":"wolf"},{"uni_lemma":"glue (object)"},{"uni_lemma":"gum"},{"uni_lemma":"jello"},{"uni_lemma":"melon"},{"uni_lemma":"salt"},{"uni_lemma":"lamp"},{"uni_lemma":"nail (object)"},{"uni_lemma":"garden"},{"uni_lemma":"roof"},{"uni_lemma":"sprinkler"},{"uni_lemma":"tricycle"},{"uni_lemma":"coke"},{"uni_lemma":"pudding"},{"uni_lemma":"sneaker"},{"uni_lemma":"ankle"},{"uni_lemma":"jar"},{"uni_lemma":"mop (object)"},{"uni_lemma":"stone"},{"uni_lemma":"bag"},{"uni_lemma":"book"},{"uni_lemma":"bun"},{"uni_lemma":"sugar"},{"uni_lemma":"dog"},{"uni_lemma":"chick"},{"uni_lemma":"porridge"},{"uni_lemma":"rice"},{"uni_lemma":"dumpling"},{"uni_lemma":"shrimp"},{"uni_lemma":"pear"},{"uni_lemma":"basin"},{"uni_lemma":"pocket"},{"uni_lemma":"watermelon"},{"uni_lemma":"chopstick"},{"uni_lemma":"pot"},{"uni_lemma":"gun"},{"uni_lemma":"song"},{"uni_lemma":"clothes"},{"uni_lemma":"stool"},{"uni_lemma":"soil"},{"uni_lemma":"kefir"},{"uni_lemma":"tea"},{"uni_lemma":"tomato"},{"uni_lemma":"cucumber"},{"uni_lemma":"eyebrow"},{"uni_lemma":"pigeon"},{"uni_lemma":"newspaper"},{"uni_lemma":"handkerchief"},{"uni_lemma":"mirror"},{"uni_lemma":"leaf"},{"uni_lemma":"road"},{"uni_lemma":"umbrella"},{"uni_lemma":"cabbage"},{"uni_lemma":"tofu"},{"uni_lemma":"peanut"},{"uni_lemma":"flour"},{"uni_lemma":"brain"},{"uni_lemma":"neck"},{"uni_lemma":"panda"},{"uni_lemma":"swallow (animal)"},{"uni_lemma":"battery"},{"uni_lemma":"rope"},{"uni_lemma":"cloth"},{"uni_lemma":"scarf"},{"uni_lemma":"sleeve"},{"uni_lemma":"house"},{"uni_lemma":"mountain"},{"uni_lemma":"sand"},{"uni_lemma":"scallion"},{"uni_lemma":"fruit"},{"uni_lemma":"dragon"},{"uni_lemma":"mosquito"},{"uni_lemma":"fly (animal)"},{"uni_lemma":"snake"},{"uni_lemma":"fan"},{"uni_lemma":"piano"},{"uni_lemma":"rag"},{"uni_lemma":"thing"},{"uni_lemma":"kite"},{"uni_lemma":"wheel"},{"uni_lemma":"vest"},{"uni_lemma":"liver (food)"},{"uni_lemma":"sprouts"},{"uni_lemma":"spinach"},{"uni_lemma":"mushroom"},{"uni_lemma":"pepper"},{"uni_lemma":"vinegar"},{"uni_lemma":"thumb"},{"uni_lemma":"camel"},{"uni_lemma":"peacock"},{"uni_lemma":"dragonfly"},{"uni_lemma":"wood"},{"uni_lemma":"bell"},{"uni_lemma":"skirt"},{"uni_lemma":"faucet"},{"uni_lemma":"air conditioner"},{"uni_lemma":"balcony"},{"uni_lemma":"elevator"},{"uni_lemma":"traffic light"},{"uni_lemma":"taxi"},{"uni_lemma":"donut"},{"uni_lemma":"gorilla"},{"uni_lemma":"voice recorder"},{"uni_lemma":"dustpan"},{"uni_lemma":"board game"},{"uni_lemma":"sandal"},{"uni_lemma":"puddle"},{"uni_lemma":"gas"},{"uni_lemma":"branch"},{"uni_lemma":"trampoline"},{"uni_lemma":"crane"},{"uni_lemma":"hedgehog"},{"uni_lemma":"eagle"},{"uni_lemma":"dinosaur"},{"uni_lemma":"jeep"},{"uni_lemma":"tangerine"},{"uni_lemma":"dried seaweed"},{"uni_lemma":"crocodile"},{"uni_lemma":"kimchi"},{"uni_lemma":"hip"},{"uni_lemma":"hippopotamus"},{"uni_lemma":"rice cake"},{"uni_lemma":"toothpaste"},{"uni_lemma":"sweet potato"},{"uni_lemma":"trash can"},{"uni_lemma":"fire"},{"uni_lemma":"noodles"},{"uni_lemma":"seesaw"},{"uni_lemma":"fox"},{"uni_lemma":"dress shoe"},{"uni_lemma":"persimmon"},{"uni_lemma":"radish"},{"uni_lemma":"back (body part)"},{"uni_lemma":"blood"},{"uni_lemma":"wallet"},{"uni_lemma":"robot"},{"uni_lemma":"goat"},{"uni_lemma":"sparrow"},{"uni_lemma":"fingernail"},{"uni_lemma":"peach"},{"uni_lemma":"body"},{"uni_lemma":"hanger"},{"uni_lemma":"calf"},{"uni_lemma":"waist"},{"uni_lemma":"ground"},{"uni_lemma":"sled"},{"uni_lemma":"microwave"},{"uni_lemma":"hot dog"},{"uni_lemma":"tray"},{"uni_lemma":"spaghetti"},{"uni_lemma":"boulder"},{"uni_lemma":"ball"},{"uni_lemma":"spider"},{"uni_lemma":"kangaroo"},{"uni_lemma":"sunglasses"},{"uni_lemma":"breast"},{"uni_lemma":"photo"},{"uni_lemma":"computer"},{"uni_lemma":"koala"},{"uni_lemma":"jam"},{"uni_lemma":"nail (body part)"},{"uni_lemma":"backyard"},{"uni_lemma":"wall"},{"uni_lemma":"mango"},{"uni_lemma":"pineapple"},{"uni_lemma":"cockroach"},{"uni_lemma":"shed"},{"uni_lemma":"waves"},{"uni_lemma":"biscuit"},{"uni_lemma":"vegetable"},{"uni_lemma":"sausage"},{"uni_lemma":"floor"},{"uni_lemma":"macaroni"},{"uni_lemma":"sticker"},{"uni_lemma":"minibus"},{"uni_lemma":"pacifier"},{"uni_lemma":"carousel"},{"uni_lemma":"sea"},{"uni_lemma":"crab"},{"uni_lemma":"cook"},{"uni_lemma":"police car"},{"uni_lemma":"teapot"},{"uni_lemma":"pork"},{"uni_lemma":"ham"},{"uni_lemma":"microphone"},{"uni_lemma":"thunder"},{"uni_lemma":"tunnel"},{"uni_lemma":"fountain"},{"uni_lemma":"snail"},{"uni_lemma":"keys"},{"uni_lemma":"hen"},{"uni_lemma":"light"},{"uni_lemma":"phone"},{"uni_lemma":"worm"},{"uni_lemma":"olive"},{"uni_lemma":"orange"},{"uni_lemma":"cap"},{"uni_lemma":"paint (object)"},{"uni_lemma":"sofa"},{"uni_lemma":"drum"},{"uni_lemma":"snack"},{"uni_lemma":"sponge"},{"uni_lemma":"patio"},{"uni_lemma":"toilet"},{"uni_lemma":"insect"},{"uni_lemma":"dolphin"},{"uni_lemma":"ladybug"},{"uni_lemma":"guitar"},{"uni_lemma":"croquette"},{"uni_lemma":"trumpet"},{"uni_lemma":"croissant"},{"uni_lemma":"puree"},{"uni_lemma":"swimsuit"},{"uni_lemma":"clothing"},{"uni_lemma":"back"},{"uni_lemma":"wardrobe"},{"uni_lemma":"dining room"},{"uni_lemma":"river"},{"uni_lemma":"doorbell"},{"uni_lemma":"ambulance"},{"uni_lemma":"lemon"},{"uni_lemma":"garbage"},{"uni_lemma":"shampoo"},{"uni_lemma":"bridge"},{"uni_lemma":"watering can"},{"uni_lemma":"bull"},{"uni_lemma":"skate (object)"},{"uni_lemma":"card"},{"uni_lemma":"lettuce"},{"uni_lemma":"beard"},{"uni_lemma":"sheet"},{"uni_lemma":"bank"},{"uni_lemma":"cart"},{"uni_lemma":"marker"},{"uni_lemma":"onion"},{"uni_lemma":"dessert"},{"uni_lemma":"tracksuit"},{"uni_lemma":"elbow"},{"uni_lemma":"vagina"},{"uni_lemma":"pan"},{"uni_lemma":"fireplace"},{"uni_lemma":"buttocks"},{"uni_lemma":"rabbit"},{"uni_lemma":"bath"},{"uni_lemma":"sweets"},{"uni_lemma":"ship"},{"uni_lemma":"nail (finger)"},{"uni_lemma":"crow"},{"uni_lemma":"eggplant"},{"uni_lemma":"straw"},{"uni_lemma":"whale"},{"uni_lemma":"forehead"},{"uni_lemma":"tail"},{"uni_lemma":"curtain"},{"uni_lemma":"vacuum cleaner"},{"uni_lemma":"chicken"},{"uni_lemma":"clay"},{"uni_lemma":"gloves"},{"uni_lemma":"tape"},{"uni_lemma":"apron"},{"uni_lemma":"ribbon"},{"uni_lemma":"hair dryer"},{"uni_lemma":"soy sauce"},{"uni_lemma":"parking lot"},{"uni_lemma":"pen/pencil"},{"uni_lemma":"hair clip"},{"uni_lemma":"yogurt drink"},{"uni_lemma":"remote control"},{"uni_lemma":"notebook"},{"uni_lemma":"whistle (object)"},{"uni_lemma":"honey"},{"uni_lemma":"meatball"},{"uni_lemma":"iron (object)"},{"uni_lemma":"cupboard"},{"uni_lemma":"radiator"},{"uni_lemma":"armchair"},{"uni_lemma":"porch"},{"uni_lemma":"drum (object)"},{"uni_lemma":"cherry"},{"uni_lemma":"earring"},{"uni_lemma":"throat"},{"uni_lemma":"pomegranate"},{"uni_lemma":"mustache"},{"uni_lemma":"eyelash"},{"uni_lemma":"coffee table"},{"uni_lemma":"mud"},{"uni_lemma":"dust"},{"uni_lemma":"apricot"},{"uni_lemma":"bracelet"},{"uni_lemma":"headband"},{"uni_lemma":"t-shirt"},{"uni_lemma":"cotton"},{"uni_lemma":"smoke"},{"uni_lemma":"ketchup"},{"uni_lemma":"chickpea"},{"uni_lemma":"salami"},{"uni_lemma":"bandaid"},{"uni_lemma":"accident"},{"uni_lemma":"stork"},{"uni_lemma":"parrot"},{"uni_lemma":"heart"},{"uni_lemma":"kayak"},{"uni_lemma":"puppet"},{"uni_lemma":"tights"},{"uni_lemma":"earth"},{"uni_lemma":"lake"},{"uni_lemma":"traffic"},{"uni_lemma":"tarhana"},{"uni_lemma":"blouse"},{"uni_lemma":"carpet"},{"uni_lemma":"chili"},{"uni_lemma":"taco"},{"uni_lemma":"tortilla"},{"uni_lemma":"colors"},{"uni_lemma":"tuna"},{"uni_lemma":"painting"},{"uni_lemma":"quesadilla"},{"uni_lemma":"matches"},{"uni_lemma":"candle"},{"uni_lemma":"bench"},{"uni_lemma":"seal (animal)"},{"uni_lemma":"atole"},{"uni_lemma":"flower pot"},{"uni_lemma":"beetle"},{"uni_lemma":"fir"},{"uni_lemma":"cutlet"},{"uni_lemma":"compote"},{"uni_lemma":"berry"},{"uni_lemma":"sour cream"},{"uni_lemma":"piglet"},{"uni_lemma":"locomotive"},{"uni_lemma":"rake (object)"},{"uni_lemma":"spade"},{"uni_lemma":"top"},{"uni_lemma":"cottage cheese"},{"uni_lemma":"pill"},{"uni_lemma":"corridor"},{"uni_lemma":"album"},{"uni_lemma":"pie"},{"uni_lemma":"frost"},{"uni_lemma":"mold"},{"uni_lemma":"raspberry"},{"uni_lemma":"plum"},{"uni_lemma":"beads"},{"uni_lemma":"snowsuit"},{"uni_lemma":"kiwi"},{"uni_lemma":"beet"},{"uni_lemma":"bush"},{"uni_lemma":"palm"},{"uni_lemma":"furniture"},{"uni_lemma":"icicle"},{"uni_lemma":"coin"},{"uni_lemma":"samosa"},{"uni_lemma":"pipe"},{"uni_lemma":"cassava"},{"uni_lemma":"push"},{"uni_lemma":"mat"},{"uni_lemma":"hole"},{"uni_lemma":"papaya"},{"uni_lemma":"shark"},{"uni_lemma":"mug"},{"uni_lemma":"digger"},{"uni_lemma":"guava"},{"uni_lemma":"soy milk"},{"uni_lemma":"helmet"},{"uni_lemma":"cd"},{"uni_lemma":"caterpillar"},{"uni_lemma":"mask"},{"uni_lemma":"clam"},{"uni_lemma":"nugget"},{"uni_lemma":"raincoat"},{"uni_lemma":"plug"},{"uni_lemma":"goal"},{"uni_lemma":"plantain"},{"uni_lemma":"park"},{"uni_lemma":"gut"},{"uni_lemma":"neighborhood"},{"uni_lemma":"music"},{"uni_lemma":"clown"},{"uni_lemma":"cocoa"},{"uni_lemma":"syrup"},{"uni_lemma":"trolley"},{"uni_lemma":"cell phone"},{"uni_lemma":"cushion"},{"uni_lemma":"steak"},{"uni_lemma":"terrace"},{"uni_lemma":"video"},{"uni_lemma":"racket"},{"uni_lemma":"smoothie"},{"uni_lemma":"lighter"},{"uni_lemma":"play pen"},{"uni_lemma":"tablecloth"},{"uni_lemma":"overalls"}] 
for (let i = 0; i < words.length; ++i) {
    var word = words[i];
    words_array.push(word);
};

var words1= words_array.slice(0,221);
var words2 = words_array.slice(221,442);
var words3 = words_array.slice(442,665);


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var arrayof_arrays = [words1, words2, words3]; 
// console.log("length");
// console.log(words.length);
// console.log(words1.length);
// console.log(words2.length);
// console.log(words3.length);



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
        
        console.log(study_id, session_id, subject_id);
        
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
                //console.log(jsPsych.data.get().values()[2].response.Q0);
                console.log(jsPsych.data.getLastTrialData().values()[0].response.Q0);

                //var response = JSON.parse(jsPsych.data.get().values()[2].response.Q0); 
                //var response = JSON.parse(data.response).Q0; // Get the participant's response
                //var response = jsPsych.data.get().values()[2].response.Q0; 
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
//timeline.push(practice_solidity);

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

                //var response = JSON.parse(jsPsych.data.get().values()[2].response.Q0); 
                //var response = JSON.parse(data.response).Q0; // Get the participant's response
                //var response = jsPsych.data.get().values()[2].response.Q0; 
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
                    prompt: jsPsych.timelineVariable('uni_lemma'),
                    options: ['solid', 'non-solid', 'unclear/unknown'],
                    required: true,
                }
      
            ],
            
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('uni_lemma');
                var blockname = "solidity";


                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });
                // Add the 'word' property to the jsPsych data for this trial
                //jsPsych.data.addProperties({ word: currentWord });
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


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords2 = chosenarray.slice(0, 20);

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
                    prompt: jsPsych.timelineVariable('uni_lemma'),
                    options: ['count noun', 'mass noun' , 'unclear/unknown'],
                    required: true ,
                    // on_finish: function(data){
                    //       data.word = selectedWords2['uni_lemma'];
                    //     }
                }
            ],
            on_finish: function(data) {
                // Access the value of 'uni_lemma' for the current trial
                var currentWord = jsPsych.timelineVariable('uni_lemma');
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

// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords3 = chosenarray.slice(0, 20);

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
                    prompt: () => `${jsPsych.timelineVariable('uni_lemma')} belongs to a category that is organized by:`,
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
                var currentWord = jsPsych.timelineVariable('uni_lemma');
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
console.log(jsPsych.timelineVariable('uni_lemma'));

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
