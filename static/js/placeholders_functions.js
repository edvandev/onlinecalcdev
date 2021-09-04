class Placeholders {
  constructor() {}
  shiftPlaceholderRight() {
    // let placeholderValue = document.getElementById("field_s_a").getAttribute("placeholder");
    // placeholderValue = " " + placeholderValue;
    // console.log(placeholderValue);
    // document.getElementById("field_s_a").placeholder = placeholderValue;
  }
  shiftPlaceholderOneStepRight() {}
  returnPlaceholderToInitialPosition() {}
  returnAllPlaceholdersToInitialPosition() {}
  showPlaceholders() {
    document.getElementById("form_field-s_a").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field1");
    document.getElementById("form_field-s_b").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field2");
    document.getElementById("form_field-s_c").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field3");
    document.getElementById("form_field-a_A").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field4");
    document.getElementById("form_field-a_B").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field5");
    document.getElementById("form_field-a_C").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field6");
    document.getElementById("form_field-peri").innerHTML = sessionStorage.getItem("placeholdersInMainForm_field7");
    document.getElementById("field_area").placeholder = sessionStorage.getItem("placeholdersInMainForm_field8");
  }
}






//...
