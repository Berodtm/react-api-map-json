import React from 'react';
import Table from './Table';

const TableList = ({ filteredData }) => {
  return (
    <div>
      {filteredData.map((entity, index) => {
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
          <Table
            key={index}
            index={index}
            title={title}
            description={description}
            titleText={titleText}
            bodyText={bodyText}
            ctaPrimaryText={ctaPrimaryText}
            ctaPrimaryLink={ctaPrimaryLink}
            ctaPrimaryStyle={ctaPrimaryStyle}
            style={style}
            imageUrl={imageUrl}
            link={entity.links[0].href}
          />
        );
      })}
    </div>
  );
};

export default TableList;