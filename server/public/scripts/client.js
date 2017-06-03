var integerList = "";

$(document).ready(function() {
  $('#datatypeWarning').hide();
  addEventListener();
});

function addEventListener() {
  $('#integerList').on('keyup', function() {
    validateList();
  });

  $('#integerList').on('paste', function() {
    validateList();
  });

  $('#integerForm').on('submit', function() {
    event.preventDefault();
    integerList = $("#integerList").val();
    integerList = integerList.split(',');
    performCalc(integerList);
  });
}//end event listener

function validateList() {
  integerList = $("#integerList").val();
  for (var i = 0; i < integerList.length; i++) {
    if (validateCharacter(integerList[i])) {
      $('#datatypeWarning').show();
      $('#submitButton').attr('disabled',true);
      break;
    }
    $('#datatypeWarning').hide();
    $('#submitButton').attr('disabled',false);
  }
}

function validateCharacter(character) {
  if (character !== ',' && isNaN(parseInt(character, 10))) {
    return true;
  } else {
    return false;
  }
}

function performCalc() {
  var calculation = {
    integerList: integerList,
  };
  $.ajax({
    type: 'POST',
    url: '/calculate/',
    data: calculation,
    success: function (response) {
      console.log('back from server, we have: ', response);
      // $('#val02').text('Calculating...');
      // setTimeout(function() {
      //   delayedReveal(response);
      // }, 3000);
    }
  });
}


// function addToOperand(digit) {
//   if (!operator){
//     val01+=digit;
//     updateDisplay('#val01',val01);
//   } else {
//     val02+=digit;
//     updateDisplay('#val02',val02);
//     $('#submitButton').attr('disabled', false);
//   }
// }
//
// function deleteOperand() {
//   if (!operator){
//     val01 = val01.slice(0,-1);
//     updateDisplay('#val01',val01);
//   } else{
//     val02 = val02.slice(0,-1);
//     updateDisplay('#val02',val02);
//   }
// }
//
// function updateDisplay(display, newValue) {
//   $(display).text(newValue);
// }

// function delayedReveal(response) {
//   val02 = "";
//   operator = "";
//   $('#val02').empty().hide();
//   $('#val01').show();
//   val01 = response.calc;
//   $('#val01').text(response.calc);
//   $('#submitButton').attr('disabled', true);
//   }

// function clearAll() {
//   operator = "";
//   val01 = "";
//   val02 = "";
//   digit = "";
//   updateDisplay('#val01',val01);
//   updateDisplay('#val02',val02);
//   $('#val02').hide();
//   $('#val01').show();
// }
