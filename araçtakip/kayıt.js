let brand=document.getElementById('brand');
let model=document.getElementById('model');
let year=document.getElementById('year');
let buton=document.getElementById('btn');
let table=document.getElementById('table');

function addItem(){
    let tableData=`<tr class="table-success">
    <td class="table-success">${brand.value}</td>
    <td class="table-success">${model.value}</td>
    <td class="table-success">${year.value}</td>
    </tr>`;
table.innerHTML += tableData;
console.log(tableData)
};
