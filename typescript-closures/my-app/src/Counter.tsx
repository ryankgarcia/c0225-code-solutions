import { useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function getData() {
      // fetch data
      return { foo: 'bar' };
    }
    const data = getData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
