import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { useEffect, useState } from "react";

export const App = () => {
  const url =
    "http://3.65.149.62/test-api/contacts?range=%5B0%2C4%5D&filter=%7B%22job_title%22%3A%22name%22%2C%20%22country%22%3A%20%221%22%2C%20%22industry%22%3A%20%221%22%7D";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => console.log(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return <Admin dataProvider={dataProvider}></Admin>;
};
