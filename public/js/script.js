// Sidebar
const my$ = document.querySelector.bind(document);
const my$$ = document.querySelectorAll.bind(document);

const toggleSideMenu = document.querySelector('.sidebar-toggle');
const toggleBtn = document.querySelector('.toggle-btn');

const sidebar_item = document.querySelector('a.sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarTab = document.querySelectorAll('.sidebar-tab');
const sidebarTabActive = document.querySelector('.sidebar-tab.active');

const sportTab = document.querySelectorAll('.sport-tab');
const sportTabActive = document.querySelector('.sport-tab.active');
const line = document.querySelector('.sidebar .line');

toggleSideMenu.onclick = function() {
    sidebar.classList.toggle("active");
}

line.style.top = sportTabActive.offsetTop + "px";
console.log(sportTab);

sportTab.forEach(tab => {
    tab.onclick = function () {
        my$(".sport-tab.active").classList.remove("active");

        line.style.top = this.offsetTop + "px";

        this.classList.add("active");
    };
});
// /Sidebar