import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import gif1 from './img/1.gif';
import gif2 from './img/2.gif';
import gif3 from './img/3.gif';
import gif4 from './img/4.gif';
import gif5 from './img/5.gif';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function gridPic(x) {
  if (x === 1) {
    return gif1;
  }
  if (x === 2) {
    return gif2;
  }
  if (x === 3) {
    return gif3;
  }
  if (x === 4) {
    return gif4;
  }
  if (x === 5) {
    return gif5;
  }
}

function imgWrite(gridVal) {
  return "<img src=\""+ gridPic(gridVal) +"\">";
}

function gridWrite(gridNum) {
  document.getElementById(gridNum).innerHTML = imgWrite(matchArray[gridNum]);
}

function hideCards() {
  $(".match").html("");
}

function reset() {
  $(".card").removeClass("match");
  $(".card").addClass("match");
  hideCards();
  matchVar = 20;
  turn = 0;
  compVar = 50;
  shuffle(matchArray);
}


var matchArray = [1,1,2,2,3,3,4,4,5];
var turn = 0;
var matchVar = 20;
var compVar = 50;

$(document).ready(function() {
  shuffle(matchArray);


  $(".card").click(function() {
    var squareId = $(this).attr('id');

    gridWrite(squareId);
    turn += 1;

    if (matchArray[squareId] === 5) {
      setTimeout(function() { alert("YOU LOSE");}, 500);
      setTimeout(function() { reset();}, 1000);

    } else {
      if (matchVar === matchArray[squareId]){
        $("#" + squareId).removeClass("match");
        $("#" + compVar).removeClass("match");
      }

        matchVar = matchArray[squareId];
        compVar = squareId;

      if (turn === 2) {
        setTimeout(function() { hideCards();}, 500);

        matchVar = 20;
        turn = 0;
        compVar = 50;
      }
    }

  });

});
