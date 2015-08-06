

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

var tip = 0;
document.getElementById('tipDisplay').innerHTML = tip;

// Tax Section
function tenpercent(){
    var tenpercent = owed * .1;
    var paidTip10 = owed + " + " + " " + tenpercent.toFixed(2) + " =";
    document.getElementById('tipDisplay').innerHTML = paidTip10;
}

function fifteenpercent(){
    var fifteenpercent = owed * .15;
    var paidTip15 = owed + " + " + " " + fifteenpercent.toFixed(2) + " =";
    document.getElementById('tipDisplay').innerHTML = paidTip15;
}

function twentypercent(){
    var twentypercent = owed * .2;
    var paidTip20 = owed + " + " + " " + twentypercent.toFixed(2) + " =";
    document.getElementById('tipDisplay').innerHTML = paidTip20;
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
    document.getElementById('1left').innerHTML = empty;
    document.getElementById('5left').innerHTML = empty;
    document.getElementById('10left').innerHTML = empty;
    document.getElementById('20left').innerHTML = empty;
    document.getElementById('50left').innerHTML = empty;
    document.getElementById('100left').innerHTML = empty;
    document.getElementById("changeDisplay").innerHTML = "None Calculated";
}

// pay function take 2
function payFunction() {

    var paidButton = parseFloat(document.getElementById("payAmount").value);

    
    var owedNEW = parseFloat(document.getElementById("owe").value);

    ///// CHANGE CALCULATOR ------------------------------
    var change = function(total, paid){
        var total = total;
        var paid = paid;

        document.getElementById('totalDisplay').innerHTML = total;
        document.getElementById('paidDisplay').innerHTML = paidButton;
        
        document.getElementById('owe').innerHTML = total;

        // Tip Section
        // var tip = 0;
        // document.getElementById('tipDisplay').innerHTML = tip;

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
            //alert("paid : " + paid + " - total : " + total);
        }
            
        // METHODS -------------------------------------------
        
        /*
        var mFloor = function(this, coins){
        Math.floor(coins);
        return;
        };
        
        */
        
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
        
        //CENTS CHANGE ----------------------------======================================================
        
        // QUARTERS---------------------------------
        if (centsDue >= quarter){

            var quarterLeftOver = centsDue / quarter;
            console.log("Q: quarters fit = " + quarterLeftOver);
            
            // this takes q.left over and rounds down to nearest whole number
            var quarterAmount = Math.floor(quarterLeftOver);

            document.getElementById('25cents').innerHTML = quarterAmount;

            // var quarterAmount = mFloor(quarterLeftOver);
            console.log("Q: amount of quarters = " + quarterAmount);
            
            // this takes the amount of quarters that fit in centsDue
            // and multiplies it by a quarter (.25)
            var subQuarterAmount = (quarter * quarterAmount).toFixed(2);
            console.log("Q: sub quarter amount = " + subQuarterAmount);
            
            // trying to round up the remainder of centsdue - sub q amount to 
            // nearest . 10 decimal spot.
            var qRound = Math.ceil(subQuarterAmount*100) / 100;
            var qRound2 = qRound.toFixed(2);
            console.log("Q: math round (qRound) = " + qRound2);
            
            // round centsDue to the tenths decimal place
            centsDue = (Math.ceil(centsDue*100) / 100).toFixed(2);
            
            // subtracting the amount of quarters that fit (q100) into centsDue 
            // from centsDue
            var centsDue = centsDue - qRound;
            // round down centsDue to the tenths decimal place
            centsDue = (Math.floor(centsDue*100) / 100).toFixed(2);
            // extending that num two decimal places
            // centsDue = centsDue.toFixed(2);
            // return centsDue
            
            // var centsDue = centsDue - subQuarterAmount;
            console.log("Q: amount of cents remaining = " + centsDue);
        }
        
        // LESS THAN QUARTER (AKA the DIMES section) -------------------------
        if (centsDue >= dime){
            // DIMES SECTION
            console.log("DIME SECTION--------");
            // check how many dimes fit
            var dimesLeftOver = centsDue / dime;
            console.log("D: dimes fit = " + dimesLeftOver);
            
            // round dimesLeftOver to whole number
            var dimeAmount = Math.floor(dimesLeftOver);
            console.log("D: amount of dimes = " + dimeAmount);

            document.getElementById('10cents').innerHTML = dimeAmount;
            
            // this takes the amount of quarters that fit in centsDue
            // and multiplies it by a quarter (.25)
            var subDimeAmount = dime * dimeAmount;
            console.log("D: sub dime amount = " + subDimeAmount);
            
            // rounding to nearest .10 decimal & fixes to tenth decimal
            var dRound = Math.ceil(subDimeAmount*100) / 100;
            var dRound = dRound.toFixed(2);
            console.log("D: math round (d100) = " + dRound);
            
            //amount of cents remaining
            // var centsDue = centsDue.toFixed(2);
            var centsDue = (centsDue - dRound).toFixed(2);
            console.log("D: amount of cents remaining = " + centsDue);
        }
        
        // LESS THAN A DIME (AKA the NICKEL section) ----------------------------
        if (centsDue >= nickel) {
            // NICKEL SECTION
            var nickelsLeftOver = centsDue / nickel;
            console.log("N: nickels fit = " + nickelsLeftOver);
            
            // round nickelsLeftOver to whole number
            var nickelAmount = Math.floor(nickelsLeftOver);
            console.log("N: amount of nickels = " + nickelAmount);

            document.getElementById('5cents').innerHTML = nickelAmount;
            
            // this takes the amount of nickels that fit in centsDue
            // and multiplies it by a nickel (.05)
            var subNickelAmount = nickel * nickelAmount;
            console.log("N: sub nickel amount = " + subNickelAmount);
            
            // rounding to nearest .10 decimal & fixes to tenth decimal
            var nRound = Math.ceil(subNickelAmount*100) / 100;
            var nRound = nRound.toFixed(2);
            console.log("N: amount of cents remaining = " + nRound);
            
            // amount of cents remaining
            var centsDue = (centsDue - nRound).toFixed(2);
            console.log("N: amount of cents remaining = " + centsDue);
        }
        
        // HOW MANY PENNIES ( AKA the PENNY section )----------------------------
        if (centsDue < nickel){
            // PENNY SECTION
            console.log("P: pennies left over = " + centsDue);

            var pennyAmount = centsDue * 100;
            document.getElementById('1cents').innerHTML = pennyAmount;

            // amount of pennies remaining
            console.log("P: amount of pennies = " + centsDue);
        }
        
        // DOLLARS --------------------------------======================================================
        console.log("$H dollarsDue = " + dollarsDue);
        
        /* you dont need an EVEN section because its taken care of in 
        in the > hundred section!!!!!!
        
        // EVEN HUNDRED --------------------------------
        if (dollarsDue % hundred === 0 ) {
            var evenHundreds = dollarsDue / hundred;
            console.log("$H: Even hundres left over = " + evenHundreds);
            
            var hundredsOwed = hundred * evenHundreds;
            console.log("$H hundreds owed = " + hundredsOwed);
        };
        */
        
        // HUNDREDS-------------------------------------------
        if (dollarsDue >= hundred) {
            console.log("HUNDRED SECTION -------");
            
            var hundredsLeftOver = dollarsDue / hundred;
            console.log("$H hundreds fit = " + hundredsLeftOver);
            
            var hundredAmount = Math.floor(hundredsLeftOver);
            console.log("$H amount of hundreds = " + hundredAmount);
            document.getElementById('100').innerHTML = hundredAmount;

            // Updating dollarsDue
            var dollarsDue = dollarsDue - (hundredAmount * hundred);
            console.log("$H dollarsDue = " + dollarsDue);

            document.getElementById('100left').innerHTML ="After Hundreds: $" + dollarsDue + " leftover.";

        }
        if (dollarsDue === fifty){ 
        // EVEN FIFTY
            var fiftyEven = dollarsDue / fifty;
            var fiftyEvenAmount = Math.floor(fiftyEven);

            document.getElementById('50').innerHTML = fiftyEvenAmount;

            var dollarsDue = dollarsDue - (fiftyEvenAmount * fifty);

            document.getElementById('50left').innerHTML ="After Even Fifties: $" + dollarsDue + " leftover.";
        }
        if (fifty < dollarsDue && dollarsDue < hundred) {
        // FIFTHY
        // aka less than hundred
            console.log("FIFTY SECTION --------");

            var fiftyLeftOver = dollarsDue / fifty;
            console.log("$F fiftys fit = " + fiftyLeftOver);

            var fiftyAmount = Math.floor(fiftyLeftOver);
            console.log("$F amount of fifties = " + fiftyAmount);
            document.getElementById('50').innerHTML = fiftyAmount;
            
            var dollarsDue = dollarsDue - (fiftyAmount * fifty);
            console.log("dollarsDue = " + dollarsDue);

            document.getElementById('50left').innerHTML = "After Fifties: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue === twenty){ 
            // EVEN TWENTY
            var twentyEven = dollarsDue / twenty;
            var twentyEvenAmount = Math.floor(twentyEven);

            document.getElementById('20').innerHTML = twentyEvenAmount;

            var dollarsDue = dollarsDue - (twentyEvenAmount * twenty);

            document.getElementById('20left').innerHTML ="After Even Twenties: $" + dollarsDue + " leftover.";

        }
        if (twenty < dollarsDue && dollarsDue < fifty) {
        // TWENTY
        // aka less than fifty
            console.log("TWENTY SECTION -------------");

            var twentyLeftOver = dollarsDue / twenty;
            console.log("$T twenties fit = " + twentyLeftOver);

            var twentyAmount = Math.floor(twentyLeftOver);
            console.log("$T amount of twenties = " + twentyAmount);

            document.getElementById('20').innerHTML = twentyAmount;

            var dollarsDue = dollarsDue - (twentyAmount * twenty);
            console.log("dollarsDue = " + dollarsDue);

            document.getElementById('20left').innerHTML ="After Twenties: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue == 10){ 
            // EVEN TEN
            var tenEven = dollarsDue / ten;
            var tenEvenAmount = Math.floor(tenEven);
            var tenoneamount = 1;
            document.getElementById('10').innerHTML = tenoneamount;

            var dollarsDue = dollarsDue - (tenEvenAmount * ten);

            document.getElementById('10left').innerHTML ="After Even Tens: $" + dollarsDue + " leftover.";

        }

        if (ten < dollarsDue && dollarsDue < twenty) {
        // TENS
        // aka less than twenty
            console.log("TENS SECTION ------------");

            var tensLeftOver = dollarsDue / ten;
            console.log("$10 - tens fit = " + tensLeftOver);

            var tensAmount = Math.floor(tensLeftOver);
            console.log("$10 - amount of twenties = " + tensAmount);
            document.getElementById('10').innerHTML = tensAmount;
            /*
            if (tensAmount > 0) {
                document.getElementById('10').innerHTML = tensAmount;
            }
            */

            var dollarsDue = dollarsDue - (tensAmount * ten);
            console.log("dollarsDue = " + dollarsDue);

            document.getElementById('10left').innerHTML ="After Tens: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue == five){ 
            // EVEN FIVE
            var fiveEven = dollarsDue / five;
            var fiveEvenAmount = Math.floor(fiveEven);

            document.getElementById('5').innerHTML = fiveEvenAmount;

            var dollarsDue = dollarsDue - (fiveEvenAmount * five);

            document.getElementById('5left').innerHTML ="After Even Fives: $" + dollarsDue + " leftover.";

        }
        if (five < dollarsDue && dollarsDue < ten) {
        // FIVES
        // aka less than tens
            console.log("FIVES SECTION -------------");

            var fiveLeftOver = dollarsDue / five;
            console.log("$5 - fives fit = " + fiveLeftOver);

            var fiveAmount = Math.floor(fiveLeftOver);
            console.log("$5 - amount of fives = " + fiveAmount);

            document.getElementById('5').innerHTML = fiveAmount;

            var dollarsDue = dollarsDue - (fiveAmount * five);
            console.log("dollarsDue = " + dollarsDue);

            document.getElementById('5left').innerHTML ="After Fives: $" + dollarsDue + " leftover.";
        }
        if (dollarsDue < five){
        // ONES
        // aka less than fives
            console.log("ONES SECTION -------------");
            
            console.log("$1 Dollars Due = " + dollarsDue);
            document.getElementById('1').innerHTML = Math.floor(dollarsDue);

            var dollarsDue = dollarsDue - dollarsDue;

            document.getElementById('1left').innerHTML ="After Ones: $" + dollarsDue + " leftover.";
        }
    };

    // RUNNING Change Function
    change(owedNEW, paidButton);
}
