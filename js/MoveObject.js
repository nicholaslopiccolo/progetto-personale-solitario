/**
 * Created by nicholas on 30/03/17.
 */
var div;
var m_sec=5;
var id;

window.onload = MoveObject;

function MoveObject()
{
    div=document.getElementById("0");
spostaPrima();
}
var x,y;
var x1,y1;
var supp=0,supp1=0;
function spostaPrima ()
{

    var div_a=document.getElementById("0");
    var div_b=document.getElementById("1");
    //coordinate primo div
    if(supp!=1)
    {
        x = div_a.style.paddingLeft;
        y = div_a.style.paddingTop;
        //coordinate secondo div
        x1 = div_b.style.paddingLeft;
        y1 = div_b.style.paddingTop;
        supp=1;
    }
    //inizio controlli
    if (x>x1 && div_b.style.paddingTop!=parseInt(y1) - 150 + "px" && div_a.style.paddingTop!=parseInt(y) + 150 + "px" && supp1==0)
    {
        div_b.style.paddingTop = parseInt(div_b.style.paddingTop) - 2 + "px";
        div_a.style.paddingTop = parseInt(div_a.style.paddingTop) + 2 + "px";
        if (x>x1 && div_b.style.paddingTop==parseInt(y1) - 150 + "px" && div_a.style.paddingTop==parseInt(y) + 150 + "px")
        {supp1=1;}
    }
    else if (x>x1 && div_b.style.paddingLeft!=parseInt(x) + "px" && div_a.style.paddingLeft!=parseInt(x1)+ "px"&& supp1==1)
    {
        div_b.style.paddingLeft = parseInt(div_b.style.paddingLeft) + 2 + "px";
        div_a.style.paddingLeft = parseInt(div_a.style.paddingLeft) - 2 + "px";
        if (x>x1 && div_b.style.paddingLeft==parseInt(x) + "px" && div_a.style.paddingLeft==parseInt(x1)+ "px")
        {supp1=2;}
    }
    else if(x>x1 && div_b.style.paddingTop!=parseInt(y1) + 150 + "px" && div_a.style.paddingTop!=parseInt(y) - 150 + "px" && supp1==2)
    {
        div_b.style.paddingTop = parseInt(div_b.style.paddingTop) + 2 + "px";
        div_a.style.paddingTop = parseInt(div_a.style.paddingTop) - 2 + "px";
        if(x>x1 && div_b.style.paddingTop==parseInt(y)+ "px" && div_a.style.paddingTop==parseInt(y1)+ "px")
            {supp1=3;}
    }



    id = setTimeout(spostaPrima, m_sec);



}
function spostaDopo()
{

}