var row = prompt("ENTER NUMBER OF ROWS")
var coloumn = prompt("ENTER NUMBER OF COLOUMN")
var i;
var j;

function cooked() {
    document.write("<table border =1>")
    for (i = 1; i <= row; i++) {
        document.write("<tr>")
        for (j = 1; j <= coloumn; j++) {
            document.write("<td>" + i*j + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
    
}
