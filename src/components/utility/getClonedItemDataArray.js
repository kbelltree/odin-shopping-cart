// returns an array containing the count copies of the item data including unique ID
function getClonedItemDataArray(cloneCount, itemData) {
  if (cloneCount <= 0) {
    return null;
  }
  let clonedItemData = [];
  for (let i = 0; i < cloneCount; i++) {
    clonedItemData.push({ ...itemData, uniqueId: crypto.randomUUID() });
  }
  return clonedItemData;
}

export default getClonedItemDataArray;
