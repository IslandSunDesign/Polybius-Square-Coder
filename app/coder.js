// Polybius Square Demo
// * by Ryan Bishop, Austin Themes
// * www. AustinThemes.com

// Declare Variables
var o;
var CodeConfig = '';
var str;
var n;var p;var g;var g2; var F; var J;var w;var D;
var X; var Y;var z;
var Row1; var Row2; var Row3;
var Row4; var Row5; var Row6;
var Row7; var Row8;
var R1; var R2; var R3; var R4; var R5; var R6; var R7; var R8;
var C1;var C2;var C3;var C4;var C5;var C6;var C7;
var ToConvert;
var Converted;
var LetterRow; var LetterCol;
var Letter2Find;
var CharToSend;
var CodeInput;
var CodeOutput;
var OutputSeparator = '';
var Row2Find; var Col2Find; var RowFound; var ColFound; var GeneratedLetter;
var Col1; var Col2; var Col3; var Col4; var Col5; var Col6; var Col7;
var CharToSendR; var CharToSendC; var CodeRowsCols; var getStr;
var KLS;

// subroutines : get column and row titles as variables 

function getTheRows() {
    Row1 = document.getElementById('CRow1').value;
    Row2 = document.getElementById('CRow2').value;
    Row3 = document.getElementById('CRow3').value;
    Row4 = document.getElementById('CRow4').value;
    Row5 = document.getElementById('CRow5').value;
    Row6 = document.getElementById('CRow6').value;
    Row7 = document.getElementById('CRow7').value;
    Row8 = document.getElementById('CRow8').value;
    n = Row1 + ',' + Row2 + ',' + Row3 + ',' + Row4 + ',' + Row5 + ',' + Row6 + ',' + Row7 + ',' + Row8;
    return Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row8, n;
}


function getTheCols() {
    Col1 = document.getElementById('KeyCol1').value;
    Col2 = document.getElementById('KeyCol2').value;
    Col3 = document.getElementById('KeyCol3').value;
    Col4 = document.getElementById('KeyCol4').value;
    Col5 = document.getElementById('KeyCol5').value;
    Col6 = document.getElementById('KeyCol6').value;
    Col7 = document.getElementById('KeyCol7').value;
    p = Col1 + ',' + Col2 + ',' + Col3 + ',' + Col4 + ',' + Col5 + ',' + Col6 + ',' + Col7;
    return Col1, Col2, Col3, Col4, Col5, Col6, Col7, p;
}

// subroutines : Find letter, return row and column as LetterRow and LetterCol

function FindAndReturnRowCol(Letter2Find) {
    LetterRow = '';
    LetterCol = '';
    for (F = 1; F < 57; F++) {
        g = document.getElementById('Cinput' + F).value;
        if (g == Letter2Find) {
            g2 = document.getElementById('Cinput' + F).name; 
            g2 = g2.replace(/EL/gi, '');
            g2 = g2.split('-');
            LetterRow = document.getElementById('CRow' + g2[0]).value;
            LetterCol = document.getElementById('KeyCol' + g2[1]).value;
            }
    }
    return LetterRow, LetterCol;
}

// subroutines : find character from row and column




function DecodeRowOrCol(Coord,Coord2) {    

// rows
    R1 = document.getElementById('CRow1').value;
    R2 = document.getElementById('CRow2').value;
    R3 = document.getElementById('CRow3').value;
    R4 = document.getElementById('CRow4').value;
    R5 = document.getElementById('CRow5').value;
    R6 = document.getElementById('CRow6').value;
    R7 = document.getElementById('CRow7').value;
    R8 = document.getElementById('CRow8').value;

    RowFound = 1;
    if (Coord == R1) { RowFound = 1; }
    if (Coord == R2) { RowFound = 2; }
    if (Coord == R3) { RowFound = 3; }
    if (Coord == R4) { RowFound = 4; }
    if (Coord == R5) { RowFound = 5; }
    if (Coord == R6) { RowFound = 6; }
    if (Coord == R7) { RowFound = 7; }
    if (Coord == R8) { RowFound = 8; }

// cols
    C1 = document.getElementById('KeyCol1').value;
    C2 = document.getElementById('KeyCol2').value;
    C3 = document.getElementById('KeyCol3').value;
    C4 = document.getElementById('KeyCol4').value;
    C5 = document.getElementById('KeyCol5').value;
    C6 = document.getElementById('KeyCol6').value;
    C7 = document.getElementById('KeyCol7').value;

    ColFound = 1;
    if (Coord2 == C1) { ColFound = 1; }
    if (Coord2 == C2) { ColFound = 2; }
    if (Coord2 == C3) { ColFound = 3; }
    if (Coord2 == C4) { ColFound = 4; }
    if (Coord2 == C5) { ColFound = 5; }
    if (Coord2 == C6) { ColFound = 6; }
    if (Coord2 == C7) { ColFound = 7; }

    GeneratedLetter = document.getElementsByName('EL' + RowFound + '-' + ColFound)[0].value;
    return GeneratedLetter;
}

