(function(){
function noop(){}


window.Notifier = function(icons) {
    this._notifications = window.webkitNotifications;
    this.icons = {};
    
    this.icons.info = icons.info || "";
    this.icons.warning = icons.warning || "";
    this.icons.ok = icons.ok || "";
}

var dummyPrototype = {
    checkPermission: noop,
    info: noop,
    warning: noop,
    ok: noop
    
};

var webkitPrototype = {
    checkPermission: function(callback){
        if (this._notifications.checkPermission() !== 0) {
            this._notifications.requestPermission(callback || noop);
            return false;
        }
        return true;
    },
    info: function(title, body){
        return this.run(this.icons.info, title, body, this.info);
    },
    warning: function(title, body){
        return this.run(this.icons.warning, title, body, this.warning);
    },
    ok: function(title, body){
        return this.run(this.icons.ok, title, body, this.ok);
    },
    run: function(icon, title, body, callback) {
        if (
            !this.checkPermission(function(){callback(title, body)})
            ) return false;
        this._notifications.createNotification(icon, title, body).show();
        return true;
    }
    
};

if (window.webkitNotifications) {
    Notifier.prototype = webkitPrototype;
}
else {
    Notifier.prototype = dummyPrototype;
}



})();
