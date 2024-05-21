

$( document ).ready(function() {
    const cells = $(".cell")
    let turn = "x"
    const x = "x"
    const o = "0"
    const audio = $("audio")[0];


function play(){
    if($(this).text() ===""){
    if( turn === x) {
        $(this).text("X")
        $("#turn").text("player o turn")
        checkWiner(x)
        turn = o
    }

    else {
        $(this).text("o")
        $("#turn").text("player x turn")
        checkWiner(o)
        turn = x
    }
}
else{
    $(this).css("background-color" , "rgba(255, 0, 0, 0.365)")
    setTimeout(()=>{
        $(this).css("background-color" , "")
    } , 500)
}
}
    

function checkWiner(curentPlayer , a , b , c  ){
    // Horizontal line
    if($(cells[0]).text() ===  $(cells[1]).text() && $(cells[1]).text() === $(cells[2]).text() && $(cells[0]).text() !== "" ){
        winer(curentPlayer)
    $(cells[0]).css("background-color" , "green")
    $(cells[1]).css("background-color" , "green")
    $(cells[2]).css("background-color" , "green")
        
    }
    else if($(cells[3]).text() ===  $(cells[4]).text() && $(cells[4]).text() === $(cells[5]).text() && $(cells[3]).text() !== "" ){
        winer(curentPlayer)
        $(cells[3]).css("background-color" , "green")
        $(cells[4]).css("background-color" , "green")
        $(cells[5]).css("background-color" , "green")
    }
    else if($(cells[6]).text() ===  $(cells[7]).text() && $(cells[7]).text() === $(cells[8]).text() && $(cells[6]).text() !== "" ){
        winer(curentPlayer)
        $(cells[6]).css("background-color" , "green")
        $(cells[7]).css("background-color" , "green")
        $(cells[8]).css("background-color" , "green")
    }
        /*vertical line
          0 1 2
          3 4 5
          6 7 8
          */ 

        else if($(cells[0]).text() ===  $(cells[3]).text() && $(cells[3]).text() === $(cells[6]).text() && $(cells[0]).text() !== "" ){
            winer(curentPlayer)
            $(cells[0]).css("background-color" , "green")
            $(cells[3]).css("background-color" , "green")
            $(cells[6]).css("background-color" , "green")
        }
        else if($(cells[1]).text() ===  $(cells[4]).text() && $(cells[4]).text() === $(cells[7]).text() && $(cells[1]).text() !== "" ){
            winer(curentPlayer)
            $(cells[1]).css("background-color" , "green")
            $(cells[4]).css("background-color" , "green")
            $(cells[7]).css("background-color" , "green")
        }
        else if($(cells[2]).text() ===  $(cells[5]).text() && $(cells[5]).text() === $(cells[8]).text() && $(cells[2]).text() !== "" ){
            winer(curentPlayer)
            $(cells[2]).css("background-color" , "green")
            $(cells[5]).css("background-color" , "green")
            $(cells[8]).css("background-color" , "green")
        }
        ////////////////////////////////////////////
        else if($(cells[0]).text() ===  $(cells[4]).text() && $(cells[4]).text() === $(cells[8]).text() && $(cells[0]).text() !== "" ){
            winer(curentPlayer)
            $(cells[0]).css("background-color" , "green")
            $(cells[4]).css("background-color" , "green")
            $(cells[8]).css("background-color" , "green")
        }
        else if($(cells[2]).text() ===  $(cells[4]).text() && $(cells[4]).text() === $(cells[6]).text() && $(cells[2]).text() !== "" ){
            winer(curentPlayer)
            $(cells[2]).css("background-color" , "green")
            $(cells[4]).css("background-color" , "green")
            $(cells[6]).css("background-color" , "green")
        }
        else{

        }

}


function winer( winer ) {
    $("#win").text( "the winer is " + winer  )
    audio.play();
    

    cells.off("click")

}
cells.click(play)

})
