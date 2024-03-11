var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function(){
      jsPsych.data.displayData();
    }
  });
  


/*function logExpData() {
    const logData = {
        rt: 5,
        trial_type: 'hg',
        trial_index: 2,
        time_elapsed: 2,
        internal_node_id:2,
        subject: 'jhjgfgh',
        
    };

    fetch('/api/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error logging action:', error));
};*/

// const jsPsych = initJsPsych({
//     on_finish: function () {
//         jsPsych.data.displayData('csv');
//       }
//   });

let timeline = [];
var subject_id = jsPsych.randomization.randomID(15);

jsPsych.data.addProperties({
    subject: subject_id,
  });
// push experiment logic the timeline here...
// ......
// var trial1 = {
//     type: jsPsychInstructions,
//     pages: [
//              '<br>' + 
//     '<img src="stanford.png"></img>' +
//     'By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact us at languagecoglab@gmail.com. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured. ',
//     'In this experiment, you will see a couple of word, you are asked to make some judgments about these words. Click next to begin.',
//     ],
//     show_clickable_nav: true
// }

var trial1 = {
    type: jsPsychInstructions,
    pages: [
        '<div style="margin-bottom: 100px;"><img src="stanford.png"></div>' +
        '<p>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.</p>' +
        '<p>If you have questions about this research, please contact us at <a href="mailto:languagecoglab@gmail.com">languagecoglab@gmail.com</a>.</p>' +
        '<p>You must be at least 18 years old to participate. Your participation in this research is voluntary.</p>' +
        '<p>You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.</p>' +
        '<p>Your anonymity is assured.</p>' +
        '<p>In this experiment, you will see a couple of words, you are asked to make some judgments about these words. Click next to begin.</p>',
    ],
    show_clickable_nav: true
};
timeline.push(trial1)


const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p> For example: <p>' +
    '<p><font size="4"> </bold>In the sentence: I need several pens</bold>. </font></p>' +
    '<p> Pen is a solid object </p>' +
    '<p> Pen is a count noun </p>' +
    '<p> Pen belongs to a category of entities organized by their shape i.e. all pens have the same shape, but could have different colors, or made of different materials. </p>' +
    '<P> -------------- <P>' +
    '<p><font size="4"> In the sentence: I need some water. </font></p>' +
    '<p> Water is a non solid </p>' +
    '<p> Water is a mass noun </p>' +
    '<p> Water belongs to a category of entities organized by material </p>' ,
    choices: ['Continue']
};
timeline.push(instructions);


var words_array = [];
let words = [{"uni_lemma":"banana"},{"uni_lemma":"shoe"},{"uni_lemma":"bird"},{"uni_lemma":"cat"},{"uni_lemma":"duck"},{"uni_lemma":"car"},{"uni_lemma":"eye"},{"uni_lemma":"nose"},{"uni_lemma":"kitty"},{"uni_lemma":"balloon"},{"uni_lemma":"bubbles"},{"uni_lemma":"apple"},{"uni_lemma":"cheese"},{"uni_lemma":"cookie"},{"uni_lemma":"milk"},{"uni_lemma":"hat"},{"uni_lemma":"ear"},{"uni_lemma":"bear"},{"uni_lemma":"fish (animal)"},{"uni_lemma":"truck"},{"uni_lemma":"juice"},{"uni_lemma":"water (beverage)"},{"uni_lemma":"diaper"},{"uni_lemma":"owie"},{"uni_lemma":"bottle"},{"uni_lemma":"cow"},{"uni_lemma":"airplane"},{"uni_lemma":"cracker"},{"uni_lemma":"sock"},{"uni_lemma":"belly button"},{"uni_lemma":"hair"},{"uni_lemma":"mouth"},{"uni_lemma":"cup"},{"uni_lemma":"spoon"},{"uni_lemma":"bed"},{"uni_lemma":"door"},{"uni_lemma":"tree"},{"uni_lemma":"water (not beverage)"},{"uni_lemma":"bee"},{"uni_lemma":"bunny"},{"uni_lemma":"horse"},{"uni_lemma":"monkey"},{"uni_lemma":"pig"},{"uni_lemma":"puppy"},{"uni_lemma":"boat"},{"uni_lemma":"bus"},{"uni_lemma":"train"},{"uni_lemma":"toy (object)"},{"uni_lemma":"pizza"},{"uni_lemma":"foot"},{"uni_lemma":"hand"},{"uni_lemma":"head"},{"uni_lemma":"toe"},{"uni_lemma":"tummy"},{"uni_lemma":"blanket"},{"uni_lemma":"key"},{"uni_lemma":"light (object)"},{"uni_lemma":"telephone"},{"uni_lemma":"chair"},{"uni_lemma":"potty"},{"uni_lemma":"flower"},{"uni_lemma":"moon"},{"uni_lemma":"bug"},{"uni_lemma":"chicken (animal)"},{"uni_lemma":"elephant"},{"uni_lemma":"frog"},{"uni_lemma":"turtle"},{"uni_lemma":"bicycle"},{"uni_lemma":"blocks"},{"uni_lemma":"doll"},{"uni_lemma":"bread"},{"uni_lemma":"cake"},{"uni_lemma":"cereal"},{"uni_lemma":"chicken (food)"},{"uni_lemma":"drink (beverage)"},{"uni_lemma":"egg"},{"uni_lemma":"grapes"},{"uni_lemma":"ice cream"},{"uni_lemma":"orange (food)"},{"uni_lemma":"boots"},{"uni_lemma":"pants"},{"uni_lemma":"shirt"},{"uni_lemma":"arm"},{"uni_lemma":"butt"},{"uni_lemma":"finger"},{"uni_lemma":"tooth"},{"uni_lemma":"bowl"},{"uni_lemma":"box"},{"uni_lemma":"brush (object)"},{"uni_lemma":"fork"},{"uni_lemma":"pillow"},{"uni_lemma":"toothbrush"},{"uni_lemma":"bathtub"},{"uni_lemma":"tv"},{"uni_lemma":"rain"},{"uni_lemma":"rock (object)"},{"uni_lemma":"star"},{"uni_lemma":"sun"},{"uni_lemma":"swing (object)"},{"uni_lemma":"butterfly"},{"uni_lemma":"lion"},{"uni_lemma":"mouse"},{"uni_lemma":"owl"},{"uni_lemma":"sheep"},{"uni_lemma":"teddybear"},{"uni_lemma":"tiger"},{"uni_lemma":"crayon"},{"uni_lemma":"candy"},{"uni_lemma":"carrot"},{"uni_lemma":"fish (food)"},{"uni_lemma":"food"},{"uni_lemma":"french fries"},{"uni_lemma":"ice"},{"uni_lemma":"strawberry"},{"uni_lemma":"yogurt"},{"uni_lemma":"button"},{"uni_lemma":"coat"},{"uni_lemma":"jacket"},{"uni_lemma":"pajamas"},{"uni_lemma":"cheek"},{"uni_lemma":"face"},{"uni_lemma":"knee"},{"uni_lemma":"leg"},{"uni_lemma":"tongue"},{"uni_lemma":"paper"},{"uni_lemma":"soap"},{"uni_lemma":"towel"},{"uni_lemma":"bathroom"},{"uni_lemma":"table"},{"uni_lemma":"grass"},{"uni_lemma":"slide (object)"},{"uni_lemma":"animal"},{"uni_lemma":"giraffe"},{"uni_lemma":"firetruck"},{"uni_lemma":"stroller"},{"uni_lemma":"pen"},{"uni_lemma":"puzzle"},{"uni_lemma":"story"},{"uni_lemma":"cheerios"},{"uni_lemma":"chocolate"},{"uni_lemma":"corn"},{"uni_lemma":"pasta"},{"uni_lemma":"pancake"},{"uni_lemma":"peanut butter"},{"uni_lemma":"popcorn"},{"uni_lemma":"chips"},{"uni_lemma":"sandwich"},{"uni_lemma":"toast"},{"uni_lemma":"bib"},{"uni_lemma":"chin"},{"uni_lemma":"broom"},{"uni_lemma":"clock"},{"uni_lemma":"glasses"},{"uni_lemma":"money"},{"uni_lemma":"picture"},{"uni_lemma":"plate"},{"uni_lemma":"trash"},{"uni_lemma":"vacuum"},{"uni_lemma":"couch"},{"uni_lemma":"kitchen"},{"uni_lemma":"room"},{"uni_lemma":"shower"},{"uni_lemma":"stairs"},{"uni_lemma":"window"},{"uni_lemma":"pool"},{"uni_lemma":"sky"},{"uni_lemma":"snow"},{"uni_lemma":"stick"},{"uni_lemma":"alligator"},{"uni_lemma":"ant"},{"uni_lemma":"squirrel"},{"uni_lemma":"zebra"},{"uni_lemma":"helicopter"},{"uni_lemma":"motorcycle"},{"uni_lemma":"tractor"},{"uni_lemma":"pencil"},{"uni_lemma":"present"},{"uni_lemma":"applesauce"},{"uni_lemma":"beans"},{"uni_lemma":"butter"},{"uni_lemma":"coffee"},{"uni_lemma":"hamburger"},{"uni_lemma":"peas"},{"uni_lemma":"popsicle"},{"uni_lemma":"potato"},{"uni_lemma":"pumpkin"},{"uni_lemma":"raisin"},{"uni_lemma":"soup"},{"uni_lemma":"dress (object)"},{"uni_lemma":"shorts"},{"uni_lemma":"sweater"},{"uni_lemma":"zipper"},{"uni_lemma":"lip"},{"uni_lemma":"basket"},{"uni_lemma":"comb (object)"},{"uni_lemma":"knife"},{"uni_lemma":"medicine"},{"uni_lemma":"napkin"},{"uni_lemma":"purse"},{"uni_lemma":"scissors"},{"uni_lemma":"tissue"},{"uni_lemma":"watch (object)"},{"uni_lemma":"bedroom"},{"uni_lemma":"crib"},{"uni_lemma":"refrigerator"},{"uni_lemma":"sink"},{"uni_lemma":"cloud"},{"uni_lemma":"street"},{"uni_lemma":"deer"},{"uni_lemma":"penguin"},{"uni_lemma":"bat (object)"},{"uni_lemma":"chalk"},{"uni_lemma":"game"},{"uni_lemma":"play dough"},{"uni_lemma":"pastry"},{"uni_lemma":"meat"},{"uni_lemma":"muffin"},{"uni_lemma":"pickle"},{"uni_lemma":"pretzel"},{"uni_lemma":"belt"},{"uni_lemma":"glove"},{"uni_lemma":"necklace"},{"uni_lemma":"slipper"},{"uni_lemma":"penis"},{"uni_lemma":"bucket"},{"uni_lemma":"camera"},{"uni_lemma":"glass"},{"uni_lemma":"hammer"},{"uni_lemma":"plant"},{"uni_lemma":"tape (object)"},{"uni_lemma":"closet"},{"uni_lemma":"garage"},{"uni_lemma":"high chair"},{"uni_lemma":"oven"},{"uni_lemma":"flag"},{"uni_lemma":"shovel"},{"uni_lemma":"wind"},{"uni_lemma":"goose"},{"uni_lemma":"lamb"},{"uni_lemma":"pony"},{"uni_lemma":"rooster"},{"uni_lemma":"turkey"},{"uni_lemma":"green beans"},{"uni_lemma":"jelly"},{"uni_lemma":"lollipop"},{"uni_lemma":"nut"},{"uni_lemma":"sauce"},{"uni_lemma":"soda"},{"uni_lemma":"vitamin"},{"uni_lemma":"jeans"},{"uni_lemma":"mitten"},{"uni_lemma":"underpants"},{"uni_lemma":"shoulder"},{"uni_lemma":"can (object)"},{"uni_lemma":"dish"},{"uni_lemma":"penny"},{"uni_lemma":"radio"},{"uni_lemma":"drawer"},{"uni_lemma":"dryer"},{"uni_lemma":"living room"},{"uni_lemma":"rocking chair"},{"uni_lemma":"stove"},{"uni_lemma":"washing machine"},{"uni_lemma":"yard"},{"uni_lemma":"hose"},{"uni_lemma":"ladder"},{"uni_lemma":"lawn mower"},{"uni_lemma":"sandbox"},{"uni_lemma":"sidewalk"},{"uni_lemma":"snowman"},{"uni_lemma":"donkey"},{"uni_lemma":"moose"},{"uni_lemma":"wolf"},{"uni_lemma":"glue (object)"},{"uni_lemma":"gum"},{"uni_lemma":"jello"},{"uni_lemma":"melon"},{"uni_lemma":"salt"},{"uni_lemma":"lamp"},{"uni_lemma":"nail (object)"},{"uni_lemma":"garden"},{"uni_lemma":"roof"},{"uni_lemma":"sprinkler"},{"uni_lemma":"tricycle"},{"uni_lemma":"coke"},{"uni_lemma":"pudding"},{"uni_lemma":"sneaker"},{"uni_lemma":"ankle"},{"uni_lemma":"jar"},{"uni_lemma":"mop (object)"},{"uni_lemma":"stone"},{"uni_lemma":"bag"},{"uni_lemma":"book"},{"uni_lemma":"bun"},{"uni_lemma":"sugar"},{"uni_lemma":"dog"},{"uni_lemma":"chick"},{"uni_lemma":"porridge"},{"uni_lemma":"rice"},{"uni_lemma":"dumpling"},{"uni_lemma":"shrimp"},{"uni_lemma":"pear"},{"uni_lemma":"basin"},{"uni_lemma":"pocket"},{"uni_lemma":"watermelon"},{"uni_lemma":"chopstick"},{"uni_lemma":"pot"},{"uni_lemma":"gun"},{"uni_lemma":"song"},{"uni_lemma":"clothes"},{"uni_lemma":"stool"},{"uni_lemma":"soil"},{"uni_lemma":"kefir"},{"uni_lemma":"tea"},{"uni_lemma":"tomato"},{"uni_lemma":"cucumber"},{"uni_lemma":"eyebrow"},{"uni_lemma":"pigeon"},{"uni_lemma":"newspaper"},{"uni_lemma":"handkerchief"},{"uni_lemma":"mirror"},{"uni_lemma":"leaf"},{"uni_lemma":"road"},{"uni_lemma":"umbrella"},{"uni_lemma":"cabbage"},{"uni_lemma":"tofu"},{"uni_lemma":"peanut"},{"uni_lemma":"flour"},{"uni_lemma":"brain"},{"uni_lemma":"neck"},{"uni_lemma":"panda"},{"uni_lemma":"swallow (animal)"},{"uni_lemma":"battery"},{"uni_lemma":"rope"},{"uni_lemma":"cloth"},{"uni_lemma":"scarf"},{"uni_lemma":"sleeve"},{"uni_lemma":"house"},{"uni_lemma":"mountain"},{"uni_lemma":"sand"},{"uni_lemma":"scallion"},{"uni_lemma":"fruit"},{"uni_lemma":"dragon"},{"uni_lemma":"mosquito"},{"uni_lemma":"fly (animal)"},{"uni_lemma":"snake"},{"uni_lemma":"fan"},{"uni_lemma":"piano"},{"uni_lemma":"rag"},{"uni_lemma":"thing"},{"uni_lemma":"kite"},{"uni_lemma":"wheel"},{"uni_lemma":"vest"},{"uni_lemma":"liver (food)"},{"uni_lemma":"sprouts"},{"uni_lemma":"spinach"},{"uni_lemma":"mushroom"},{},{"uni_lemma":"pepper"},{"uni_lemma":"vinegar"},{"uni_lemma":"thumb"},{"uni_lemma":"camel"},{"uni_lemma":"peacock"},{"uni_lemma":"dragonfly"},{"uni_lemma":"wood"},{"uni_lemma":"bell"},{"uni_lemma":"skirt"},{"uni_lemma":"faucet"},{"uni_lemma":"air conditioner"},{"uni_lemma":"balcony"},{"uni_lemma":"elevator"},{"uni_lemma":"traffic light"},{"uni_lemma":"taxi"},{"uni_lemma":"donut"},{"uni_lemma":"gorilla"},{"uni_lemma":"voice recorder"},{"uni_lemma":"dustpan"},{"uni_lemma":"board game"},{"uni_lemma":"sandal"},{"uni_lemma":"puddle"},{"uni_lemma":"gas"},{"uni_lemma":"branch"},{"uni_lemma":"trampoline"},{"uni_lemma":"crane"},{"uni_lemma":"hedgehog"},{"uni_lemma":"eagle"},{"uni_lemma":"dinosaur"},{"uni_lemma":"jeep"},{"uni_lemma":"tangerine"},{"uni_lemma":"dried seaweed"},{"uni_lemma":"crocodile"},{"uni_lemma":"kimchi"},{"uni_lemma":"hip"},{"uni_lemma":"hippopotamus"},{"uni_lemma":"rice cake"},{"uni_lemma":"toothpaste"},{"uni_lemma":"sweet potato"},{"uni_lemma":"trash can"},{"uni_lemma":"fire"},{"uni_lemma":"noodles"},{"uni_lemma":"seesaw"},{"uni_lemma":"fox"},{"uni_lemma":"dress shoe"},{"uni_lemma":"Persimmon"},{"uni_lemma":"radish"},{"uni_lemma":"back (body part)"},{"uni_lemma":"blood"},{"uni_lemma":"wallet"},{"uni_lemma":"robot"},{"uni_lemma":"goat"},{"uni_lemma":"sparrow"},{"uni_lemma":"fingernail"},{"uni_lemma":"peach"},{"uni_lemma":"body"},{"uni_lemma":"hanger"},{"uni_lemma":"calf"},{"uni_lemma":"waist"},{"uni_lemma":"ground"},{"uni_lemma":"sled"},{"uni_lemma":"microwave"},{"uni_lemma":"hot dog"},{"uni_lemma":"tray"},{"uni_lemma":"spaghetti"},{"uni_lemma":"boulder"}]
for (let i = 0; i < words.length; ++i) {
    var word = words[i];
    words_array.push(word);
};


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the words_array to randomize the order
shuffleArray(words_array);

// Select the first 100 rows
var selectedWords = words_array.slice(0, 5);

console.log(selectedWords);


// USE THIS FUNCTION TO LOG VARIABLES
console.log('Logging Variables') ;

// --- Example Variables to log
let example_data = {
    rt: Math.random() * 10,
    trial_type: 'hg',
    trial_index: Math.random() * 10,
    time_elapsed: Math.random() * 10, 
    internal_node_id: Math.random() * 10,
    subject: 'jhjgfgh'
};

logExpData(example_data);


var block1 = {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: jsPsych.timelineVariable('uni_lemma'),
                    options: ['solid', 'unclear', 'non solid'],
                    required: true ,
                    on_finish: function(data){
                          data.word = selectedWords['uni_lemma'];
                        }
                }
            ],
        },
    ],
    timeline_variables: selectedWords,
    randomize_order: true
};


timeline.push(block1);

jsPsych.run(timeline)