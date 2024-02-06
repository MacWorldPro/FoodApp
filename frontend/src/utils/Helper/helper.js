
 function filterData(searchText, allRestaurant) {
    
    const filterData = allRestaurant.filter((restaurant) =>
        restaurant?.info?.name.toUpperCase().includes(searchText.toUpperCase()));

    return filterData;
}



export default filterData;