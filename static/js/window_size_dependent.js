function showTextTitle(executeOnlyFirstFunction) {
  if (executeOnlyFirstFunction == true) {
    fontInInputFieldsAndCopyButtons();
  } else {
    fontInInputFieldsAndCopyButtons();
    var text_title = sessionStorage.getItem("text_of_title");
    var text_title_addition = sessionStorage.getItem("text_of_title_addition");
    var textOfUnderTitle_short = sessionStorage.getItem("undertitleTextShort");
    var textOfUnderTitle_long = sessionStorage.getItem("undertitleTextLong");
    wd = window.innerWidth;
    if (wd < 940) {
      var text_title = text_title
      bi("titletext").style.textTransform = "capitalize";
      bi("undertitletext").innerHTML = textOfUnderTitle_short;
    } else {
      var text_title = text_title_addition + text_title;
      bi("titletext").style.textTransform = "none";
      bi("undertitletext").innerHTML = textOfUnderTitle_long;
    }
    bi("titletext").innerHTML = text_title;

    var combinedButtonThemeAndMobile = document.createElement("BUTTON");
    combinedButtonThemeAndMobile.setAttribute("id", "colorModeMobileVersionSmall");
    combinedButtonThemeAndMobile.setAttribute("class", "themeModeAndMobileVersionCombined");
    combinedButtonThemeAndMobile.setAttribute("onclick", ".......()");
    combinedButtonThemeAndMobile.innerHTML = "&#9776; MENU";
    if (wd < 736) {
      bc("before_right_cells_of_table_in_top_cell_main")[0].style.textAlign = "right";
      bc("right_cells_of_table_in_top_cell_main")[0].style.width = "0px";
      bc("right_cells_of_table_in_top_cell_main")[1].style.width = "68px";

      bi("todarkorlightbutton").hidden = true;
      bi("tomobilebutton").hidden = true;
      bi("about_website_link").hidden = true;
      bi("feedback_link").hidden = true;
      bi("faq_link").hidden = true;
      bi("dividedForLinks1").hidden = true;
      bi("dividedForLinks2").hidden = true;
      var checkForCombinedButton = bi("colorModeMobileVersionSmall");
      if (checkForCombinedButton == null) {
        bi("cellForCombinedButton").appendChild(combinedButtonThemeAndMobile);

        var divdropcont = document.createElement("DIV");
        divdropcont.setAttribute("id", "divdropct");
        divdropcont.setAttribute("class", "drocont");
        bi("cellForCombinedButton").appendChild(divdropcont);

        var aelem = document.createElement("A");
        aelem.setAttribute("href", "#");
        aelem.setAttribute("onclick", "toDarkOrLight()");
        aelem.innerHTML = sessionStorage.getItem("textOfColorModeButtonMini");
        bi("divdropct").appendChild(aelem);

        var aelem2 = document.createElement("A");
        aelem2.setAttribute("href", "#");
        aelem2.setAttribute("onclick", "toMobile()");
        aelem2.innerHTML = sessionStorage.getItem("TextOfToMobileButtonMini");
        bi("divdropct").appendChild(aelem2);

        var minilinks = document.createElement("DIV");
        minilinks.setAttribute("id", "minilinksArea");
        minilinks.setAttribute("class", "minilinks_Area");
        bi("linksbox").appendChild(minilinks);

        var p_about_Link = document.createElement("P");
        p_about_Link.setAttribute("id", "about_Link_p");
        p_about_Link.setAttribute("class", "AFF_Link_pc");
        bi("minilinksArea").appendChild(p_about_Link);

        var p_feedback_Link = document.createElement("P");
        p_feedback_Link.setAttribute("id", "feedback_Link_p");
        p_feedback_Link.setAttribute("class", "AFF_Link_pc");
        bi("minilinksArea").appendChild(p_feedback_Link);

        var p_faq_Link = document.createElement("P");
        p_faq_Link.setAttribute("id", "faq_Link_p");
        p_faq_Link.setAttribute("class", "AFF_Link_pc");
        bi("minilinksArea").appendChild(p_faq_Link);

        var testvaren = 1;
        var about_Link = document.createElement("A");
        about_Link.setAttribute("href", "/about/");
        about_Link.setAttribute("id", "aboutMiniLink");
        localStorage.getItem("used_language") != "EN" ? about_Link.innerHTML = sessionStorage.getItem("minilinksText_about").toLowerCase() : about_Link.innerHTML = "about";
        bi("about_Link_p").appendChild(about_Link);
        bi("aboutMiniLink").style.textTransform = "capitalize";

        var feedback_Link = document.createElement("A");
        feedback_Link.setAttribute("href", "/feedback/");
        feedback_Link.setAttribute("id", "feedbackMiniLink");
        feedback_Link.innerHTML = sessionStorage.getItem("minilinksText_feedback").toLowerCase();
        bi("feedback_Link_p").appendChild(feedback_Link);
        bi("feedbackMiniLink").style.textTransform = "capitalize";

        var faq_Link = document.createElement("A");
        faq_Link.setAttribute("href", "/faq/");
        faq_Link.setAttribute("id", "faqMiniLink");
        faq_Link.innerHTML = sessionStorage.getItem("minilinksText_faq").toLowerCase();
        bi("faq_Link_p").appendChild(faq_Link);
        bi("faqMiniLink").style.textTransform = "capitalize";

        //document.getElementById("initext").style.display = "none";
        bc("text_underh2")[0].style.fontSize = "12px";
      }
    } else {
      bc("before_right_cells_of_table_in_top_cell_main")[0].style.textAlign = "left";
      bc("right_cells_of_table_in_top_cell_main")[0].style.width = "124px";
      bc("right_cells_of_table_in_top_cell_main")[1].style.width = "124px";

      bi("todarkorlightbutton").hidden = false;
      bi("tomobilebutton").hidden = false;
      bi("about_website_link").hidden = false;
      bi("feedback_link").hidden = false;
      bi("faq_link").hidden = false;
      bi("dividedForLinks1").hidden = false;
      bi("dividedForLinks2").hidden = false;
      var checkForCombinedButton = bi("colorModeMobileVersionSmall");
      if (checkForCombinedButton != null) {
        checkForCombinedButton.remove();
        divdropct.remove();
        minilinksArea.remove();
        bc("text_underh2")[0].style.fontSize = "20px";
      }
    }
  }
}

