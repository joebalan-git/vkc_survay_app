/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { CheckBoxFill } from '@components/CheckBoxField/CheckBoxField';

const MultiSelection = ({ data }) => {
  const [value, setValue] = useState([]);
  return (
    <View>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, flex: 1, backgroundColor: 'black' }} />
        )}
        renderItem={({ item }) => (
          <CheckBoxFill
            key={item.id}
            option={{ text: item.text, value: item.text }}
            value={value}
            onPress={() => {
              if (value.some(ele => ele === item.text)) {
                setValue(value.filter(x => x !== item.text));
              } else {
                setValue([...value, item.text]);
              }
            }}
          />
        )}
      />
    </View>
  );
};

export default MultiSelection;
