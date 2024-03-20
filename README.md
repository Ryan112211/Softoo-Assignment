# Project Title

This project is created using a stack of modern technologies including React, TypeScript, ShadCN, RadixUI, Zustand, and SWR. I have created a simple Product page that fetches the data using swr from the endpoint given and than stores it inside a local store as we have to add a custom quantity key for changing quantity. I have used latest tool and technologies and given a brief description of these below. I have also added end to end testing using cypress along with the unit testing using jest as i had experiance in end to end too

## About the Libraries

- **ShadCN**: A rapidly growing UI library that allows us to have all the component code on our side, providing total freedom over customizability.
- **Zustand**: A lightweight and easy-to-use state management library. Although there was no need for state management for this case, it was added to showcase its capabilities.
- **SWR**: A robust library for data fetching and mutation.
- **Jest**: Used for unit testing, with test cases written for the cart.
- **Cypress**: Used for writing end-to-end test cases.

## Theme Toggle

The theme toggle is implemented using the ShadCN library. It is a simple toggle that changes the theme of the website from light to dark and vice versa. You can use it by clicking the icon on top right of the page

## Running the Project

To run the project, use the following command:

\`\`\`bash
npm run start
\`\`\`

## Running Tests

To run unit tests with coverage, use the following command:

npm run test

## Running End-to-End Tests

For visual end-to-end testing, use the following command:

npm run cypress:open

For console end-to-end testing, use the following command:

npx cypress run

## Additional Resources

Videos and coverage folders for the unit and end-to-end testing are also included in the project.

## Deployment

I have also deployed the website on vercel for the live demo. You can check it out [here](https://softoo-assignment.vercel.app/).
