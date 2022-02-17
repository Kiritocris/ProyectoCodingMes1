let dimcol = prompt("Establezca el tamaño de columnas: ");
 let dimfil = prompt("Establezca el tamaño de filas: ");
 let izquierda=0;
 let derecha=dimcol-1;
 let n=1;
 let abajo=dimfil-1;
 let arriba=0;
 
 let matriz= new Array(dimfil);

for(i=0;i<dimfil;i++){
    matriz[i] = new Array(dimcol);
}

/* for(i=0;i<dimcol;i++){
    for(j=0;j<dimcol;j++){
        matriz[i][j]=0;
    }
} */

console.log(dimfil*dimcol)

while(n <= (dimfil*dimcol)){
    for(i=izquierda;i<=derecha;i++){
        matriz[izquierda][i]= n;
        n++;
    }

    for(j=arriba+1;j<=abajo;j++){
        matriz[j][abajo]=n;
        n++;
    }

    for(i=derecha-1;i>=izquierda;i--){
        matriz[derecha][i]=n;
        n++;

    }

    for(j=abajo-1;j>=arriba+1;j--){
        matriz[j][arriba]=n;
        n++;
    }
    arriba=arriba+1
    izquierda=izquierda+1;
    abajo=abajo-1
    derecha=derecha-1;
}

document.write("<table>");
for(i=0;i<dimfil;i++){
    document.write("<tr>");
    for(j=0;j<dimcol;j++){
        document.write("<td align='center'>"+matriz[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");