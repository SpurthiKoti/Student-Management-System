let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const grade = document.getElementById("grade").value;

    if (name && roll && grade) {
        students.push({ name, roll, grade });
        updateList();
        document.getElementById("name").value = "";
        document.getElementById("roll").value = "";
        document.getElementById("grade").value = "";
    } else {
        alert("Please fill all fields.");
    }
}

function updateList() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";
    students.forEach((s, index) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${s.name}, Roll: ${s.roll}, Grade: ${s.grade}`;
        list.appendChild(li);
    });
}

function clearStudents() {
    students = [];
    updateList();
}