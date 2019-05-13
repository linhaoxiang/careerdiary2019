$(document).ready(function(){
    getWindowSize();
    updateView();
    // alert("Hello! I am an alert box!!");
  });
  
  $(window).resize(function(){
    // getWindowSize();
    // updateView();
  });

function getWindowSize(){
    windHeight = $(window).height();
    // windWidth = $(window).width();
    }

function updateView(){
    $('.full').css("height",windHeight);
    // $('.fullx2').css("height",windHeight*2);
    }

