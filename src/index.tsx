import React, { useMemo } from 'react';
import * as Diff from 'diff';

export enum DiffMethod {
  Chars = 'diffChars',
  Words = 'diffWords',
  WordsWithSpace = 'diffWordsWithSpace',
  Lines = 'diffLines',
  TrimmedLines = 'diffTrimmedLines',
  Sentences = 'diffSentences',
  CSS = 'diffCss'
}

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

export type StringDiffProps = {
  oldValue: string;
  newValue: string;
  method?: DiffMethod;
  styles?: DiffStyles;
  className?: string;
};

export const StringDiff: React.FC<StringDiffProps> = ({
  oldValue,
  newValue,
  method = DiffMethod.Chars,
  styles = defaultStyle,
  className
}) => {
  const result = useMemo(() => {
    const diff = Diff[method](oldValue, newValue);
    return diff.map((part, index) => {
      const style: React.CSSProperties = part.added
        ? styles.added
        : part.removed
        ? styles.removed
        : styles.default;

      return (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={style}
        >
          {part.value}
        </span>
      );
    });
  }, [oldValue, newValue, method]);
  return <div className={className}>{result}</div>;
};
