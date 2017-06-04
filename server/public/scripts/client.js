var integerList = "";

$(document).ready(function() {
  $('#datatypeWarning').hide();
  $('#input').hide();
  $('#result').hide();
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
}

function validateList() {
  integerList = $("#integerList").val();
  for (var i = 0; i < integerList.length; i++) {
    if (!validateCharacter(integerList[i])) {
      $('#datatypeWarning').show();
      $('#submitButton').attr('disabled',true);
      break;
    }
    $('#datatypeWarning').hide();
    $('#submitButton').attr('disabled',false);
  }
}

function validateCharacter(character) {
    if (character !== ',' && character !== '-' && !Number.isInteger(parseFloat(character))) {
    return false;
  } else {
    return true;
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
      $('#input').text('Input: ' + integerList).show();
      $('#result').text('Result: ' + response).show();
    }
  });
}
