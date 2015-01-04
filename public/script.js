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
  var colors = [
    '#f00',  // R
    '#fa0',  // O
    '#ff0',  // Y
    '#4f4',  // G
    '#55f',  // B
    '#73b',  // I
    '#e8e'   // V
  ];

  function renderColors() {
    var old = document.querySelector('.rainbow');

    var new_ = document.createElement('span');
    new_.className = 'rainbow';

    for (var i = 0; i < old.innerText.length; i++) {
      var charSpan = document.createElement('span');
      charSpan.innerText = old.innerText[i];

      if ((i+1) % 2 === 0) {
        // odd number is a space, don't add a color
      } else {
        var colorIdx = (i/2) % colors.length;
        charSpan.style.color = colors[colorIdx];
      }

      new_.appendChild(charSpan);
    }

    old.parentNode.replaceChild(new_, old);
  }

  setTimeout(function() {
    setInterval(function() {
      var first = colors.shift();
      colors.push(first);
      renderColors();
    }, 300);
  }, 500);

  renderColors();
};
