

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
                //window.location.href = "https://app.prolific.com/submissions/complete?cc=C1O4GW39";
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
let words = [{"theword":"책"},{"theword":"눈"},{"theword":"발"},{"theword":"개"},{"theword":"신/신발"},
    {"theword":"양말"},{"theword":"딸기"},{"theword":"바나나"},{"theword":"귀"},{"theword":"손"},
    {"theword":"입"},{"theword":"꽃"},{"theword":"모자"},{"theword":"바지"},{"theword":"고기"},
    {"theword":"귤"},{"theword":"사과"},{"theword":"사탕"},{"theword":"머리"},{"theword":"배"},
    {"theword":"풍선"},{"theword":"고양이"},{"theword":"곰"},{"theword":"돼지"},{"theword":"새"},
    {"theword":"오리"},{"theword":"토끼"},{"theword":"가방"},{"theword":"기저귀"},{"theword":"문"},
    {"theword":"이불"},{"theword":"김"},{"theword":"아이스크림"},{"theword":"주스"},{"theword":"포도"},{"theword":"배꼽"},{"theword":"약"},{"theword":"컵"},{"theword":"기차"},{"theword":"버스"},
    {"theword":"비행기"},{"theword":"인형"},{"theword":"나비"},{"theword":"말"},{"theword":"물고기"},
    {"theword":"사자"},{"theword":"소"},{"theword":"코끼리"},{"theword":"호랑이"},{"theword":"옷/꼬까"},{"theword":"베개"},{"theword":"의자"},{"theword":"치즈"},{"theword":"다리"},{"theword":"이/이빨"},{"theword":"전화"},{"theword":"칫솔"},{"theword":"나무"},{"theword":"배"},{"theword":"자전거"},{"theword":"기린"},{"theword":"악어"},{"theword":"방"},{"theword":"텔레비전"},{"theword":"계란/달걀"},{"theword":"김치"},{"theword":"수박"},{"theword":"요구르트"},{"theword":"얼굴"},
    {"theword":"엉덩이"},{"theword":"가위"},{"theword":"비누"},{"theword":"수건"},{"theword":"숟가락"},{"theword":"시계"},{"theword":"안경"},{"theword":"우산"},{"theword":"포크"},{"theword":"휴지"},{"theword":"비"},{"theword":"유모차"},{"theword":"개구리"},{"theword":"닭"},{"theword":"하마"},{"theword":"팬티"},{"theword":"냉장고"},{"theword":"침대"},{"theword":"떡"},{"theword":"콩"},
    {"theword":"목"},{"theword":"팔"},{"theword":"돈"},{"theword":"빗"},{"theword":"치약"},
    {"theword":"그네"},{"theword":"눈"},{"theword":"미끄럼틀"},{"theword":"별"},{"theword":"오토바이"},{"theword":"택시"},{"theword":"블록"},{"theword":"연필"},{"theword":"장난감"},{"theword":"종이"},{"theword":"크레용/크레파스"},{"theword":"개미"},{"theword":"거북이"},{"theword":"뱀"},
    {"theword":"병아리"},{"theword":"양"},{"theword":"원숭이"},{"theword":"단추"},{"theword":"장갑"},
    {"theword":"계단"},{"theword":"피아노"},{"theword":"화장실"},{"theword":"고구마"},
    {"theword":"국"},{"theword":"껌"},{"theword":"당근"},{"theword":"오렌지"},{"theword":"초콜렛"},
    {"theword":"커피"},{"theword":"케이크"},{"theword":"토마토"},{"theword":"고추"},{"theword":"손가락"},{"theword":"쓰레기통/휴지통"},{"theword":"젓가락"},{"theword":"칼"},{"theword":"달"},
    {"theword":"불"},{"theword":"해/햇빛"},{"theword":"불자동차/소방차"},{"theword":"공룡"},
    {"theword":"쥐"},{"theword":"펭귄"},{"theword":"목걸이"},{"theword":"잠바"},{"theword":"주머니"},
    {"theword":"창문"},{"theword":"감자"},{"theword":"과일"},{"theword":"라면"},{"theword":"옥수수"},
    {"theword":"피자"},{"theword":"똥꼬"},{"theword":"머리카락"},{"theword":"그릇"},{"theword":"그림"},{"theword":"쓰레기"},{"theword":"열쇠"},{"theword":"청소기"},{"theword":"눈사람"},
    {"theword":"시소"},{"theword":"하늘"},{"theword":"트럭"},{"theword":"선물"},{"theword":"풀"},
    {"theword":"다람쥐"},{"theword":"벌레"},{"theword":"여우"},{"theword":"구두"},{"theword":"운동화"},{"theword":"목욕탕"},{"theword":"세탁기"},{"theword":"소파"},{"theword":"감"},{"theword":"국수"},{"theword":"무/무우"},{"theword":"생선"},{"theword":"얼음"},{"theword":"등"},{"theword":"무릎"},{"theword":"어깨"},{"theword":"피"},{"theword":"걸레"},{"theword":"지갑"},{"theword":"카메라"},{"theword":"돌"},{"theword":"바람"},{"theword":"헬리콥터"},{"theword":"로봇"},{"theword":"비누방울"},{"theword":"총"},{"theword":"벌"},{"theword":"비둘기"},{"theword":"사슴"},{"theword":"염소"},{"theword":"참새"},{"theword":"목도리"},{"theword":"치마"},{"theword":"부엌"},{"theword":"서랍"},{"theword":"밤"},{"theword":"쌀"},{"theword":"콜라"},{"theword":"호박"},{"theword":"발톱"},
    {"theword":"입술"},{"theword":"접시"},{"theword":"구름"},{"theword":"모래"},{"theword":"동물"},
    {"theword":"부엉이"},{"theword":"옷장"},{"theword":"닭고기"},{"theword":"땅콩"},{"theword":"배추"},{"theword":"복숭아"},{"theword":"햄버거"},{"theword":"몸"},{"theword":"턱"},{"theword":"옷걸이"},{"theword":"풀"},{"theword":"흙"},{"theword":"송아지"},{"theword":"허리"},{"theword":"혀"},
    {"theword":"병"},{"theword":"상자"},{"theword":"길"},{"theword":"잠옷"},{"theword":"유리"},
    {"theword":"사이다"},{"theword":"설탕"},{"theword":"소금"},{"theword":"뺨"},{"theword":"라디오"},
    {"theword":"빗자루"},{"theword":"땅"},{"theword":"사다리"},{"theword":"음식"},{"theword":"망치"},
    
    {"theword":"썰매"},{"theword":"전자레인지"},{"theword":"도너츠"},{"theword":"메론"},
    {"theword":"핫도그"},{"theword":"쟁반"},{"theword":"코트/외투"},{"theword":"허리띠"},
    {"theword":"스파게티"},{"theword":"바위"},{"theword":"지붕"},{"theword":"호떡"},{"theword":"발목"},{"theword":"못"}]
