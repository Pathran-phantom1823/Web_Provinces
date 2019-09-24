$(document).ready(()=> {
    $('#btn1').on('click', ()=>{
        alert('clcick')
        rating('1')
    })

    $('#btn2').on('click', ()=>{
        rating('2')
    })

    $('#btn3').on('click', ()=>{
        rating('3')
    })

    $('#btn4').on('click', ()=>{
        rating('4')
    })

    $('#btn5').on('click', ()=>{
        rating('5')
    })

    function rating(rate) {

        $.ajax({
            url: '/rate',
            crossDomain: 'true',
            data: JSON.stringify({
                name:$('#pname').html(),
                rate: rate,
            }),
            type: 'POST'
        })
        
    }

    
})