
const mysql = require('mysql2');
var config = {
    host: 'icon-db.mysql.database.azure.com',
    user: 'wolf@icon-db',
    password: 'EJ6chESAmK',
    port: 3306,
    ssl: true
};
const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            var sql = "DROP DATABASE userDb;";

            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql =[
                "CREATE Database userDb;",
                "USE userDb CREATE TABLE `User` (`id` varchar(255) NOT NULL,`name` TEXT NOT NULL UNIQUE,`password` varchar(255) NOT NULL,`hashAlgo` varchar(255) NOT NULL,`address` TEXT NOT NULL,`eMail` TEXT NOT NULL UNIQUE,`phoneNumber` DECIMAL NOT NULL,PRIMARY KEY (`id`));",
                "USE userDb CREATE TABLE `Group` (`id` varchar(255) NOT NULL,`super` varchar(255),`head` varchar(255) NOT NULL,`description` TEXT NOT NULL,PRIMARY KEY (`id`));",
                "USE userDb CREATE TABLE `UserGroup` (`userId` varchar(255), NOT NULL,`groupId` varchar(255) NOT NULL,PRIMARY KEY (`userId`,`groupId`));",
                "USE userDb CREATE TABLE `PhoneNumber` (`id` varchar(255) NOT NULL,`number` varchar(255) NOT NULL UNIQUE,PRIMARY KEY (`id`));",
                "USE userDb CREATE TABLE `UserPhoneNumber` (`userId` varchar(255) NOT NULL,`phoneNumberId` varchar(255) NOT NULL AUTO_INCREMENT,`type` varchar(255) NOT NULL,PRIMARY KEY (`userId`,`phoneNumberId`));",
                "ALTER TABLE `Group` ADD CONSTRAINT `Group_fk0` FOREIGN KEY (`super`) REFERENCES `Group`(`id`);",
                "ALTER TABLE `UserGroup` ADD CONSTRAINT `UserGroup_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);",
                "ALTER TABLE `UserGroup` ADD CONSTRAINT `UserGroup_fk1` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`);",
                "ALTER TABLE `UserPhoneNumber` ADD CONSTRAINT `UserPhoneNumber_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);",
                "ALTER TABLE `UserPhoneNumber` ADD CONSTRAINT `UserPhoneNumber_fk1` FOREIGN KEY (`phoneNumberId`) REFERENCES `PhoneNumber`(`id`);"
            ];

            for (var i in sql) {
                conn.query(i, function (err, results, fields) {
                    if (err) {
                        throw err;
                    }
                });
            }

        }
    });

