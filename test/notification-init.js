var notifier = new Notifier({
        info: 'information-blue-circle.png',
        warning: 'exclamation-red-circle.png',
        ok: 'correct-valid-properties-green-circle.png'
    });
$(window).click(function(){
    notifier.checkPermission();
});

QUnit.done = function(failures, total) {
    if (!failures) {
        notifier.ok('Great!', 'All the ' + total + ' tests passed!');
    }
    else {
        notifier.warning('Oops...', failures + '/' + total + ' tests failed...');
    }
};
