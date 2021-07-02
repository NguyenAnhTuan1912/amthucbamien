function Form() {
    var x = document.forms["form"]["fname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }