export const SearchInArrayOfObjects = (array, key, expected, text) => {
    const value =  array.find( el => el[key] === text );
    if(value!==undefined){
        return  value[expected];
    }
    return "";
}