modules.define('button', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'progress', modVal : 'elastic' }, {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);
                this._initWidth = this.domElem.width();
                this.domElem.css('width', this._initWidth); // circle
                this._path = this.elem('loader-path')[0];
            }
        },
        'process' : {
            'started' : function(){
                this.__base.apply(this, arguments);
                this.domElem.css('width', this.domElem.height()); // circle

                this._path._len = this._path.getTotalLength();
                this._path.style.strokeDasharray = this._path._len;
                this._draw(0);
            },
            '' : function(){
                this.__base.apply(this, arguments);
                this.domElem.css('width', this._initWidth); // circle
            }
        }
    },

    setProgress : function(percents){
        this._draw(percents / 100);
    },

    _draw : function(val){
        var len = this._path._len;
        this._path.style.strokeDashoffset = len * (1 - val);
    }
}));

});
