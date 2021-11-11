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
        }
      }
      if (theColorModeNow == "DARK") {
        if (aColor == "#666") {
          var buBorCo = "#353535"; var buBacCo = "#161616"; var buTexCo = "#687589";
        } else if (aColor == "#0a6fc2") {
          var buBorCo = "#06a"; var buBacCo = "#122233"; var buTexCo = "#0a6fc2";
        } else if (aColor == "#f00") {
          var buBorCo = "#f00"; var buBacCo = "#fd5243"; var buTexCo = "#800";
        } else if (aColor == "#3d4") {
          var buBorCo = "#3d4"; var buBacCo = "#160"; var buTexCo = "#4f9";
        } else {
          //...
        }
      }
      function coloringLabAndBut(whichLabelFloat, whichButton, aColor, buBorCo, buBacCo, buTexCo) {
        toCssnn.style.setProperty(whichLabelFloat, aColor);
        toCssnn.style.setProperty('--copyButtonsText' + whichButton, buTexCo);
        toCssnn.style.setProperty('--copyButtonsBorder' + whichButton, buBorCo);
        toCssnn.style.setProperty('--copyButtonsBackground' + whichButton, buBacCo);
      }

      const aColorFx = {};
      const idsFormFields = ['field_s_a', 'field_s_b', 'field_s_c', 'field_a_A', 'field_a_B', 'field_a_C', 'field_peri'];
      let backgColor1;
      let backgColor2;
      let toPlaceholderColor;
      if (localStorage.getItem("used_color_mode") == "DARK") {
        backgColor1 = "rgb(4, 50, 230)";
        backgColor2 = "rgb(6, 60, 238)";
        toPlaceholderColor = "yellow";
      } else {
        backgColor1 = "rgb(136, 213, 233)";
        backgColor2 = "rgb(110, 190, 195)";
        toPlaceholderColor = "grey";
      }
      let i;
      let lth = idsFormFields.length;
      for (i=0; i < lth; i++) {
        if (document.getElementById(idsFormFields[i]).style.backgroundColor == backgColor1 ||
      document.getElementById(idsFormFields[i]).style.backgroundColor == backgColor2) {
          aColorFx[i] = toPlaceholderColor;
        } else {
          aColorFx[i] = aColor;
        }
      }

      f_id == "field_s_a" ? coloringLabAndBut('--labelFloat1', '', aColorFx[0], buBorCo, buBacCo, buTexCo) :
      f_id == "field_s_b" ? coloringLabAndBut('--labelFloat2', '2', aColorFx[1], buBorCo, buBacCo, buTexCo) :
      f_id == "field_s_c" ? coloringLabAndBut('--labelFloat3', '3', aColorFx[2], buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_A" ? coloringLabAndBut('--labelFloat4', '4', aColorFx[3], buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_B" ? coloringLabAndBut('--labelFloat5', '5', aColorFx[4], buBorCo, buBacCo, buTexCo) :
      f_id == "field_a_C" ? coloringLabAndBut('--labelFloat6', '6', aColorFx[5], buBorCo, buBacCo, buTexCo) :
      f_id == "field_peri" ? coloringLabAndBut('--labelFloat7', '7', aColorFx[6], buBorCo, buBacCo, buTexCo): pass();
    }
  }

  coloring(f_id, color) {
    let boxSha = bi(f_id).style.boxShadow;
    if (boxSha == "red 0px 0px 8px") {var toUseColor = "#f00";}
    else if (boxSha == "green 0px 0px 8px") {var toUseColor = "#3d4";}
    else {
      if (color != "red") {
        if (localStorage.getItem("used_color_mode") == "LIGHT") {
          var toUseColor = "#80cde1";
        } else {
          var toUseColor = "#0a6fc2";
        }
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

  coloringPlaceholdersWhenSolved(gotDataFromServer) {
    const field_label = ['--labelFloat1', '--labelFloat2', '--labelFloat3', '--labelFloat4', '--labelFloat5', '--labelFloat6', '--labelFloat7'];
    let toCssnn = document.querySelector(':root');
    let xc;
    let lh = gotDataFromServer.length;
    for (i=7; i < lh; i++) {
      if (gotDataFromServer[i] == 1) {
        if (localStorage.getItem("used_color_mode") == "LIGHT") {xc = "grey"} else {xc = "yellow"}
        toCssnn.style.setProperty(field_label[i-7], xc);
      }
    }
  }

  uncoloring(f_id) {this.whichColorBranching(f_id, '#666');}
}
