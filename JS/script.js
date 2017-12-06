$(document).ready(function(){
    $("#calc").click(function(){
        $("#calc").addClass("addgrey");
      });

});

// Calculator Vanilla JS
var box = document.getElementById("display");

function toScreen(x) {
  box.value += x;
  if(x === "c") {
    box.value = " ";
  }
}

function equal() {
  x = box.value;
  x = eval(x); // built in evaluater function
  box.value = x;
}

function power() {
  x = box.value;
  x = eval(x*x);
  box.value = x;
}

function backspace() {
  var number = box.value;
  var length = number.length-1;
  var newnumber = number.substring(0,length);
  box.value = newnumber;
}

// JS for Daily budgeting
// JS for Daily budgeting
// JS for Daily budgeting
var beg = 0;
var goal = 0;
var temp = 0;
var logbal = "$";
var dray = [0, 0, 0, 0, 0, 0];
var dray_text = ["Beginning Balance: ", "Food Costs: ", "Clothing Costs: ", "Transportation Costs: ", "Other Costs: ", "Ending Balance: "];

function budget () {
  var x = document.getElementById("input1").value;
  beg = x;
  document.getElementById("budgetamt").innerHTML ="$" + beg;
  dray[0] = beg;
  budget_exp5();
  }

  function budgetgoal () {
    var x = document.getElementById("inputgoal").value;
    goal = x;
    document.getElementById("budgetamtgoal").innerHTML ="$" + goal;
  }

function budget_exp () {
  var x = document.getElementById("input2").value;
  temp = x;
  document.getElementById("budgetamt2").innerHTML ="$" + temp;
  dray[1] = temp;
  budget_exp5();
}

function budget_exp2 () {
  var x = document.getElementById("input3").value;
  temp = x;
  document.getElementById("budgetamt3").innerHTML ="$" + temp;
  dray[2] = temp;
  budget_exp5();
}

function budget_exp3 () {
  var x = document.getElementById("input4").value;
  temp = x;
  document.getElementById("budgetamt4").innerHTML ="$" + temp;
  dray[3] = temp;
  budget_exp5();
}

function budget_exp4 () {
  var x = document.getElementById("input5").value;
  temp = x;
  document.getElementById("budgetamt5").innerHTML ="$" + temp;
  dray[4] = temp;
  budget_exp5();
}

function budget_exp5 () {
  var tempmain = dray[0];
  for (var i = 1; i < 5; ++i) {
    tempmain -= dray[i];
  }
  dray[5] = tempmain;
  document.getElementById("net").innerHTML ="$" + dray[5];
}

function log() {
  var w = window.open();
  w.document.open();
  w.document.write("<h2>Daily Budget Plan</h2>");
  w.document.write(dray_text[0] + logbal + beg + "<br>");
  for (var i = 1; i < 5; ++i) {
    w.document.write(dray_text[i] + dray[i] + "<br>");
  }
  w.document.write("<h2>Results: </h2>");
  if (dray[5] == goal) {
    w.document.write("<h4>Goal met!</h4>");
  } else if (dray[5] > goal) {
    w.document.write("<h4>Goal exceeded!<br>Savings: </h4>" + "$" + (dray[5] - goal));
  } else {
    w.document.write("<h4>Goal failed!<br>Off By: $</h4>" + "$" + (goal - dray[5]));
  }
  w.document.close();
}


$(document).ready(function(){
  budget();
  budget_exp()
  budget_exp2()
  budget_exp3()
  budget_exp4()
});







//Uses reddit public API

//Global variables

$(document).ready(function(){
  var top = ["1","2","3"]
  var top_url = ["","",""]
        $.getJSON("https://www.reddit.com/r/personalfinance/top.json?q=budgeting=new", function(result){
          var top_ups = [0,0,0]
          var top_num = [0,0,0]
          var count = 0;
          var i = 0;
          while(i < 25) {
            for(var j = 0; j < 3; ++j) {
              if ((result.data.children[i].data.ups > top_ups[j]) && (result.data.children[i].data.num_comments > top_num[j])) {
                top[j] = result.data.children[i].data.title;
                top_url[j] = result.data.children[i].data.permalink;
                top_ups[j] = result.data.children[i].data.ups;
                top_num[j] = result.data.children[i].data.num_comments;
                break;
              }
            }
            ++i;
          }
          document.getElementById("thread1").innerHTML = top[0];
          document.getElementById("thread2").innerHTML = top[1];
          document.getElementById("thread3").innerHTML = top[2];

          $('#link1').attr('href',"https://www.reddit.com" + top_url[0]);
          $('#link1').attr('title', top[0]);
          $('#link2').attr('href',"https://www.reddit.com" + top_url[1]);
          $('#link2').attr('title', top[1]);
          $('#link3').attr('href',"https://www.reddit.com" + top_url[2]);
          $('#link3').attr('title', top[2]);
        })
      });
