function generate() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  var bmi = ((weight / (height * height)) * 10000).toFixed(2);

  var level = document.getElementById("level");
  if (bmi <= 18.5) {
    level.innerText = "UnderWeight";
    level.style.color = "rgb(1, 179, 249)";
  } else if (bmi >= 18.5 && bmi <= 25.0) {
    level.innerText = "Normal";
    level.style.color = "rgb(154, 255, 3)";
  } else if (bmi >= 25.0) {
    level.innerText = "OverWeight";
    level.style.color = "rgb(255, 0, 43)";
  }
  document.getElementById("bmi").innerText = bmi;
}

generate();
console.log(bmi);
