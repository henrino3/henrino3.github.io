$(document).ready(function () {

  $(document).bind('mobileinit',function(){
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
});

console.log("Chat App Started!");


// Initialize the PubNub API connection.
var pubnub = PUBNUB.init({
  publish_key: 'pub-c-dd285026-60a0-4eb0-a1f4-c5bba5ca7eba',
  subscribe_key: 'sub-c-88ac4c7c-c4dd-11e5-b522-0619f8945a4f'
});


// Grab references for all of our elements.
var messageContent = $('#messageContent'),
    sendMessageButton = $('#sendMessageButton'),
    messageList = $('#messageList');

function handleMessage(message) {
  var messageEl = $("<li class='message'>"
      + "<span class='username'>" + message.username + ": </span>"
      + message.text
      + "</li>");

  messageList.append(messageEl);
  messageList.listview('refresh');

  // Scroll to bottom of page
  $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 'slow');
};

// Compose and send a message when the user clicks our send message button.
sendMessageButton.click(function (event) {
  var message = messageContent.val();

  if (message != '') {
    pubnub.publish({
      channel: 'chat101',
      message: {
        username: 'Henry',
        text: message
      }
    });

    messageContent.val("");
  }
});

// Also send a message when the user hits the enter button in the text area.
messageContent.bind('keydown', function (event) {
  if((event.keyCode || event.charCode) !== 13) return true;
  sendMessageButton.click();
  return false;
});

// Subscribe to messages coming in from the channel.
pubnub.subscribe({
  channel: 'chat101',
  message: handleMessage
});
});
