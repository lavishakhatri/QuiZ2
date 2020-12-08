

var database ;
var form , game , question
var score=0
var optionA,optionB
var QBox , correctAns
var questionCounter, total;
var startButton, nextButton
var gameState="start"
function setup(){


    database = firebase.database();
    //createCanvas(500,500);
question= new Question();
  
    QBox= createElement("h2")
    QBox.position(200,200)
    optionA= createButton("")
    optionA.position(350,350)
    optionB= createButton("")
    optionB.position(550,350)
    questionCounter=1;
    total =5;

    


game = new Game()

if(gameState==="start")    
    game.start()


}

function draw()
        {
                if(gameState==="play")
                {
                    
                    
                    startButton.mousePressed(function()
                        { 
                            
                            optionA.style('background-color','#E5E5E5')
                              optionB.style('background-color','#E5E5E5')
                                showQuestion();
                                questionCounter++
                        })
                }
                else if (gameState==="end")
                {
                    clear()
                }

    
 

        }


      //  setTimeout(function(){text("Next",200,200)}, 3000000)



        


 
function showQuestion()
{
    if(questionCounter<=5)
    {
        question.getQuestion()
        question.getOptionA()
        question.getOptionB()
       question.getCorrect()
        optionB.mousePressed(function()
        {
            text("optionB wasclicle",100,100)
            if (optionB.html()===correctAns)
            {
                optionA.style('background-color','red')
                optionB.style('background-color','green')

            }
            else{
                optionA.style('background-color','green')
                optionB.style('background-color','red')
            }
        }) 
               
                                         /*setTimeout(function()
                                {
                                    optionA.style('background-color','blue')
                                    optionB.style('background-color','blue')
    //questionCounter+=1
                                }, 5000);*/
                                //optionA.style('background-color','#707070')
                                  //  optionB.style('background-color','#707070')
    
               
                 //optionA.mousePressed(evaluateQuestion)
                

            }
            else if(questionCounter>5)
            gameState="end"
        }









function evaluateQuestion()
{



    if(optionA.html()===correctAns)
                    {
                        console.log("Hello")
                        optionA.style('background-color','green')
                        optionB.style('background-color','red')
                        score++

                    }
                else if(optionB.html()===correctAns)
                {
                    console.log("Hi")

                        optionA.style('background-color','red')
                        optionB.style('background-color','green')
                }
/*

                if(optionB.html()===correctAns)
                    {
                        optionB.style('background-color','green')
  
                        score++

                    }
                else
                {
                        optionB.style('background-color','red')
                        optionA.style('background-color','green')
                }
*/


}
