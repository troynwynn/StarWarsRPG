var themeSong = document.createElement("audio");
themeSong.setAttribute("src", "assets/music/star-wars-theme.mp3");

var lightSaber = document.createElement("audio");
lightSaber.setAttribute("src", "assets/music/Lightsaber-Sound-effect.mp3");

$("#enemies").hide();
$("#fight-section").hide();
$("#defender").hide();
$("#restart").hide();
$("#result").hide();

var obiWan = {
    "name": "Obi-Wan Kenobi",
    "healthPoints": 130,
    "Attack": 8,
    "counterAttackPower": 12
}
$("#character-1-health").text(obiWan.healthPoints);
$("#character-1").data(obiWan);

var luke = {
    "name": "Luke Skywalker",
    "healthPoints": 100,
    "Attack": 7,
    "counterAttackPower": 15
}
$("#character-2-health").text(luke.healthPoints);
$("#character-2").data(luke);



var darthSidious = {
    "name": "Darth Sidious",
    "healthPoints": 150,
    "Attack": 12,
    "counterAttackPower": 18
}
$("#character-3-health").text(darthSidious.healthPoints);
$("#character-3").data(darthSidious);

var darthMaul = {
    "name": "Darth Maul",
    "healthPoints": 180,
    "Attack": 9,
    "counterAttackPower": 20
}
$("#character-4-health").text(darthMaul.healthPoints);
$("#character-4").data(darthMaul);


var yourCharacterIsChosen = false;
var enemiesSelected = false;
var noDefender = false;
var defenderDefeated = false;
var characterDefeated = false;
var enemiesLeft;
var defendersLeft;
var bothAreTrue;
var finalBattle = false;
var batteHasStarted = false;
var hasBeenAttacked = false;


$("#enemies").on('DOMSubtreeModified', function () {
    defendersLeft = (this).childElementCount;
});

