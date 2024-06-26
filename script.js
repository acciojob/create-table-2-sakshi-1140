function createTable() {
    //Write your code here
    const row =prompt("Input number of rows");
    const col =prompt("Input number of columns");
    const table=document.querySelector('#myTable');
//console.log(table);

for(let i=0;i<row;i++){

    const newRow=document.createElement('tr');
    //console.log(newRow);
        for(let j=0;j<col;j++){
            const newCol=document.createElement('td');
            newCol.textContent=`Row-${i} Column-${j}`
            newRow.append(newCol);
        }
        table.append(newRow);
    }

}

