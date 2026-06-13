import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckConnectorApi implements ICredentialType {
        name = 'N8nDevApideckConnectorApi';

        displayName = 'Apideck Connector API';

        icon: Icon = { light: 'file:../nodes/ApideckConnector/apideck-connector.png', dark: 'file:../nodes/ApideckConnector/apideck-connector.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://unify.apideck.com',
                        required: true,
                        placeholder: 'https://unify.apideck.com',
                        description: 'The base URL of your Apideck Connector API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
