function calculateBirthdays() {
    const name = document.getElementById('nameInput').value;
    const birthday = document.getElementById('birthdayInput').value;
    
    if (!name || !birthday) {
        document.getElementById('result').innerText = "名前と生年月日を入力してください";
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>${name}さんの誕生日の曜日</h3>`;
    
    const weekdays = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
    const birthDate = new Date(birthday);
    
    for (let age = 0; age <= 80; age++) {
        const year = birthDate.getFullYear() + age;
        const month = birthDate.getMonth();
        const date = birthDate.getDate();
        const newDate = new Date(year, month, date);
        const weekday = weekdays[newDate.getDay()];
        resultDiv.innerHTML += `<p>${age + 1}歳: ${year}年${month + 1}月${date}日 (${weekday})</p>`;
    }
}
