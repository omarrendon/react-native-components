import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {themeStyles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={themeStyles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your last name"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'lastName')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <HeaderTitle title={JSON.stringify(formValues, null, 3)} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <HeaderTitle title={JSON.stringify(formValues, null, 3)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    // margin: 12,
    borderColor: '#9E9E9E',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
});
