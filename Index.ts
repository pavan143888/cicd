import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
    statusCode: number;
    body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
    const response: HelloResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: "This is for testing 136"
        })
    };

    callback(undefined, response);
};

export { hello }