var click = document.getElementById('submit');
click.addEventListener('click', addData);

var arr = new Array();

function addData(){
    DeleteData();
    getData();
    var cv = document.getElementById('weight').value;
    cv = parseInt(100) + parseInt(cv);
    document.getElementById('weight').value = cv;
    arr.push({
        name:document.getElementById('name').value,
        animal_class:document.getElementById('animal_class').value,
        sub_class:document.getElementById('sub_class').value,
        infra_class:document.getElementById('infra_class').value,
        weight:document.getElementById('weight').value,
        living_place:document.getElementById('living_place').value,
        living_period:document.getElementById('living_period').value,
        living_in_groups:document.getElementById('living_in_groups').value
    });

    localStorage.setItem("localData", JSON.stringify(arr));
}

function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
    localStorage.clear();
}