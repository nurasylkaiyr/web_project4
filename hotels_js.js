// showTab(tabName) принимает параметр tabName, который является идентификатором вкладки,
// которую нужно показать. Она скрывает все элементы с классом "tab", представляющие собой содержимое вкладок.
// Затем она находит элемент с id, соответствующим выбранной вкладке (например, если tabName = "home", 
// будет найден элемент с id "homeTab") и устанавливает его стиль display в "block", чтобы показать этот элемент.
function showTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName + "Tab").style.display = "block";
}