const btnCancel = document.querySelectorAll(".btn-cancel");
const tabTitle = document.querySelectorAll(".tab-title");
const tabPane = my$(".tab-pane");
const tabContent = my$(".tab-content");

tabTitle.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabContent.classList.remove('hide');
    })
})

btnCancel.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabContent.classList.add('hide');
    })
})