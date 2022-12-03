import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {

    if(event.httpMethod !== 'POST'){

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world Brandon',
                eventObj: event
            }),

        };
    }

    
};