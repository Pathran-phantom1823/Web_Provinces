
$(document).ready(function () {
    $('button').on('click', function (e) {
        e.preventDefault();
        console.log('clcik')
        var prov = $("title").html().toLowerCase();
        var value = Number($(this).attr("id"));
        alert(prov)
        $.ajax({
            url: "/rate",
            data: JSON.stringify({ rate: value, prov: prov + ".json" }),
            type: "POST",
            success: function (data) {
                alert(data)
            }
        })
    })
})