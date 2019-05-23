'use strict'
const mysqldb_config=require('../../config/mysqldb_config.json');
var mysql=require('mysql');

//var connection=mysql.createPool({host:mysqldb_config.host,database:mysqldb_config.database_name,user:mysqldb_config.user,password:mysqldb_config.password});
var connection=mysql.createPool({
    connectionLimit : 100,
    host     : mysqldb_config.host,
    port     : mysqldb_config.port,
    user     : mysqldb_config.user,
    password : mysqldb_config.password,
    database : mysqldb_config.database_name});

module.exports=connection;