$("document").ready(function() {
    
   
    

    $(".choice").on("click", function() {
       
        themeSong.play();

        var buttonID= $(this).attr("id");
        $("#character-select").hide();
        $("#enemies").show();
        yourCharacterIsChosen = true;

        
        if ((buttonID == "character-1") && ($(this).hasClass("choice"))) {
            selectedCharacter = $("#character-1").clone();
            selectedCharacter.addClass("character-card");
            selectedCharacter.data(obiWan);
            selectedCharacter.appendTo("#your-character");
            $(this).detach();
            $("#character-2").appendTo("#enemies");
            $("#character-3").appendTo("#enemies");
            $("#character-4").appendTo("#enemies");
            $("#character-2, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
        }

        else if ((buttonID == "character-2") && ($(this).hasClass("choice"))) {
            selectedCharacter= $("#character-2").clone();
            selectedCharacter.addClass("character-card");
            selectedCharacter.data(luke);
            selectedCharacter.appendTo("#your-character");
            $(this).detach();
            $("#character-1").appendTo("#enemies");
            $("#character-3").appendTo("#enemies");
            $("#character-4").appendTo("#enemies");
            $("#character-1, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
        }

        else if ((buttonID == "character-3") && ($(this).hasClass("choice"))) {
            selectedCharacter= $("#character-3").clone();
            selectedCharacter.addClass("character-card");
            selectedCharacter.data(darthSidious);
            selectedCharacter.appendTo("#your-character");
            $(this).detach();
            $("#character-1").appendTo("#enemies");
            $("#character-2").appendTo("#enemies");
            $("#character-4").appendTo("#enemies");
            $("#character-1, #character-2, #character-4").removeClass("choice").addClass("chosen-enemy");                

        }

        else if ((buttonID == "character-4") && ($(this).hasClass("choice"))) {
            selectedCharacter= $("#character-4").clone();
            selectedCharacter.addClass("character-card");
            selectedCharacter.data(darthMaul);
            selectedCharacter.appendTo("#your-character");
            $(this).detach();
            $("#character-1").appendTo("#enemies");
            $("#character-2").appendTo("#enemies");
            $("#character-3").appendTo("#enemies");
            $("#character-1, #character-2, #character-3").removeClass("choice").addClass("chosen-enemy");

        }

        
        selectedCharacterHealth = selectedCharacter.data("healthPoints");
        selectedCharacterAttackPower = selectedCharacter.data("Attack");
        selectedCharacterName = selectedCharacter.data("name");
        
        $(".chosen-enemy").on("click", function(event) {
            buttonID = $(this).attr("id");
            defenderIsClicked = true;
            $("#defender").show();

            if (defenderIsClicked) {
                $(this).addClass("chosen-defender");
                $(this).appendTo("#defender");
                $("#enemies").children().addClass("next-defender");
                defenderIsClicked = false;
                defenderIsClickedAgain = true;
                selectedDefender = $(this);
            }

            if (defenderIsClickedAgain) {
                $("#defender").children().removeClass("chosen-defender").appendTo("#enemies");
                $(this).addClass("chosen-defender");
                $(this).appendTo("#defender");
                selectedDefender = $(this);
            }

            var selectedDefenderAttackPower = selectedDefender.data("counterAttackPower");
            var selectedDefenderHealth = selectedDefender.data("healthPoints");
            var selectedDefenderName = selectedDefender.data("name"); 
            var currentDefenderHealth = parseInt(selectedDefenderHealth);
            var currentCharacterHealth = parseInt(selectedCharacterHealth);
            var selectedCharacterCounterAttackPower = 0;

            attackDefender();

            function attackDefender() {
            $("#attack").on("click", function(event) {
                lightSaber.play();

                counter = 1;
                counter ++;
                
                $(".next-defender").off("click");

                defenderIsClicked = false;
                defenderIsClickedAgain = true;
                hasBeenAttacked = true;
                
                selectedCharacterHealthId = ("#" + selectedCharacter.attr("id") + "-health").toString();
                selectedCharacterNameId = ("#" + selectedCharacter.attr("id") + "-name");
                selectedCharacterName = selectedCharacter.data("name");
                selectedDefenderHealthId = ("#" + selectedDefender.attr("id") + "-health").toString();
                selectedDefenderNameId = ("#" + selectedDefender.attr("id") + "-name");
                $(selectedDefenderNameId).attr("style", "color:red");
                selectedDefenderName = selectedDefender.data("name");

                if ((currentCharacterHealth >= 0) && (currentDefenderHealth  >= 0)&& (counter ==2) && (enemiesLeft == 1)) {
                    
                    selectedCharacterCounterAttackPower = selectedCharacterCounterAttackPower + selectedCharacter.data("Attack");

                    currentCharacterHealth = currentCharacterHealth - selectedDefenderAttackPower;
        
                    currentDefenderHealth = currentDefenderHealth - selectedCharacterCounterAttackPower;

                    selectedCharacterHealth = selectedCharacter.data("healthPoints", currentCharacterHealth);

                    $(selectedCharacterHealthId).text(currentCharacterHealth);

                    $("#result").show();

                    $("#result").html("You've attacked " + selectedDefenderName 
                        + " for " + selectedCharacterCounterAttackPower + " damage." + "<br>");
                    $("#result").append("You've been attacked for " 
                    + selectedDefenderAttackPower + " damage.");

                    if (currentCharacterHealth <= 0) {
                        characterDefeated = true;
                        selectedCharacter.animate({ opacity: "0.10" });
                        $("#result").text("You've been defeated" + $(selectedCharacterNameId).text() + "..... GAME OVER !!!")
                        $("#restart").show();



                    }

                    else if (currentDefenderHealth <= 0) {
                        defenderDefeated = true;
                        selectedDefender.detach();
                        $("#enemies").children().removeClass("next-defender");
                        $("#result").text("You've defeated " + selectedDefenderName + " !!!")
                    }

                }


                selectedCharacterHealth = selectedCharacter.data("healthPoints", currentCharacterHealth);
                    
                if (defenderDefeated) {
                    $(".chosen-enemy").on("click", function(event) {
                        buttonID = $(this).attr("id");
                        defenderIsClicked = true;
                        $("#defender").show();
            
                        if (defenderIsClicked) {
                            $(this).addClass("chosen-defender");
                            $(this).appendTo("#defender");
                            $("#enemies").children().addClass("next-defender");
                            defenderIsClickedAgain = true;
                            selectedDefender = $(this);
                        }
            
                        
                        if (defenderIsClickedAgain) {
                            $("#defender").children().removeClass("chosen-defender").appendTo("#enemies");
                            $(this).addClass("chosen-defender");
                            $(this).appendTo("#defender");
                            selectedDefender = $(this);
                        }

                        selectedDefenderAttackPower = selectedDefender.data("counterAttackPower");
                        currentDefenderHealth = selectedDefender.data("healthPoints");

                        $("#attack").on("click", function (){
                            $(".next-defender").off("click");

                        });

                        

                    });
                }


                $("#defender").on('DOMSubtreeModified', function () {
                    enemiesLeft = (this).childElementCount;
                });

                $(selectedDefenderHealthId).text(currentDefenderHealth);
    
                
                
                if ((defendersLeft ==  0) && (enemiesLeft == 0) && (currentDefenderHealth <=0)) {

                    $("#result").text("Great Job," + $(selectedCharacterNameId).text() +"..... YOU'VE SAVED US !!!");
                    $("#restart").show();
    
                }
    
                
            
            });
        }

        });
        

    });

    
    $("#restart").on("click", function() {
        location.reload();
    });
    
    

});