let pointOfStudent = [
  {
    id: "001",
    name: "Nam Khánh",
    math: 10,
    literature: 10,
    english: 10,
    average: 10,
  },
  {
    id: "005",
    name: "Hải Dương",
    math: 10,
    literature: 10,
    english: 10,
    average: 10,
  },
  {
    id: "002",
    name: "Anh Nam",
    math: 10,
    literature: 10,
    english: 10,
    average: 10,
  },
];
function displayStudent() {
  return console.table(pointOfStudent);
}

function addStudent() {
  let student = {
    id: prompt("Nhập ID của sinh viên mới "),
    name: prompt("Nhập tên của sinh viên mới"),
    math: Number(prompt("Nhập điểm Toán của sinh viên ")),
    literture: Number(prompt("Nhập điểm Văn của sinh viên ")),
    english: Number(prompt("Nhập điểm Tiếng Anh của sinh viên ")),
  };
  let average = (math + literture + english) / 3;

  let newstuden = pointOfStudent.push(student);
  alert("Thêm sinh viên thành công!");
}

function deleteStudent() {
  let id = prompt("Nhập mã sinh viên cần xóa");
  if (id === null) {
    alert("nhập lại");
  }
  let index = pointOfStudent.find((del) => del.id);
  if (index === -1) {
    alert("Không tìm thấy sinh viên ");
  } else {
    pointOfStudent.splice(index, 1);
    alert("Đã xóa thành công");
  }
}
function updateStudent() {
  let findName = prompt("Nhập tên sinh viên muốn sửa thông tin ");
  let student = pointOfStudent.name.find(
    (ten) => ten.findName.toLowerCase() === ten.toLowerCase(),
  );
  if (!student) {
    alert("không tim thấy sinh viên");
    return;
  } else {
    newName = prompt("Nhập tên mới :");
    math = +prompt("Nhập lại điểm toán mới");
    literature = +prompt("Nhập lại điểm Văn mới");
    english = +propmt("Nhập lại điểm tiếng Anh ");
  }
}
function searchStudent(listStudent) {
  let keyword = prompt("Nhập tên bạn muốn tìm kiếm");
  const result = students.filter(
    (s) => s.name.toLowerCase() === keyword.toLowerCase(),
  );
  if (result.length === 0) {
    alert("Không tìm thấy");
  } else {
    console.table(result);
  }
}
function classifyStudent(listStudent) {}
let choice;
do {
  choice = +prompt(`
        =======QUAN LI DIEM SINH VIEN =====
        1 ,Thêm sinh viên 
        2,Hiển thị sinh viên
        3,Xóa sinh viên 
        4,Sửa thông tin sinh viên 
        5,Tìm kiếm sinh viên 
        6,Phân loại học lực
        7,Sắp xếp sinh viên theo điểm trung bình 
        8,Tìm kiếm sinh viên theo khoảng điểm 
        9,Thoát chương trình 
        ==================================
        Hãy nhập lựa chọn của bạn.
        `);
  switch (choice) {
    case 1:
      addStudent();
      break;
    case 2:
      displayStudent();
      break;
    case 3:
      deleteStudent();
      break;
    case 4:
      updateStudent();
      break;
    case 5:
      classifyStudent(pointOfStudent);

      break;
    case 6:
      console.log(pointOfStudent);

      break;
    case 7:
      console.log(pointOfStudent);

      break;
    case 8:
      console.log(pointOfStudent);

      break;
    case 9:
      break;
    default:
      console.log("Hãy nhập lại lựa chọn");

      break;
  }
} while (choice === 10);
