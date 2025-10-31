<<<<<<< HEAD
# React Counter Application

A simple and interactive counter application built with React that demonstrates state management and component composition.

## Features

- Display current score on a scoreboard
- Increment score by 1 or 5 using dedicated buttons
- Real-time score updates
- Reusable component architecture

## Project Structure

```
src/
  ├── components/
  │   ├── app/
  │   │   ├── App.js
  │   │   └── App.css
  │   ├── scoreboard/
  │   │   ├── scoreboard.js
  │   │   └── scoreboard.css
  │   └── scoreboardOperations/
  │       ├── ScoreboardOperations.js
  │       └── scoreboardOperations.css
  └── index.js
```

## Components

### App Component
- Main container component
- Manages score state using React useState hook
- Handles score increment logic

### Scoreboard Component
- Displays the current score
- Pure presentational component

### ScoreboardOperations Component
- Contains increment buttons (+1, +5)
- Handles user interactions
- Passes increment values to parent component

## Getting Started

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

## Technologies Used

- React.js
- CSS for styling
- React Hooks (useState)

## Learning Points

- React state management using hooks
- Component composition and props passing
- Functional state updates in React
- Event handling in React
- Component organization and structure

## Future Enhancements

- Add decrement functionality
- Implement reset button
- Add animation for score changes
- Save score in local storage
- Add minimum and maximum score limits

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT License - feel free to use this project for learning and development purposes.
=======
# Counter-App
This is a React-based counter application that demonstrates state management using the useState hook. The app features a scoreboard display and buttons (+1 and +5) to increment the score. It's structured with reusable components (Scoreboard, ScoreboardOperations) and implements proper React patterns for state updates using functional state updates.
>>>>>>> aeb3900 (Initial commit)
