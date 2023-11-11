function navBar() {
    let navigation = document.getElementById("topNav");
    if (navigation.className === "navbar") {
        navigation.className += "responsive";
    } else {
        navigation.className = "navbar";
    }
}
