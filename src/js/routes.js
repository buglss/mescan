export default ($$) => {
    return [{
        name: 'MesCan',
        path: '/',
        url: './index.html'
    }, {
        name: "MesCan",
        path: '/home/',
        url: './pages/home.html',
        routes: [{
            name: "Yeni Etkinlik",
            path: "create-activity/",
            url: "./pages/activities/create-activity.html",
            routes: [{
                name: "Yeni Etiket",
                path: "create-activity-tag/",
                url: "./pages/activities/create-activity-tag.html"
            }],
            on: {
                pageInit(page) {
                    page.detail.app.toggle.create({
                        el: '.toggle.hasAllPersons',
                        on: {
                            change() {
                                if (this.checked) {
                                    $$(".item-link.persons").addClass("disabled hide")
                                    $$(".hasAllPersons--help").addClass("hide")
                                    $$(".hasAllPersons--icon").removeClass("hide")
                                    $$(".hasAllPersons--title").removeClass("hide")
                                } else {
                                    $$(".item-link.persons").removeClass("disabled hide")
                                    $$(".hasAllPersons--help").removeClass("hide")
                                    $$(".hasAllPersons--icon").addClass("hide")
                                    $$(".hasAllPersons--title").addClass("hide")
                                }
                            }
                        }
                    }).emit("change")

                    let now = new Date()
                    page.detail.app.form.fillFromData("#createActivity", {
                        cron: now.getFullYear() + "-" + ("00" + now.getMonth()).substr(-2) + "-" + ("00" + now.getDate()).substr(-2)
                    })
                }
            }
        }]
    }, {
        name: "Kişiler",
        path: '/persons/',
        url: './pages/persons/persons.html',
        routes: [{
            name: "Ayarlar",
            path: 'person-settings/',
            url: './pages/persons/person-settings.html',
            routes: [{
                name: "Yeni Çevre",
                path: 'create-circle/',
                url: './pages/persons/create-circle.html',
            }]
        }, {
            name: "Düzenle",
            path: 'person-edit/',
            url: './pages/persons/person-edit.html',
            on: {
                pageInit(page) {
                    page.detail.app.toggle.create({
                        el: '.toggle.hasAllTags',
                        on: {
                            change() {
                                if (this.checked) {
                                    $$(".item-link.tags").addClass("disabled hide")
                                    $$(".hasAllTags--help").addClass("hide")
                                    $$(".hasAllTags--icon").removeClass("hide")
                                    $$(".hasAllTags--title").removeClass("hide")
                                } else {
                                    $$(".item-link.tags").removeClass("disabled hide")
                                    $$(".hasAllTags--help").removeClass("hide")
                                    $$(".hasAllTags--icon").addClass("hide")
                                    $$(".hasAllTags--title").addClass("hide")
                                }
                            }
                        }
                    }).emit("change")
                }
            }
        }]
    }, {
        name: "Durumlar",
        path: '/status/',
        url: './pages/status/status.html',
        routes: [{
            name: "Yeni Durum",
            path: 'create-status/',
            url: './pages/status/create-status.html'
        }, {
            name: "Durum Mesajı",
            path: 'create-status-draft/',
            url: './pages/status/create-status-draft.html',
        }]
    }, {
        name: "Mesajlar",
        path: '/messages/',
        url: './pages/messages/messages.html',
        tabs: [{
            id: "customMessages",
            path: "/",
            url: "./pages/messages/custom-messages.html"
        }, {
            id: "incomingMessages",
            path: "/incoming-messages/",
            url: "./pages/messages/incoming-messages.html"
        }],
        on: {
            pageInit(page) {
                page.detail.$el.find(".tab-link").on("click", function() {
                    let tabTitle = $$(this).find(".tabTitle").text(),
                        navbarInner = $$(this).parents(".navbar-inner")
                    navbarInner.find(".title").text(tabTitle + ' Mesajlar')
                    navbarInner.find("#messagesSearchInput").attr("placeholder", (tabTitle === "Özel") ? "Etikete göre ara..." : "Duruma göre ara...")
                })
            }
        }
    }, {
        name: "Yeni Özel Mesaj",
        path: "/create-draft/",
        url: "./pages/messages/create-draft.html"
    }, {
        name: "Toplu Mesaj",
        path: "/bulk-message/",
        url: "./pages/messages/bulk-message.html"
    }, {
        name: "Özel Mesaj Düzenle",
        path: "/message-edit/",
        url: "./pages/messages/message-edit.html"
    }, {
        name: "Etkinlikler",
        path: '/activities/',
        url: './pages/activities/activities.html',
        routes: [{
            name: "Düzenle",
            path: "activity-edit/",
            url: "./pages/activities/activity-edit.html"
        }]
    }, {
        path: '(.*)',
        url: './pages/404.html',
    }];
}