$("#enemies").hide();
$("#fight-section").hide();
$("#defender").hide();

var obiWan = {
    "healthPoints": 130,
    "Attack": 6,
    "counterAttackPower": 20
}
$("#character-1-health").text(obiWan.healthPoints);
$("#character-1").data(obiWan);
console.log($("#character-1"));

var luke = {
    "healthPoints": 100,
    "Attack": 5,
    "counterAttackPower": 20
}
$("#character-2-health").text(luke.healthPoints);
$("#character-2").data(obiWan);



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
var defenderIsClicked = false;
var defenderIsClickedAgain = false;

    $("document").ready(function() {


        $(".choice").on("click", function() {
            buttonID= $(this).attr("id");
            $("#character-select").hide();
            $("#enemies").show();
            yourCharacterIsChosen = true;

            
            if ((buttonID == "character-1") && ($(this).hasClass("choice"))) {
                selectedCharacter= $("#character-1").clone();
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

            $(".chosen-enemy").on("click", function() {
                buttonID= $(this).attr("id");
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
                    selectedDefender = $(this);
                }

            });
    

        });

        $("#attack").on("click", function() {
            selectedCharacterHealthCounter = selectedCharacter.data("healthPoints");
            selectedDefenderAttackPower = selectedDefender.data("Attack");
            
            // console.log(selectedDefender.data("Attack"));
            // console.log(selectedCharacter.data("Attack"));
            // console.log($.data((selectedCharacter).get(0).Attack));
            // console.log(selectedCharacter.Attack);
            // console.log(selectedDefender);
            // selectedCharacterHealthCounter = obiWan.healthPoints;
            // selectedDefenderAttackPower = selectedDefender.data("attack");
            console.log(selectedCharacterHealthCounter);
            console.log(selectedDefenderAttackPower);
        
        
        });

``

        

       

    });