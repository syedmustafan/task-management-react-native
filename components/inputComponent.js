import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal, Pressable, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputComponent = ({onAddGoals, visibility, onVisibilityChange, isEditMode, goalToEdit}) => {
    const [goal, setGoal] = useState(goalToEdit ? goalToEdit.text : '');
    const [date, setDate] = useState(goalToEdit ? goalToEdit.date : new Date());
    const [time, setTime] = useState(goalToEdit ? goalToEdit.time : new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleAddGoal = () => {
        if (!goal) return; // Prevent adding empty goals

        const newGoal = {
            text: goal,
            date: date,
            time: time,
            accomplished: false,
        };

        onAddGoals(newGoal);
        setGoal('');
        setDate(new Date()); // Reset date
        setTime(new Date()); // Reset time
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setTime(currentTime);
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>{isEditMode ? "Edit Goal" : "Add a New Goal"}</Text>
                <TextInput
                    placeholder="Enter your goal"
                    value={goal}
                    onChangeText={setGoal}
                    style={styles.input}
                />

                <View style={styles.dateTimeContainer}>
                    <Pressable
                        style={styles.dateButton}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.dateButtonText}>Set Date</Text>
                    </Pressable>
                    <Pressable
                        style={styles.timeButton}
                        onPress={() => setShowTimePicker(true)}
                    >
                        <Text style={styles.timeButtonText}>Set Time</Text>
                    </Pressable>
                </View>

                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                )}
                {showTimePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={time}
                        mode="time"
                        display="default"
                        onChange={onChangeTime}
                    />
                )}

                <View style={styles.buttonContainer}>
                    <Button
                        title={isEditMode ? "Save Changes" : "Add Goal"}
                        onPress={handleAddGoal}
                        color="#6200EE"
                    />
                    <Button
                        title="Cancel"
                        onPress={() => onVisibilityChange(false)}
                        color="#6200EE"
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    dateButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#6200EE',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    dateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    timeButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#03DAC5',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    timeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default InputComponent;
