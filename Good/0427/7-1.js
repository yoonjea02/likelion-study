$(document).ready(function() {

    // 입력폼 제출 이벤트 커스텀
    $('#registerForm').submit(function(e) {
        // 기본 제출 막기
        e.preventDefault();

        // 입력값 읽기
        var name = $('#name').val().trim();
        var age = $('#age').val().trim();
        var address = $('#address').val().trim();

        // 입력값 검증
        if (name === "" || age === "" || address === "") {
            alert("모든 항목을 입력해주세요!");
            return;
        }

        if (isNaN(age) || age <= 0) {
            alert("나이는 숫자로 올바르게 입력해주세요!");
            return;
        }

        // 최종 확인
        if (!confirm("등록하시겠습니까?")) {
            return;
        }

        // 모든 체크 통과 → 폼 제출
        this.submit();
    });

    // 제이쿼리 버튼 이벤트
    $('#doButton').click(function() {
        var text = $('#inputText').val();
        if (text === "") {
            alert("값을 입력하세요!");
            return;
        }
        $('#result').text(text);
    });

    // 입력 완료 후 입력창 초기화하는 함수
    function resetForm() {
        $('#name').val('');
        $('#age').val('');
        $('#address').val('');
    }
});
