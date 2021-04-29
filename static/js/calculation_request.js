var bi = function(id) {return document.getElementById(id);};
function addressToserver() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var raw_got_data_fromserver = this.responseText;
     var got_data_fromserver = JSON.parse(raw_got_data_fromserver);
     var id_data_to_output = JSON.parse(sessionStorage.getItem("sequenceOfIdsFields"));
     var nFields = parseInt(sessionStorage.getItem("numberOfUsefulFields"));
     var i;
     for (i = 0; i < nFields; i++) {
       bi(id_data_to_output[i]).value = got_data_fromserver[i];
     }
     var i;
     var ii = nFields;
     for (i = 0; i < nFields; i++) {
       if (got_data_fromserver[ii] == 1) {
         bi(id_data_to_output[i]).style.backgroundColor = colorForSolvedFields;
         bi(id_data_to_output[i]).style.color = "white";
         displayCopyButton(id_data_to_output[i]);
       }
       ii++;
     }
     bi("submitbut").disabled = true;
     sessionStorage.setItem("conditionOfinput", "solved");
     drawSolved(got_data_fromserver);
    }
  };
  var id_x_data = JSON.parse(sessionStorage.getItem("sequenceOfIdsFields"));
  var fieldsLeft = true;
  var i = 0;
  var arr_fields_data = [];
  while (fieldsLeft == true) {
    try {
      var field_x_data = bi(id_x_data[i]).value;
      arr_fields_data.push(field_x_data);
      i++;
    }
    catch {
      arr_fields_data.push(bi("field_current_excessed_data").value);
      fieldsLeft = false
    }
  }
  var sumdata_toserver = JSON.stringify(arr_fields_data);
  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("X-CSRFToken", csrftoken_calc_request, "Content-type", "application/x-www-form-urlencoded",);
  xhttp.send(sumdata_toserver);
}
