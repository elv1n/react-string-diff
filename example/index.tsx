import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StringDiff, DiffMethod } from '../src';

console.log(DiffMethod);
const oldInitValue =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer eu lacus accumsan arcu fermentum euismod. Donec pulvinar porttitor tellus. Aliquam venenatis. Donec facilisis pharetra tortor.  In nec mauris eget magna consequat convallis. Nam sed sem vitae odio pellentesque interdum. Sed consequat viverra nisl. Suspendisse arcu metus, blandit quis, rhoncus ac, pharetra eget, velit. Mauris urna. Morbi nonummy molestie orci. Praesent nisi elit, fringilla ac, suscipit non, tristique vel, mauris. Curabitur vel lorem id nisl porta adipiscing. Suspendisse eu lectus. In nunc. Duis vulputate tristique enim. Donec quis lectus a justo imperdiet tempus.';

const newInitValue =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer eu lacus accuxqsan arcu fermentum euismod. Donec pulvinar porttitor tellus. Aliquam venenatis. Donec facilisis pharetra tortor.  In nec mauris eget magna consequat convallis. Nam sed sem vitae odio pellentesque interdum. Sed consequat viverra nisl. Suspendisse arcu metus, blandit quis, rhoncus ac, pharetra eget, velit. Mauris urna. Morbi nonummy molestie orci. Praesent nisi elit, fringilla ac, suscipit nxla, tristique vel, mauris. Curabitur vel lorem id nisl porta adipiscing.Suspendisse eu lectus. In nunc. Duis adipiscing tristique enim. Donec quis lectus a justo imperdiet tempus.';

const App = () => {
  const [oldValue, setOldValue] = React.useState(oldInitValue);
  const [newValue, setNewValue] = React.useState(newInitValue);
  const [method, setMethod] = React.useState(DiffMethod.Chars);
  return (
    <div>
      <h1>react-string-diff</h1>
      <textarea
        onChange={({ target: { value } }) => setOldValue(value)}
        value={oldValue}
      />
      <textarea
        onChange={({ target: { value } }) => setNewValue(value)}
        value={newValue}
      />
      <select onChange={({ target: { value } }) => setMethod(value)}>
        {Object.keys(DiffMethod).map(key => (
          <option key={key} value={DiffMethod[key]}>
            {key}
          </option>
        ))}
      </select>
      <StringDiff method={method} newValue={oldValue} oldValue={newValue} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
