
$(document).ready(function () {
    $("#pg_one").css("opacity", 1);
    $("#pg_two").css("opacity", 0);
    $("#pg_three").css("opacity", 0);
});

$("#to_two").click(function () {
    $("#pg_one").css("opacity", 0);
    $("#pg_two").css("opacity", 1);
    
    $("#pg_one").offset({ top: 5000 });
    $("#pg_two").offset({ top: 0 });

});

$("#to_three").click(function (e) {
    $("#pg_two").css("opacity", 0);
    $("#pg_three").css("opacity", 1);
    e.preventDefault();

    $("#pg_two").offset({ top: 5000 });
    $("#pg_three").offset({ top: 0 });
});


$("#complete").click(function () {
    $("#pg_one").css("opacity", 1);
    $("#pg_two").css("opacity", 0);
    $("#pg_three").css("opacity", 0);

    $("#pg_three").offset({ top: 5000 });
    $("#pg_one").offset({ top: 0 });
});
