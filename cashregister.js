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

// Tax Method
function zeropercent(){
    document.getElementById('tipDisplay').innerHTML = 0;
    document.getElementById('tipDisplay').value = 0;
}

function tax(taxAmount){
    var percent = owed * taxAmount;
    var percent2 = parseFloat(percent.toFixed(2));
    var owed2 = parseFloat(owed);
    var paidTip = (owed2 + percent2).toFixed(2);
    document.getElementById('tipDisplay').innerHTML = paidTip;
    document.getElementById('tipDisplay').value = paidTip;
    // Record Keeping
    console.log("Tax amount: " + paidTip);
}

// Tax Functions
function tenpercent(){
    tax(.1);
}
function fifteenpercent(){
    tax(.15);
}
function twentypercent(){
    tax(.2);
}

// CLEAR OUT ALL BILL/CENT SLOTS
function clearOff() {
    var empty = "0";
    $('#100, #50, #20, #10, #5, #1, #25cents, #10cents, #5cents, #1cents, #1left, #5left, #10left, #20left, #50left, #100left, #centsDisplay, #dollarsDisplay').text(empty);
    $('#changeDisplay').text('None Calculated');
    $('#bills, #coins, #billquantities, #centquantities').hide();
}

// pay function take 2
function payFunction() {

    var paidButton = parseFloat(document.getElementById("payAmount").value);

    // If statement to check for Tip Take 2
    if ( document.getElementById('tipDisplay').value > document.getElementById('owe').value ){
        var owedNEW = parseFloat(document.getElementById('tipDisplay').value);
    } else {
        var owedNEW = parseFloat(document.getElementById('owe').value);
    }

    ///// CHANGE CALCULATOR ------------------------------
    var change = function(total, paid){
        var total = total;
        var paid = paid;
        
        document.getElementById('owe').innerHTML = owed;

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

            // If dollars are due - show dollars
            if (dollarsDue >= 1) {
                $('#bills').show(200);
                $("#billquantities").show(200);
            } else {
                $('#bills').hide();
                $("#billquantities").hide();
            }
            // If coins are due - show coins
            if (centsDue > .01) {
                $('#coins').show(200);
                $('#centquantities').show(200);
                var onecent = $('#1cents').text();
                console.log('onecent ' + onecent);
                if (parseInt($('#1cents').text()) < 1 ){
                    $('#1cents').addClass('coinage');
                }
            } else {
                $('#coins').hide();
                $('#centquantities').hide();
            }
        } else {
            var payup = "PAY UP CHUMP!";
            document.getElementById('changeDisplay').innerHTML = payup;
        }
        
        // Types of dollars
        var hundred = 100;
        var fifty = 50;
        var twenty = 20;
        var ten = 10;
        var five = 5;
        var dollar = 1;
        // Types of cents
        var quarter = .25.toFixed(2);
        var dime = .10.toFixed(2);
        var nickel = .05.toFixed(2);
        var penny = .01.toFixed(2);

        // METHODS -------------------------------------------------------------------------
        // CENTS
        function centsMachineQuarter(centsCurrent, coinType, centDOM){
            var leftOver = centsDue / coinType;
            var centSum = Math.floor(leftOver);
            document.getElementById(centDOM).innerHTML = centSum;
            var subCentSum = (coinType * centSum).toFixed(2);
            var round = Math.ceil(subCentSum * 100) / 100;
            var round2 = round.toFixed(2);
            centsDue = (Math.ceil(centsDue * 100) / 100).toFixed(2);
            centsDue = centsDue - round2;
            centsDue = (Math.floor(centsDue * 100) / 100).toFixed(2);
            console.log('leftover centsDue after ' + coinType + ': ' + centsDue);
        }
        function centsMachine(centsCurrent, coinType, centDOM){
            var leftOver = centsCurrent / coinType;
            var centSum = Math.floor(leftOver);
            document.getElementById(centDOM).innerHTML = centSum;
            var subCentSum = coinType * centSum; // might need .toFixed(2) for quarters
            var round = Math.ceil(subCentSum * 100) / 100; // might need .toFixed(2) for quarters
            round = round.toFixed(2);
            //console.log("round " + coinType + ": " + round);
            centsDue = (centsCurrent - round).toFixed(2);
            console.log('leftover centsDue after ' + coinType + ': ' + centsDue);
        };        
        // DOLLARS
        function dollarsMachine(dollarsCurrent, dollarType, dollarDOM){
            var leftOver = dollarsCurrent / dollarType;
            var dollarSum = Math.floor(leftOver);
            document.getElementById(dollarDOM).innerHTML = dollarSum;
            dollarsDue = dollarsCurrent - (dollarSum * dollarType);
        }
        // DOLLARS EVEN
        function dollarsMachineEven(dollarsCurrent, dollarType, dollarDOM){
            var even = dollarsCurrent / dollarType;
            var evenAmount = Math.floor(even);
            document.getElementById(dollarDOM).innerHTML = evenAmount;
            dollarsDue = dollarsCurrent - (evenAmount * dollarType);
        }

        // CHANGE MACHINE CALLS -----------------------------------------------------------
        // CENTS
        if (centsDue >= quarter){
            //console.log('centsDue >= quarter ran | centsDue = ' + centsDue);
            centsMachineQuarter(centsDue, quarter, '25cents');
        }
        if (centsDue >= dime){
            console.log('centsDue >= dime ran | centsDue = ' + centsDue);
            centsMachine(centsDue, dime, '10cents');
        }
        if (centsDue >= nickel){
            console.log('centsDue >= nickel ran | centsDue = ' + centsDue);
            centsMachine(centsDue, nickel, '5cents');
        }
        if (centsDue < nickel){ // penny amount
            console.log('centsDue > nickel ran | centsDue = ' + centsDue);
            var pennyAmount = centsDue * 100; // amount of pennies remaining
            document.getElementById('1cents').innerHTML = pennyAmount;
        }
        // DOLLARS
        if (dollarsDue >= hundred){
            dollarsMachine(dollarsDue, hundred, '100');
        }
        if (dollarsDue === fifty){
            dollarsMachineEven(dollarsDue, fifty, '50');
        }
        if (fifty < dollarsDue && dollarsDue < hundred){
            dollarsMachine(dollarsDue, fifty, '50');
        }
        if (dollarsDue === twenty){
            dollarsMachineEven(dollarsDue, twenty, '20');
        }
        if (twenty < dollarsDue && dollarsDue < fifty){
            dollarsMachine(dollarsDue, twenty, '20');
        }
        if (dollarsDue == 10){
            dollarsMachineEven(dollarsDue, ten, '10');
        }
        if (ten < dollarsDue && dollarsDue < twenty){
            dollarsMachine(dollarsDue, ten, '10');
        }
        if (dollarsDue == five){
            dollarsMachineEven(dollarsDue, five, '5');
        }
        if (five < dollarsDue && dollarsDue < ten){
            dollarsMachineEven(dollarsDue, five, '5');
        }
        if (dollarsDue < five){
            document.getElementById('1').innerHTML = Math.floor(dollarsDue);
            dollarsDue = dollarsDue - dollarsDue;
        }
    };
    // RUNNING Change Function
    change(owedNEW, paidButton);
}
