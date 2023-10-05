# FPL Statistic

## Description

This is a full-stack web application built using React and Node.js. It serves as a statistics for your Fantasy Premier League. The project demonstrates the integration of a React front-end with a Node.js back-end, offering a dashboard, fixtures, star player of the gameweek, your MVP, leagues and H2H you are joined in.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
<!-- - [License](#license) -->

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

2. **Install dependencies** for both the front-end and back-end:

- For the React front-end, navigate to the `fpl-info` directory and run:

  ```
  cd fpl-info
  pnpm install
  ```

- For the Node.js back-end, navigate to the `server` directory and run:
  ```
  cd .
  pnpm install
  ```

3. **Configuration**:

- Create configuration files for your environment, e.g., `.env` for sensitive information. Ensure you have the necessary environment variables set. You can refer to .env.example for necessary environment variables

4. **Start the application**:

- To run the React front-end and Node.js back-end:
  ```
  cd .
  npm run dev
  ```

5. Access the application in your web browser by visiting `http://localhost:5173/`.

## Features

- [Dashboard]: Check your statistics in the dashboard such as comparison between your gameweek and average points in chart, Your MVP, etc.
- [MyTeam]: Check out your team and how they performed for the gameweek.
- [Fixtures]: Check out the fixtures and results for current and next gameweek.
- [Leagues]: Check out how you're doing on your leagues and head-to-head leagues.

## Technologies Used

- **Front-end**:

  - React
  - @tanstack/react-query
  - auth0 (Authentication)
  - shadcn/ui

- **Back-end**:
  - Node.js
  - Express
  - fpl-api package

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Make your changes, and commit them with descriptive commit messages.
4. Push your branch to your fork: `git push origin feature-name`.
5. Create a Pull Request on the original repository, explaining your changes in detail.

<!-- ## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details. -->
