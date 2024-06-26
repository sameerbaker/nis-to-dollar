var exchangeForm = document.querySelector(".exchangeForm");
var exchange = document.querySelector("select[name='exchange']");

var exchangeRates = {
    dollar: 3.5,
    dinar: 5.0,
    nis: 1,
};

exchangeForm.onsubmit = function(e) {
    e.preventDefault();
    
    var amount = document.querySelector("input[name='amount']").value;
    var selectedExchange = exchange.value;
    var rate = exchangeRates[selectedExchange];
    var result = document.querySelector(".result");
    
    result.innerHTML = amount * rate;
    console.log(amount);
    console.log(result.innerHTML);
};
