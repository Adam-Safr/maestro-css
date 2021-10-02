function copyText(element) {
  var text = document.getElementById(element).innerText;
  var button = document.getElementById(element + '-button');
  navigator.clipboard.writeText(text).then(function () {
    var originalText = button.innerText;
    button.innerText = 'Copied!';
    setTimeout(function () {
      button.innerText = originalText;
    }, 750);
  });
}