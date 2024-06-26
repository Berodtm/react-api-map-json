import React from 'react';

function Table({
  index,
  title,
  description,
  titleText,
  bodyText,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaPrimaryStyle,
  style,
  imageUrl,
  link
}) {
  return (
    <table className="entity-table">
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
            <a href={link} target="_blank" rel="noopener noreferrer">
              View JSON
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;