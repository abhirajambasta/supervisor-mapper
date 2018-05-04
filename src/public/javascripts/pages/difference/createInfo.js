module.exports = function(newDataArray, diffArray) {
    for (let key of diffArray) {
        if (Object.getOwnPropertyNames(key).length) {
            newDataArray.forEach(function(obj, index) {
                if (obj['OracleID'] == key['OracleID']) {
                    newDataArray[index] = key;
                }
            })
        }
    }
}