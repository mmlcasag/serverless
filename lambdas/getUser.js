
const responses = require('./responses');

exports.handler = async event => {
    console.log('event: ', event);

    if (!event.pathParameters || !event.pathParameters.id) {
        const response = { message: 'missing ID path parameter' };
        return responses._400(response);
    }

    const id = event.pathParameters.id;

    if (!data[id]) {
        const response = { message: 'ID not found' };
        return responses._404(response);
    }

    return responses._200(data[id]);
}

const data = {
    1234: { name: 'Anna Jones', age: 25, job: 'Journalist' },
    7893: { name: 'Chris Smith', age: 52, job: 'Teacher' },
    5132: { name: 'Tom Hague', age: 23, job: 'Plasterer' },
}
