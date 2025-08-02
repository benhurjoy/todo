let arr=[

]
let completedar=[]
// let Incompletear=[]
function display(){
    let a=document.getElementById("taskdisplay")
    let trs=""
    for(let i in arr){
        trs+=`
            <tr>
               <td>${arr[i].task}</td>
               <td><button class="del" onclick="deleteTask(${i})">delete</button></td>
               <td><button onclick="edit()">edit</button></td>
               <td><button onclick="completed(${i})">completed</button></td>
               <td><button>incomplete</button></td>
            </tr>
        `
    }
    let table=`
        <table >
          ${trs}
        </table>
    `
    a.innerHTML=table
}
function deleteTask(i){
     arr.splice(i,1)
     display()
}
function add(){
    let c=document.getElementById("input_1")
    let d={
    task:c.value}
    arr.push(d)
    display()
    c.value=""
    
}
function completed(i){
     completedar.push(arr[i])
}
function displayCompleted(){
     let a=document.getElementById("taskdisplay")
     let trs=" "
     for(let i in completedar){
          trs+=`
            <tr>
              <td>${completedar[i].task}</td>
            </tr>
          `
     }
     let table=`
        <table >
          ${trs}
        </table>
    `
    a.innerHTML=table
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

