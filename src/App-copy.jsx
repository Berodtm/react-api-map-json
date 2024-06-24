import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://content.lloydsbankinggroup.com/api/assets/core-leads/lly-retail/card/app/asm/s/tn/rn/cnv/llyappasm-card-contextual-22droploo1.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        return response.json();
      })
      .then(result => {
        setData(result);
        setLoading(false);

      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, []);
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  const elements = data?.properties?.elements || {};
  const {
    ctaPrimaryText: buttonText = null,
    ctaPrimaryLink = null,
    ctaPrimaryStyle = null,
    titleText = null,
    bodyText = null,
    style = null,
    imageUrl = null,
  } = elements;
  return (
    <>
      <div>
      <h1>API DATA</h1>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <p>Header Text: {titleText?.value || 'No title available'}</p>
        <p>Button Text: {buttonText?.value || 'No button text available'}</p>
        <p>Button Link: {ctaPrimaryLink?.value || 'No button link available'}</p>
        <p>Button Style: {ctaPrimaryStyle?.value || 'No button style available'}</p>
        <p>Body Text: {bodyText?.value || 'No body text available'}</p>
        <p>Style: {style?.value || 'No style available'}</p>
        <p>Image URL: {imageUrl?.value || 'No image URL available'}</p>
      </div>
    </>
  )
}

export default App
