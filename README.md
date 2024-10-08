# Task Management App

## 📹 Demo Video

https://github.com/user-attachments/assets/510cea5b-107a-46dc-89e8-6455661cb0f3

---

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

## Steps to Run the Project on an Android Emulator

1. Clone the repository:
   ```bash
   https://github.com/syedmustafan/task-management-react-native.git
2. Install dependencies:
   ```bash
   npm install
3. Run the project:
   ```bash
   npm run start
   ```
4. When prompted, press a to launch the app in an Android emulator.

🛠 Technologies Used

- React Native for building the cross-platform mobile application.
- Expo for easy development, debugging, and running on emulators.
- DateTimePicker from @react-native-community/datetimepicker for date and time selection.
- React Native Modal for creating and editing tasks within modals.


Future Improvements

- Add the ability to categorize tasks.
- Integration with a backend to persist tasks across sessions.
- Add push notifications to remind users of upcoming tasks.
- Enhance UI with animations for better task interactions.

## License

- This project is licensed under the MIT License - see the LICENSE file for details.

- Feel free to contribute to this project by submitting issues or pull requests!


### Notes:
- Make sure to replace the placeholders with your actual **GitHub repository URL**, **video link**, and **APK link** when they are available.
- You can also add a `LICENSE` file if your project is open-source.

This is a clean, professional `README.md` file that provides all the necessary details for users to understand and run your project.


