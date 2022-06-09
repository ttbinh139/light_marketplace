// Client facing scripts here

const renderConversation = function (response) {
  console.log(response);
  let userId = response.userId;
  let conversations = response.conversations;
  let htmlOutput = ""
  for (let i = 0; i < conversations.length; i++) {
    if (conversations[i].owner_id === Number(userId)) {
      htmlOutput += `<div class="chat-row">
                <div class="sent">${conversations[i].message}</div>
              </div>`
    } else {
      htmlOutput += `<div class="chat-row">
                <div class="received">${conversations[i].message}</div>
              </div>`
    }
  }
  return htmlOutput;
};

$(document).ready(function () {
  $("#new-message-form").submit(function (event) {
    event.preventDefault();

    // Get form datas
    let val = escape($("#txt-new-message").val());
    var form = $(this);
    var actionUrl = form.attr('action');
    // Send ajax post to server
    $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(), // serializes the form's elements.
      success: function (response) {
        console.log(123);
        // redirect to /messages/id to render view messages.
        let messagesId = response.message_id;
        console.log("Message ID: ",messagesId);
        window.location = `/messages/${messagesId}`;
      },
    });
  });

  $("#reply-message-form").submit(function(event) {
    event.preventDefault();

    // Get form datas
    let val = escape($("#txt-reply-message").val());
    var form = $(this);
    var actionUrl = form.attr('action');
    // Send ajax post to server
    $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(), // serializes the form's elements.
      success: function (response) {
        console.log(response);
        //appendNewMessage(response);
        /* let htmlOutput = `<div class="chat-row">
                        <div class="sent">${response.message}</div>
                      </div>`; */
        let htmlOutput = renderConversation(response);
        console.log(htmlOutput);
        $("#main-chat").empty();
        $("#main-chat").append(htmlOutput);

        //$("#main-chat").append(htmlOutput);

        $("#txt-reply-message").val('');
        console.log("Appended new message");
      },
    });
  });
});
