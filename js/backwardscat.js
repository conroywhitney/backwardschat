scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").not(".backwardscat").each(function() {
    var $gchat = jQuery(this);
    var $parent = $gchat.parent();
    var s_id = $gchat.attr("id");

    console.log("textarea [" + s_id + "]");

    if($parent.data("cloned")) {
      var $bcat = $parent.find("textarea.backwardscat");
    } else {
      console.log("setting up secure chat...");
      var $clone = $gchat.clone(true);
      $clone.attr("id", s_id + "-backwardscat");
      $clone.addClass("backwardscat");
      $clone.appendTo($parent);
      $parent.data("cloned", true);
      console.log("secure chat enabled.");

      $clone.keyup(function(e) {
        if(e.keyCode == 13) {
          console.log("ENTER KEY");
        } else {
          $gchat.val($clone.val().split("").reverse().join(""));
        }
      });
    }
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();

$(document)
