function dropLangMenu() {
  document.getElementById("dropdown_languages_show").classList.toggle("show");
  bi("show_used_lang").innerHTML = localStorage.getItem("used_language") + " &#9652";
}

window.onclick = function(event) {
  if (!event.target.matches('.chosen_lang')) {
    var dropdowns = document.getElementsByClassName("dropdown_languages");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        bi("show_used_lang").innerHTML = localStorage.getItem("used_language") + " &#9662";
      }
    }
  }
}

function set_en_lang() {
  localStorage.setItem("used_language", "EN");
  localStorage.setItem("path_to_json_lang", "/static/json/languages/en.json");
}

function set_ru_lang() {
  localStorage.setItem("used_language", "RU");
  localStorage.setItem("path_to_json_lang", "/static/json/languages/ru.json");
}

function set_fr_lang() {
  localStorage.setItem("used_language", "FR");
  localStorage.setItem("path_to_json_lang", "/static/json/languages/fr.json");
}

var bi = function(id) {return document.getElementById(id);};
window.onload=function showByLanguage() {
  var used_lang = localStorage.getItem("used_language");
  var used_path_to_json = localStorage.getItem("path_to_json_lang");
  if (used_lang == null || used_path_to_json == null) {//needs to extend comparison variants
    set_en_lang();
  }
  var whatthelang = localStorage.getItem("used_language");
  bi("show_used_lang").innerHTML = whatthelang + " &#9662";
  if (whatthelang == "EN") {
    document.getElementById("en_choice").style.color = "#3080ca";
    document.getElementById("en_choice").style.fontWeight = "bold";
  }
  if (whatthelang == "RU") {
    document.getElementById("ru_choice").style.color = "#3080ca";
    document.getElementById("ru_choice").style.fontWeight = "bold";
  }
  if (whatthelang == "FR") {
    document.getElementById("fr_choice").style.color = "#3080ca";
    document.getElementById("fr_choice").style.fontWeight = "bold";
  }
  path_to_json_language = localStorage.getItem("path_to_json_lang");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var languages = JSON.parse(this.responseText);
      if (localStorage.getItem("used_language") == "RU") {
        ruFonts();
      }
      bi("tomobilebutton").innerHTML = languages.to_mobile.button;
      sessionStorage.setItem("TextOfToMobileButtonMini", languages.to_mobile.button);
      to_mob_message = languages.to_mobile.message;
      to_dark_message = languages.modes.message_to_dark;
      to_light_message = languages.modes.message_to_light;
      //bi("titletext").innerHTML = languages.title.main;
      text_title = languages.title.main;
      text_title_addition = languages.title.main_addition;
      sessionStorage.setItem("text_of_title", text_title);
      sessionStorage.setItem("text_of_title_addition", text_title_addition);
      //showTextTitle();
      //bi("undertitletext").innerHTML = languages.undertitle.main;
      sessionStorage.setItem("undertitleTextLong", languages.undertitle.main);
      sessionStorage.setItem("undertitleTextShort", languages.undertitle_short);
      var textpart1 = languages.under_undertitle.initext[0];
      var textpart2 = languages.under_undertitle.initext[1];
      var textpart3 = languages.under_undertitle.initext[2];
      bi("initext").innerHTML = textpart1+textpart2+textpart3;
      bi("about_website_link").innerHTML = languages.links.about;
      sessionStorage.setItem("minilinksText_about", languages.links.about);
      bi("feedback_link").innerHTML = languages.links.feedback;
      sessionStorage.setItem("minilinksText_feedback", languages.links.feedback);
      bi("faq_link").innerHTML = languages.links.faq;
      sessionStorage.setItem("minilinksText_faq", languages.links.faq);
      //showTextTitle();
      var mlight = languages.modes.light_mode;
      var mdark = languages.modes.dark_mode;
      showColorMode(mlight, mdark);
      showTextTitle();

      //bi("warningMessage").style.fontFamily = "'Kanit', sans-serif";
      bi("warningMessage").innerHTML = languages.warning_message.no_message;
      bi("label_of_main_form").innerHTML = languages.main_form.input_data;

      sessionStorage.setItem("placeholdersInMainForm_field1", languages.main_form.placeholders.side_a);
      sessionStorage.setItem("placeholdersInMainForm_field2", languages.main_form.placeholders.side_b);
      sessionStorage.setItem("placeholdersInMainForm_field3", languages.main_form.placeholders.side_c);
      sessionStorage.setItem("placeholdersInMainForm_field4", languages.main_form.placeholders.angle_A);
      sessionStorage.setItem("placeholdersInMainForm_field5", languages.main_form.placeholders.angle_B);
      sessionStorage.setItem("placeholdersInMainForm_field6", languages.main_form.placeholders.angle_C);
      sessionStorage.setItem("placeholdersInMainForm_field7", languages.main_form.placeholders.perimeter);
      sessionStorage.setItem("placeholdersInMainForm_field8", languages.main_form.placeholders.area);
      var placeholders = new Placeholders();
      placeholders.showPlaceholders();

      sessionStorage.setItem("warningMessageInLegendOfForm_noMessage", languages.warning_message.no_message);
      sessionStorage.setItem("warningMessageInLegendOfForm_noNumber", languages.warning_message.no_number);
      sessionStorage.setItem("warningMessageInLegendOfForm_negativeNumber", languages.warning_message.negative_number);
      sessionStorage.setItem("warningMessageInLegendOfForm_impossibleShape", languages.warning_message.impossible_shape);
      sessionStorage.setItem("warningMessageInLegendOfForm_canPartiallySolve", languages.warning_message.can_partially_solve);
      sessionStorage.setItem("warningMessageInLegendOfForm_canSolve", languages.warning_message.can_solve);

      sessionStorage.setItem("buttonCopyTextTextLong", languages.main_form.copy_from_field_button);
      sessionStorage.setItem("buttonCopyTextTextShort", languages.main_form.copy_from_field_button_short);

      showTextTitle(executeOnlyFirstFunction = true);

      // let i = 0;
      // let fieldsLeft = true;
      // while (fieldsLeft == true) {
      //   try {
      //     document.getElementsByClassName("button_for_copyText")[i].innerHTML = languages.main_form.copy_from_field_button;
      //     i++;
      //   }
      //   catch {fieldsLeft = false}
      // }

      bi("submitbut").value = languages.main_form.submit_button;
      bi("resetbut").value = languages.main_form.clear_button;
      resetBlinking();
      sessionStorage.setItem("conditionOfinput", "not_solved");
      var ids_fields = ["field_s_a", "field_s_b", "field_s_c", "field_a_A", "field_a_B", "field_a_C", "field_peri"];//this must be loaded from json.
      sessionStorage.setItem("sequenceOfIdsFields", JSON.stringify(ids_fields));
      sessionStorage.setItem("numberOfUsefulFields", "7");//also must be loaded from json.
      sessionStorage.setItem("blinkingDrawTri", "");
      sessionStorage.setItem("colorConditionOfCalculation", "white");
      //bi("field_s_b_copy_button").style.display = "none";
    }
  };
  xmlhttp.open("GET", path_to_json_language, true);
  xmlhttp.send();
}
