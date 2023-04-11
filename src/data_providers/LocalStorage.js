import defaultData from "../../storage/default_data"
import defaultTables from "../../storage/default_tables"
import { openDatabase, deleteDatabase } from "react-native-sqlite-storage"

const DBNAME = "mescan.db"
const DBLOCATION = "default"

let db = openDatabase({
    name: DBNAME,
    location: DBLOCATION
}, (db) => {
    // TODO
}, (error) => {
    // TODO
})

const localStorage = {
    purge() {
        deleteDatabase({ name: DBNAME, location: DBLOCATION })
    },
    init() {
        let create = (tx, table, colomns) => {
            let cols = []
            for(let i in colomns) {
                let columOpt = colomns[i]
                cols.push(columOpt.name + (columOpt.type ? " " + columOpt.type : "") + (columOpt.option ? " " + columOpt.option.join(" ") : ""))
            }
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + table + ' (' + cols.join(",") + ')')
        }

        let insertOrIgnore = (tx, table, values) => {
            for(let i in values) {
                let value = values[i],
                    cols = Object.keys(value),
                    patern = "?,".repeat(cols.length).slice(0, -1),
                    data = cols.map(x => (typeof value[x] === "object" || typeof value[x] === "boolean") ? JSON.stringify(value[x]) : value[x])

                tx.executeSql('INSERT OR IGNORE INTO ' + table + '(' + cols.join(",") + ') VALUES (' + patern + ')', data)
            }
        }

        db.transaction((tx) => {
            for(let i in defaultTables) {
                let table = i,
                    cols = defaultTables[i]

                create(tx, table, cols)
            }
        }, (error) => {
            console.error('Create Table Transaction ERROR: ' + error.message)
        }, () => {
            console.log('OK: create')
            db.transaction((tx) => {
                for(let i in defaultData) {
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

        return db
    },
    db: db
}

export default localStorage