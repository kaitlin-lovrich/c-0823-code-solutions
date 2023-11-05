/* eslint-disable react-hooks/exhaustive-deps -- Delete this line! */
import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  // NEW HOOK!
  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  // function getData() {
  //   // fetch data
  //   return { foo: 'bar' };
  // }

  return <div>Fetching {counter} times</div>;
}

// Below shows an exmple of using a dependency for the `useCallback` HOOK:
// import { useCallback, useEffect, useState } from 'react';

// export function Counter() {
//   const [counter, setCounter] = useState(0);
//   // NEW HOOK!
//   const getData = useCallback(() => {
//     console.log(counter);
//     return { foo: 'bar' };
//   }, [counter]); // You only need counter variable inside of dependencies because it is referencing outside of the useCallback callback function
//   useEffect(() => {
//     getData();
//     setCounter((prev) => prev + 1);
//   }, [getData]);
//   return <div>Fetching {counter} times</div>;
// }
