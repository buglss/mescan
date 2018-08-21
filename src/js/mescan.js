import "../sass/mescan.sass"
import "../less/mescan.less"
import "framework7-icons/css/framework7-icons.css"
import "material-design-icons/iconfont/material-icons.css"
import routes from "./routes.js"
import Framework7, { Dom7 } from 'framework7'
import Fab from "framework7/components/fab/fab.js"
import Radio from "framework7/components/radio/radio.js"
import Checkbox from "framework7/components/checkbox/checkbox.js"
import Toggle from "framework7/components/toggle/toggle.js"
import Tabs from "framework7/components/tabs/tabs.js"
import Dialog from "framework7/components/dialog/dialog.js"
import Input from "framework7/components/input/input.js"
import Form from "framework7/components/form/form.js"
import Searchbar from "framework7/components/searchbar/searchbar.js"
import Popup from "framework7/components/popup/popup.js"
import SmartSelect from "framework7/components/smart-select/smart-select.js"

Framework7.use([Fab, Radio, Checkbox, Toggle, Tabs, Dialog, Input, Form, Searchbar, Popup, SmartSelect])

var $$ = Dom7

let app = new Framework7({
    id: "com.mescan",
    root: "#app",
    name: "MesCan",
    version: "1.0.0",
    theme: 'auto',
    routes: routes(Dom7),
    statusbar: { enabled: false },
    smartSelect: {
        openIn: 'popup',
        pageBackLinkText: "Geri",
        popupCloseLinkText: "Kapat",
        sheetCloseLinkText: "Tamam",
        searchbarPlaceholder: "Ara...",
        searchbarDisableText: "İptal",

    },
    dialog: {
        buttonOk: "Tamam",
        buttonCancel: "İptal",
        usernamePlaceholder: "Kullanıcı Adı",
        passwordPlaceholder: "Parola",
        preloaderTitle: "Yükleniyor...",
        progressTitle: "Yükleniyor..."
    },
    on: {
        pageInit() {
            $$('.confirmDelete').on('click', function() {
                app.dialog.confirm('Silmek istediğinize emin misiniz?', "Dikkat!!!", function() {
                    app.dialog.alert('Başarılı!');
                });
            });
        }
    }
})

app.views.create('#view-home', {
    url: '/home/'
})
app.views.create('#view-persons', {
    url: '/persons/'
})
app.views.create('#view-status', {
    url: '/status/',
    on: {
        pageInit() {
            app.toggle.create({
                el: '.toggle.hasStatus',
                on: {
                    change() {
                        if (!this.checked) $$(".list.status").addClass("disabled")
                        else $$(".list.status").removeClass("disabled")
                    }
                }
            }).emit("change")
        }
    }
})
app.views.create('#view-messages', {
    url: '/messages/'
})