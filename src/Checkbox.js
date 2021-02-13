import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from './Scale';
import GenerateIcon from './GenerateIcon';

export default function Radio({
  selected,
  item,
  onSelect,
  editItem,
  deleteItem,
}) {
  return (
    <View style={styles.roll}>
      <TouchableOpacity style={styles.container} onPress={onSelect}>
        <View style={styles.radioContainer}>
          {selected ? <View style={styles.selected} /> : null}
        </View>
        <View>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => editItem(item.id, item.text)}>
          <GenerateIcon tagName="Pencile" color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItem(item.id)}
          style={{marginLeft: scale(10)}}>
          <GenerateIcon tagName="Delete" color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  roll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(5),
  },
  radioContainer: {
    width: scale(20),
    height: scale(20),
    borderWidth: scale(2),
    marginRight: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#22bb33',
  },
  selected: {
    width: scale(10),
    height: scale(10),
    backgroundColor: '#22bb33',
  },
  icons: {
    flexDirection: 'row',
  },
});
