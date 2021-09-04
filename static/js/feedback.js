var bId = function(id) {return document.getElementById(id);};
var ready_to_send = false;
ids = ["warning_check", "show_title_pre_send", "show_message_pre_send", "title_message_point",
"message_message_point", "editbutton", "multibutton", "field_title", "field_message", "ptitle",
"pmessage", "buttonfeedback", "close", "show_response", "fieldset_of_response", "table_of_check_box"]


function showTextsDueTheChosenLanguageInFeedbackForm() {
  document.getElementById("leave_a_feedbackForm-legend").innerHTML = sessionStorage.getItem("feedback_form-leave_a_feedback");
  document.getElementById("leave_a_feedbackForm-write_message").innerHTML = sessionStorage.getItem("feedback_form-write_message");
  document.getElementById("leave_a_feedbackForm-title").innerHTML = sessionStorage.getItem("feedback_form-title");
  document.getElementById("leave_a_feedbackForm-message").innerHTML = sessionStorage.getItem("feedback_form-message");
  document.getElementById("field_title").placeholder = sessionStorage.getItem("feedback_form-describe");
  document.getElementById("field_message").placeholder = sessionStorage.getItem("feedback_form-input");
  document.getElementById("leave_a_feedbackForm-ready_button").innerHTML = sessionStorage.getItem("feedback_form-ready_button");
  document.getElementById("leave_a_feedbackForm-edit_button").innerHTML = sessionStorage.getItem("feedback_form-edit_button");

  //document.getElementById("leave_a_feedbackForm-good_it_sent").innerHTML = sessionStorage.getItem("feedback_form-good_it_sent");
  document.getElementById("leave_a_feedbackForm-close").innerHTML = sessionStorage.getItem("feedback_form-close");
}

function hideform() {
  if (ready_to_send == true) {
    bId(ids[15]).style.visibility = "hidden";
    setTimeout(addDataToDatabase, 750);
    ids_a = [ids[0], ids[1], ids[2], ids[3], ids[4]]
    ids_a.forEach(id => {bId(id).innerHTML = "";})
    ids_b = [ids[5], ids[6]]
    ids_b.forEach(id => {bId(id).style.display = "none";})
  } else {
    var field_title_content = bId(ids[7]).value;
    var field_message_content = bId(ids[8]).value;
    ids_c = [ids[7], ids[8], ids[9], ids[10]]
    ids_c.forEach(id => {bId(id).style.display = "none";})
    bId(ids[15]).style.visibility = "visible";
    bId(ids[2]).innerHTML = field_message_content;
    bId(ids[1]).innerHTML = field_title_content;
    bId(ids[0]).innerHTML = sessionStorage.getItem("feedback_form-check_before_sent");
    bId(ids[3]).innerHTML = sessionStorage.getItem("feedback_form-title");
    bId(ids[4]).innerHTML = sessionStorage.getItem("feedback_form-message");
    bId(ids[5]).style.display = "block";
    bId(ids[11]).innerHTML = sessionStorage.getItem("feedback_form-send_button");
    ready_to_send = true;
  }
}

function edit() {
  ready_to_send = false;
  bId(ids[15]).style.visibility = "hidden";
  ids_d = [ids[7], ids[8], ids[9], ids[10]]
  ids_d.forEach(id => {bId(id).style.display = "block";})
  bId("editbutton").style.display = "none";
  bId("buttonfeedback").innerHTML = sessionStorage.getItem("feedback_form-ready_button");
  ids_e = [ids[0], ids[1], ids[2], ids[3], ids[4]]
  ids_e.forEach(id => {bId(id).innerHTML = "";})
}

function close_sent_message() {
  ready_to_send = false;
  ids_h = [ids[7], ids[8], ids[9], ids[10]]
  ids_h.forEach(id => {bId(id).style.display = "block";})
  ids_j = [ids[14], ids[12], ids[13]]
  ids_j.forEach(id => {bId(id).style.display = "none";})
  bId("buttonfeedback").innerHTML = sessionStorage.getItem("feedback_form-ready_button");
  bId("multibutton").style.display = "block";
  ids_i = [ids[7], ids[8]]
  ids_i.forEach(id => {bId(id).value = "";})
}

function addDataToDatabase() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var how_successful = this.responseText;
     var responsefromserver = String(JSON.parse(how_successful));
     ids_k = [ids[14], ids[13], ids[12]]
     ids_k.forEach(id => {bId(id).style.display = "block";})
     bId("show_response").innerHTML = responsefromserver;
   }
 };
  var title = bId("field_title").value;
  var message = bId("field_message").value;
  var message_to_send = [title, message];
  var complete_message = JSON.stringify(message_to_send);
  xhttp.open("POST", "/save_data/", true);
  xhttp.setRequestHeader("X-CSRFToken", csrftoken, "Content-type", "application/x-www-form-urlencoded",);
  xhttp.send(complete_message);
}
