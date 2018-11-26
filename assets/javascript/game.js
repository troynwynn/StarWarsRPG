//hidden jawns
$("#enemies").hide();
$("#fight-section").hide();
$("#defender").hide();



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
var enemyIsClicked = false;
var defenderIsClicked = false;

// console.log(obiWan.healthPoints);

    $("document").ready(function() {



        $(".choice").on("click", function() {
            buttonID= $(this).attr("id");
            // console.log(buttonID);

            
            // console.log(yourCharacterIsChosen);

            $("#character-select").hide();
            $("#enemies").show();
            yourCharacterIsChosen = true;

            
            if (buttonID == "character-1") {
                $(this).detach().appendTo("#your-character");
                $("#character-2").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-2, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
                // $("#character-2, #character-3, #character-4").addClass("chosen-enemy");


            }

            else if (buttonID == "character-2") {
                $(this).appendTo("#your-character");
                $("#character-1").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-1, #character-3, #character-4").removeClass("choice").addClass("chosen-enemy");
                // $("#character-1, #character-3, #character-4").addClass("chosen-enemy");

            }

            else if (buttonID == "character-3") {
                $(this).appendTo("#your-character");
                $("#character-1").appendTo("#enemies");
                $("#character-2").appendTo("#enemies");
                $("#character-4").appendTo("#enemies");
                $("#character-1, #character-2, #character-4").removeClass("choice").addClass("chosen-enemy");                
                // $("#character-1, #character-2, #character-4").addClass("chosen-enemy");

            }

            else if (buttonID == "character-4") {
                $(this).appendTo("#your-character");
                $("#character-1").appendTo("#enemies");
                $("#character-2").appendTo("#enemies");
                $("#character-3").appendTo("#enemies");
                $("#character-1, #character-2, #character-3").removeClass("choice").addClass("chosen-enemy");
                // $("#character-1, #character-2, #character-3");

            }


            $(".chosen-enemy").on("click", function() {
                buttonID= $(this).attr("id");
                console.log(buttonID);
                $("#defender").show();
    
    
                // yourCharacterIsChosen = true;
    
                // $("#defender").hide();
                
                
                if (buttonID == "character-1") {
                    $(this).appendTo("#defender");
                    // $("#character-2").appendTo("#enemies");
                    // $("#character-3").appendTo("#enemies");
                    // $("#character-4").appendTo("#enemies");
                    $("#character-1").addClass("chosen-defender");
                }
    
                else if (buttonID == "character-2") {
                    $(this).appendTo("#defender");
                    // $("#character-1").appendTo("#enemies");
                    // $("#character-3").appendTo("#enemies");
                    // $("#character-4").appendTo("#enemies");
                    $("#character-2").addClass("chosen-defender");
    
                }
    
                else if (buttonID == "character-3") {
                    $(this).appendTo("#defender");
                    // $("#character-1").appendTo("#enemies");
                    // $("#character-2").appendTo("#enemies");
                    // $("#character-4").appendTo("#enemies");
                    $("#character-3").addClass("chosen-defender");
    
                }
    
                else if (buttonID == "character-4") {
                    $(this).appendTo("#defender");
                    // $("#character-1").appendTo("#enemies");
                    // $("#character-2").appendTo("#enemies");
                    // $("#character-3").appendTo("#enemies");
                    $("#character-4").addClass("chosen-defender");
    
                }
    
    
    
            });

        });
        

        

        

        console.log(yourCharacterIsChosen);

       


            // console.log(id.toString());

            // var newDiv = $("<div>");

            // newDiv.addClass("character-card");
   
            // // buttonID = "crystal-" + i.toString();
    
            // newDiv.attr("id", buttonID);
    
            // imageCrystal.attr("src", crystalArray[i]);
    
            // var initialValue = numberOptions[i];
    
            // imageCrystal.attr("data-crystalvalue", initialValue);
    
            // $("#crystals").append(imageCrystal);

       

       

            // $("#your-charactar").append(yourCharacter);

            // if (id == "character-1") {

            //     var yourCharacter = $("#character-1");

            

            // }


        


    });