# Task Management App

This is a **React Native Task Management App** that allows users to add, edit, delete, and mark tasks as accomplished. The app is designed with user-friendly UI components and includes features such as date and time picking for task scheduling. It is fully compatible with Android and includes functionality to run on an emulator.

## Features

- **Add Tasks**: Users can create new tasks with a title, date, and time.
- **Edit Tasks**: Long press on any task to edit its details, such as title, date, and time.
- **Delete Tasks**: Long press on any task to delete it from the list.
- **Mark Task Accomplished**: Tasks can be marked as accomplished, which visually updates the UI to reflect their completed state.
- **Date & Time Picker**: Built-in date and time picker to schedule tasks easily.
- **Responsive Design**: The app adjusts to different screen sizes and orientations.
- **Modal Management**: Tasks are added and edited via modal components for a cleaner, more focused interaction.
- **Task Persistence**: Task data is stored in an array state, with edit and delete functionalities efficiently handled.

## React Native Functionality Used

- **State Management**: Managed with `useState` to track tasks, visibility of modals, and other interactive states.
- **FlatList**: Used to efficiently render and manage the list of tasks.
- **DateTimePicker**: Integrated date and time picker functionality using `@react-native-community/datetimepicker`.
- **Modal**: Tasks are created and edited inside modals for a better user experience.
- **Pressable**: Allows for touch interactions on tasks, such as long presses to edit or delete.
- **Alert**: Used for displaying edit and delete confirmation dialogues.
- **Platform API**: Handles different behavior between iOS and Android for certain actions like date/time picking.

---

## 📹 Demo Video

https://github.com/user-attachments/assets/510cea5b-107a-46dc-89e8-6455661cb0f3

---

## Steps to Run the Project on an Android Emulator

1. Clone the repository:
   ```bash
   https://github.com/syedmustafan/task-management-react-native.git
   cd task-management-app
