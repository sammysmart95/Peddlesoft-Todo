import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './Header';
import AddItem from './AddItem';
import Checkbox from './Checkbox';

const Todo = () => {
  const [items, setItem] = useState([
    {
      id: Math.random() * 100,
      text: 'Milk',
    },
    {
      id: Math.random() * 100,
      text: 'Eggs',
    },
    {
      id: Math.random() * 100,
      text: 'Bread',
    },
    {
      id: Math.random() * 100,
      text: 'juice',
    },
  ]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);

  const deleteItem = (id) => {
    setItem((prevItem) => {
      return prevItem.filter((item) => item.id !== id);
    });
  };

  const addItem = (text, id) => {
    if (!text) {
      return Alert.alert('Error', 'Please add a todo', {text: 'OK'});
    }
    if (id) {
      setItem((prevItem) =>
        prevItem.map((item) => {
          if (item.id === id) {
            return {id, text};
          }
          return item;
        }),
      );
    } else {
      setItem((prevItem) => {
        return [{id: Math.random() * 100, text}, ...prevItem];
      });
    }
    setItemToEdit(null);
  };

  const editItem = (id, text) => {
    setItemToEdit({id, text});
  };

  const handleCheck = (item) => {
    if (selectedItem.filter((it) => it.id === item.id).length) {
      setSelectedItem((prevSelected) =>
        prevSelected.filter((it) => it.id !== item.id),
      );
    } else {
      setSelectedItem((prevSelected) => [...prevSelected, item]);
    }
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flex: 1,
        padding: 3,
        marginTop: 5,
      }}>
      <Checkbox
        key={item.id}
        item={item}
        selected={selectedItem.filter((it) => it.id === item.id).length}
        onSelect={() => handleCheck(item)}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Header title="Functional Todo" />
      <AddItem addItem={addItem} itemToEdit={itemToEdit} />
      <ScrollView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Todo;
