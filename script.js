article = document.getElementsByClassName("article-body")[0], images = article.getElementsByTagName("img"), carousel = document.getElementById("carousel");
for (let [e, j] of Object.entries(images)) {
    if (0 == e) continue;
    let t = document.createElement("div");
    t.className = "slide", t.innerHTML = `<div class="picture"><div class="s-nav"><span class="prev" onclick="siema_lightbox.prev()"></span><span class="next" onclick="siema_lightbox.next()"></span></div><img src="${j.getAttribute("src")}"></div><span class="count">${e} / ${images.length-1}</span><div class="close" onclick="lightbox('closer')" />`, carousel.append(t), j.setAttribute("onclick", `lightbox('opener', ${e-1})`)
}
const siema_lightbox = new Siema({
    duration: 0,
    perPage: 1,
    startIndex: 0,
    draggable: !1,
    threshold: 20,
    loop: !0
});

function lighboxKeys(e) {
    "ArrowLeft" == e.code ? siema_lightbox.prev() : "ArrowRight" == e.code && siema_lightbox.next()
}

function lightbox(e, t) {
    "opener" == e ? (siema_lightbox.goTo(t), carousel.classList.toggle("opened"), document.addEventListener("keydown", lighboxKeys)) : "closer" == e && (carousel.classList.toggle("opened"), document.removeEventListener("keydown", lighboxKeys))
}
