// Client facing scripts here


/* const loadConversation = function (message_id) {
  console.log(message_id);
  //Render listing detail

  //Render conversation
  let url = `http://localhost:8080/messages/conversation/${message_id}`;
  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      renderConversation(data);
    }
  });
}; */

/* const renderConversation = function (data) {
  console.log(data);
  // Render Listing Info
  let htmlOutput = `
    <div class="row">
        <div class="column right"><h2>Listing Info: <a href="/listings/:${data[0].listing_id}">${data[0].title}</a></h2></div>
    </div>
  `;
  $(".head-title").empty();
  $(".head-title").append(htmlOutput);
  //return htmlOutput;
  // Render Message Section

  // Render Form
}; */

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
        let htmlOutput = `<div class="chat-row">
                        <div class="sent">${response.message}</div>
                      </div>`;
        $("#main-chat").append(htmlOutput);
        $("#txt-reply-message").val('');
        console.log("Appended new message");
      },
    });
  });
});