function getRowsAndCols() { 
getTheRows();
getTheCols();
document.getElementById('CodeKeyLabels').value = p + ',' + n; //cols
return p, n;
}


// Generate key
function getTheBig56(){
CodeConfig = '';
o = '';
for (X = 1; X < 57; X++) {
o = document.getElementById('Cinput' + X).value;
if (X < 56) { o += ',' }
CodeConfig += '' + o;

}
getRowsAndCols();
document.getElementById('CodeKey').value = CodeConfig;
}

// convert code key to grid placements

function Key2Grid(){
str = ',' + document.getElementById('CodeKey').value;
n = str.split(",");
for (Y = 1; Y < 57; Y++) {
document.getElementById('Cinput' + Y).value = n[Y];
}
}


// convert code key labels to grid labels

function KeyLabels2Grid() {
    getStr = ',' + document.getElementById('CodeKeyLabels').value;
    S = getStr.split(',');
    
    // write the columns
    for (Y = 1; Y < 8; Y++) {
    document.getElementById('KeyCol' + Y).value = S[Y];
    }
    // write the rows
    for (D = 1; D < 9; D++) {
    Q = D + 7;  
    document.getElementById('CRow' + D).value = S[Q];
    }
}


// ===== Encode (the big function) ====================================================
function Enc() {

// Step 1 - load text into variable and reset the output
CodeInput = document.getElementById('CodeInput').value; // the string to be coded
CharsToCode = CodeInput.length; // the length of the string
CharToSend = ''; // reset initial character being sent to the FindAndReturnRowCol() function
CharOutput = ''; // clear output for writing
OutputSeparator = document.getElementById('OutputSeparator').value; //get spacer/separator
//for each character, check character and determine rows/cols
for (z = 0; z < CharsToCode; z++) {

    CharToSend = CodeInput.charAt(z); //what character are we dealing with 
    
    FindAndReturnRowCol(CharToSend); //send it to check for rows/cols
    CharOutput += LetterRow + LetterCol + OutputSeparator; // add the results to output
}
// ACTION! write output in the textarea
document.getElementById('CodeOutput').value = CharOutput; 
}



// ===== Decode (the bigger function) ====================================================
function Decode(){
    // Step 1 - load text into variable and reset the output

    // Step 1 - load text into variable and reset the output
    CodeInput = document.getElementById('CodeInput').value; // the string to be coded

    CharsToCode = CodeInput.length; // the length of the string

    CharToSend = ''; // reset initial character being sent to the FindAndReturnRowCol() function
    CharOutput = ''; // clear output for writing

    //for each character, check character and determine rows/cols
    for (w = 0; w < CharsToCode; w++) {

        //get alpha row and column characters   
        CharToSendR = CodeInput.charAt(w); //what character are we dealing with 
        CharToSendC = CodeInput.charAt(w + 1); //what character are we dealing with

        //now, decode each two characters
        DecodeRowOrCol(CharToSendR,CharToSendC);
        w = w + 1;
        //find out what letter this is
               //sum up output
        CharOutput += GeneratedLetter; // add the results to output
    }
    
    // ACTION! write output in the textarea
    document.getElementById('CodeOutput').value = CharOutput;


    
    //check rows and cols to output character



}



// =========== Further UI Styling =================

var FlipStorage = '';

function FlipValues() {
    FlipStorage = document.getElementById('CodeInput').value;
    document.getElementById('CodeInput').value = document.getElementById('CodeOutput').value;
    document.getElementById('CodeOutput').value = FlipStorage;
}