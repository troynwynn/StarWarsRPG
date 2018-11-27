$("#enemies").hide();
$("#fight-section").hide();
$("#defender").hide();

var counter = 0;

var obiWan = {
    healthPoints: 130,
    Attack: 6,
    counterAttackPower: 20
}
$("#character-1-health").text(obiWan.healthPoints);

var luke = {
    healthPoints: 100,
    Attack: 5,
    counterAttackPower: 20
}
$("#character-2-health").text(luke.healthPoints);


var darthSidious = {
    healthPoints: 150,
    Attack: 5,
    counterAttackPower: 20
}
$("#character-3-health").text(darthSidious.healthPoints);

var darthMaul = {
    healthPoints: 180,
    Attack: 5,
    counterAttackPower: 20
}
$("#character-4-health").text(darthMaul.healthPoints);

var yourCharacterIsChosen = false;
var enemiesSelected = false;
var noDefender = false;
var defenderIsClicked = false;

    $("document").ready(function() {


        $(".choice").on("click", function() {
            buttonID= $(this).attr("id");
            $("#character-select").hide();
            $("#enemies").show();
            yourCharacterIsChosen = true;

            
            if ((buttonID == "character-1") && ($(this).hasClass("choice"))) {
                selectedCharacter= $("#character-1").clone();
                selectedCharacter.attr("id", "character-card");
                selectedCharacter.appendTo("#your-character");
                $(this).detach();
                $("#character-2").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-2, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
            }

            else if ((buttonID == "character-2") && ($(this).hasClass("choice"))) {
                selectedCharacter= $("#character-2").clone();
                selectedCharacter.attr("id", "character-card");
                selectedCharacter.appendTo("#your-character");
                $(this).detach();
                $("#character-1").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-1, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
            }

            else if ((buttonID == "character-3") && ($(this).hasClass("choice"))) {
                selectedCharacter= $("#character-3").clone();
                selectedCharacter.attr("id", "character-card");

                selectedCharacter.appendTo("#your-character");
                $(this).detach();
                $("#character-1").appendTo("#enemies");
                $("#character-2").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-1, #character-2, #character-4").removeClass("choice").addClass("chosen-enemy");                

            }

            else if ((buttonID == "character-4") && ($(this).hasClass("choice"))) {
                selectedCharacter= $("#character-4").clone();
                selectedCharacter.attr("id", "character-card");
                selectedCharacter.appendTo("#your-character");
                $(this).detach();
                $("#character-1").appendTo("#enemies");
                $("#character-2").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-1, #character-2, #character-3").removeClass("choice").addClass("chosen-enemy");

            }

            $(".chosen-enemy").on("click", function() {
                buttonID= $(this).attr("id");
                console.log(buttonID);
                counter++;               
                $("#defender").show();

                if (counter = 1) {
                    $(this).addClass("chosen-defender");
                    $(this).appendTo("#defender");
                    defenderIsClicked = true;
                }

                if (defenderIsClicked) {
                    $("#defender").children().removeClass("chosen-defender").appendTo("#enemies");
                    $(this).addClass("chosen-defender");
                    $(this).appendTo("#defender");
                }
                

            });
    
        });

    });