for (let i = 0; i < words.length; ++i) {
    var word = words[i];
    words_array.push(word);
};

var words1= words_array.slice(0,141);
var words2 = words_array.slice(142,283);
var words3 = words_array.slice(284,424);


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var arrayof_arrays = [words1, words2, words3]; 
//console.log("length");
//console.log(arrayof_arrays);

var chosenarrayindex = Math.floor(Math.random() * arrayof_arrays.length);
var chosenarray = arrayof_arrays[chosenarrayindex];


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords = chosenarray.slice(0, 2);


var trial1 = {
    type: jsPsychInstructions,
    pages: [
        '<div style="text-align: center; margin: 50px;"><img src="stanford.png"></div>' +
        '<div style="text-align: center; margin: 0 auto; max-width: 600px; font-size: 18px;">' +
        '<p>다음 질문들을 답변함으로써, 귀하는 스탠퍼드 대학교 심리학과의 인지과학자들이 수행하는 연구에 참여하게 됩니다. 이 연구에 대한 질문이 있으시면 <a href="mailto:languagecoglab@gmail.com">languagecoglab@gmail.com</a> 으로 문의해 주시길 바랍니다. </p>' +
        '<p>연구에 참여하기 위해 만 18세 이상이어야 합니다.</p>' +
        '<p>이 연구는 자발적으로 참여 의사를 밝히신 분에 한하여 수행됩니다.</p>' +
        '<p>다음 질문들의 일부 또는 전부 답변하지 않아도 됩니다. 또한, 참여를 거부하거나 중단을 결정하더라도 이로 인한 불이익이나 혜택상실은 없을 것입니다.</p>' +
        '<p>귀하의 익명성이 보장됩니다.</p>' +
        '<p>계속 진행하려면 “다음”을 눌러주세요.</p>' +
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

var practice_solidity= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "A block of metal",
                    options: ['solid', 'non-solid'],
                    required: true,
                },
    
            ],
            on_finish: function(data) {
                var currentWord = "A block of metal";
                console.log("testing");
                //console.log(jsPsych.data.get().values()[2].response.Q0);
                console.log(jsPsych.data.getLastTrialData().values()[0].response.Q0);

                //var response = JSON.parse(jsPsych.data.get().values()[2].response.Q0); 
                //var response = JSON.parse(data.response).Q0; // Get the participant's response
                //var response = jsPsych.data.get().values()[2].response.Q0; 
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'solid'; 
                var blockname = "solidity";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                });

                jsPsych.data.addDataToLastTrial({
                    correct: isCorrect,
                });


                var feedbackMessage = isCorrect ? "Correct! Now let's begin" : "Incorrect! a block of metal is a solid object. Now let's begin! "; 
                alert(feedbackMessage); 
                
            } 
        }
    ],
};
//timeline.push(practice_solidity);

