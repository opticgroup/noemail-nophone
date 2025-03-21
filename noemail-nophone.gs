function filterEmails() {
  // Define the label to apply
  var labelName = "no convo - no phone";
  var label = GmailApp.getUserLabelByName(labelName) || GmailApp.createLabel(labelName);
  
  // Get threads only from the Primary inbox (exclude Social, Promotions, etc.)
  var threads = GmailApp.search("in:inbox -in:social -in:promotions -in:updates -in:forums", 0, 50); // Adjust 50 to process more emails if needed
  
  // Regular expression for common phone number formats
  var phoneRegex = /\b(\+?\d{1,3}[-. ]?)?(\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}\b/;
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    var sender = messages[0].getFrom(); // Get sender of the first message in the thread
    var hasConversation = false;
    var hasPhoneNumber = false;
    
    // Check if there's a prior conversation with this sender
    var searchQuery = "from:" + sender;
    var pastThreads = GmailApp.search(searchQuery, 0, 100); // Search for past emails from this sender
    if (pastThreads.length > 1 || (pastThreads.length === 1 && pastThreads[0].getMessageCount() > 1)) {
      hasConversation = true; // More than one thread or a thread with multiple messages indicates a conversation
    }
    
    // Check all messages in the thread for a phone number
    for (var j = 0; j < messages.length; j++) {
      var messageContent = messages[j].getPlainBody();
      if (phoneRegex.test(messageContent)) {
        hasPhoneNumber = true;
        break; // Exit loop if a phone number is found
      }
    }
    
    // Apply label and remove from inbox if no conversation OR no phone number
    if (!hasConversation || !hasPhoneNumber) {
      thread.addLabel(label);
      thread.moveToArchive();
    }
  }
}

// Optional: Run this function automatically using a time-based trigger
function setupTrigger() {
  ScriptApp.newTrigger("filterEmails")
    .timeBased()
    .everyHours(1) // Adjust frequency as needed (e.g., everyHours(1) for hourly)
    .create();
}
