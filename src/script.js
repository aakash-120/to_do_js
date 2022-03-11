var newtask=document.getElementById("input-task");
var remaining=document.getElementById("remaining");
var button_add=document.getElementById("Add");
var static_p_id=document.getElementById("p");
var h3=document.getElementById("add-item");
var completed=document.getElementById("completed-category");


button_add.addEventListener('click', function add_function(){
  if(newtask.value != '')
  {
    const dynamic_list = document.createElement("li");   
    const dynamic_input_box = document.createElement("input");
    dynamic_input_box.type="checkbox";
    
    dynamic_input_box.addEventListener('change', function() {
        if (this.checked) {
            remaining.removeChild(dynamic_list);
            completed.appendChild(dynamic_list);
        }
        else {
            completed.removeChild(dynamic_list);
            remaining.appendChild(dynamic_list);
        }
      });
    

    const dynamic_label = document.createElement("label");
    dynamic_label.innerHTML=newtask.value;
    const dynamic_inputbox_completed = document.createElement("input");
    dynamic_inputbox_completed.type="text";
    dynamic_inputbox_completed.value=newtask.value;

    const btn_edit = document.createElement("button");
    btn_edit.innerHTML='Edit';
    
    btn_edit.addEventListener('click',function () {
        newtask.value=dynamic_label.innerHTML;
        const btn_update = document.createElement("button");
        h3.innerHTML=dynamic_label.innerHTML;
        btn_update.innerHTML='UPDATE';

        static_p_id.removeChild(button_add);
        static_p_id.appendChild(btn_update);
        
        btn_update.addEventListener('click',function afterupdatefunc(){
          console.log(newtask.value);
          if(newtask.value != '')
          {
          dynamic_label.innerHTML=newtask.value;
          h3.innerHTML='ADD ITEM';
          static_p_id.removeChild(btn_update);
          static_p_id.appendChild(button_add);
          newtask.value='';
          }
          else{
            console.log("cannot update null value. Please enter a valid string");
          }
        })      
      }
    )
    
    const btn_delete = document.createElement("button");
    btn_delete.innerHTML='delete';

    btn_delete.addEventListener('click',function removelist() {
       dynamic_list.remove();
      })
    
    dynamic_list.appendChild(dynamic_input_box);
    dynamic_list.appendChild(dynamic_label);
    dynamic_list.appendChild(dynamic_inputbox_completed);
    dynamic_list.appendChild(btn_edit);
    dynamic_list.appendChild(btn_delete);
    remaining.appendChild(dynamic_list);

    } //if closing bracket for checking that if entered string is empty or not
    else{
      console.log("cannot Add null value. Please enter a valid string");
    }

})

