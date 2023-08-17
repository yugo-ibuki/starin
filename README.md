## Starin

This is a simple star component for React.

### Installation

```bash
npm install starin
```
or
```bash
yarn add starin
```
or
```bash
pnpm add starin
```

### Usage

```jsx
import React from 'react';
import Star from 'starin';

<Starin size={'md'} count={5} rating={2} isLoading={false} />
```

### Props
| property  | description                           | default | type            | required |
|-----------|---------------------------------------|---------|-----------------|----------|
| size      | star size                             | md      | `sm` `md`  `lg` | ❌        |
| count     | star count                            | 5       | number          | ❌         |
| rating    | colored star count                    | 0       | number          | ❌         |
| isLoading | while loading behavior                | false   | boolean         |❌          |
| onClick   | set the behavior to click on the star |         | function        | ❌         |
