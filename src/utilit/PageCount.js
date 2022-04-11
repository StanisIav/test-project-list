export const PageCount = (headerTotCount, limit) => {
    return Math.ceil(headerTotCount / limit)
}

export const setPagination = (totalCaunt) => {
    let massiNum = [];
    for (let q = 0; q < totalCaunt; q++) {
        massiNum.push(q + 1);        
    }
    return massiNum;
}