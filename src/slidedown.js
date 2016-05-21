var markdown = $('#panes').text();
$('#panes').text("")
var markdown = markdown.split("#");
var skipme = ""

for( var i=markdown.length-1; i>=0; i-- ) {
  if( markdown[i] === skipme) {
    markdown.splice(i, 1);
  }
}

var i = 0
var culprit = markdown[i].split("\n").join("<br />");
function nextSlideFormatting(culprit) {
  culprit = culprit.split("\n").join("<br />");
  $('#panes').html(culprit);
}

$('#panes').html(culprit);

$(window).keypress(function(e) {
  if (e.which === 32) {
    i++;
    nextSlideFormatting(markdown[i]);
  }
});
console.log(markdown);
