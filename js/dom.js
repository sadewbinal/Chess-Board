/**
 * Created by U-Tech on 9/8/2017.
 */
var colorABoxes = ['a8','c8','e8','g8','b7','d7','f7','h7','a6','c6','e6','g6','b5','d5','f5','h5','a4','c4','e4','g4','b3','d3','f3','h3','a2','c2','e2','g2','b1','d1','f1','h1'];

var colorBBoxes =['b8','d8','f8','h8','a7','c7','e7','g7','b6','d6','f6','h6','a5','c5','e5','g5','b4','d4','f4','h4','a3','c3','e3','g3','b2','d2','f2','h2','a1','c1','e1','g1'];

var colorATeam=['icn-b-R1','icn-b-K1','icn-b-B1','icn-b-Q','icn-b-K','icn-b-B2','icn-b-K2','icn-b-R2','icn-b-P1','icn-b-P2','icn-b-P3','icn-b-P4','icn-b-P5','icn-b-P6','icn-b-P7','icn-b-P8'];

var colorBTeam=['icn-R-R1','icn-R-K1','icn-b-B1','icn-R-Q','icn-R-K','icn-R-B2','icn-R-K2','icn-R-R2','icn-R-P1','icn-R-P2','icn-R-P3','icn-R-P4','icn-R-P5','icn-R-P6','icn-R-P7','icn-R-P8'];

// Coloum Numbers
var col=['a','b','c','d','e','f','g','h'];
//Row Numbers
var row=[1,2,3,4,5,6,7,8];

//Pawn STRUCTURE
var pawnStack=[1,2,3,4,5,6,7,8,9,0];

function clickPawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j-1];
                //get the path
                var pathId="#"+path;
                //path combine with #
                $(pathId).addClass('selectedBox');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}
function clickRedPawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j+1];
                //get the path
                var pathId="#"+path;
                //path combine with #
                $(pathId).addClass('selectedBox');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}

//Refreshihng Boxes
function refreshBoxes() {
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            for(var k=0;k<colorABoxes.length;k++){
                if(col[i]+row[j] === colorABoxes[k]){
                    $("#"+col[i]+row[j]).removeClass('TrapBox');
                    $("#"+col[i]+row[j]).removeClass('selectedBox');
                    $("#"+col[i]+row[j]).addClass('colorA');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
            for(var k=0;k<colorBBoxes.length;k++){
                if(col[i]+row[j] === colorBBoxes[k]){
                    $("#"+col[i]+row[j]).removeClass('TrapBox');
                    $("#"+col[i]+row[j]).removeClass('selectedBox');
                    $("#"+col[i]+row[j]).addClass('colorA');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
        }
    }
}
//allow to drop chess icon
function allowDrop(ev,e) {
    if($("#"+e.id).find("img").length > 0){
        $("#"+e.id).children("img").remove();
    }
    ev.preventDefault();
}

//allow to drag icon
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//drop function for dragging icon
function drop(ev,e) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    refreshBoxes();
}


//Black Rook
function clickRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}
//Red  Rook
function clickRedRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<BlackFens.length;b++){
                            if($(chil).attr('id')===BlackFens[b]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhiteFens.length;r++){
                            if($(chil).attr('id')===WhiteFens[r]){
                                break;
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<BlackFens.length;b++){
                            if($(chil).attr('id')===BlackFens[b]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<WhiteFens.length;r++){
                            if($(chil).attr('id')===WhiteFens[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}



//Black Knight
function clickKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){

                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            $("#"+col[i-2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //left Top
                    $("#"+col[i-2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
//Red Knight
function clickRedKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i+2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    //Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i+1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i+2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    //Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i+1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i-2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    //Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i-1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i-2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    //left Top
                    $("#"+col[i-2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i-1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}

//Black Bishops
function clickBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}
//Red Bishop
function clickRedBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}


//Black King
function clickKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //top
                    $("#"+col[i]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //bottom
                    $("#"+col[i]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i-1]+row[j]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //right
                    $("#"+col[i-1]+row[j]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            break;
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            $("#"+col[i+1]+row[j]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Left
                    $("#"+col[i+1]+row[j]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}
//Red King
function clickRedKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){

        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                console.log(col[i]+""+row[j]);

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;
                        }
                    }

                }else{
                    //top
                    $("#"+col[i]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i+1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i-1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){
                            $("#"+col[i]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;

                        }
                    }

                }else{
                    //bottom
                    $("#"+col[i]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){

                            $("#"+col[i+1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){

                            $("#"+col[i-1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){

                            $("#"+col[i-1]+row[j]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){
                            break;

                        }
                    }

                }else{
                    //right
                    $("#"+col[i-1]+row[j]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0;b<colorATeam.length;b++){
                        if($(chil).attr('id')===colorATeam[b]){

                            $("#"+col[i+1]+row[j]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<colorBTeam.length;r++){
                        if($(chil).attr('id')===colorBTeam[r]){

                            break;
                        }
                    }

                }else{
                    //Left
                    $("#"+col[i+1]+row[j]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}

//Black Queen
function clickQueen(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                break;
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}
//Red Queen
function clickRedQueen(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<colorATeam.length;b++){
                            if($(chil).attr('id')===colorATeam[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<colorBTeam.length;r++){
                            if($(chil).attr('id')===colorBTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}
function restart() {
    location.reload();
}

