document.addEventListener('DOMContentLoaded', function() {
    const goschool = document.getElementById('goschool');
    const gohome = document.getElementById('gohome');
    
    // 초기값으로 콘텐트A를 표시하고 콘텐트B를 숨깁니다.
    goschool.style.display = 'block';
    gohome.style.display = 'none';

    // 체크박스 변경 이벤트 리스너 등록
    document.getElementById('check').addEventListener('change',whenclick );
});

function whenclick() {
    const goschool = document.getElementById('goschool');
    const gohome = document.getElementById('gohome');
    const checkBox = document.getElementById('check');
    
    if (checkBox.checked) {
        goschool.style.display = 'none';
        gohome.style.display = 'block';
    } else {
        goschool.style.display = 'block';
        gohome.style.display = 'none';
    }
}