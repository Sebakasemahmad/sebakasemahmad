$(document).ready(function(){
    generateCaptcha();

    $('#reloadCaptcha').on('click', function() {
        generateCaptcha();
    });

    $('#propertyForm').on('submit', function(event) {
        event.preventDefault();
        let nationalID = $('#nationalID').val();
        let mobileNumber = $('#mobileNumber').val();
        
        if (!/^\d{11}$/.test(nationalID)) {
            alert("الرقم الوطني غير صحيح");
            return;
        }
        
        if (mobileNumber && !/^09\d{8}$/.test(mobileNumber)) {
            alert("رقم الموبايل غير صحيح، يجب أن يكون على الصيغة (09########)");
            return;
        }
        
        if ($('#captcha').val() != $('#captchaImage').data('captchaCode')) {
            alert("رمز التحقق غير صحيح");
            return;
        }
        
        alert("تم الإرسال بنجاح");
    });
});

function toggleDetails(button) {
    $(button).closest('tr').next('.details').toggle();
}

function generateCaptcha() {
    let captchaCode = Math.floor(1000 + Math.random() * 9000);
    $('#captchaImage').attr('src', `https://dummyimage.com/100x50/000/fff&text=${captchaCode}`);
    $('#captchaImage').data('captchaCode', captchaCode);
}

