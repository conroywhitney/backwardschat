alert('omg backwardscat added!');

console.log("OMGOMGOMGOMG");

console.log(jQuery("#loading"));

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  alert('clicked the icon thingy');
  console.log("ummmmmmmmmm");
  console.log(jQuery("#loading"));
  jQuery("#loading").show();
  alert('wtf mate?');
});

