// Scrolling title tag

(function() {
  var title = document.getElementsByTagName('title')[0];
  var text = title.text;

  var newText = '';
  for (var i = 0; i < text.length; i++) {
    newText += text[i];
    if (i !== text.length - 1) {
      newText += ' &#x2605; ';
    }
  }

  title.innerHTML = newText + '&nbsp;&nbsp;&nbsp&nbsp;&nbsp;';

  var shiftedText = document.title;

  setTimeout(function() {
    setInterval(function() {
      shiftedText = shiftedText.slice(1) + shiftedText[0];
      document.title = shiftedText;
    }, 300);
  }, 1000);
})();


// Colorize site name

window.onload = function() {

  var bgColors = [
    '190,75,121',
    '252,162,101',
    '238,190,67'
  ];

  var color = bgColors[Math.floor(Math.random() * 3)];
  var container = document.querySelector('.container');
  container.style.background = 'rgba(' + color + ', .4)';

  var rainbow = document.querySelector('.rainbow');

  var colors = [
    '#BE4B79',
    '#EEBE43'
  ];

  function cycleColors() {
    var first = colors.shift();
    colors.push(first);
    rainbow.style.color = colors[0];
  }

  rainbow.addEventListener('transitionend', cycleColors, true);

  setTimeout(cycleColors, 0);
};
