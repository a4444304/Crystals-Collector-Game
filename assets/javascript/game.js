$(document).ready(function() {   
                       
    var randmNum = 0;
     var score, score2, score3, score4 = 0;
     var ttlScore = 0;
     var possibleRandNums = [];
     var possibleScores = [];
     var $crystalMath = [];
     var $pcrystal, $wcrystal, $gcrystal, $rcrystal;
     var wins = 0;
     var losses = 0;


  
     function randomize() {
             randmNum = Math.floor(Math.random() * 20 + 121);
             score = Math.floor(Math.random() * 20 + 2);
             score2 = Math.floor(Math.random() * 20 + 2);
             score3 = Math.floor(Math.random() * 20 + 2);
             score4 = Math.floor(Math.random() * 20 + 2);

             $("#wnngVal").html(randmNum);

     }


     function scoreUpdate() {

             $("#winLossText").html("Wins: " + wins + " Losses: " + losses );
       
     }




     function checkState() {

             if(ttlScore == randmNum)
             {
                     wins++;
                     scoreUpdate();
                     ttlScore = 0;
                     randomize();
             }
             else if(ttlScore > randmNum)
             {
                     losses++;
                     scoreUpdate();
                     ttlScore = 0;
                     randomize();
             }
             else{
                     scoreUpdate()
             }

     }




     function intialize(){
           //  generateVals();
           console.log("Intialize");
             //debugger;
             randomize();
            //debugger;
            $pcrystal = $("#pcrystal");
            $wcrystal = $("#wcrystal");
            $gcrystal = $("#gcrystal");
            $rcrystal= $("#rcrystal");


            $pcrystal.click(function(){
                     console.log("I made it here!");
                     ttlScore += score;
                     $("#scoreText").html("Current Score: " + ttlScore);
                     checkState();

             });

             $wcrystal.click(function(){
                     ttlScore += score2;
                     $("#scoreText").html("Current Score: " + ttlScore);
                     checkState();

             });

             $gcrystal.click(function(){
                     ttlScore += score3;
                     $("#scoreText").html("Current Score: " + ttlScore);
                     checkState();

             });
             
             $rcrystal.click(function(){
                     ttlScore += score4;
                     $("#scoreText").html("Current Score: " + ttlScore);
                     checkState();

             });

             

            



     }

     //console.log("It's working");
     intialize();
     
});