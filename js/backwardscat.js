/*
alert("Loaded Backwardscat in GMail context");
console.log("Backwardscat: loaded with jQuery in GMail context... Proof:");
console.log(jQuery("#loading"));
*/

/*
var insertedNodes = [];
var observer = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for(var i = 0; i < mutation.addedNodes.length; i++)
            insertedNodes.push(mutation.addedNodes[i]);
    })
});
observer.observe(document, {
    childList: true
});
console.log(insertedNodes);
*/

/*
jQuery("input[type=textarea].ad3").on('click', function() {
  alert("clicked on one of the chat boxes");
});
*/

function checkDOMChange() {
  jQuery('textarea.ad3').each(function() {
    ta_id = jQuery(this).attr('id');
    console.log("Chat ID: " + ta_id);
    jQuery(this).on("click", function() {
      alert("clicked on textarea: " + ta_id);
    });
  });

  // call the function again after 100 milliseconds
  setTimeout( checkDOMChange, 5000 );
}

/*
  jQuery('textarea.ad3').on("focus", function() {
    alert("clicked me: " + jQuery(this).attr("id"));
  });
*/

checkDOMChange();
