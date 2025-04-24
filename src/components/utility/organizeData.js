export function filterDataByCategories(allData, categories) {
  return allData.filter((data) => categories.includes(data.category));
}

export function groupDataByCategory(data) {
  return data.reduce((accumulator, currentData) => {
    let groupKey = currentData.category;
    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }
    accumulator[groupKey].push(currentData);
    return accumulator;
  }, {});
}

export function removeByUniqueId(data, targetId) {
  return data.filter((item) => item.uniqueId !== targetId);
}
