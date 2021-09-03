var bc = function(cl) {return document.getElementsByClassName(cl);};

function showTextTitle(executeOnlyFirstFunction) {
  if (executeOnlyFirstFunction == true) {
    try {fontInInputFieldsAndCopyButtons();} catch {}
  } else {
    try {fontInInputFieldsAndCopyButtons();} catch {}
    var text_title = sessionStorage.getItem("text_of_title");
    var text_title_addition = sessionStorage.getItem("text_of_title_addition");

    var text_titlePageAbout = sessionStorage.getItem("text_of_title_ofPageAbout");
    var text_title_additionPageAbout = sessionStorage.getItem("text_of_title_addition_ofPageAbout");

    var undertitle_text_long_PageAbout = sessionStorage.getItem("undertitleTextLong_ofPageAbout");
    var undertitle_text_short_PageAbout = sessionStorage.getItem("undertitleTextShort_ofPageAbout");

    var text_titlePageFeedback = sessionStorage.getItem("text_of_title_ofPageFeedback");
    var text_title_additionPageFeedback = sessionStorage.getItem("text_of_title_addition_ofPageFeedback");

    var undertitle_text_long_PageFeedback = sessionStorage.getItem("undertitleTextLong_ofPageFeedback");
    var undertitle_text_short_PageFeedback = sessionStorage.getItem("undertitleTextShort_ofPageFeedback");

    var text_titlePageFaq = sessionStorage.getItem("text_of_title_ofPageFaq");
    var text_title_additionPageFaq = sessionStorage.getItem("text_of_title_addition_ofPageFaq");

    var undertitle_text_long_PageFaq = sessionStorage.getItem("undertitleTextLong_ofPageFaq");
    var undertitle_text_short_PageFaq = sessionStorage.getItem("undertitleTextShort_ofPageFaq");

    var textOfUnderTitle_short = sessionStorage.getItem("undertitleTextShort");
    var textOfUnderTitle_long = sessionStorage.getItem("undertitleTextLong");
    wd = window.innerWidth;
    if (wd < 940) {
      var text_title = text_title
      var text_titlePageAbout = text_titlePageAbout + ".";
      var text_titlePageFeedback = text_titlePageFeedback + ".";
      var text_titlePageFaq = text_titlePageFaq;
      try {bi("titletext").style.textTransform = "capitalize";} catch {}
      try {bi("undertitletext").innerHTML = textOfUnderTitle_short;}
      catch {
        if (document.title == "About") {
          bi("undertitletext_About_Page").innerHTML = undertitle_text_short_PageAbout;
        }
        if (document.title == "Feedback") {
          bi("undertitletext_Feedback_Page").innerHTML = undertitle_text_short_PageFeedback;
        }
        if (document.title == "FAQ") {
          if (localStorage.getItem("used_language") == "EN") {
            if (wd < 750) {
              document.getElementsByClassName("inside_links_right")[0].getElementsByTagName('a')[1].innerHTML = "ABOUT";
            } else {
              document.getElementsByClassName("inside_links_right")[0].getElementsByTagName('a')[1].innerHTML = "ABOUT WEBSITE";
            }
          }
          bi("undertitletext_Faq_Page").innerHTML = undertitle_text_short_PageFaq;
        }
      }
    } else {
      var text_title = text_title_addition + text_title;
      var text_titlePageAbout = text_titlePageAbout + text_title_additionPageAbout;
      var text_titlePageFeedback = text_titlePageFeedback + text_title_additionPageFeedback;
      var text_titlePageFaq = text_title_additionPageFaq;
      try {bi("titletext").style.textTransform = "none";} catch {}
      try {bi("undertitletext").innerHTML = textOfUnderTitle_long;}
      catch {
        if (document.title == "About") {
          bi("undertitletext_About_Page").innerHTML = undertitle_text_long_PageAbout;
        }
        if (document.title == "Feedback") {
          bi("undertitletext_Feedback_Page").innerHTML = undertitle_text_long_PageFeedback;
        }
        if (document.title == "FAQ") {
          bi("undertitletext_Faq_Page").innerHTML = undertitle_text_long_PageFaq;
        }
      }
    }
    try {
      bi("titletext").innerHTML = text_title;
    }
    catch {
      if (document.title == "About") {
        bi("titletext_About_Page").innerHTML = text_titlePageAbout;
      }
      if (document.title == "Feedback") {
        bi("titletext_Feedback_Page").innerHTML = text_titlePageFeedback;
      }
      if (document.title == "FAQ") {
        bi("titletext_Faq_Page").innerHTML = text_titlePageFaq;
      }
    }

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
      try {bi("homepage_link").hidden = true;} catch {}
      try {bi("about_website_link").hidden = true;} catch {}
      try {bi("feedback_link").hidden = true;} catch {}
      try {bi("faq_link").hidden = true;} catch {}
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

        function makePStuff(link_name) {
          var link_name_full = link_name + "_Link_p";
          var p_x_Link = document.createElement("P");
          p_x_Link.setAttribute("id", link_name_full);
          p_x_Link.setAttribute("class", "AFF_Link_pc");
          bi("minilinksArea").appendChild(p_x_Link);
        }
        if (document.title == "About") {
          makePStuff("home");makePStuff("feedback");makePStuff("faq");
        } else if (document.title == "Feedback") {
          makePStuff("home");makePStuff("about");makePStuff("faq");
        } else if (document.title == "FAQ") {
          makePStuff("home");makePStuff("about");makePStuff("feedback");
        } else {makePStuff("about");makePStuff("feedback");makePStuff("faq");}

        // var p_feedback_Link = document.createElement("P");
        // p_feedback_Link.setAttribute("id", "feedback_Link_p");
        // p_feedback_Link.setAttribute("class", "AFF_Link_pc");
        // bi("minilinksArea").appendChild(p_feedback_Link);
        var testvaren = 1;
        var about_Link = document.createElement("A");
        about_Link.setAttribute("href", "/about/");
        about_Link.setAttribute("id", "aboutMiniLink");
        localStorage.getItem("used_language") != "EN" ? about_Link.innerHTML = sessionStorage.getItem("minilinksText_about").toLowerCase() : about_Link.innerHTML = "about";

        if (document.title == "Online Calculator") {
          bi("about_Link_p").appendChild(about_Link);
          bi("aboutMiniLink").style.textTransform = "capitalize";
        }

        var home_Link = document.createElement("A");
        home_Link.setAttribute("href", "/");
        home_Link.setAttribute("id", "homeMiniLink");
        localStorage.getItem("used_language") != "EN" ? home_Link.innerHTML = sessionStorage.getItem("minilinksText_home").toLowerCase() : home_Link.innerHTML = "home";

        if (document.title == "About") {
          bi("home_Link_p").appendChild(home_Link);
          bi("homeMiniLink").style.textTransform = "capitalize";
        }

        if (document.title == "Feedback" || document.title == "FAQ") {
          bi("home_Link_p").appendChild(home_Link);
          bi("homeMiniLink").style.textTransform = "capitalize";

          bi("about_Link_p").appendChild(about_Link);
          bi("aboutMiniLink").style.textTransform = "capitalize";
        }

        var feedback_Link = document.createElement("A");
        feedback_Link.setAttribute("href", "/feedback/");
        feedback_Link.setAttribute("id", "feedbackMiniLink");
        feedback_Link.innerHTML = sessionStorage.getItem("minilinksText_feedback").toLowerCase();
        try {bi("feedback_Link_p").appendChild(feedback_Link);} catch {}
        try {bi("feedbackMiniLink").style.textTransform = "capitalize";} catch {}

        var faq_Link = document.createElement("A");
        faq_Link.setAttribute("href", "/faq/");
        faq_Link.setAttribute("id", "faqMiniLink");
        faq_Link.innerHTML = sessionStorage.getItem("minilinksText_faq").toLowerCase();
        try {bi("faq_Link_p").appendChild(faq_Link);} catch {}
        try {bi("faqMiniLink").style.textTransform = "capitalize";} catch {}

        //document.getElementById("initext").style.display = "none";
        try {bc("text_underh2")[0].style.fontSize = "12px";} catch {}
      }
    } else {
      bc("before_right_cells_of_table_in_top_cell_main")[0].style.textAlign = "left";
      bc("right_cells_of_table_in_top_cell_main")[0].style.width = "124px";
      bc("right_cells_of_table_in_top_cell_main")[1].style.width = "124px";

      bi("todarkorlightbutton").hidden = false;
      bi("tomobilebutton").hidden = false;
      try {bi("homepage_link").hidden = false;} catch {}
      try {bi("about_website_link").hidden = false;} catch {}
      try {bi("feedback_link").hidden = false;} catch {}
      try {bi("faq_link").hidden = false;} catch {}
      bi("dividedForLinks1").hidden = false;
      bi("dividedForLinks2").hidden = false;
      var checkForCombinedButton = bi("colorModeMobileVersionSmall");
      if (checkForCombinedButton != null) {
        checkForCombinedButton.remove();
        divdropct.remove();
        minilinksArea.remove();
        try {bc("text_underh2")[0].style.fontSize = "20px";} catch {}
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
