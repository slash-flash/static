function lowfunction(){
   Element=document.getElementById("abc");
   text=Element.value;
newtext=text.toLowerCase();
Element.value=newtext;text=null;
}
function Upfunction(){
    Element=document.getElementById("abc");
    text=Element.value;
    newtext=text.toUpperCase();
    Element.value=newtext;text=null;
    }
    function clearfunction(){
        alert("in")
        Element=document.getElementById("abc");
        Element.value='';
    }
    function handleChange(){
        parag=document.getElementById("count");
        Element=document.getElementById("abc");
        text=Element.value;
        parag.innerHTML=text.split(' ').length+" Word "+text.length+" Characters";
    }
