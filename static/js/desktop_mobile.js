function toMobile() {
  if (confirm(to_mob_message)) {
    if (document.title == "Online Calculator") {
      location.replace("mobile")
    }
    if (document.title == "About") {
      location.replace("../mobile")
    }
    if (document.title == "Feedback") {
      location.replace("../mobile")
    }
  }
}
