// Add Task Button 
document.getElementById('img').addEventListener('click',function(e){
    e.preventDefault();
    const input=document.getElementById('text');
    const value= input.value.trim();

    if(value==="")return;

    const div=document.createElement('div');
    div.className="task-list"
    div.id="task-list"
    const p=document.createElement('div');

    p.innerHTML=`<div class="task-list" id="task-list">
                        <p class="task-content">
                            <input type="checkbox" name="" id="" class="check">
                            <span>${value}</span>
                        </p>
                        <span><img src="bin.png" alt="bin" class="bin" id="bin" onclick="deleteTask(this)"></span>
                        
                    </div>`
    
    
    document.getElementById('task').appendChild(p);
    input.value="";
})

// Press Enter to Add task 
document.getElementById('text').addEventListener('keydown',function(e){
    const key=e.key;

    console.log(key);

    const input=document.getElementById('text');
    
    if(key==="Enter"){
        e.preventDefault();
        const value= input.value.trim();
        if(value==="")return;
        
        const div=document.createElement('div');
        div.className="task-list"
        div.id="task-list"
        const p=document.createElement('div');

        p.innerHTML=`<div class="task-list" id="task-list">
                            <p class="task-content">
                                <input type="checkbox" name="" id="" class="check">
                                <span>${value}</span>
                            </p>
                            <span><img src="bin.png" alt="bin" class="bin" id="bin" onclick="deleteTask(this)"></span>
                            
                        </div>`
        
        
        document.getElementById('task').appendChild(p);
        input.value="";
    }
})

// Single task Delete Button 
function deleteTask(el){
    el.closest('#task-list').remove();
}

// function of Clear All button
document.getElementById('clear-all').addEventListener('click',function(){
    const div=document.createElement('div');
    div.innerHTML=`<center>
                        <div class="confirm" id="confirm">
                            <div class="inConfirm" id="inConfirm">
                                <p>Are you sure you wanna clear all of your task???</p>
                                <div class="btns" id="btns">
                                    <button class="clear-yes" id="clear-yes">Yes</button>
                                    <button class="clear-no" id="clear-no">No</button>
                                </div>
                            </div>
                        </div>
                    </center>`;
    document.getElementById('task').appendChild(div);

    document.getElementById('clear-yes').addEventListener('click', function(){
        document.getElementById('task').innerHTML="";
    })

    document.getElementById('clear-no').addEventListener('click',function(){
        document.getElementById('confirm').remove();
    })
})



