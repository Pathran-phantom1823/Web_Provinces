$(document).ready(function () {
    $('button').click(function () {
        var rate = $(this).val();
        $.ajax({
            url: "/rate",
            crossDomain:true,
            type:"GET",
            data: {rate: rate, province: $('title').text()},
            success: function (data) {
                $('#rate').text(data)
                console.log(data)
            },
            error: function (e) {
            }
        })
    })
  });