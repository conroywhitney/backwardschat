scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").not(".backwardscat").each(function() {
    var $gchat = jQuery(this);
    var $parent = $gchat.parent();
    var i_id = $gchat.attr("id");

    console.log("textarea [" + i_id + "]");


    if($parent.data("cloned")) {
      var $bcat = $parent.find("textarea.backwardscat");

      var s_encrypted = $gchat.val();
      var s_plaintext = $bcat.val();

      console.log("plaintext: " + s_plaintext);
      console.log("encrypted: " + s_encrypted);
    } else {
      console.log("setting up secure chat...");
      var $clone = $gchat.clone(true);
      $clone.addClass("backwardscat");
      $clone.appendTo($parent);
      $parent.data("cloned", true);
      console.log("secure chat enabled.");
    }
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();