// trial : 1
const instructions_solidity = {
    timeline:[
        {
            type: jsPsychHtmlButtonResponse,
            stimulus:
            '<p> <font size="4"> 각 단계마다 하나의 단어가 제시됩니다. 귀하는 이 단어에 대한 판단을 하게 됩니다. <font> <p>' +
            '<p> <font size="4"> 예를 들어, 다음 문장을 읽어주세요: <b>“나는 펜이 여러 개 필요해”</b>. <font><p>' +
            '<p> <font size="4">  이 문장에서 <b>[펜]</b> 은 <b>고형성</b> 즉 단단한 물질을 가리킵니다.<font> <p>' +
            '<p> <font size="4"> 반면, 다음 문장을 읽어주세요: <b>“나는 물을 조금 마시고 싶어”</b>, 이 문장에서 <b>[물]</b> 은 <b>고형성</b> 즉 단단한 물질을 의미하지 않습니다. <font> <p>' +
            '<p> <font size="4"> <b>주의</b>: 단어 <b>"보라색"</b> 나오면 <b>"고형물"</b> 을 선택하세요<font> <p>' +
            '<p> <font size="4"> 이제 시작하겠습니다! <font> <p> ',
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

var attention = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "PURPLE", 
        options: ['solid', 'non-solid', 'unclear/unknown'], 
        required: true,
        horizontal: false
      }, 
    ],
    on_finish: function(data) {
        // Access the value of 'uni_lemma' for the current trial
        var currentWord = "PURPLE";
        var blockname = "attention";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};

var solidity = {
    timeline: [instructions_solidity, practice_solidity, block_solidity, attention], 
    randomization: false,
}

//timeline.push(solidity);

//trial: 7
const instructions_countmass = {
    type: jsPsychHtmlButtonResponse,
    stimulus:
    '<p> <font size="4"> One Judegment is whether a word is a count or a mass noun. A <b>count noun</b> refers to objects that can be divided into <b>individual units and counted</b>.<font> <p>' +
    '<p> <font size="4"> For example, consider the sentence: <b>“I need several pens”</b>. <font> <p>' +
    '<p> <font size="4"> [<b>Pen</b>] is a count noun.</font> <p>' +
    '<p> <font size="4">A noun that refers to <b>undifferentiated and uncountable substances</b> is called a <b>mass noun</b>. <font> <p>' +
    '<p> <font size="4"> For example, consider the sentence: <b>“I need some water”</b>. <font> <p>' +
    '<p> <font size="4"> [<b>Water</b>] is a mass noun.<font> <p>'+ 
    '<p> <font size="4"> <b>Note</b>: when you see the word <b>"GREY"</b> click <b>"count noun"</b> <font> <p>' +
    '<p> <font size="4"> Lets begin!<font> <p>',
    choices: ['Continue']
};
//timeline.push(instructions_countmass);


// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords2 = chosenarray.slice(0, 2);

var practice_countmass= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "Would you like a chair? chair is a",
                    options: ['count noun', 'Mass noun'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = "Would you like a chair? chair is a";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'count noun'; 
                blockname = "count_mass";

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect,
                });

                var feedbackMessage = isCorrect ? "Correct! Now let's begin" : "Incorrect! chair is a count noun. Now let's begin!"; 
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
                    options: ['Count noun', 'Mass noun' , 'Unclear/unknown'],
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

