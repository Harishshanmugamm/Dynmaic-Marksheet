var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://github.com/Harishshanmugamm",
    width: 100,
    height: 100
});

function Words() {
    let str='ZERO ZERO'
    return str;
}

function percent(tot, subno) {
    return (tot / (subno * 100)) * 100;
}

function cgpacal(perc) {
    return (perc / 10).toFixed(2);
}

function grades(cgpa) {
    if (cgpa >= 9.5) return 'A+';
    else if (cgpa >= 9.0) return 'A';
    else if (cgpa >= 8.5) return 'B+'
    else if (cgpa >= 7.5) return 'B'
    else if (cgpa >= 7.0) return 'C+'
    else if (cgpa >= 6.5) return 'C';
    else if (cgpa >= 5.9) return 'D';
    else if (cgpa >= 5) return 'E';
    return 'Fail';
}


const urlParams = new URLSearchParams(window.location.search);
    const Name = urlParams.get('candidateName');
    const rollno = urlParams.get('rollNumber');
    const enrollno = urlParams.get('enrollmentNumber');
    const subjects = urlParams.get('subjects').split(',');
    const examMonthYear = urlParams.get('examMonthYear');
    const subno = urlParams.get('numSubjects');

    document.getElementById('displayname').textContent = Name;
    document.getElementById('displayrollno').textContent = rollno;
    document.getElementById('displayempno').textContent = enrollno;
    document.getElementById('displayyear').textContent = examMonthYear;
    document.getElementById('displaysubno').textContent = subno;

    let totalMarks = 0;
    let tableBody = '';
    subjects.forEach(subject => {
        const [code, name, theory, practical] = subject.split(':');
        const total = parseInt(theory) + parseInt(practical);
        totalMarks += total;
        tableBody += `
            <tr>
                <td>${code}</td>
                <td>${name}</td>
                <td>100</td>
                <td>${theory}</td>
                <td>${practical}</td>
                <td>${total}</td>
                <td>${Words()}</td>
            </tr>
        `;
    });
    document.getElementById('subjectsTableBody').innerHTML = tableBody;
    document.getElementById('grandTotal').textContent = totalMarks;
    document.getElementById('grandTotalWords').textContent = Words();

    const percentage = percent(totalMarks, subno);
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    document.getElementById('passFail').textContent = percentage >= 50 ? 'PASS' : 'FAIL';

    const cgpa = cgpacal(percentage);
    document.getElementById('cgpa').textContent = cgpa;
    document.getElementById('grade').textContent = grades(cgpa);

    const currentDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').textContent = `Date: ${currentDate}`;



