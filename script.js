let arr = [];
let completedar = [];

function display() {
    let a = document.getElementById("taskdisplay");
    let trs = "";

    for (let i in arr) {
        trs += `
            <tr>
                <td>${arr[i].task}</td>
                <td><button class="del" onclick="deleteTask(${i})">Delete</button></td>
                <td><button class="edit" onclick="editTask(${i})">Edit</button></td>
                <td><button class="done" onclick="completed(${i})">Complete</button></td>
                <td><button class="incomplete" onclick="markIncomplete(${i})">Incomplete</button></td>
            </tr>
        `;
    }

    let table = `
        <table>
            <tbody>
                ${trs}
            </tbody>
        </table>
    `;

    a.innerHTML = table;
}

function deleteTask(i) {
    arr.splice(i, 1);
    display();
}

function add() {
    let c = document.getElementById("input_1");
    if (c.value.trim() !== "") {
        let d = { task: c.value };
        arr.push(d);
        display();
        c.value = "";
    }
}

function completed(i) {
    completedar.push(arr[i]);
    deleteTask(i); // remove from main list
}

function displayCompleted() {
    let a = document.getElementById("taskdisplay");
    let trs = "";

    for (let i in completedar) {
        trs += `
            <tr>
                <td>${completedar[i].task}</td>
            </tr>
        `;
    }

    let table = `
        <table>
            <thead>
                <tr><th>Completed Tasks</th></tr>
            </thead>
            <tbody>
                ${trs}
            </tbody>
        </table>
    `;

    a.innerHTML = table;
}

function editTask(i) {
    let newTask = prompt("Edit your task:", arr[i].task);
    if (newTask !== null && newTask.trim() !== "") {
        arr[i].task = newTask.trim();
        display();
    }
}

function markIncomplete(i) {
    alert("Feature to move back to incomplete list is not implemented yet.");
}

// function displayInComplete(){
//      let a=document.getElementById("taskdisplay")
//      let trs=" "
//      for(let i in Incompletear){
//           trs+=`
//             <tr>
//               <td>${Incompletear[i].task}</td>
//             </tr>
//           `
//      }
//      let table=`
//         <table >
//           ${trs}
//         </table>
//     `
//     a.innerHTML=table
// }


