let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function () {
    this.placeholder = "";
  });

  if (i === 0) {
    inputs[i].addEventListener("blur", function () {
      if (this.value === "") {
        this.placeholder = "Nhập mảng: 3, 1, 4, 2, 6";
      }
    });
  }
  if (i === 1) {
    inputs[i].addEventListener("blur", function () {
      if (this.value === "") {
        this.placeholder = "Nhập số cần chèn";
      }
    });
  }
}

//=============== Lấy mảng =============

function getArray() {
  let input = document.querySelector("#arrayInput").value;
  let temp = input.split(",");

  let arr = [];
  for (let i = 0; i < temp.length; i++) {
    arr[i] = parseInt(temp[i]);
  }
  return arr;
}

//=============== Bài 1 ==============
function bai1() {
  let arr = getArray();
  let result = document.querySelector("#result");

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      result.innerHTML = "Vui lòng nhập đúng dữ liệu";
      result.style.color = "red";
      return;
    }
  }
  let max = arr[0];
  let min = arr[0];
  let max_index = 0;
  let min_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      max_index = i;
    }
    if (min > arr[i]) {
      min = arr[i];
      min_index = i;
    }
  }

  result.innerHTML =
    "Max = " +
    max +
    ", index max = " +
    max_index +
    "<br>Min = " +
    min +
    ", index min = " +
    min_index;
  result.style.color = "green";
}

//=============== Bài 2 ==============

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function bai2() {
  let arr = getArray();
  let result = document.querySelector("#result");

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      result.innerHTML = "Vui lòng nhập đúng dữ liệu";
      result.style.color = "red";
      return;
    }
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  if (count == 0) {
    result.innerHTML = `Không có số nguyên tố`;
  } else {
    let avg = Number((sum / count).toFixed(2));
    result.innerHTML = `Trung bình cộng các số nguyên tố là: ${avg}`;
  }
  result.style.color = "green";
}

//=============== Bài 3 ==============

function bai3() {
  let arr = getArray();
  let result = document.querySelector("#result");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      result.innerHTML = "Vui lòng nhập đúng dữ liệu";
      result.style.color = "red";
      return;
    }
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  result.innerHTML = `Mảng sau khi lọc trùng: ` + newArr.join(", ");
  result.style.color = "green";
}

//=============== Bài 4 ==============

function bai4() {
  let arr = getArray();
  let result = document.querySelector("#result");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      result.innerHTML = `Vui lòng nhập đúng dữ liệu`;
      result.style.color = "red";
      return;
    }
  }
  arr.sort((a, b) => a - b);
  let insertNumber = parseInt(document.querySelector("#insertNumber").value);
  if (isNaN(insertNumber)) {
    result.innerHTML = `Vui lòng nhập số cần chèn`;
    result.style.color = "red";
    return;
  }
  let newArr = [];
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > insertNumber) {
      index = i;
      break;
    }
  }
  for (let i = 0; i < index; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(insertNumber);
  for (let i = index; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  result.innerHTML = `Mảng sau khi chèn: ` + newArr.join(", ");
  result.style.color = "green";
}
