 const inputBox = document.querySelector(".inputField input");
 const addButton = document.querySelector(".inputField button");
 const todoList = document.querySelector(".todoList");
 const deleteAllButton = document.querySelector(".footer button");

 inputBox.onkeyup = ()=>{
     let userData = inputBox.value; 
     if(userData.trim() !=0){
         addButton.classList.add("active");
     }else{
        addButton.classList.remove("active"); 
     }
 } 

 showTasks(); 

 addButton.onclick = ()=>{
     let userData = inputBox.value;
     let getLocalStorage = localStorage.getItem("New Todo");
     if(getLocalStorage === null){
         listArr = [];
     }else{
         listArr = JSON.parse(getLocalStorage);
     }
     listArr.push(userData);
     localStorage.setItem("New Todo", JSON.stringify(listArr));
     showTasks(); 
     addButton.classList.remove("active"); 
 }

//function to add task list inside ul

 function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage === null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumber = document.querySelector(".pendingNumber");
    pendingNumber.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllButton.classList.add("active");
    }else{
        deleteAllButton.classList.remove("active");
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick= "deleteTask (${index})";><img class="trash" src="./images/icons8-trash-24 (1).png"></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = ""; 
 }

 //delete task 
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deleteAllButton.onclick = ()=> {
    listArr =[]
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}