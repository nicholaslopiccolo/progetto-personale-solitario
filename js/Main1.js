/**
 * Created by nicholas on 30/03/17.
 */
var numeri = [1, 3, 5, 7, 9, 11,13,15];
var estratti=[-1,-1,-1,-1,-1,-1,-1,-1];
var num=0;
var i,supporto;
var rand;
var k=-120;

    for (i=0;i<8; i++)
    {
        rand=randomize();
        k=k+130;
        //document.write('<div id="'+rand+'">'+'<img src="../img/'+ numeri[rand]+'.png"></div>');
        document.write('<img id="'+rand+'" src="../img/'+ numeri[rand]+'.png" style="position:absolute;padding-left:'+k+'px;padding-top: 500px;">');
    }

//funzione randomica con controllo dei numeri doppi
function randomize()
{
    if(i==0)
    {
    num = Math.round(7 * Math.random());
    supporto=num;
    estratti[i]=num;
    }
    else
    {
        for(var j=0;j<7;j++)
        {

            if(num==estratti[j]||num==supporto)
            {
                j=0;
                num = Math.round(7 * Math.random());
            }
        }
        estratti[i]=num;
    }

    return num;
}


