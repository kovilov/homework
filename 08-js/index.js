function checkZIP() {
    // добавить ещё 3 страны
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      ru : [ '^(RU-)?\\d{5}$', "Russia ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. RU-3001 or 3007" ],
      ua : [ '^(UA-)?\\d{6}$', "Ukraine ZIPs jabut 4 simboliem un jasakas ar UA-: e.g. UA-3001 or 3007" ],
      eng : [ '^(ENG-)?\\d{4}$', "England ZIPs jabut 4 simboliem un jasakas ar UA-: e.g. ENG-3001 or 3007" ]
    };
  
    var country = document.getElementById("Country").value;
    var zipCode = document.getElementById("zip").value;
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {
    let list = [];

    let input = etElementsByTagName('input');
    console.log(input);


    input.forEach(input => {
      let value = input.value
      list.push(input.value);
    });
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
    document.getElementById("form").addEventListener("submit", printValues);

    // добавить addEventListener для кнопки и вызвать printValues()
}