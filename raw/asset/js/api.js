window.api = {};

window.api.oauth = {};
window.api.oauth.config = {
    client_id: 0 > 1 ? "" : "ed63f2ffe8929b18142d",
    redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
    scope: "delete_repo,gist,user,public_repo,repo"
}
window.api.oauth.login = function(target) {
    var client_id = api.oauth.config.client_id;
    var redirect_uri = api.oauth.config.redirect_uri;

    var scope = api.oauth.config.scope;
    var state = 'github_' + Crypto.uid.create(1);
    var obj = {
        client_id,
        scope,
        state,
        redirect_uri
    }
    var query = new URLSearchParams(obj).toString();

    var a = document.createElement('a');
    var href = "https://github.com/login/oauth/authorize?" + query;
    a.href = href;
    a.click();
    console.log(534, "mvc.js", {
        href,
        obj,
        query
    });
}

window.api.code = {};
api.code.css = function(target) {
    var boxes = target.closest('header').querySelectorAll('box.file-type');
    var box = target.closest('box');
    Array.from(boxes).forEach((el)=>{
        el === box ? box.classList.toggle('active') : el.classList.remove('active');
    }
    )
    var file = document.getElementById('code-css');
    var card = file.closest('card');
    Array.from(card.parentNode.querySelectorAll('card')).forEach((el)=>{
        el === card ? card.classList.toggle('active') : el.classList.remove('active');
        //el.classList.remove('active');
    }
    )
    //card.classList.add('active')
    var view = target.closest('header').querySelector('.file-icon');
    if (!view.classList.contains('active')) {
        var frame = document.getElementById("code-frame");
        var code = frame.closest("block");
        if (code.parentNode.querySelectorAll('.file-type.active').length === 0) {
            view.classList.add('active');
            code.classList.remove('hidden');
        }
    }
    console.log('api.code', {
        file,
        card
    });
    cm["css"].refresh();
}
api.code.html = function(target) {
    var boxes = target.closest('header').querySelectorAll('box.file-type');
    var box = target.closest('box');
    Array.from(boxes).forEach((el)=>{
        el === box ? box.classList.toggle('active') : el.classList.remove('active');
    }
    )
    var file = document.getElementById('code-html');
    var card = file.closest('card');
    Array.from(card.parentNode.querySelectorAll('card')).forEach((el)=>{
        el === card ? card.classList.toggle('active') : el.classList.remove('active');
        //el.classList.remove('active');
    }
    )
    //card.classList.add('active')
    var view = target.closest('header').querySelector('.file-icon');
    if (!view.classList.contains('active')) {
        var frame = document.getElementById("code-frame");
        var code = frame.closest("block");
        if (code.parentNode.querySelectorAll('.file-type.active').length === 0) {
            view.classList.add('active');
            code.classList.remove('hidden');
        }
    }
    console.log('api.code', {
        file,
        card
    });
    cm["html"].refresh();
}
api.code.js = function(target) {
    var boxes = target.closest('header').querySelectorAll('box.file-type');
    var box = target.closest('box');
    Array.from(boxes).forEach((el)=>{
        el === box ? box.classList.toggle('active') : el.classList.remove('active');
    }
    )
    var file = document.getElementById('code-js');
    var card = file.closest('card');
    Array.from(card.parentNode.querySelectorAll('card')).forEach((el)=>{
        el === card ? card.classList.toggle('active') : el.classList.remove('active');
        //el.classList.remove('active');
    }
    )
    //card.classList.add('active')
    var view = target.closest('header').querySelector('.file-icon');
    if (!view.classList.contains('active')) {
        var frame = document.getElementById("code-frame");
        var code = frame.closest("block");
        if (code.parentNode.querySelectorAll('.file-type.active').length === 0) {
            view.classList.add('active');
            code.classList.remove('hidden');
        }
    }
    console.log('api.code', {
        file,
        card
    });
    cm["js"].refresh();
}
api.code.push = function() {
    var paths = window.location.pathname.split("/").filter(o=>o.length > 1);
    var names = paths.splice(5, paths.length - 1);
    var path = names.join('/')
    var params = {
        message: "Update /" + path,
        repo: paths[1],
        owner: paths[0]
    };
    var array = [{
        content: cm.html.getValue(),
        path: path + "index.html"
    }, {
        content: cm.css.getValue(),
        path: path + "index.css"
    }, {
        content: cm.js.getValue(),
        path: path + "index.js"
    }];
    console.log(52, path, params, array);
    0 < 1 ? github.repos.push(params, array).then(function(response) {
        console.log(37, response);
    }) : null
}
api.code.view = function(target) {
    console.log(60, target);
    var frame = document.getElementById("code-frame");
    var code = frame.closest("block");
    if (code.parentNode.querySelectorAll('.file-type.active').length > 0) {
        target.closest('box').classList.toggle('active');
        code.classList.toggle('hidden');
    }
}

