import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View, Alert, FlatList} from 'react-native';
import InputComponent from "./components/inputComponent";

export default function App() {
    const [goalArray, setGoalArray] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleDelete = (goalToDelete) => {
        setGoalArray(goalArray.filter(item => item.text !== goalToDelete.text));
    };

    const handleLongPress = (goal) => {
        Alert.alert(
            "Edit or Delete",
            `What would you like to do with "${goal.text}"?`,
            [
                {
                    text: "Edit",
                    onPress: () => {
                        setSelectedGoal(goal);
                        setIsEditMode(true);
                        setVisible(true);
                    },
                },
                {
                    text: "Delete",
                    onPress: () => handleDelete(goal),
                    style: "destructive",
                },
                {
                    text: "Task Accomplished",
                    onPress: () => markAsAccomplished(goal),
                },
                {
                    text: "Cancel", onPress: () => {
                    }, style: "cancel"
                },
            ],
            {cancelable: true}
        );
    };

    const markAsAccomplished = (goal) => {
        setGoalArray(goalArray.map(item =>
            item.text === goal.text ? {...item, accomplished: !item.accomplished} : item
        ));
    };

    const addGoalHandler = (goal) => {
        if (isEditMode) {
            setGoalArray(goalArray.map(item => (item.text === selectedGoal.text ? goal : item)));
            setIsEditMode(false);
            setSelectedGoal(null);
        } else {
            setGoalArray([...goalArray, goal]);
        }
        setVisible(false);
    };

    const handleModalVisible = () => {
        setVisible(true);
    };

    const visibilityHandling = (visibility) => {
        setVisible(visibility);
    };

    return (
        <View style={styles.container}>
            <InputComponent
                onAddGoals={addGoalHandler}
                visibility={visible}
                onVisibilityChange={visibilityHandling}
                isEditMode={isEditMode}
                goalToEdit={selectedGoal}
            />
            <View style={styles.headerContainer}>
                <Button title="Add Goal" onPress={handleModalVisible} color="#6200EE"/>
                <Text style={styles.header}>List of Goals</Text>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={goalArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Pressable
                            onLongPress={() => handleLongPress(item)}
                            style={[styles.goalItem, item.accomplished && styles.accomplishedGoal]}
                        >
                            <Text style={styles.goalText}>{item.text}</Text>
                            <View style={styles.dateTimeContainer}>
                                <Text style={styles.dateText}>{item.date.toDateString()}</Text>
                                <Text style={styles.timeText}>{item.time.toLocaleTimeString()}</Text>
                            </View>
                        </Pressable>
                    )}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 20
    },
    headerContainer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    flatListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goalItem: {
        width: '95%',
        padding: 20,
        borderRadius: 15,
        marginVertical: 8,
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    goalText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    dateTimeContainer: {
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        paddingTop: 5,
    },
    dateText: {
        fontSize: 14,
        color: '#666',
    },
    timeText: {
        fontSize: 14,
        color: '#666',
    },
    accomplishedGoal: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
    },
    flatListContent: {
        paddingBottom: 20,
        flexGrow: 1,
    },
});
