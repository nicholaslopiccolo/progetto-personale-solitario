/**
 * Created by nicholas on 30/03/17.
 */
var div1,div2;
var m_sec=30;
var id;
window.onload = MoveObject;
function MoveObject()
{
div1=document.getElementById("1");
//div2=document.getElementById('1');
div1.style.top="0px";
//div2.style.top ="0px";
animate();
}
function animate()
{
div1.style.top=parseInt(div1.style.top)+2+"px";
//div2.style.top=parseInt(div2.style.top)+2+"px";
id = setTimeout(animate,m_sec);

}
function spostaPrima()
{

}
function spostaDopo()
{

}