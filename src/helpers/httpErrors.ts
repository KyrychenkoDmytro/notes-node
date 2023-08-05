const messagesList: { [key: number]: string } = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
};

class HttpError extends Error {
    public status: number;

    constructor(status: number, message: string = messagesList[status]) {
        super(message);
        this.status = status;
    }
}

export default HttpError;