window.api.gists = {};
api.gists.push = function(target) {
    target.closest('[onclick]').querySelector('con').classList.remove('gg-software-upload');
    target.closest('[onclick]').querySelector('con').classList.add('gg-spinner');

    var id = rout.e.paths[2];

    var code = [];
    var html = window.cm.html.getValue();
    var css = window.cm.css.getValue();
    var js = window.cm.js.getValue();
    html === "" ? null : code.html = html;
    css === "" ? null : code.css = css;
    js === "" ? null : code.js = js;

    var files = {};
    var keys = Object.keys(code);
    var vals = Object.values(code);
    Object.keys(code).forEach((key,index)=>{
        var value = vals[index];
        var extension = key;
        var content = vals[index];
        var obj = {
            content
        };
        var file = "index." + extension;
        files[file] = obj;
        console.log(83, {
            code,
            content,
            keys,
            obj,
            vals,
            files,
            file
        });
    }
    );
    0 > 1 ? console.log(93, {
        code,
        keys,
        vals,
        files
    }) : null;

    var settings = {
        body: JSON.stringify({
            description: "An updated gist description",
            files
        }),
        method: 'PATCH'
    };
    0 < 1 ? console.log(107, {
        id,
        settings
    }) : null;
    github.gists.id(id, settings)
}
api.gists.config = (tab)=>{
    console.log(116, 'api.gists.config');
    request('/raw/asset/html/modal/gist.options.html').then((html)=>{
        console.log(118, {
            html
        });
        modal.panel(html);
    }
    );
}
api.gists.view = ()=>{
    console.log(119, 'api.gists.view');
}
api.gists.likes = ()=>{
    console.log(116, 'api.gists.likes');
    request('/raw/asset/html/modal/gist.likes.html').then((html)=>{
        console.log(118, {
            html
        });
        modal.panel(html);
    }
    );
}

window.api.snippet = {};
api.snippet.assets = function() {
    request('/raw/asset/html/modal/gist.assets.html').then((html)=>{
        console.log(118, {
            html
        });
        modal.panel(html);
    }
    );
}
api.snippet.comments = function() {
    request('/raw/asset/html/modal/gist.comments.html').then((html)=>{
        console.log(118, {
            html
        });
        modal.panel(html);
    }
    );
}
api.snippet.clear = ()=>{
    document.getElementById('code-frame').nextElementSibling.querySelector('card > section').innerHTML = "";
}
api.snippet.console = ()=>{
    var codeFrame = document.getElementById('code-frame');
    codeFrame.nextElementSibling.classList.toggle('hidden');
}
api.snippet.resources = (target)=>{
    console.log(263, 'api.snippet.resources');
}
api.snippet.saved = ()=>{
    console.log(116, 'api.gists.likes');
    request('/raw/asset/html/modal/gist.saved.html').then((html)=>{
        console.log(118, {
            html
        });
        modal.panel(html);
    }
    );
}
api.snippet.save = async(target)=>{
    console.log(116, 1, 'api.gists.likes', {
        paths: rout.e.paths,
        path: rout.e.paths[2]
    });
    if (target.closest('text').querySelector('i:has(.gg-bookmark)').style.color.length === 0) {
        //throw new TypeError(`{"msg": "You already like this."}`);
        console.log(116, 3.0, 'api.gists.likes 404', {
            star
        });
        try {
            var star = await github.gists.star({
                id: rout.e.paths[2]
            }, {
                method: "PUT"
            });
            console.log(116, 4, 'api.gists.likes 200s', {
                star
            });
            target.closest('text').querySelector('i:has(.gg-bookmark)').style.color = "#0096c7";
        } catch (e) {
            console.log(328, 4, 'api.gists.likes 404', e);
        }
    } else {
        try {
            var starred = await github.gists.star({
                id: rout.e.paths[2]
            });
            console.log(116, 2, 'api.gists.likes 200', {
                starred,
                length: target.closest('text').querySelector('i:has(.gg-bookmark)').style.color.length
            });
            try {
                //alert("You unlike this");
                var star = await github.gists.star({
                    id: rout.e.paths[2]
                }, {
                    method: "DELETE"
                });
                console.log(116, 3, 'api.gists.likes 200', {
                    star
                });
                target.closest('text').querySelector('i:has(.gg-bookmark)').removeAttribute('style');
            } catch (e) {
                console.log(116, 3, 'api.gists.likes 404', {
                    e
                });
            }
        } catch (e) {
            var msg = JSON.parse(e.message)
            console.log(116, 2.5, 'api.gists.likes 404', {
                e,
                msg
            });
            if (msg.code === 404) {
                //alert("You like this");
                console.log(116, 3.5, 'api.gists.likes 404', {
                    star
                });
                try {
                    var star = await github.gists.star({
                        id: rout.e.paths[2]
                    }, {
                        method: "PUT"
                    });
                    console.log(116, 4, 'api.gists.likes 200s', {
                        star
                    });
                    target.closest('text').querySelector('i:has(.gg-bookmark)').style.color = "#0096c7";
                } catch (e) {
                    console.log(328, 4, 'api.gists.likes 404', e);
                }
            }
        }
    }
}
api.snippet.view = (target)=>{
    console.log(263, 'api.snippet.view');
    var btn = target.closest('[onclick]');
    Array.from(btn.children).forEach(el=>{
        el.classList.remove('active');
    }
    )
    target.closest('[onclick] > *').classList.add('active');
}

window.api.time = {};
api.time.date = (previous)=>{
    var date = Date.now();
    var current = date;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
}

window.api.tree = {};
window.api.tree.edit = function(target) {
    var box = target.closest('box');
    var link = box.querySelector('text span');
    var filename = link.textContent;
    var parts = filename.split('.');
    var ext = parts[parts.length - 1];
    //console.log(90, filename, ext);

    if (box.querySelector('.icon-file')) {
        if (["index.css", "index.html", "index.js"].includes(filename)) {
            var href = link.getAttribute('href');
            var dirs = href.split('/').filter(o=>o.length > 0);
            dirs[2] = 'edit';
            console.log(97, href, dirs);
            rout.er("/" + dirs.join("/"))
        }

        if (["jpg", "jpeg", "png", "svg"].includes(ext)) {
            console.log("Cannot edit images...");
        }
    }

    if (box.querySelector('.icon-folder')) {
        var href = link.getAttribute('href');
        var dirs = href.split('/').filter(o=>o.length > 0);
        dirs[2] = 'wide';
        console.log(97, href, dirs);
        rout.er("/" + dirs.join("/"));
    }
}
