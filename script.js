const checkBox = document.getElementById('check');

checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = '';
    }
});
