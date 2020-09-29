
    let item1 = 'Huey';
    let item2 = 'Dewey';
    let item3 = 'Louie';
    let useOxfordComma = true;

   /* let commaList = function (item1, item2, item3, useOxfordComma) {
    if (useOxfordComma == false) {console.log(item1 + ', '+ item2 + ' and '+item3);}
    else {console.log(item1 + ', '+ item2 + ', and '+item3);}
}

    console.log(commaList(item1,item2, item3));*/


    let commaList = function(item1, item2, item3, useOxfordComma){
    if(useOxfordComma != false){
    item2 = item2 + ',';
    }
    return `${item1}, ${item2} and ${item3}`;
};

/*

    function commaList(item1, item2, item3, useOxfordComma){
    oxford = ",".repeat(useOxfordComma) + " and ";
    return item1 + ", " + item2 + oxford + item3;
    console.log(commaList(oxford));
}
*/

    console.log(commaList(item1, item2, item3));


