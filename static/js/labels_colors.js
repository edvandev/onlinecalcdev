pass = function() {};
class LabelAndCopyButton {
  constructor() {
    this.whichColorBranching = function(f_id, aColor) {
      let toCssnn = document.querySelector(':root');
      let theColorModeNow = localStorage.getItem("used_color_mode");
      if (theColorModeNow == "LIGHT") {
        if (aColor == "#666") {
          var buBorCo = "#a8a5a9"; var buBacCo = "#d5d6da"; var buTexCo = "#687589";
        } else if (aColor == "#80cde1") {
          var buBorCo = "#88D5E9"; var buBacCo = "#cadbdc"; var buTexCo = "#28a5a9";
        } else if (aColor == "#f00") {
          var buBorCo = "#f00"; var buBacCo = "#fb5243"; var buTexCo = "#800";
        } else if (aColor == "#3d4") {
          var buBorCo = "#3d4"; var buBacCo = "#160"; var buTexCo = "#4f9";
        } else {
          //...
        }
      }
      if (theColorModeNow == "DARK") {
        //...
      }
      function coloringLabAndBut(whichLabelFloat, whichButton, aColor, buBorCo, buBacCo, buTexCo) {
        toCssnn.style.setProperty(whichLabelFloat, aColor);
        toCssnn.style.setProperty('--copyButtonsText' + whichButton, buTexCo);
        toCssnn.style.setProperty('--copyButtonsBorder' + whichButton, buBorCo);
        toCssnn.style.setProperty('--copyButtonsBackground' + whichButton, buBacCo);
      }


      f_id == "field_s_a" ? coloringLabAndBut('--labelFloat1', '', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_s_b" ? coloringLabAndBut('--labelFloat2', '2', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_s_c" ? coloringLabAndBut('--labelFloat3', '3', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_A" ? coloringLabAndBut('--labelFloat4', '4', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_B" ? coloringLabAndBut('--labelFloat5', '5', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_C" ? coloringLabAndBut('--labelFloat6', '6', aColor, buBorCo, buBacCo, buTexCo) :
      f_id == "field_peri" ? coloringLabAndBut('--labelFloat7', '7', aColor, buBorCo, buBacCo, buTexCo): pass();




      // f_id == "field_s_a" ? toCssnn.style.setProperty('--labelFloat1', aColor) :
      // f_id == "field_s_b" ? toCssnn.style.setProperty('--labelFloat2', aColor) :
      // f_id == "field_s_c" ? toCssnn.style.setProperty('--labelFloat3', aColor) :
      // f_id == "field_a_A" ? toCssnn.style.setProperty('--labelFloat4', aColor) :
      // f_id == "field_a_B" ? toCssnn.style.setProperty('--labelFloat5', aColor) :
      // f_id == "field_a_C" ? toCssnn.style.setProperty('--labelFloat6', aColor) :
      // f_id == "field_peri" ? toCssnn.style.setProperty('--labelFloat7', aColor): pass();
    }
  }
  coloring(f_id, color) {
    let boxSha = bi(f_id).style.boxShadow;
    if (boxSha == "red 0px 0px 8px") {var toUseColor = "#f00";}
    else if (boxSha == "green 0px 0px 8px") {var toUseColor = "#3d4";}
    else {
      if (color != "red") {
        var toUseColor = "#80cde1";
      } else {
        if (boxSha != "red 0px 0px 8px") {
          var toUseColor = "#666";
        } else {
          var toUseColor = "#f00";
        }
      }
    }
    this.whichColorBranching(f_id, toUseColor);
  }
  uncoloring(f_id) {this.whichColorBranching(f_id, '#666');}
}
