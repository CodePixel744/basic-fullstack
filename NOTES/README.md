# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Structure and Component Interaction

### Overview

This project consists of the following main components:
- `App`: The root component that fetches notes data and passes it to the `Render` component.
- `Render`: A component that manages the display and interaction of notes.
- `CNotes`: A component that represents individual notes.

### Component Hierarchy

```plaintext
App
└── Render
    └── CNotes
```

### Data Flow

1. **App Component**:
   - Fetches notes data from the server using `axios`.
   - Stores the fetched notes in the state and passes them as props to the `Render` component.

2. **Render Component**:
   - Receives notes as props and manages additional state for new notes, visibility filters, and note importance.
   - Handles adding new notes and toggling the importance of existing notes.
   - Passes individual note data and handlers to the `CNotes` component.

3. **CNotes Component**:
   - Receives individual note data and handlers as props.
   - Displays note content and provides a button to toggle the importance of the note.

### Flowchart

```plaintext
+------------------+
|     App          |
|------------------|
| - notes          |
| - setNotes       |
|------------------|
| useEffect        |
| axios.get        |
| setNotes         |
+--------+---------+
         |
         v
+--------+---------+
|     Render       |
|------------------|
| - noteList       |
| - newNote        |
| - showAll        |
| - setNotes       |
| - setNewNote     |
| - setShowAll     |
|------------------|
| handleNoteChange |
| addNote          |
| toggleShowImportant |
| toggleIndividual |
+--------+---------+
         |
         v
+--------+---------+
|     CNotes       |
|------------------|
| - noteObject     |
| - setImportance  |
|------------------|
| Display note     |
| Toggle importance|
+------------------+
```

### Diagrams

#### Component Interaction Diagram

```plaintext
App
 |
 |---> Render (props: notes)
       |
       |---> CNotes (props: noteObject, setImportance)
```

#### State Management Diagram

```plaintext
App
 |
 |---> useState (notes)
       |
       |---> useEffect (fetch notes)
             |
             |---> axios.get (setNotes)
```

### Conclusion

This project demonstrates a simple React application with components interacting through props and state management. The `App` component fetches data and passes it down to the `Render` component, which further manages and displays the notes using the `CNotes` component.

For more details, refer to the code comments and the flowcharts provided above.
