document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 150,
    loop: false,
    nextStringDelay: 750,
    deleteSpeed: 150,
    cursor: true,
    })
    .type('<span class="nickname">Mihu1lio Skins</span>')
    .delete(".nickname")
    .type('https://twitch.tv/mihu1lio')
    .go();
})