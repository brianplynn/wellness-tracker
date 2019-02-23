export const arrayReplace = (array, item, i) => {
	i = Number(i);
	return array.slice(0,i).concat(item).concat(array.slice(i+1, array.length));
}