function ActiveSearch1() {
    $(document).ready(function () {
        $("#search1").click(function () {
            $("#search1").addClass("actived");
            $("#search2").removeClass("actived");
        });
    });
}

function ActiveSearch2() {
    $(document).ready(function () {
        $("#search2").click(function () {
            $("#search2").addClass("actived");
            $("#search1").removeClass("actived");
        });
    });
}