$("#enemies").hide();
$("#fight-section").hide();
$("#defender").hide();
$("#restart").hide();

var obiWan = {
    "healthPoints": 130,
    "Attack": 6,
    "counterAttackPower": 20
}
$("#character-1-health").text(obiWan.healthPoints);
$("#character-1").data(obiWan);

var luke = {
    "healthPoints": 100,
    "Attack": 5,
    "counterAttackPower": 20
}
$("#character-2-health").text(luke.healthPoints);
$("#character-2").data(luke);



var darthSidious = {
    "healthPoints": 150,
    "Attack": 5,
    "counterAttackPower": 20
}
$("#character-3-health").text(darthSidious.healthPoints);
$("#character-3").data(darthSidious);

var darthMaul = {
    "healthPoints": 180,
    "Attack": 5,
    "counterAttackPower": 20
}
$("#character-4-health").text(darthMaul.healthPoints);
$("#character-4").data(darthMaul);


var yourCharacterIsChosen = false;
var enemiesSelected = false;
var noDefender = false;
// var defenderIsClicked = false;
// var defenderIsClickedAgain = false;
var defenderDefeated = false;
var characterDefeated = false;
var enemiesLeft;
var defendersLeft;
var bothAreTrue;
var finalBattle = false;
var batteHasStarted = false;


$("#enemies").on('DOMSubtreeModified', function () {
    defendersLeft = (this).childElementCount;
});

$("document").ready(function() {
    
    $(".choice").on("click", function() {
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
        
        $(".chosen-enemy").on("click", function(event) {
            buttonID = $(this).attr("id");
            defenderIsClicked = true;
            $("#defender").show();

            if (defenderIsClicked) {
                $(this).addClass("chosen-defender");
                $(this).appendTo("#defender");
                defenderIsClickedAgain = true;
                selectedDefender = $(this);
            }


            if (defenderIsClickedAgain) {
                $("#defender").children().removeClass("chosen-defender").appendTo("#enemies");
                $(this).addClass("chosen-defender");
                $(this).appendTo("#defender");
                newSelectedDefender = $(this);
            }
            
    

            var selectedDefenderAttackPower = selectedDefender.data("Attack");
            var selectedDefenderHealth = selectedDefender.data("healthPoints");
            var currentDefenderHealth = parseInt(selectedDefenderHealth);
            var currentCharacterHealth = parseInt(selectedCharacterHealth);
            var selectedCharacterCounterAttackPower = 0;

            $("#attack").on("click", function() {
                selectedCharacterHealthId = ("#" + selectedCharacter.attr("id") + "-health").toString();
                selectedCharacterNameId = ("#" + selectedCharacter.attr("id") + "-name");
                selectedDefenderHealthId = ("#" + selectedDefender.attr("id") + "-health").toString();
                selectedDefenderNameId = ("#" + selectedDefender.attr("id") + "-name");
                selectedCharacterCounterAttackPower = selectedCharacterCounterAttackPower + selectedCharacter.data("Attack");

                if ((currentCharacterHealth >= 0) && (currentDefenderHealth  >= 0)) {
                    
                    currentCharacterHealth = currentCharacterHealth - selectedDefenderAttackPower;
        
                    currentDefenderHealth = currentDefenderHealth - selectedCharacterCounterAttackPower;

                    if (currentCharacterHealth <= 0) {
                        characterDefeated = true;
                        $("#result").text("You've been defeated" + $(selectedCharacterNameId).text() +"..... GAME OVER !!!")
                        $("#restart").show();


                    }

                    else if (currentDefenderHealth <= 0) {
                        defenderDefeated = true;
                        selectedDefender.detach();
                    }
                }
                    
                if (defenderDefeated) {
                selectedCharacterHealth = selectedCharacter.data("healthPoints", currentCharacterHealth);
                $(selectedCharacterHealthId).text(currentCharacterHealth);
                }

                else {
                    $(selectedCharacterHealthId).text(currentCharacterHealth); 
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

        });

        
        


        

    });

    


    $("#restart").on("click", function() {


        location.reload();


    });
    
    

});