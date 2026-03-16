let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function () {
    this.placeholder = "";
  });
  if (i === 0) {
    inputs[i].addEventListener("blur", function () {
      this.placeholder = "3, 1, 2, 5, 6,....";
    });
  }
  if (i === 1) {
    inputs[i].addEventListener("blur", function () {
      this.placeholder = "2, 1, 5, 3, 4,...";
    });
  }
  if (i === 2) {
    inputs[i].addEventListener("blur", function () {
      this.placeholder = "[1, [2, 3], 4, [[5, 6]]...]";
    });
  }
}

//=============== Bài 1 ================
function bai1() {
  const input1 = document.querySelector("#arrA").value.trim();
  const input2 = document.querySelector("#arrB").value.trim();
  const resultEl = document.querySelector("#result1");
  resultEl.style.display = "block";
  resultEl.style.color = "";
  resultEl.innerHTML = "";

  if (!input1 || !input2) {
    resultEl.innerHTML = `Vui lòng nhập dữ liệu 2 mảng`;
    resultEl.style.color = "red";
    return;
  }

  const arrA = input1
    .split(",") //chuyển input thành mảng
    .map((item) => Number(item.trim())) //chuyển chuỗi thành số
    .filter((item) => !isNaN(item)); //lọc bỏ các số NaN

  const arrB = input2
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => !isNaN(item));

  if (arrA.length === 0 || arrB.length === 0) {
    resultEl.innerHTML = `Dữ liệu không hợp lệ, vui lòng nhập số!`;
    resultEl.style.color = "red";
    return;
  }
  let intersection = [...new Set(arrA.filter((item) => arrB.includes(item)))];
  resultEl.innerHTML =
    intersection.length > 0
      ? `Giao của 2 mảng là: ` + intersection.join(", ")
      : "Không có phần tử chung!";
  resultEl.style.color = "green";
}

//=============== Bài 2 ================
function getFlattenArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(getFlattenArray(item));
    }
    return acc.concat(item);
  }, []);
}

function bai2() {
  const input = document.querySelector("#flattenArr").value.trim();
  const resultEl = document.querySelector("#result2");
  resultEl.style.display = "block";

  resultEl.style.color = "";
  resultEl.innerHTML = "";

  try {
    const arr = JSON.parse(input); // chuyển string -> array
    const result = getFlattenArray(arr);
    resultEl.innerHTML = `Mảng phẳng: ` + result.join(", ");
    resultEl.style.color = "green";
  } catch (err) {
    resultEl.innerHTML = `Mảng không hợp lệ!`;
    resultEl.style.color = `red`;
  }
}

//=============== Bài 3 ================
function bai3() {
  const input = document.querySelector("#splitArr").value.trim();
  const resultEl = document.querySelector("#result3");
  resultEl.style.display = "block";
  resultEl.style.color = "";
  resultEl.innerHTML = "";

  try {
    const arr = JSON.parse(input);
    let strings = [];
    let numbers = [];
    let booleans = [];

    arr.forEach((subArr) => {
      subArr.forEach((item) => {
        if (typeof item === "string") strings.push(item);
        else if (typeof item === "number") numbers.push(item);
        else if (typeof item === "boolean") booleans.push(item);
      });
    });
    const result = [strings, numbers, booleans];
    resultEl.innerHTML = JSON.stringify(result);
    resultEl.style.color = `green`;
  } catch (err) {
    resultEl.innerHTML = `Mảng không hợp lệ!`;
    resultEl.style.color = `red`;
  }
}

//=============== Bài 4 ================
const posts = [
  {
    title: "Tiêu đề bài viết 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum voluptate eum, distinctio eaque deserunt soluta eveniet enim a veniam excepturi. Impedit sit ullam quasi voluptatibus! Quisquam cumque maxime expedita!",
    image: "assets/img/img.jpg",
  },
  {
    title: "Tiêu đề bài viết 2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum voluptate eum, distinctio eaque deserunt soluta eveniet enim a veniam excepturi. Impedit sit ullam quasi voluptatibus! Quisquam cumque maxime expedita!",
    image: "assets/img/img.jpg",
  },
  {
    title: "Tiêu đề bài viết 3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum voluptate eum, distinctio eaque deserunt soluta eveniet enim a veniam excepturi. Impedit sit ullam quasi voluptatibus! Quisquam cumque maxime expedita!",
    image: "assets/img/img.jpg",
  },
];

const container = document.querySelector(".posts");
posts.forEach((post, index) => {
  container.innerHTML += `
  <div class="post ${index % 2 ? "reverse" : ""}">
    <img src="${post.image}" alt="">
    <div class="post-content">
      <h1>${post.title}</h1>
      <p>${post.desc}</p>
    </div>
  </div>
  <hr/>
  `;
});
