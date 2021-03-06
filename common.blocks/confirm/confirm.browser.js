modules.define('confirm', ['i-bem__dom', 'vow'], function(provide, BEMDOM, vow) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function(){
                this._promise = new vow.defer();
            }
        }
    },

    destroy : function(){
        this.nextTick(function(){
            BEMDOM.destruct(this.domElem);
        }, this);
    },

    getPromise : function(){
        return this._promise.promise();
    },

    confirm : function(){
        this.emit('yes');
        this.destroy();
        return this._promise.resolve();
    },

    cancel : function(){
        this.emit('no');
        this.destroy();
        return this._promise.reject();
    },

    _onButtonClick : function(e){
        var target = e.target,
            yes = this.findElem(target.domElem, 'yes');
        if(yes.length){
            this.confirm();
        } else {
            var no = this.findElem(target.domElem, 'no');
            if(no.length) {
                this.cancel();
            }
        }
    }

}, {
    live : function(){
        this.liveInitOnBlockInsideEvent('click', 'button', this.prototype._onButtonClick);
        return false;
    }
}));

});
