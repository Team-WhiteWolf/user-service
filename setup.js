
const mysql = require('mysql2');
var config = {
    host: 'ww-data-host.mysql.database.azure.com',
    user: 'database@ww-data-host',
    password: 'uJHeCu3P!',
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
            var sql = "DROP DATABASE IF EXISTS userDb;";

            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "CREATE Database userDb;";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "USE userDb;";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });

            sql = "CREATE TABLE `User` (`id` varchar(255) NOT NULL,`name` TEXT NOT NULL,`password` varchar(255) NOT NULL,`hashAlgo` varchar(255) NOT NULL,`address` TEXT NOT NULL,`eMail` TEXT NOT NULL,`phoneNumber` DECIMAL NOT NULL,PRIMARY KEY (`id`));";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "CREATE TABLE `Group` (`id` varchar(255) NOT NULL,`super` varchar(255),`head` varchar(255) NOT NULL,`description` TEXT NOT NULL,PRIMARY KEY (`id`));";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "CREATE TABLE `UserGroup` (`userId` varchar(255) NOT NULL,`groupId` varchar(255) NOT NULL,PRIMARY KEY (`userId`,`groupId`));";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "CREATE TABLE `PhoneNumber` (`id` varchar(255) NOT NULL,`number` varchar(255) NOT NULL UNIQUE,PRIMARY KEY (`id`));";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "CREATE TABLE `UserPhoneNumber` (`userId` varchar(255) NOT NULL,`phoneNumberId` varchar(255) NOT NULL,`type` varchar(255) NOT NULL,PRIMARY KEY (`userId`,`phoneNumberId`));";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "ALTER TABLE `Group` ADD CONSTRAINT `Group_fk0` FOREIGN KEY (`super`) REFERENCES `Group`(`id`);";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "ALTER TABLE `UserGroup` ADD CONSTRAINT `UserGroup_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "ALTER TABLE `UserGroup` ADD CONSTRAINT `UserGroup_fk1` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`);";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "ALTER TABLE `UserPhoneNumber` ADD CONSTRAINT `UserPhoneNumber_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });
            sql = "ALTER TABLE `UserPhoneNumber` ADD CONSTRAINT `UserPhoneNumber_fk1` FOREIGN KEY (`phoneNumberId`) REFERENCES `PhoneNumber`(`id`);";
            conn.query(sql, function (err, results, fields) {
                if (err) {
                    throw err;
                }
            });


        }
    });

