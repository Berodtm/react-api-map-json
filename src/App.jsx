import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [apiPath, setApiPath] = useState('core-leads/lly-retail/card/app/asm/s/tn/rn/cnv');

  const inputSearch = (e) => setSearch(e.target.value);
  const inputSearchValue = search.toLowerCase();

  const handleApiPathChange = (e) => setApiPath(e.target.value);
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      let allData = [];
      let nextUrl = `https://content.lloydsbankinggroup.com/api/assets/${apiPath}.json`;
      let response, result;

      while (nextUrl) {
        response = await fetch(nextUrl);
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        result = await response.json();
        allData = [...allData, ...result.entities];

        // Find the "next" link
        const nextLink = result.links?.find(link => link.rel.includes('next'));
        nextUrl = nextLink ? nextLink.href : null;
      }

      setData(allData);
      setLoading(false);
      
      // Log the total number of fetched entities to the console
      console.log(`Total number of entities fetched: ${allData.length}`);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredSearch = data.filter(
    (entity) => {
      const { title, description, elements } = entity.properties;
      const {
        ctaPrimaryText,
        ctaPrimaryLink,
        ctaPrimaryStyle,
        titleText,
        bodyText,
        style,
        imageUrl,
      } = elements;

      return (
        title.toLowerCase().includes(inputSearchValue) ||
        description.toLowerCase().includes(inputSearchValue) ||
        (ctaPrimaryText?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (ctaPrimaryLink?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (ctaPrimaryStyle?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (titleText?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (bodyText?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (style?.value?.toLowerCase().includes(inputSearchValue) || '') ||
        (imageUrl?.value?.toLowerCase().includes(inputSearchValue) || '')
      );
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>API DATA</h1>
      <label htmlFor='search'>Search: </label><br />
      <input
        onChange={inputSearch}
        id='search'
        type='text'
        placeholder='Search...'
      />
      <p>Searching for: {search}</p>
      <br />
      <label htmlFor='apiPath'>API Path: https://content.lloydsbankinggroup.com/api/assets/</label><br />
      <input
        onChange={handleApiPathChange}
        id='apiPath'
        type='text'
        value={apiPath}
      />{' '}
      <button onClick={fetchData}>Fetch Data</button>
      <br />
      <br />
      {filteredSearch.map((entity, index) => {
        const { title, description, elements } = entity.properties;
        const {
          ctaPrimaryText,
          ctaPrimaryLink,
          ctaPrimaryStyle,
          titleText,
          bodyText,
          style,
          imageUrl,
        } = elements;

        return (
          <table key={index} className="entity-table">
            <caption>{index + 1 + ' '}{title}</caption>
            <tbody>
              <tr>
                <th scope="row">Description</th>
                <td>{description}</td>
              </tr>
              <tr>
                <th scope="row">Header Text</th>
                <td>{titleText?.value || 'No title available'}</td>
              </tr>
              <tr>
                <th scope="row">Body Text</th>
                <td>{bodyText?.value || 'No body text available'}</td>
              </tr>
              <tr>
                <th scope="row">Button Text</th>
                <td>{ctaPrimaryText?.value || 'No button text available'}</td>
              </tr>
              <tr>
                <th scope="row">Button Link</th>
                <td>{ctaPrimaryLink?.value || 'No button link available'}</td>
              </tr>
              <tr>
                <th scope="row">Button Style</th>
                <td>{ctaPrimaryStyle?.value || 'No button style available'}</td>
              </tr>
              <tr>
                <th scope="row">Style</th>
                <td>{style?.value || 'No style available'}</td>
              </tr>
              <tr>
                <th scope="row">Image URL</th>
                <td>{imageUrl?.value || 'No image URL available'}</td>
              </tr>
              <tr>
                <th scope="row">View JSON</th>
                <td>
                  <a href={entity.links[0].href} target="_blank" rel="noopener noreferrer">
                    View JSON
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
