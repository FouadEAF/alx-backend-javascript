export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(idRow) {
    console.log('Delete row id are ', idRow);
    return;
}

export function updateRow(idRow, row) {
    console.log(`Update id row  is ${idRow}`, row);
    return idRow;
}
