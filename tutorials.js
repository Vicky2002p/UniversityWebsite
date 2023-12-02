function filterTutorials() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let tutorials = document.getElementsByClassName('tutorial');

    for (let i = 0; i < tutorials.length; i++) {
        let title = tutorials[i].getElementsByTagName('h3')[0];
        if (title.innerHTML.toLowerCase().indexOf(input) > -1) {
            tutorials[i].style.display = "";
        } else {
            tutorials[i].style.display = "none";
        }
    }
}
