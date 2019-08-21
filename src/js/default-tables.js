export default {
    circle: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "name",
        type: "TEXT",
        option: ["UNIQUE"]
    }, {
        name: "status",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    tag: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "name",
        type: "TEXT",
        option: ["UNIQUE"]
    }, {
        name: "date",
        type: "TEXT"
    }, {
        name: "status",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    status: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "name",
        type: "TEXT",
        option: ["UNIQUE"]
    }, {
        name: "status",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    message: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "content",
        type: "TEXT"
    }, {
        name: "circle_id",
        type: "INTEGER"
    }, {
        name: "tag_id",
        type: "INTEGER"
    }, {
        name: "status_id",
        type: "INTEGER"
    }],
    user: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "name",
        type: "TEXT"
    }, {
        name: "phone",
        type: "TEXT"
    }, {
        name: "circle_id",
        type: "TEXT"
    }],
    job: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "name",
        type: "TEXT"
    }, {
        name: "date",
        type: "TEXT"
    }, {
        name: "message",
        type: "TEXT"
    }, {
        name: "phone",
        type: "TEXT"
    }, {
        name: "status",
        type: "TEXT"
    }, {
        name: "incoming_id",
        type: "INTEGER"
    }, {
        name: "send_time",
        type: "TEXT"
    }, {
        name: "send_method",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    incoming_message: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "status_id",
        type: "INTEGER"
    }, {
        name: "date",
        type: "TEXT"
    }, {
        name: "message",
        type: "TEXT"
    }, {
        name: "toa",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    setting: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY"]
    }, {
        name: "has_status",
        type: "TEXT"
    }, {
        name: "has_activity",
        type: "TEXT"
    }, {
        name: "send_time",
        type: "TEXT"
    }, {
        name: "send_method",
        type: "TEXT"
    }, {
        name: "stamp",
        type: "TEXT"
    }],
    fail: [{
        name: "id",
        type: "INTEGER",
        option: ["PRIMARY KEY", "AUTOINCREMENT"]
    }, {
        name: "job_id",
        type: "INTEGER"
    }, {
        name: "stamp",
        type: "TEXT"
    }]
}