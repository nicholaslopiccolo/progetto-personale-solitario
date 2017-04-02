/**
 * Created by nicholas on 30/03/17.
 */
var div1,div2;
var m_sec=30;
var id;

window.onload = MoveObject;

function MoveObject()
{
div1=document.getElementById("0");
div1.stylesheet.left="100px";
animate();
}
function animate()
{
    if (div1==null)
            alert("errore pingone");
    else
        {
            div1.style.left = parseInt(div1.style.left) - 2 + "px";
            id = setTimeout(animate, m_sec);
        }
}
function spostaPrima()
{

}
function spostaDopo()
{

}