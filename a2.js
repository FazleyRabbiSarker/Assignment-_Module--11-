var lon,lat,str ='',i = 0;

    for(lat=1; lat<=2; lat++)
    {
    if((i%2)==0){

        for(lon=1; lon<=3; lon++)
           {

            str+="W,"+lat+","+lon+"\n";
            console.log(str)
           }
               }
    else{

         for(lon=3; lon>=1; lon--)
           {

            str+="W,"+lat+","+lon+"\n";
            console.log(str)
           }
              }
                i++;   
         }