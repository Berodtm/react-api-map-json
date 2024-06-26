const filterData = (data, search) => {
    const inputSearchValue = search.toLowerCase();
    return data.filter((entity) => {
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
    });
  };
  
  export default filterData;