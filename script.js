document.addEventListener('DOMContentLoaded', function() {
    const contentA = document.getElementById('contentA');
    const contentB = document.getElementById('contentB');
    
    // 초기값으로 콘텐트A를 표시하고 콘텐트B를 숨깁니다.
    contentA.style.display = 'block';
    contentB.style.display = 'none';

    // 체크박스 변경 이벤트 리스너 등록
    document.getElementById('check').addEventListener('change',whenclick );
});

function whenclick() {
    const contentA = document.getElementById('contentA');
    const contentB = document.getElementById('contentB');
    const checkBox = document.getElementById('check');
    
    if (checkBox.checked) {
        contentA.style.display = 'none';
        contentB.style.display = 'block';
    } else {
        contentA.style.display = 'block';
        contentB.style.display = 'none';
    }
}