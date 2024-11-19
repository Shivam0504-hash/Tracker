import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Icons } from '../assest/icons';

const DateInput = ({ label, value, onChangeDate }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        onChangeDate(date.toLocaleDateString());
        hideDatePicker();
    };

    return (
        <>
        <View style={styles.inputContainer}>
            <TextInput
                label={label}
                value={value}
                editable={false}
                mode="outlined"
                style={styles.input}
                right={
                    <TextInput.Icon
                        icon={() => (
                            <TouchableOpacity onPress={showDatePicker}>
                                <Image source={Icons.callender} style={styles.icon} />
                            </TouchableOpacity>
                        )}
                    />
                }
                outlineColor='#E7EBF3'
                theme={{roundness:30}}
            />
        </View>
             <DateTimePickerModal
             mode='datetime'
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={new Date()}
      />
      </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
        marginTop:35
    },
    input: {
        backgroundColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default DateInput;
