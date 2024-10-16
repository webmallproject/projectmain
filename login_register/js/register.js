// <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
function daumPostCode() {
  new daum.Postcode({
    oncomplete: function(data) {
        
        var roadAddr = data.roadAddress; //도로명 주소 변수

        document.getElementById('zonecode').value = data.zonecode;
        document.getElementById('roadAddress').value = roadAddr;
        
    }
}).open();
}