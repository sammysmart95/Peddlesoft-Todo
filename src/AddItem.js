import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem, itemToEdit}) => {
  const [value, setValue] = useState('');

  const newItem = (value) => {
    addItem(value);
    setValue('');
  };

  const editAnItem = (value, id) => {
    addItem(value, id);
    setValue('');
  };

  useEffect(() => {
    if (itemToEdit) {
      setValue(itemToEdit?.text);
    }
  }, [itemToEdit]);

  return (
    <View>
      <TextInput
        value={value}
        placeholder="Add Todo.."
        style={styles.input}
        onChangeText={setValue}
      />
      {itemToEdit ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => editAnItem(value, itemToEdit?.id)}>
          <Text style={styles.btnText}>Edit Item</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={() => newItem(value)}>
          <Text style={styles.btnText}>Add Todo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 0,
  },
  btnText: {
    fontSize: 20,
    color: 'darkslateblue',
    textAlign: 'center',
  },
});
export default AddItem;
