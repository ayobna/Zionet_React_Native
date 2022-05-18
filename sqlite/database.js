import * as SQLite from "expo-sqlite";
const database = SQLite.openDatabase("item.db");
export function Init() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((tx) => {
   
      tx.executeSql(
        "CREATE TABLE If Not exists Person(ID INTEGER PRIMARY key not null ,Name Text not null ,Age integer not null ,Address Text not null)",
        [],
        () => {
          console.log("Success from create table Person");
          resolve();
        },
        (_, error) => {
          console.log("error from create table Person");
          console.log(error);
          reject();
        }
      );
    });
  });

  return prom;
}
export function AddNewPerson(name,age,address) {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Insert Into Person(Name,Age,Address) Values(?,?,?)",
        [name,age,address],
        (_, result) => {
          console.log("Success Insert Person");
        //  console.log("result", result);
          resolve(result);
        },
        (_, error) => {
          console.log("error Insert Person");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom
}


export function SearchPerson(text) {
    const prom = new Promise((resolve, reject) => {
      database.transaction((conn) => {
        conn.executeSql(
          "Select * From Person where Name like ?",
          ['%' + text + '%'],
          (_, result) => {
            console.log("Success SearchPerson");
          //  console.log("result", result);
            resolve(result);
          },
          (_, error) => {
            console.log("error SearchPerson");
            console.log(error);
            reject();
          }
        );
      });
    });
    return prom
  }