var random = Math.random()*100;
var owed = random.toFixed(2);
document.getElementById('owe').innerHTML = owed;
document.getElementById('owe').value = owed;

var paidButton = 0;

if (paidButton < .01 ) {
    document.getElementById("changeDisplay").innerHTML = "None Calculated";
} else if ( paidButton > .01) {
    document.getElementById("changeDisplay").innerHTML = paidButton;
}

// CLEAR OUT ALL BILL SLOTS
function clearOff() {
    var empty = "0";
    document.getElementById('100').innerHTML = empty;
    document.getElementById('50').innerHTML = empty;
    document.getElementById('20').innerHTML = empty;
    document.getElementById('10').innerHTML = empty;
    document.getElementById('5').innerHTML = empty;
    document.getElementById('1').innerHTML = empty;
    document.getElementById('25cents').innerHTML = empty;
    document.getElementById('10cents').innerHTML = empty;
    document.getElementById('5cents').innerHTML = empty;
    document.getElementById('1cents').innerHTML = empty;
    document.getElementById("changeDisplay").innerHTML = "None Calculated";
}

// pay function take 2
function payFunction() {
    var paidButton = parseFloat(document.getElementById("payAmount").value);
    var owedNEW = parseFloat(document.getElementById("owe").value);

    ///// CHANGE CALCULATOR --------------------------------------------
    var change = function(total, paid){
        var total = total;
        var paid = paid;

        document.getElementById('totalDisplay').innerHTML = total;
        document.getElementById('paidDisplay').innerHTML = paidButton;
        
        document.getElementById('owe').innerHTML = total;

        var changeDue2 = paid - total;
        var changeDue= changeDue2.toFixed(2);
            console.log("CHANG DUE = " + changeDue);

        // dollarsDue = total amount in dollars owed to customer
        var dollarsDue = Math.floor(changeDue);
           console.log("Dollars Due = $" + dollarsDue.toFixed(2));
            
        // centsDue = total amount in cents owed to customer
        var centsDue2 = changeDue - dollarsDue;
        var centsDue = centsDue2.toFixed(2);
            console.log("Cents Due = $" + centsDue);


        // IF paid < total
        if (paid >= total) {
            document.getElementById('changeDisplay').innerHTML = changeDue;
            document.getElementById('dollarsDisplay').innerHTML = dollarsDue;
            document.getElementById('centsDisplay').innerHTML = centsDue;
        } else {
            var payup = "PAY UP CHUMP!";
            document.getElementById('changeDisplay').innerHTML = payup;
            alert("paid : " + paid + " - total : " + total);
        }
        
        // Types of dollars
        var hundred = 100;
        var fifty = 50;
        var twenty = 20;
        var ten = 10;
        var five = 5;
        var dollar = 1;
        
        // Types of cents -------------------------------------------
        var quarter = .25.toFixed(2);
        var dime = .10.toFixed(2);
        var nickel = .05.toFixed(2);
        var penny = .01.toFixed(2);
        
        //CENTS CHANGE ---------------------------------------------------------------------
        if (centsDue >= quarter){
            var quarterLeftOver = centsDue / quarter;
            var quarterAmount = Math.floor(quarterLeftOver);
            document.getElementById('25cents').innerHTML = quarterAmount;
            var subQuarterAmount = (quarter * quarterAmount).toFixed(2);
            var qRound = Math.ceil(subQuarterAmount*100) / 100;
            var qRound2 = qRound.toFixed(2);
            centsDue = (Math.ceil(centsDue*100) / 100).toFixed(2);
            var centsDue = centsDue - qRound;
            centsDue = (Math.floor(centsDue*100) / 100).toFixed(2);
        }
        if (centsDue >= dime){
            var dimesLeftOver = centsDue / dime;
            var dimeAmount = Math.floor(dimesLeftOver);
            document.getElementById('10cents').innerHTML = dimeAmount;
            var subDimeAmount = dime * dimeAmount;
            var dRound = Math.ceil(subDimeAmount*100) / 100;
            var dRound = dRound.toFixed(2);
            var centsDue = (centsDue - dRound).toFixed(2);
        }
        if (centsDue >= nickel) {
            var nickelsLeftOver = centsDue / nickel;
            var nickelAmount = Math.floor(nickelsLeftOver);
            document.getElementById('5cents').innerHTML = nickelAmount;
            var subNickelAmount = nickel * nickelAmount;
            var nRound = Math.ceil(subNickelAmount*100) / 100;
            var nRound = nRound.toFixed(2);
            var centsDue = (centsDue - nRound).toFixed(2);
        }
        if (centsDue < nickel){
            var pennyAmount = centsDue * 100;
            document.getElementById('1cents').innerHTML = pennyAmount;
        }
        
        // DOLLARS -----------------------------------------------------------------------------------
        if (dollarsDue >= hundred) {
            var hundredsLeftOver = dollarsDue / hundred;
            var hundredAmount = Math.floor(hundredsLeftOver);
            document.getElementById('100').innerHTML = hundredAmount;
            var dollarsDue = dollarsDue - (hundredAmount * hundred);
            document.getElementById('100left').innerHTML ="After Hundreds: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue === fifty){ 
            var fiftyEven = dollarsDue / fifty;
            var fiftyEvenAmount = Math.floor(fiftyEven);
            document.getElementById('50').innerHTML = fiftyEvenAmount;
            var dollarsDue = dollarsDue - (fiftyEvenAmount * fifty);
            document.getElementById('50left').innerHTML ="After Even Fifties: $" + dollarsDue + " leftover.";
        }
        if (fifty < dollarsDue && dollarsDue < hundred) {
            var fiftyLeftOver = dollarsDue / fifty;
            var fiftyAmount = Math.floor(fiftyLeftOver);
            document.getElementById('50').innerHTML = fiftyAmount;
            var dollarsDue = dollarsDue - (fiftyAmount * fifty);
            document.getElementById('50left').innerHTML = "After Fifties: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue === twenty){ 
            var twentyEven = dollarsDue / twenty;
            var twentyEvenAmount = Math.floor(twentyEven);
            document.getElementById('20').innerHTML = twentyEvenAmount;
            var dollarsDue = dollarsDue - (twentyEvenAmount * twenty);
            document.getElementById('20left').innerHTML ="After Even Twenties: $" + dollarsDue + " leftover.";
        }
        if (twenty < dollarsDue && dollarsDue < fifty) {
            var twentyLeftOver = dollarsDue / twenty;
            var twentyAmount = Math.floor(twentyLeftOver);
            document.getElementById('20').innerHTML = twentyAmount;
            var dollarsDue = dollarsDue - (twentyAmount * twenty);
            document.getElementById('20left').innerHTML ="After Twenties: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue == 10){ 
            var tenEven = dollarsDue / ten;
            var tenEvenAmount = Math.floor(tenEven);
            var tenoneamount = 1;
            document.getElementById('10').innerHTML = tenoneamount;
            var dollarsDue = dollarsDue - (tenEvenAmount * ten);
            document.getElementById('10left').innerHTML ="After Even Tens: $" + dollarsDue + " leftover.";
        }
        if (ten < dollarsDue && dollarsDue < twenty) {
            var tensLeftOver = dollarsDue / ten;
            var tensAmount = Math.floor(tensLeftOver);
            document.getElementById('10').innerHTML = tensAmount;
            var dollarsDue = dollarsDue - (tensAmount * ten);
            document.getElementById('10left').innerHTML ="After Tens: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue == five){ 
            var fiveEven = dollarsDue / five;
            var fiveEvenAmount = Math.floor(fiveEven);
            document.getElementById('5').innerHTML = fiveEvenAmount;
            var dollarsDue = dollarsDue - (fiveEvenAmount * five);
            document.getElementById('5left').innerHTML ="After Even Fives: $" + dollarsDue + " leftover.";
        }
        if (five < dollarsDue && dollarsDue < ten) {
            var fiveLeftOver = dollarsDue / five;
            var fiveAmount = Math.floor(fiveLeftOver);
            document.getElementById('5').innerHTML = fiveAmount;
            var dollarsDue = dollarsDue - (fiveAmount * five);
            document.getElementById('5left').innerHTML ="After Fives: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue < five){
            console.log("$1 Dollars Due = " + dollarsDue);
            document.getElementById('1').innerHTML = Math.floor(dollarsDue);
            var dollarsDue = dollarsDue - dollarsDue;
            document.getElementById('1left').innerHTML ="After Ones: $" + dollarsDue + " leftover.";
        }
    };

    // Running Change Function
    change(owedNEW, paidButton);
}
