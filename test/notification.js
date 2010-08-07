(function(){
function noop(){}


window.Notifier = function(options) {
    this._notifications = window.webkitNotifications;
    this._lastNotification = null;
    this._lastFileContents = {};
    this.icons = {};
    
    this.icons.info = options.info || "";
    this.icons.warning = options.warning || "";
    this.icons.ok = options.ok || "";
    
    this.delay = options.delay || 2000;
    this.files = options.files || [];
    
    this._interval = null;
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
        var that = this;
        
        if (
            !this.checkPermission(function(){callback(title, body)})
            ) return false;
        if (this._lastNotification) {
            this._close();
        }
        this._lastNotification = this._notifications.createNotification(icon, title, body);
        this._lastNotification.show();
        this._delayedRun();
        return true;
    },
    
    _checkForModification: function(){
        var that = this,
            i = this.files.length,
            file;
        if (!jQuery || !this.files.length) return;
        while (i--) (function(file){
            jQuery.ajax({
                cache: false,
                url: file,
                dataType: 'text',
                success: function(content) {
                    if (!that._lastFileContents[file]) {
                        that._lastFileContents[file] = content;
                    }
                    else if (that._lastFileContents[file] != content) {
                        that._close();
                        location.reload();
                    }
                }
            });
        })(this.files[i]);
    },
    
    _delayedRun: function(){
        var that = this;
        this._interval = setInterval(function(){
            that._checkForModification();
        }, this.delay);
    },
    
    _close: function() {
        if (this._lastNotification) this._lastNotification.cancel();
    },
    
    stop: function() {
        clearInterval(this._interval);
    }
    
};

if (window.webkitNotifications) {
    Notifier.prototype = webkitPrototype;
}
else {
    Notifier.prototype = dummyPrototype;
}



})();
