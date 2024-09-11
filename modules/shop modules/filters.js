export function filtersValues() {
  const searchField = document.getElementById("searchField");
  const topicList = document.getElementById("topicList");
  const topicOptions = topicList.querySelectorAll("input");
  const priceSlider = document.getElementById("priceSlider");

  let topicFilter;
  let searchFilter = searchField.value.toLocaleLowerCase();
  topicOptions.forEach((option) => {
    if (option.checked) {
      topicFilter = option.id;
    }
  });
  let priceFilter = Number(priceSlider.value);

  return {
    searchFilter: searchFilter,
    topicFilter: topicFilter,
    priceFilter: priceFilter,
  };
}
