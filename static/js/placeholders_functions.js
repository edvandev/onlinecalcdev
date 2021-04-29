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
    document.getElementById("field_s_a").placeholder = sessionStorage.getItem("placeholdersInMainForm_field1");
    document.getElementById("field_s_b").placeholder = sessionStorage.getItem("placeholdersInMainForm_field2");
    document.getElementById("field_s_c").placeholder = sessionStorage.getItem("placeholdersInMainForm_field3");
    document.getElementById("field_a_A").placeholder = sessionStorage.getItem("placeholdersInMainForm_field4");
    document.getElementById("field_a_B").placeholder = sessionStorage.getItem("placeholdersInMainForm_field5");
    document.getElementById("field_a_C").placeholder = sessionStorage.getItem("placeholdersInMainForm_field6");
    document.getElementById("field_peri").placeholder = sessionStorage.getItem("placeholdersInMainForm_field7");
    document.getElementById("field_area").placeholder = sessionStorage.getItem("placeholdersInMainForm_field8");
  }
}






//...
