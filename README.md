# bettrdash-react

[![npm](https://img.shields.io/npm/v/bettrdash-react.svg?color=blue&logo=npm)](https://www.npmjs.com/package/bettrdash-react) [![npm](https://img.shields.io/npm/dt/bettrdash-react.svg?color=blue&logo=npm)](https://www.npmjs.com/package/bettrdash-react)

A component that renders a users projects from the Bettrdash API.

## Install

```bash
npm install --save bettrdash-react axios @fontsource/inter

or

yarn add bettrdash-react axios @fontsource/inter
```

## Usage

**Note:** This component requires an API key to be passed in as a prop. If you do not have an API key, please visit [BettrDash](https://bettrdash.eliaswambugu.com) to get one.

### Grid Component

```jsx
import { Grid } from 'bettrdash-react';

const Component = () => {
  return (
    <Grid
      apiKey="api-key"
      style={{
        imageBackgroundColor: 'black',
      }}
    />
  );
};

export default Component;
```

## BettrCard Component Props

| Property | Type   | Required | Default | Description                                                             |
| -------- | ------ | -------- | ------- | ----------------------------------------------------------------------- |
| apiKey   | String | true     | -       | Api key from [BettrDash](https://bettrdash.eliaswambugu.com) dashboard  |
| styles   | Object | false    | -       | How to style the cards (refer to style props table for styling optoins) |

### Card Component

The card component can also be imported directly from the library.

```jsx
import { Card } from 'bettrdash-react';

const Component = () => {
  const project = {
    active: true,
    createdAt: '2022-06-09T02:09:52.026Z',
    description: 'The dashboard for developers',
    github_url: 'https://github.com/HelixHEX/bettrdash',
    image_url:
      'https://blog.addthiscdn.com/wp-content/uploads/2015/11/code.png',
    language: 'Javascript',
    live_url: 'https://bettrdash.eliaswambugu.com',
    name: 'BettrDash',
    updatedAt: '2022-09-12T17:52:50.992Z',
  };
  return (
    <Card
      style={{
        imageBackgroundColor: 'black',
      }}
      project={project}
    />
  );
};

export default Component;
```

## Card Component Props

| Property | Type   | Required | Default | Description                                                                          |
| -------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------ |
| project  | Object | true     | -       | Project object returned from the [BettrDash](https://bettrdash.eliaswambugu.com) API |
| styles   | Object | false    | -       | How to style the cards (refer to style props table for styling optoins)              |

## Style Props

| Property             | Type   | Required | Default | Description                                        |
| -------------------- | ------ | -------- | ------- | -------------------------------------------------- |
| imageBackgroundColor | String | false    | -       | Background color for the image if it's a png image |
