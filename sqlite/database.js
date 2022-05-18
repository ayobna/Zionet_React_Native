import * as SQLite from "expo-sqlite";
const database = SQLite.openDatabase("item.db");
export function Init() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE If Not exists Items(ID INTEGER PRIMARY key not null ,Name Text not null ,Number integer not null)",
        [],
        () => {
          console.log("Success from create table Items");
          resolve();
        },
        (_, error) => {
          console.log("error from create table Items");
          console.log(error);
          reject();
        }
      );
    });
  });

  return prom;
}
export function AddNewItem(name, Number) {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Insert Into Items(Name,Number) Values(?,?)",
        [name, Number],
        (_, result) => {
          console.log("Success Insert Item");
        //  console.log("result", result);
          resolve(result);
        },
        (_, error) => {
          console.log("error Insert Item");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom
}


export function SelectAll() {
    const prom = new Promise((resolve, reject) => {
      database.transaction((conn) => {
        conn.executeSql(
          "Select * From Items",
          [],
          (_, result) => {
            console.log("Success Select All Item");
          //  console.log("result", result);
            resolve(result);
          },
          (_, error) => {
            console.log("error Select All Item");
            console.log(error);
            reject();
          }
        );
      });
    });
    return prom
  }