document.addEventListener("DOMContentLoaded", function (event) {
    function cal(a, b, caculator) {

        switch (caculator) {
            case '+': {
                result = a + b;
                break
            }
            case '-': {
                result = a - b;
                break
            }
            case '*': {
                result = a * b;
                break
            }
            case '/': {
                result = a / b;
                break
            }
        }
        return result;
    }

    document.querySelectorAll("button")[0].addEventListener("click",function (e) {
        e.preventDefault();
        var elNumber1 = document.querySelectorAll("input[name='number1']");
        var valueNumber1 = parseInt(elNumber1[0].value);
        var elNumber2 = document.querySelectorAll("input[name='number2']");
        var valueNumber2 = parseInt(elNumber2[0].value);
        var elCalculator = document.querySelectorAll("select[name='cal']");
        var valCal = elCalculator[0].value;
        //
        var error = false;
        if(elNumber1[0].value ===''){
            elNumber1[0].classList.add("is-invalid");
            error = true;
        }
        if(elNumber2[0].value ===''){
            elNumber2[0].classList.add("is-invalid");
            error = true;
        }
        if(valCal ===''){
            elCalculator[0].classList.add("is-invalid");
            error = true;
        }
        if(error){
            return false;
        }
       document.querySelectorAll("#result")[0].value = cal(valueNumber1,valueNumber2,valCal);
    })

});
