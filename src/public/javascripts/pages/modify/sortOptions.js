module.exports = function(a, b) {
    let checkboxSelected = [],
    	radioSelected = [],
    	arrayLength;
    $('input[type=radio]:checked:enabled').not('input[name="sortOption"]').each((index,item)=>{
    	checkboxSelected.push(item.name);
    	radioSelected.push(item.value);
    });
	arrayLength = checkboxSelected.length;
    for(let index = 0; index < arrayLength; index++){
    	if(radioSelected[index] === "ascending"){
    		return ($(b).data(checkboxSelected[index])) < ($(a).data(checkboxSelected[index])) ? -1 : 1;
    	} else {
    		return ($(b).data(checkboxSelected[index])) < ($(a).data(checkboxSelected[index])) ? 1 : -1;	
    	}
    }
}