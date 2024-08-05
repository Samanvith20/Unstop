# Todo App

A modern, responsive Todo application built with React. This app allows users to create, edit, and manage tasks with a clean and intuitive interface.

## System Design Overview

The Todo App is designed with a component-based architecture using React. The main components are:

1. **App**: The root component that manages the overall state and renders child components.
2. **SearchBar**: Allows users to search for specific tasks.
3. **TaskForm**: Handles the creation and editing of tasks.
4. **TaskList**: Displays the list of tasks and manages task interactions.

The app uses React's state management to handle data flow between components. Tasks are stored in the App component's state and passed down to child components as props.

## Implementation Details

- **State Management**: React's useState hook is used for managing component-level state.
- **Side Effects**: useEffect hook is utilized for handling side effects like loading initial data.
- **Event Handling**: Custom event handlers are implemented for user interactions such as adding, editing, and toggling tasks.
- **Styling**: CSS modules are used for component-specific styling, ensuring style encapsulation.

Key Features:
- Add new tasks with title, description, and due date
- Edit existing tasks
- Mark tasks as complete
- Expand/collapse task details
- Search functionality to filter tasks
- Responsive design for various screen sizes

## Setup and Running the Application

Follow these steps to set up and run the Todo App on your local machine:

1. **Clone the repository**
   ```
   git clone https://github.com/Samanvith20/Unstop--Assignment.git
   cd todo-app
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the application**
   ```
   npm start
   ```

   This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

4. **Build for production**
   ```
   npm run build
   ```

   This command builds the app for production to the `build` folder.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
