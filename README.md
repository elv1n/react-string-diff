# react-string-diff

Highlight the difference between two string in a React component

<img src="https://badgen.net/bundlephobia/min/react-string-diff" alt="/bundlephobia/min/react-string-diff">
<img src="https://badgen.net/bundlephobia/minzip/react-string-diff" alt="/bundlephobia/minzip/react-string-diff">

## Install

```bash
yarn add react-string-diff

# or

npm i react-string-diff
```
## Props

| Prop                      | Type            | Default                        | Description                                                                                                                               |
| ------------------------- | --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------|
| oldValue                  | `string*`       |                                | Old value as string.                                                                                                                     |
| newValue                  | `string*`       |                                | New value as string.                                                                                                                     |
| method                    | `DiffMethod`    | `DiffMethod.Chars`             | JsDiff text diff method used for diffing strings. Check out [supported methods](#methods).                                                |
| styles                    | `DiffStyles`    | `defaultStyles`                | Switch between `unified` and `split` view.                                                                                                |
| className                 | `string`        |                                | [Overriding styles](#overriding-styles)                                                                                            |


## Usage

```javascript
import React  from 'react';
import StringDiff from 'react-string-diff';

const oldValue = 'Lorem ipsum dolor sit amet';
const newValue = 'Loremi psum sit amet';

const DiffViewer = () => {
  return (<StringDiff oldValue={oldValue} newValue={newValue} />)
}
```

## Methods

Different styles of text block diffing are possible by using the enums corresponding to variou JsDiff methods ([learn more](https://github.com/kpdecker/jsdiff/tree/v4.0.1#api)). The supported methods are as follows.

```typescript
enum DiffMethod {
  Chars = 'diffChars',
  Words = 'diffWords',
  WordsWithSpace = 'diffWordsWithSpace',
  Lines = 'diffLines',
  TrimmedLines = 'diffTrimmedLines',
  Sentences = 'diffSentences',
  CSS = 'diffCss'
}
```

## Overriding Styles

React String diff uses plan CSS object for styling. Override styles object to apply a custom styles variables

```typescript
type DiffStyles = {
  added: React.CSSProperties;
  removed: React.CSSProperties;
  default: React.CSSProperties;
};

const defaultStyle: DiffStyles = {
  added: {
    backgroundColor: 'lightgreen'
  },
  removed: {
    backgroundColor: 'salmon'
  },
  default: {}
};
```
## Local Development

```bash
yarn install
yarn start
yarn start:example
```

Check package.json for more build scripts.

## License

MIT