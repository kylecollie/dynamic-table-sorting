let sortDirection = false;
let personData = [
    { name: 'Dylan', age: 31 },
    { name: 'Christopher', age: 30 },
    { name: 'Israel', age: 29 },
    { name: 'ThugNasty', age: 14 },
    { name: 'Dollan', age: 31 }
];

window.onload = () => {
    loadTableData(personData);
};

function loadTableData(personData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for (let person of personData) {
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    const dataType = typeof personData[0][columnName];

    sortDirection = !sortDirection;

    switch (dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
    }

    loadTableData(personData);
}

function sortNumberColumn(sort, columnName) {
    personData = personData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName];
    });
}