//loop to fill up the mounthes checkbox
document.getElementById("result_cat").innerHTML = "Age of the cat as human:";
document.getElementById("result_dog").innerHTML = "Age of the dog as human:";


//loop to fill up the years checkbox
for (var i = 0; i <= 20; i++) {
    var select_cat = document.getElementById("year_cat");
    var option = document.createElement("OPTION");
    select_cat.options.add(option);

    option.text = i;
    option.value = i;
}
//loop to fill up the mounthes checkbox
for (var i = 0; i <= 12; i++) {
    var select_dog = document.getElementById("mounth_dog");
    var option_dog = document.createElement("OPTION");
    select_dog.options.add(option_dog);
    option_dog.text = i;
    option_dog.value = i;
}

//loop to fill up the years checkbox
for (var i = 0; i <= 20; i++) {

    var select_dog = document.getElementById("year_dog");
    var option = document.createElement("OPTION");
    select_dog.options.add(option);
    option.text = i;
    option.value = i;
}

function dogAge() {
    var element = document.getElementById("mounth_dog");
    var dMounth = Number(element.options[element.selectedIndex].text);

    var element_y = document.getElementById("year_dog");
    var dYear = Number(element_y.options[element_y.selectedIndex].text);


    var result = Math.round(((dMounth / 12) * 1 + dYear) * 7);

    document.getElementById("result_dog").innerHTML = "Your dog is " + result + " years old";

}

function catAge() {
    var element = document.getElementById("mounth_cat");
    var cMounth = Number(element.options[element.selectedIndex].text);

    var element = document.getElementById("year_cat");
    var cYear = Number(element.options[element.selectedIndex].text);

    var resultAge = "";
    if (cMounth != 0 && cYear != 0) {
        var sum = (cMounth / 12) * 1 + cYear;
        if (sum >= 0.5 && sum <= 1) {
            resultAge = "15 years";
        } else if (sum >= 1.5 && sum < 2) {
            resultAge = "21 years";
        } else if (sum >= 2 && sum < 3) {
            resultAge = "24 years";
        } else if (sum >= 3 && sum < 11) {
            resultAge = ((sum - 3) * 4) + 28 + " years";
        } else if (sum >= 11) {
            resultAge = ((sum - 11) * 4) + 60 + " years";
        }
    } else if (cYear == 0) {
        switch (cMounth) {
            case (1):
                resultAge = "1 year";
                break;
            case (3):
                resultAge = "4 years";
                break;
            case (6):
                resultAge = "10 years";
                break;
            case (12):
                resultAge = "15 years";
                break;
            case (18):
                resultAge = "21 years";
                break;
        }
    } else if (cMounth == 0) {
        switch (cYear) {
            case (1):
                resultAge = "15 year";
                break;
            case (2):
                resultAge = "24 years";
                break;
            default:
                if (cYear >= 3 && cYear < 11) {
                    resultAge = ((cYear - 3) * 4) + 28 + " years";
                } else if (cYear >= 11) {
                    resultAge = ((cYear - 11) * 4) + 60 + " years";
                }
                break;
        }
    } else if (cMounth == 0 && cYear == 0) {
        resultAge = "0 years";
    }
    document.getElementById("result_cat").innerHTML = "Your cat is " + resultAge + " old";
    //document.getElementById("result_cat").innerHTML = "Hello!";
}