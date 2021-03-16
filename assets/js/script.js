

$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
       placement: 'top',
       trigger: 'hover'
    });
    
    
 });

function data(){
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("datee").innerHTML = d + "/" + m + "/" + y;
console.log(d + "/" + m + "/" + y);
}


