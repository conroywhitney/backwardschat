/*
alert("Loaded Backwardscat in GMail context");
console.log("Backwardscat: loaded with jQuery in GMail context... Proof:");
console.log(jQuery("#loading"));
*/

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  alert('clicked the icon thingy');
  console.log("ummmmmmmmmm");
  console.log(jQuery("#loading"));
  jQuery("#loading").show();
  alert('wtf mate?');
});

