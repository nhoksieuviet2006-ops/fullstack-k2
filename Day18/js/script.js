//================Bài 1====================
const b1Btn = document.querySelector(".btn-1");
b1Btn.addEventListener("click", function () {
  const n = parseInt(document.querySelector("#b1_number").value);
  const result = document.querySelector("#b1_result");

  if (isNaN(n) || n <= 0) {
    result.innerText = "Vui lòng nhập số nguyên dương";
    result.style.color = "red";
    return;
  }
  let output = "";
  let a = 0;
  let b = 1;
  if (n >= 1) output += a + " ";
  if (n >= 2) output += b + " ";
  for (let i = 3; i <= n; i++) {
    let next = a + b;
    output += next + " ";
    a = b;
    b = next;
  }
  result.innerText = output;
  result.style.color = "green";
});

//================Bài 2====================
const b2Btn = document.querySelector(".btn-2");
b2Btn.addEventListener("click", function () {
  let n = parseInt(document.querySelector("#b2_number").value);
  const result = document.querySelector("#b2_result");

  if (isNaN(n)) {
    result.innerText = "Vui lòng nhập dữ liệu.";
    result.style.color = "red";
    return;
  }
  let isNegative = false;

  // Kiểm tra số âm
  if (n < 0) {
    isNegative = true;
    n = Math.abs(n); // lấy giá trị dương để xử lý
  }

  let reversed = 0;

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  // Gắn lại dấu âm nếu ban đầu là số âm
  if (isNegative) {
    reversed = -reversed;
  }
  result.innerText = reversed;
  result.style.color = "green";
});

//================Bài 3====================
function numberToText(n) {
  const ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  if (n == 0) {
    return "Không";
  }
  let result = "";
  let thousands = Math.floor(n / 1000);
  let hundreds = Math.floor((n % 1000) / 100);
  let tens = Math.floor((n % 100) / 10);
  let units = n % 10;

  if (thousands > 0) {
    result += ones[thousands] + " ngàn ";
  }

  if (hundreds > 0) {
    result += ones[hundreds] + " trăm ";
  }

  if (tens > 1) {
    result += ones[tens] + " mươi ";
  } else if (tens === 1) {
    result += "mười ";
  }

  if (units > 0) {
    result += ones[units] + " ";
  }
  return result.trim();
}

const b3Btn = document.querySelector(".btn-3");
b3Btn.addEventListener("click", function () {
  let n = parseInt(document.querySelector("#b3_number").value);
  const result = document.querySelector("#b3_result");

  if (isNaN(n) || n < 0 || n > 9999) {
    result.innerText = "Vui lòng nhập giá trị hợp lệ";
    result.style.color = "red";
    return;
  }

  result.innerText = numberToText(n);
  result.style.color = "green";
});
