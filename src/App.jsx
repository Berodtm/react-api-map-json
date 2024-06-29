import { useEffect, useState } from 'react';
import './App.css';
import fetchData from './utils/fetchData';
import filterData from './utils/filterData';
import TableList from './components/TableList';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [apiPath, setApiPath] = useState(
    'core-leads/lly-retail/card/app/asm/s/tn/rn/cnv'
  );
  const [isInitial, setIsInitial] = useState(true);
  const [fetchDataFlag, setfetchDataFlag] = useState(false);

  const inputSearch = (e) => setSearch(e.target.value);
  const handleApiPathChange = (e) => setApiPath(e.target.value);

  const handleFetchData = () => {
    setIsInitial(false);
    setfetchDataFlag(true)
  };

  useEffect(() => {
    if (fetchDataFlag) {
      fetchData(apiPath, setData, setLoading, setError)
      .finally(() => {
        setfetchDataFlag(false)
      })
    }
  }, [fetchDataFlag, apiPath])

  const filteredSearch = filterData(data, search);

  const initialMessage = isInitial ? (
    <div>Please press the button to fetch data.</div>
  ) : null;
  const loadingMessage = loading ? <div>Loading...</div> : null;
  const errorMessage = error ? <div>Error: {error}</div> : null;
  const noDataMessage =
    !loading && !error && filteredSearch.length === 0 ? (
      <div>No data found.</div>
    ) : null;

  return (
    <div>
      <h1>API DATA</h1>
      <label htmlFor='search'>Search: </label>
      <br />
      <input
        onChange={inputSearch}
        id='search'
        type='text'
        placeholder='Search...'
      />
      <p>Searching for: {search}</p>
      <br />
      <label htmlFor='apiPath'>
        API Path: https://content.lloydsbankinggroup.com/api/assets/
      </label>
      <br />
      <input
        onChange={handleApiPathChange}
        id='apiPath'
        type='text'
        value={apiPath}
      />{' '}
      <button onClick={handleFetchData}>Fetch Data</button>
      {initialMessage}
      <br />
      <br />
      {loadingMessage}
      {errorMessage}
      {noDataMessage}
      {!loading && !error && filteredSearch.length > 0 && (
        <TableList filteredData={filteredSearch} />
      )}
    </div>
  );
}

export default App;
