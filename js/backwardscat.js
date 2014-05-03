scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").each(function() {
    var id = jQuery(this).attr("id");
    var content = jQuery(this).val();
    console.log("textarea [" + id + "]");
    console.log(content);
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();
