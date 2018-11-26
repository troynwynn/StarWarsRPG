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


console.log(obiWan.healthPoints);

    $("document").ready(function() {

        $(".character-card").on("click", function() {
        });

    });