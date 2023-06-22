class Error extends CustomError {
    constructor(message,statuscode) {
        super(message);
        this.statuscode=statuscode;
    }

}

export default CustomError;