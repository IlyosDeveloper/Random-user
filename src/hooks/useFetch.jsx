import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [filData, setFilData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setFilData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      }
    };
    getData();
  }, [url]);

  const deleteData = (id) => {
    const deletedData = data.results.filter((item) => {
      return item.email !== id;
    });
    setData({ results: deletedData });
  };

  const refreshData = () => {
    const newData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("404");
        }
        const data = await req.json();
        setIsPending(false);
        setData(data);
        setFilData(data);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };
    newData();
  };

  const searchData = (name) => {
    if (name.trim()) {
      const filteredName = filData["results"].filter((item) => {
        const title = `${item.name.title}`.toLowerCase();
        return title.includes(name);
      });
      setData({ results: filteredName });
    } else {
      setData(data);
    }
  };

  return { data, error, isPending, searchData, deleteData, refreshData };
};

export { useFetch };
