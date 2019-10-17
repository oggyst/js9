
function run(max , min) 
{   
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if(intNumberOfRows == "" || intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else
        {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        let arrSecondRowNumbers = [];
        let arrSecondColumnNumbers = [];
        let arrSecondMatrix = [[]];
        let intSecondArrayAverage = 0;
        document.write ('<style>td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            arrSecondRowNumbers [i] = (Math.floor(Math.random() * (max - min)) + min);
            console.log(arrRowNumbers[i] + ' and second row is ' + arrSecondRowNumbers[i]);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
            intSecondArrayAverage = intSecondArrayAverage + arrSecondRowNumbers [i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;
        intSecondArrayAverage = intSecondArrayAverage / arrSecondRowNumbers.length;
        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers [i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            arrSecondColumnNumbers [i] = Math.floor(Math.random() * (max - min + 1)) + min;
            document.write('<td>' + arrColumnNumbers [i] + '</td>');
        }
        document.write ('</tr>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intArrayAverage=0;
            intCounter = 0;
            document.write ('<tr>')
            arrMatrix[i] = [];
            document.write ('<td>' + arrRowNumbers[i] + '</td>');
            for (var j = 0; j < intNumberOfRows; j++)
            {
                arrMatrix [i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                intArrayAverage = intArrayAverage +  arrMatrix [i][j];
                document.write('<td>' + arrMatrix [i][j] + '</td>');
            }
            document.write('</tr>');
        }
        for (var i = 0; i < intNumberOfRows; i++) 
        {
            if(i == 0)
            {
                document.write('<td></td>');
            }
            document.write('<td>' + arrSecondColumnNumbers [i] + '</td>');
        }
        document.write ('</tr>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intCounter = 0;
            document.write ('<tr>')
            arrSecondMatrix[i] = [];
            document.write ('<td>' + arrSecondRowNumbers[i] + '</td>');
            for (var j = 0; j < intNumberOfRows; j++)
            {
                arrSecondMatrix [i][j] = arrSecondRowNumbers[i] * arrSecondColumnNumbers[j];
                intArrayAverage = intArrayAverage +  arrMatrix [i][j];
                document.write('<td>' + arrSecondMatrix [i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table><table style = margin-top:50px;>');
        
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            document.write('<tr><td>' + (i+1) + '</td>');
            for (var j = 0; j < intNumberOfRows; j++)
            {
                if(i % 2 == 1)
                {
                arrMatrix[i][j] = arrSecondMatrix[(i-1)][j];
                } 
                document.write('<td>' + arrMatrix[i][j] + '</td>');
            }
        }
        document.write('</table>');

    }
}