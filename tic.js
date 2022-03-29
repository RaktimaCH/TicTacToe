var currenTurn = "X";
var gameOver = false;
var count = 0;
var NoOfWonByX=0;
var NoOfWonByO=0;
function clicked(id){
  var  idS = "" +id;
    //if cell is already filled,then user can not fill again
var isNotEmptyCell = document.getElementById(idS).innerText !== "";

if(isNotEmptyCell || gameOver){
   return;
}

    document.getElementById(idS).innerText= currenTurn;
    calculateWinner();
    
    // after X then user can only enter O
    if(currenTurn==="X"){
        currenTurn="O";
    }else{
        currenTurn="X";
    }  
}

function calculateWinner(){
    var cellValue1 =  document.getElementById("1").innerText;
    var cellValue2 =  document.getElementById("2").innerText;
    var cellValue3 =  document.getElementById("3").innerText;
    var cellValue4 =  document.getElementById("4").innerText;
    var cellValue5 =  document.getElementById("5").innerText;
    var cellValue6 =  document.getElementById("6").innerText;
    var cellValue7 =  document.getElementById("7").innerText;
    var cellValue8 =  document.getElementById("8").innerText;
    var cellValue9 =  document.getElementById("9").innerText;
    if(
        //row1
        (cellValue1 !== "" && cellValue1 === cellValue2 && cellValue2 === cellValue3) ||
      //row2
        (cellValue4!== "" && cellValue4 === cellValue5 && cellValue5 === cellValue6) ||
      //row3
        (cellValue7 !== "" && cellValue7 === cellValue8 && cellValue8 === cellValue9) ||
        //column
        (cellValue1 !== "" && cellValue1 === cellValue4 && cellValue4 === cellValue7) ||
         (cellValue2!== "" && cellValue2 === cellValue5 && cellValue5 === cellValue8) ||
         (cellValue3!== "" &&  cellValue3 === cellValue6 &&  cellValue6 === cellValue9) ||
         //diagonal
         (cellValue1!== "" && cellValue1 === cellValue5 && cellValue5 === cellValue9) ||
           (cellValue3!== "" && cellValue3 === cellValue5 && cellValue5 === cellValue7)  
        )
         {
             gameOver = true;
             document.getElementById("message").innerText = popup();
             
             function popup(){
                 
                 swal({
                    title: "GAME OVER!!",
                    text: " ",
                    icon: "",
                    button: "OK",
                    
                });
                  return;
            }
             document.getElementById("won").innerText = currenTurn+ " Won";
        
             if (currenTurn=="X"){
                 NoOfWonByX = NoOfWonByX +1;
                 document.getElementById("forX").innerText = NoOfWonByX;

             }else{
                 NoOfWonByO = NoOfWonByO +1;
                 document.getElementById("forO").innerText = NoOfWonByO;
             }
             
         }
        //  else if(
        //     //row1
        //     (cellValue1 !== cellValue2 && cellValue2 !== cellValue3) &&
        //   //row2
        //     (cellValue4 !== cellValue5 && cellValue5 !== cellValue6) &&
        //   //row3
        //     (cellValue7 !== cellValue8 && cellValue8 !== cellValue9)&&
        //     //column
        //     (cellValue1 !== cellValue4 && cellValue4 !== cellValue7) &&
        //     (cellValue2 !== cellValue5 && cellValue5 !== cellValue8) &&
        //     (cellValue3 !== cellValue6 &&  cellValue6 !== cellValue9) &&
        //      //diagonal
        //     ( cellValue1 !== cellValue5 && cellValue5 !== cellValue9) &&
        //     ( cellValue3 !== cellValue5 && cellValue5 !== cellValue7)  
        //     )
       
         
        //  {
            
        //     document.getElementById("message").innerText = OverG();
        //     function OverG(){
                 
        //         swal({
        //            title: "GAME DRAW!!",
        //            text: " ",
        //            icon: "",
        //            button: "OK",
                   
        //        });
        //          return;
        //    }
        // }
    
    
}


function reset(){
    gameOver = false;
    currenTurn= "X";
    for(var i =1; i<=9;i++){
        document.getElementById(""+i).innerText="";
    }
}


