let saveData = [];
let i = 0 ;
let currentPage = 1;
let totalTask = 0;
isAppActive = false; 


function submitForm() {
    const data = document.getElementById("task");
    if(data.value == null || data.value == '' || data.value == 0){
        isAppActive = false;
    }
    else{
        isAppActive = true;
    }
    
    if(isAppActive){
        saveData.push(data.value) ;
        data.value = '';
        
        const div = document.createElement("div");
        document.getElementById("content").appendChild(div);
        div.classList.add("divAll");
        
        const newdata = document.createElement("p");
        div.appendChild(newdata);
        newdata.innerHTML = saveData[i];
        i = i + 1;
        totalTask++;
        div.classList.add("div"+i);
        newdata.classList.add("task"+i);
        
        const button1 = document.createElement("button");
        div.appendChild(button1);
        button1.innerHTML = "&#xf00c;";
        button1.classList.add("fa");
        button1.classList.add("button");
        button1.classList.add("tick"+i);
        button1.style.color = "green";
        button1.style.fontSize = "15px";
        
        const button2 = document.createElement("button");
        div.appendChild(button2);
        button2.innerHTML = "&#xf0a3";
        button2.classList.add("fa");
        button2.classList.add("button");
        button2.classList.add("edit"+i);
        button2.style.color = "#FF7F24";
        button2.style.fontSize = "15px";
        
        const button3 = document.createElement("button");
        div.appendChild(button3);
        button3.innerHTML = "&#xf00d;";
        button3.classList.add("fa");
        button3.classList.add("button");
        button3.classList.add("cancel"+i);
        button3.style.fontSize = "20px";
        
        const line = document.createElement("hr");
        div.appendChild(line);
        line.classList.add("line");
        
        const myFunction1 = () => { 
        tick.disabled = true;
        task.style.color = "blue";
        button1.innerHTML = "";
        }
        
        const myFunction2 = () => {
        task.classList.add("abc");
        data.value = task.innerHTML;
        enter.classList.add("hide");
        ok.classList.remove("hide");
        }
        
        const myFunction3 = () => { 
        document.getElementById("content").removeChild(A);
        totalTask = totalTask - 1;
        console.log(totalTask);
        }
        
        const myFunction4 = () => {
        const abc = document.querySelector(".abc");
        abc.innerHTML = data.value;
        enter.classList.remove("hide");
        ok.classList.add("hide");
        abc.classList.remove("abc");
        data.value = "";
        }
        
        if (totalTask % 10 == 0){
            page2.classList.remove("hide");
        }
        else if (totalTask % 20 == 0) {
            page3.classList.remove("hide");
        }
        
        const A = document.querySelector(".div"+i);
        const task = document.querySelector(".task"+i);
        const tick = document.querySelector(".tick"+i);
        const cancel = document.querySelector(".cancel"+i);
        const edit = document.querySelector(".edit"+i);
        const enter = document.querySelector(".enter");
        const ok = document.querySelector(".ok");
        const page2 = document.querySelector(".page2");
        const page3 = document.querySelector(".page3");
    
        cancel.addEventListener("click", myFunction3);  
        tick.addEventListener("click", myFunction1);
        edit.addEventListener("click", myFunction2);
        ok.addEventListener("click", myFunction4);
    }
}