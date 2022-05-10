import react, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Alert,
  Pressable,
  Modal,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { name: "Ben", backgroundColor: "white", borderWidth: 0 },
    { name: "Susan", backgroundColor: "white", borderWidth: 0 },
    { name: "Robert", backgroundColor: "white", borderWidth: 0 },
  ]);
  const [item, setItem] = useState();
  const [editItem, setEditItem] = useState();
  const [indexEditItem, setIndexEditItem] = useState(0);

  const addToItem = () => {
    let newItems = [
      ...items,
      { name: item, backgroundColor: "white", borderWidth: 0 },
    ];
    setItems(newItems);
  };

  const deleteItem = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  const editItemOnModel = (index) => {
    setIndexEditItem(index);

    let oldItems = [...items];
    setEditItem(oldItems[index]);
    console.log(oldItems[index]);
    setItem(oldItems[index]);
  };
  const saveEditItem = () => {
    console.log(indexEditItem);
    const newItems = [...items];
    const index = newItems.findIndex((_, i) => i === indexEditItem);

    console.log(item);
    newItems[index].name = item;
    setItems(newItems);
    setItem(undefined);
    cancelEditItem();
  };
  const cancelEditItem = () => {
    setEditItem(undefined);
  };

  const moveToFirst = (name) => {
    const newItems = [...items];
    newItems.sort((x, y) => {
      return x.name === name ? -1 : y.name === name ? 1 : 0;
    });
    setItems(newItems);
  };

  const changeItemBackgroundColor = (index) => {
    let newItems = [...items];
    let indexItem = newItems.findIndex((_, i) => i === index);
    let newItem = newItems[indexItem];
    newItem.backgroundColor =
      newItem.backgroundColor == "white" ? "red" : "white";
    newItems[indexItem] = newItem;
    setItems(newItems);
  };

  const changeItemBorderWidth = (index) => {
    let newItems = [...items];
    let indexItem = newItems.findIndex((_, i) => i === index);
    let newItem = newItems[indexItem];
    newItem.borderWidth = newItem.borderWidth == 0 ? 20 : 0;
    newItems[indexItem] = newItem;
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewScrollView}>
        <ScrollView>
          {items.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.item,
                  {
                    backgroundColor: item.backgroundColor,
                    borderWidth: item.borderWidth,
                  },
                ]}
              >
                <Text>{item.name}</Text>
                <Button
                  color={"red"}
                  title="delete"
                  onPress={() => deleteItem(index)}
                ></Button>
                <Button
                  color={"blue"}
                  title="edit"
                  onPress={() => editItemOnModel(index)}
                ></Button>
                <Button
                  color={"black"}
                  title="Remark"
                  onPress={() => changeItemBorderWidth(index)}
                ></Button>
                <Button
                  color={"green"}
                  title="top"
                  onPress={() => moveToFirst(item.name)}
                ></Button>
                <Button
                  color={"red"}
                  title="Color"
                  onPress={() => changeItemBackgroundColor(index)}
                ></Button>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <TextInput
          placeholder={editItem === undefined ? "new item" : editItem.name}
          style={styles.viewTextInput}
          onChangeText={(t) => setItem(t)}
        ></TextInput>
      </View>
      <View>
        {editItem === undefined ? (
          <Button
            style={styles.btn}
            title="click here to add item"
            onPress={addToItem}
          ></Button>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                width: "30%",
              }}
            >
              <Button
                style={styles.btn}
                title="save"
                onPress={saveEditItem}
              ></Button>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: "30%",
              }}
            >
              <Button
                style={styles.btn}
                title="cancel"
                onPress={cancelEditItem}
              ></Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewScrollView: {
    marginTop: "5%",
    height: "80%",
  },
  viewTextInput: {
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 5,
    borderRadius: 3,
    padding: 10,
    marginRight: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ViewPressable: {
    flexDirection: "row",
  },
});