var attention2 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: "grey", 
        options: ['count noun', 'mass noun' , 'unclear/ unknown'], 
        required: true,
        horizontal: false
      }, 
    ],
    on_finish: function(data) {
        // Access the value of 'uni_lemma' for the current trial
        var currentWord = "grey";
        var blockname = "attention";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};

var countmass = {
    timeline: [instructions_countmass, practice_countmass, block_countmass, attention2], 
    randomization: false,
}

//timeline.push(countmass);

// Shuffle the words_array to randomize the order
shuffleArray(chosenarray);
// Select the first 100 rows
var selectedWords3 = chosenarray.slice(0, 2);

const instructions_category = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 
    '<p> <font size="4"> 이번에는 단어의 범주를 판단하실 차레입니다. 다음 문장을 읽어주세요: <b>“나는 여러 개의 펜이 필요해”</b>. <font> <p>' +
    '<p> <font size="4"> <b>[펜]</b> 은 <b>"형태"를 기준으로 조직된 단어의 범주에 속합니다</b>. 모든 펜의 형태, 또는 모양, 은 비슷하지만, 색깔이나 재질이 다를수 있기 때문입니다.<font> <p>' +
    '<p> <font size="4"> 반면, 다음 문장을 읽어주세요: <b>“나는 물을 조금 마시고 싶어”</b>.<font> <p>' +
    '<p> <font size="4"> 여기에서 <b>[물]</b> 은 <b>"재질"을 기준으로 조직된 단어의 범주에 속합니다</b>. 물은 여러 색이나 형태로 변할 수 있지만, 항상 같은 재질로 이루어져 있어야 하기 때문입니다.<font> <p>'+
    '<p> <font size="4"> 이제, 다음 단어들이 “형태” 아니면 “재질”의 기준으로 분류되는지 판단해주세요. 일부 단어는 다소 어려울 수도 있지만, 최선을 다해 주시길 바랍니다.<font> <p>'+
    '<p> <font size="4"> <b>주의</b>: <b>"라벤더"</b> 라는 단어가 나오면 <b>"색깔"</b> 을 선택하세요<font> <p>' +
    '<p> <font size="4"> 시작하겠습니다! <font> <p>' ,
    choices: ['Continue']
};
//timeline.push(instructions_category);

var practice_category= {
    timeline: [
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "A square belongs to a category that is organized by",
                    options: ['shape', 'material', 'color'],
                    required: true,
                },
            ],
            on_finish: function(data) {
                var currentWord = "A square belongs to a category that is organized by";
                console.log("testing");
                console.log(jsPsych.data.get().values()[2].response.Q0);
                var response = jsPsych.data.getLastTrialData().values()[0].response.Q0;
                var isCorrect = response === 'shape'; 
                var blockname = "category" ;

                jsPsych.data.addDataToLastTrial({
                    theword: currentWord,
                    theblock: blockname,
                    correct: isCorrect
                });

                var feedbackMessage = isCorrect ? "Correct!, Now let's begin" : "Incorrect! square is organized around shape, all squares are of the same shape. Now let's begin!"; 
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

var attention3 = {
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
        var blockname = "attention";


        jsPsych.data.addDataToLastTrial({
            theword: currentWord,
            theblock: blockname,
        });

  },
};
console.log(jsPsych.timelineVariable('uni_lemma'));

//timeline.push(block_category);

var category = {
    timeline: [instructions_category,practice_category, block_category, attention3],
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
