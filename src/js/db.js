import defaultData from "./default-data.js"
import defaultTables from "./default-tables.js"
// import firebaseAdmin from "firebase-admin"
// import serviceAccount from "../secret/serviceAccountKey.json"

export default (isReset) => {

    // firebaseAdmin.initializeApp({
    //     credential: firebaseAdmin.credential.cert(serviceAccount),
    //     databaseURL: "https://mescan-56e3c.firebaseio.com"
    // })

    // console.log(firebaseAdmin)

    if (isReset) window.sqlitePlugin.deleteDatabase({ name: 'mescan.db', location: 'default' })
    let db = window.sqlitePlugin.openDatabase({
            name: "mescan.db",
            location: "default"
        }),
        create = (tx, table, colomns) => {
            let cols = []
            for (let i in colomns) {
                let columOpt = colomns[i]
                cols.push(columOpt.name + (columOpt.type ? " " + columOpt.type : "") + (columOpt.option ? " " + columOpt.option.join(" ") : ""))
            }
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + table + ' (' + cols.join(",") + ')')
        },
        insertOrIgnore = (tx, table, values) => {
            for (let i in values) {
                let value = values[i],
                    cols = Object.keys(value),
                    patern = "?,".repeat(cols.length).slice(0, -1),
                    data = cols.map(x => (typeof value[x] === "object" || typeof value[x] === "boolean") ? JSON.stringify(value[x]) : value[x])

                tx.executeSql('INSERT OR IGNORE INTO ' + table + '(' + cols.join(",") + ') VALUES (' + patern + ')', data)
            }
        }

    db.transaction(function(tx) {
        for (let i in defaultTables) {
            let table = i,
                cols = defaultTables[i]

            create(tx, table, cols)
        }
    }, (error) => {
        console.error('Create Table Transaction ERROR: ' + error.message)
    }, () => {
        console.log('OK: create')
        db.transaction(function(tx) {
            for (let i in defaultData) {
                let table = i,
                    values = defaultData[i]

                insertOrIgnore(tx, table, values)
            }
        }, (error) => {
            console.error('Insert or Ignore Transaction ERROR: ' + error.message)
        }, () => {
            console.log('OK: insert or ignore')
                //TODO: message and user tables insert or ignore
        })
    })
}