function showTextTitle() {
  var text_title = sessionStorage.getItem("text_of_title");
  var text_title_addition = sessionStorage.getItem("text_of_title_addition");
  var textOfUnderTitle_short = sessionStorage.getItem("undertitleTextShort");
  var textOfUnderTitle_long = sessionStorage.getItem("undertitleTextLong");
  wd = window.innerWidth;
  if (wd < 940) {
    var text_title = text_title
    document.getElementById("titletext").style.textTransform = "capitalize";
    document.getElementById("undertitletext").innerHTML = textOfUnderTitle_short;
  } else {
    var text_title = text_title_addition + text_title;
    document.getElementById("titletext").style.textTransform = "none";
    document.getElementById("undertitletext").innerHTML = textOfUnderTitle_long;
  }
  document.getElementById("titletext").innerHTML = text_title;

  var combinedButtonThemeAndMobile = document.createElement("BUTTON");
  combinedButtonThemeAndMobile.setAttribute("id", "colorModeMobileVersionSmall");
  combinedButtonThemeAndMobile.setAttribute("class", "themeModeAndMobileVersionCombined");
  combinedButtonThemeAndMobile.setAttribute("onclick", ".......()");
  combinedButtonThemeAndMobile.innerHTML = "&#9776; MENU";
  if (wd < 736) {
    document.getElementsByClassName("before_right_cells_of_table_in_top_cell_main")[0].style.textAlign = "right";
    document.getElementsByClassName("right_cells_of_table_in_top_cell_main")[0].style.width = "0px";
    document.getElementsByClassName("right_cells_of_table_in_top_cell_main")[1].style.width = "68px";

    document.getElementById("todarkorlightbutton").hidden = true;
    document.getElementById("tomobilebutton").hidden = true;
    document.getElementById("about_website_link").hidden = true;
    document.getElementById("feedback_link").hidden = true;
    document.getElementById("faq_link").hidden = true;
    document.getElementById("dividedForLinks1").hidden = true;
    document.getElementById("dividedForLinks2").hidden = true;
    var checkForCombinedButton = document.getElementById("colorModeMobileVersionSmall");
    if (checkForCombinedButton == null) {
      document.getElementById("cellForCombinedButton").appendChild(combinedButtonThemeAndMobile);

      var divdropcont = document.createElement("DIV");
      divdropcont.setAttribute("id", "divdropct");
      divdropcont.setAttribute("class", "drocont");
      document.getElementById("cellForCombinedButton").appendChild(divdropcont);

      var aelem = document.createElement("A");
      aelem.setAttribute("href", "#");
      aelem.setAttribute("onclick", "toDarkOrLight()");
      aelem.innerHTML = sessionStorage.getItem("textOfColorModeButtonMini");
      document.getElementById("divdropct").appendChild(aelem);

      var aelem2 = document.createElement("A");
      aelem2.setAttribute("href", "#");
      aelem2.setAttribute("onclick", "toMobile()");
      aelem2.innerHTML = sessionStorage.getItem("TextOfToMobileButtonMini");
      document.getElementById("divdropct").appendChild(aelem2);

      var minilinks = document.createElement("DIV");
      minilinks.setAttribute("id", "minilinksArea");
      minilinks.setAttribute("class", "minilinks_Area");
      document.getElementById("linksbox").appendChild(minilinks);

      var p_about_Link = document.createElement("P");
      p_about_Link.setAttribute("id", "about_Link_p");
      p_about_Link.setAttribute("class", "AFF_Link_pc");
      document.getElementById("minilinksArea").appendChild(p_about_Link);

      var p_feedback_Link = document.createElement("P");
      p_feedback_Link.setAttribute("id", "feedback_Link_p");
      p_feedback_Link.setAttribute("class", "AFF_Link_pc");
      document.getElementById("minilinksArea").appendChild(p_feedback_Link);

      var p_faq_Link = document.createElement("P");
      p_faq_Link.setAttribute("id", "faq_Link_p");
      p_faq_Link.setAttribute("class", "AFF_Link_pc");
      document.getElementById("minilinksArea").appendChild(p_faq_Link);

      var testvaren = 1;
      var about_Link = document.createElement("A");
      about_Link.setAttribute("href", "/about/");
      about_Link.setAttribute("id", "aboutMiniLink");
      localStorage.getItem("used_language") != "EN" ? about_Link.innerHTML = sessionStorage.getItem("minilinksText_about").toLowerCase() : about_Link.innerHTML = "about";
      document.getElementById("about_Link_p").appendChild(about_Link);
      document.getElementById("aboutMiniLink").style.textTransform = "capitalize";

      var feedback_Link = document.createElement("A");
      feedback_Link.setAttribute("href", "/feedback/");
      feedback_Link.setAttribute("id", "feedbackMiniLink");
      feedback_Link.innerHTML = sessionStorage.getItem("minilinksText_feedback").toLowerCase();
      document.getElementById("feedback_Link_p").appendChild(feedback_Link);
      document.getElementById("feedbackMiniLink").style.textTransform = "capitalize";

      var faq_Link = document.createElement("A");
      faq_Link.setAttribute("href", "/faq/");
      faq_Link.setAttribute("id", "faqMiniLink");
      faq_Link.innerHTML = sessionStorage.getItem("minilinksText_faq").toLowerCase();
      document.getElementById("faq_Link_p").appendChild(faq_Link);
      document.getElementById("faqMiniLink").style.textTransform = "capitalize";

      //document.getElementById("initext").style.display = "none";
      document.getElementsByClassName("text_underh2")[0].style.fontSize = "12px";
    }
  } else {
    document.getElementsByClassName("before_right_cells_of_table_in_top_cell_main")[0].style.textAlign = "left";
    document.getElementsByClassName("right_cells_of_table_in_top_cell_main")[0].style.width = "124px";
    document.getElementsByClassName("right_cells_of_table_in_top_cell_main")[1].style.width = "124px";

    document.getElementById("todarkorlightbutton").hidden = false;
    document.getElementById("tomobilebutton").hidden = false;
    document.getElementById("about_website_link").hidden = false;
    document.getElementById("feedback_link").hidden = false;
    document.getElementById("faq_link").hidden = false;
    document.getElementById("dividedForLinks1").hidden = false;
    document.getElementById("dividedForLinks2").hidden = false;
    var checkForCombinedButton = document.getElementById("colorModeMobileVersionSmall");
    if (checkForCombinedButton != null) {
      checkForCombinedButton.remove();
      divdropct.remove();
      minilinksArea.remove();
      document.getElementsByClassName("text_underh2")[0].style.fontSize = "20px";
    }
  }
}
