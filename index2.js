    for(var i = 0 ; i < 27 ; i ++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var txt = this.innerHTML;
    console.log(txt);
    audioplay(txt);

    });
    }

    function audioplay(txt){
    switch(txt){
    case "A":
    var audio = new Audio("a.mp3");
    audio.play();
    break;
    case "B":
    var audio = new Audio("b.mp3");
    audio.play();
    break;
    case "C":
    var audio = new Audio("c.mp3");
    audio.play();
    break;
    case "D":
    var audio = new Audio("d.mp3");
    audio.play();
    break;
    case "E":
    var audio = new Audio("e.mp3");
    audio.play();
    break;
    case "F":
    var audio = new Audio("f.mp3");
    audio.play();
    break;
    case "G":
    var audio = new Audio("g.mp3");
    audio.play();
    break;
    case "H":
    var audio = new Audio("h.mp3");
    audio.play();
    break;
    case "I":
    var audio = new Audio("i.mp3");
    audio.play();
    break;
    case "J":
    var audio = new Audio("j.mp3");
    audio.play();
    break;
    case "K":
    var audio = new Audio("k.mp3");
    audio.play();
    break;
    case "L":
    var audio = new Audio("l.mp3");
    audio.play();
    break;
    case "M":
    var audio = new Audio("m.mp3");
    audio.play();
    break;
    case "N":
    var audio = new Audio("n.mp3");
    audio.play();
    break;
    case "O":
    var audio = new Audio("o.mp3");
    audio.play();
    break;
    case "P":
    var audio = new Audio("p.mp3");
    audio.play();
    break;
    case "Q":
    var audio = new Audio("q.mp3");
    audio.play();
    break;
    case "R":
    var audio = new Audio("r.mp3");
    audio.play();
    break;
    case "S":
    var audio = new Audio("s.mp3");
    audio.play();
    break;
    case "T":
    var audio = new Audio("t.mp3");
    audio.play();
    break;
    case "U":
    var audio = new Audio("u.mp3");
    audio.play();
    break;
    case "V":
    var audio = new Audio("v.mp3");
    audio.play();
    break;
    case "W":
    var audio = new Audio("w.mp3");
    audio.play();
    break;
    case "X":
    var audio = new Audio("x.mp3");
    audio.play();
    break;
    case "Y":
    var audio = new Audio("y.mp3");
    audio.play();
    break;
    case "Z":
    var audio = new Audio("z.mp3");
    audio.play();
    break;
     }
    }