const fetchData = async (apiPath, setData, setLoading, setError) => {

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
      
      console.log(`Total number of entities fetched: ${allData.length}`);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  export default fetchData;