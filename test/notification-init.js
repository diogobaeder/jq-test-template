var notifier = new Notifier({
        info: 'information-blue-circle.png',
        warning: 'exclamation-red-circle.png',
        ok: 'correct-valid-properties-green-circle.png'
    }),
    $window = $(window);
$window.click(function(){
    notifier.checkPermission();
});
