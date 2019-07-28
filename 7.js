var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var select = document.querySelector(\'select\');\nvar list = document.querySelector(\'ul\');\nvar h1 = document.querySelector(\'h1\');\n\nselect.onchange = function() {\n  var choice = select.value;\n  var days = 31;\n  if(choice === \'February\') {\n    days = 28;\n  } else if(choice === \'April\' || choice === \'June\' || choice === \'September\'|| choice === \'November\') {\n    days = 30;\n  }\n\n  createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n  list.innerHTML = \'\';\n  h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n    var listItem = document.createElement(\'li\');\n    listItem.textContent = i;\n    list.appendChild(listItem);\n  }\n }\n\ncreateCalendar(31,\'January\');';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
