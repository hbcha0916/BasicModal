var basicModal = {
    modalParentTag: null,
    messageTitle: null,
    message: null,
    okCallbacks: null,
    cancelCallbacks: null,
    init: function(modalParentTag, messageTitle, message, okCallbacks, cancleCallbacks=null){
        this.modalParentTag = modalParentTag;
        this.messageTitle = messageTitle;
        this.message = message;
        this.okCallbacks = okCallbacks;
        this.cancelCallbacks = cancleCallbacks;
    },
    alert: function(){
        var self = this;
        $(self.modalParentTag+" #modal-title").html(self.messageTitle);
        $(self.modalParentTag+" #modal-body-text").html(self.message);
        $(self.modalParentTag+" #modalAlert").modal('show');


        $(self.modalParentTag+" #modalBtnOK").off().on('click', function(){
            // event.preventDefault();
            $(self.modalParentTag+" #modalAlert").modal('hide');
            for(var i=0;i<self.okCallbacks.length; i++)
                self.okCallbacks[i]();
        })
        $(self.modalParentTag+" #modalBtnCAN").off().on('click', function(){
            // event.preventDefault();
            $(self.modalParentTag+" #modalAlert").modal('hide');
            if(self.cancelCallbacks){
                for(var i=0;i<self.cancelCallbacks.length; i++)
                    self.cancelCallbacks[i]();
            }
        })
    }
}