function fontInInputFieldsAndCopyButtons() {
  var wdw = window.innerWidth;
  var idslist = ["field_s_a", "field_s_b", "field_s_c", "field_a_A", "field_a_B", "field_a_C", "field_peri"];
  if (wdw < 720) {
    idslist.forEach(doTextSize);
    function doTextSize(item, index) {
      bi(item).style.fontSize = "12px"; bi(item).style.paddingTop = "20px"; bi(item).style.paddingBottom = "4px";
    }
  } else {
    idslist.forEach(doTextSize);
    function doTextSize(item, index) {
      bi(item).style.fontSize = "19px"; bi(item).style.paddingTop = "14px"; bi(item).style.paddingBottom = "2px";
    }
  }

  let cpLong = sessionStorage.getItem("buttonCopyTextTextLong");
  let cpShort = sessionStorage.getItem("buttonCopyTextTextShort");
  function doTextCP(cpShortLong, cpWidth, cpMarLeft, cpFS, cpFW, cpPT, cpPB, cpTL) {
    let i = 0;
    let fieldsLeft = true;
    while (fieldsLeft == true) {
      try {
        bc("button_for_copyText")[i].innerHTML = cpShortLong;
        bc("button_for_copyText")[i].style.width = cpWidth;
        bc("button_for_copyText")[i].style.marginLeft = cpMarLeft;
        bc("button_for_copyText")[i].style.fontSize = cpFS;
        bc("button_for_copyText")[i].style.fontWeight = cpFW;
        bc("button_for_copyText")[i].style.paddingTop = cpPT;
        bc("button_for_copyText")[i].style.paddingBottom = cpPB;
        if (cpTL == true) {
          bc("button_for_copyText")[i].setAttribute("title", "Copy");
        } else {
          bc("button_for_copyText")[i].removeAttribute("title");
        }
        i++;
      }
      catch {fieldsLeft = false}
    }
  }
  if (wdw < 1000) {
    doTextCP(cpShort, cpWidth = "26px", cpMarLeft = "-30px", cpFS = "19px", cpFW = "bold", cpPT = "0px", cpPB = "0px", cpTL = true);
  } else if (wdw < 468) {
    //need hide buttons.
  } else {
    doTextCP(cpLong, cpWidth = "94px", cpMarLeft = "-99px", cpFS = "14px", cpFW = "normal", cpPT = "3px", cpPB = "4px", cpTL = false);
  }
}




















//...
