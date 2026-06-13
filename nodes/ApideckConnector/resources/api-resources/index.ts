import type { INodeProperties } from 'n8n-workflow';

export const apiResourcesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Resources"
					]
				}
			},
			"options": [
				{
					"name": "API Resources One",
					"value": "API Resources One",
					"action": "Get API Resource",
					"description": "Get API Resource",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connector/apis/{{$parameter[\"id\"]}}/resources/{{$parameter[\"resource_id\"]}}"
						}
					}
				},
				{
					"name": "API Resource Coverage One",
					"value": "API Resource Coverage One",
					"action": "Get API Resource Coverage",
					"description": "Get API Resource Coverage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connector/apis/{{$parameter[\"id\"]}}/resources/{{$parameter[\"resource_id\"]}}/coverage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connector/apis/{id}/resources/{resource_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Resources"
					],
					"operation": [
						"API Resources One"
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
						"API Resources"
					],
					"operation": [
						"API Resources One"
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
						"API Resources"
					],
					"operation": [
						"API Resources One"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"required": true,
			"description": "ID of the resource you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Resources"
					],
					"operation": [
						"API Resources One"
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
						"API Resources"
					],
					"operation": [
						"API Resources One"
					]
				}
			}
		},
		{
			"displayName": "GET /connector/apis/{id}/resources/{resource_id}/coverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Resources"
					],
					"operation": [
						"API Resource Coverage One"
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
						"API Resources"
					],
					"operation": [
						"API Resource Coverage One"
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
						"API Resources"
					],
					"operation": [
						"API Resource Coverage One"
					]
				}
			}
		},
		{
			"displayName": "Resource ID",
			"name": "resource_id",
			"required": true,
			"description": "ID of the resource you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Resources"
					],
					"operation": [
						"API Resource Coverage One"
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
						"API Resources"
					],
					"operation": [
						"API Resource Coverage One"
					]
				}
			}
		},
];
