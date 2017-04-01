/**
 * Created by nicholas on 30/03/17.
 */
var numeri = [1, 3, 5, 7, 9, 11,13,15];
var estratti=[-1,-1,-1,-1,-1,-1,-1,-1];
var num=0;
var i,supporto;
var rand;

    for (i=0;i<8; i++)
    {
        rand=randomize();
        document.write('<img src="../img/'+ numeri[rand]+'.png" id="'+rand+'.png">');
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


