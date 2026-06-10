import type { INodeProperties } from 'n8n-workflow';

export const connectorDocsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					]
				}
			},
			"options": [
				{
					"name": "Connector Docs One",
					"value": "Connector Docs One",
					"action": "Get Connector Doc content",
					"description": "Get Connector Doc content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connector/connectors/{{$parameter[\"id\"]}}/docs/{{$parameter[\"doc_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connector/connectors/{id}/docs/{doc_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					],
					"operation": [
						"Connector Docs One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					],
					"operation": [
						"Connector Docs One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					],
					"operation": [
						"Connector Docs One"
					]
				}
			}
		},
		{
			"displayName": "Doc ID",
			"name": "doc_id",
			"required": true,
			"description": "ID of the Doc",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					],
					"operation": [
						"Connector Docs One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connector Docs"
					],
					"operation": [
						"Connector Docs One"
					]
				}
			}
		},
];
