export function filtersDisplay(values) {
  const activeFiltersSearch = document.getElementById("activeFiltersSearch");
  const activeFiltersTopic = document.getElementById("activeFiltersTopic");
  const activeFiltersPrice = document.getElementById("activeFiltersPrice");

  if (values.searchFilter) {
    activeFiltersSearch.textContent = '"' + values.searchFilter + '"';
    activeFiltersSearch.style.display = "block";
  } else {
    activeFiltersSearch.style.display = "none";
  }

  if (values.topicFilter != "all") {
    activeFiltersTopic.textContent = '"' + values.topicFilter + '"';
    activeFiltersTopic.style.display = "block";
  } else {
    activeFiltersTopic.style.display = "none";
  }

  if (values.priceFilte != 1000) {
    activeFiltersPrice.textContent = "$0 - $" + values.priceFilter;
    activeFiltersPrice.style.display = "block";
  } else {
    activeFiltersPrice.style.display = "none";
  }
}
