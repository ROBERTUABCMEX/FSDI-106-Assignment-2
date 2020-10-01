var visible = false;
var important = false;
var showIcon = '<i class="far fa-eye"></i>';
var hideIcon = '<i class="far fa-eye-flash"></i>';
var UI ={}; //INICIALIZADOR DEL OBJETO
var taskList = [];

function showDetails(){
    console.log("btn clicked!");

    if(!visible){
        UI.secForm.removeClass("invisible");
        UI.btnShow.html(hideIcon + "hide detailse");
        visible=true;
    }
    else{
        UI.secForm.addClass("invisible");
        UI.btnShow.html(showIcon + "Show details");
        visible=false;
    }

}


function toogleImportant(){


    if(!important){

        UI.btnImportant.removeClass('far');
        UI.btnImportant.addClass("fas active");
        important=true;
    }else{
        UI.btnImportant.removeClass("fas active");
        UI.btnImportant.addClass("far");
        important=false;
    }

}

function saveTask() {
    var title = UI.txtTitle.val();
    var date = UI.txtDate.val();
    var desc = UI.txtDescription.val();
    var alert = UI.txtAlert.val();
    var location = UI.txtLocation.val();

    var task = new Task(title, important, date, desc, alert, location);
    taskList.push(task);
    clearForm();
     

    console.log(taskList);

    }
    function clearForm(){
        $(".control").val('');
        UI.btnImportant.removeClass("fas active");
        UI.btnImportant.addClass("far");
}
  
function test(a){
    a.btnShow = null;
    
}
function init(){
    var Title = "main page";
    console.log(Title);
    
    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#section-Form"),
        btnSave: $("#btnSave"),
        txtTitle:$("#txtTitle"),
        txtDate: $("#txtDate"),
        txtDescription: $("#txtDescription"),
        txtAlert: $("#txtAlert"),
        txtLocation: $("#txtLocation"),
    };

        
    //get data from servers

    // hook events
   
    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toogleImportant);
    UI.btnSave.click(saveTask);


   }


window.onload = init;

/* objetc literal dog={name: 'fido'}
*
*
* object constructor
* function that return and object (itself)
*
*/