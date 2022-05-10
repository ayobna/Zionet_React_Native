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
    { name: "Ben" },
    { name: "Susan" },
    { name: "Robert" },
  ]);
  const [item, setItem] = useState();
  const [editItem, setEditItem] = useState({ name: "", index: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [itemBackgroundColor, setItemBackgroundColor] = useState("white")
  const addToItem = () => {
    let newItems = [...items, { name: item }];
    setItems(newItems);
  };

  const deleteItem = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  const editItemOnModel = (index) => {
    setModalVisible(!modalVisible);
    let oldItems = [...items];
    let oldItem = oldItems[index].name;
    setEditItem({ name: oldItem, index: index });
    setItem(oldItem);
  };
  const saveEditItem = () => {
    const newItems = [...items];
    const index = newItems.findIndex((_, i) => i === editItem.index);

    newItems[index] = { name: editItem.name };
    setItems(newItems);
    setModalVisible(!modalVisible);
  };
  const moveToFirst = (name) => {
    const newItems = [...items];
    newItems.sort((x, y) => {
      return x.name === name ? -1 : y.name === name ? 1 : 0;
    });
    setItems(newItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewScrollView}>
        <ScrollView>
          {items.map((item, index) => (
            <View key={index} style={[styles.item,{backgroundColor:itemBackgroundColor}]}>
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
                onPress={() => moveToFirst(item.name)}
              ></Button>
              <Button
                color={"green"}
                title="top"
                onPress={() => moveToFirst(item.name)}
              ></Button>
                    <Button
                color={"red"}
                title="Color"
                onPress={() => setItemBackgroundColor("red")}
              ></Button>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <TextInput
          placeholder="new item"
          style={styles.viewTextInput}
          onChangeText={(t) => setItem(t)}
        ></TextInput>
      </View>
      <View>
        <Button
          style={styles.btn}
          title="click here to add item"
          onPress={addToItem}
        ></Button>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>edit item</Text>
            <TextInput
              placeholder={item}
              onChangeText={(text) =>
                setEditItem((prevState) => ({
                  ...prevState,
                  name: text,
                }))
              }
            ></TextInput>

            <View style={styles.ViewPressable}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={saveEditItem}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
