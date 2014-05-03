scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").not(".backwardscat").each(function() {
    var id = jQuery(this).attr("id");
    var content = jQuery(this).val();
    var parent = jQuery(this).parent();
    console.log("textarea [" + id + "]");
    console.log("content");
    console.log(content);

    if(parent.data("cloned")) {
      console.log("already cloned! skipping");
    } else {
      console.log("haven't already cloned.... cloning!");
      var clone = jQuery(this).clone(true);
      clone.addClass("backwardscat");
      clone.appendTo(parent);
      console.log("should have a duplicate now)");
      parent.data("cloned", true);
    }
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();
