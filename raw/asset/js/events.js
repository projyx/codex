window.events = {};

window.events.onclick = {}
window.events.onclick.cd = function(dir) {
    var href = null;
    var pathname = window.location.pathname;
    var paths = pathname.split('/').filter(o=>o.length > 0);
    //console.log(pathname, paths);
    if (paths[paths.length - 3] === "tree") {
        if (paths[paths.length - 2] === "main") {
            paths.splice(paths.length - 3, 3);
        }
    } else {
        if (dir === "..") {
            paths.pop();
        }
    }
    if (paths) {
        href = "/" + (paths.length > 0 ? paths.join("/") : "")
        console.log(href, paths);
        rout.er(href);
    }
}
window.events.onclick.document = async function(event) {
    var target = event.target;
    var elem = target;

    Array.from(document.querySelectorAll('[drop="down"]')).forEach(elem=>{
        elem.nextElementSibling.setAttribute('css-display', 'none');
    }
    );

    elem = target.closest('[href]');
    if (elem) {
        event.preventDefault();
        var href = elem.getAttribute('href');
        //console.log(47, href);
        rout.er(href);
    }

    elem = target.closest('[drop]');
    if (elem) {
        if (elem.nextElementSibling.getAttribute("css-display") === 'none') {
            Array.from(document.querySelectorAll('[onclick="events.onclick.dropdown(event.target)"]')).forEach(elem=>{
                elem.nextElementSibling.setAttribute('css-display', 'none');
            }
            );
            elem.nextElementSibling['removeAttribute']('css-display', 'none');
        } else {
            elem.nextElementSibling['setAttribute']('css-display', 'none');
        }
    }
}
window.events.onclick.exit = function(event) {
    var paths = window.location.pathname.split('/').filter(o=>o.length > 0);
    paths[2] = "tree";
    paths.pop();
    //console.log(paths);
    var href = "/" + (paths.length > 0 ? paths.join("/") : "");
    console.log(42, href);
    rout.er(href);
}

window.events.onsubmit = {};
