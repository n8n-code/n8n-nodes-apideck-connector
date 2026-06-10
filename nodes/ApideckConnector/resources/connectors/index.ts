import type { INodeProperties } from 'n8n-workflow';

export const connectorsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					]
				}
			},
			"options": [
				{
					"name": "Connectors All",
					"value": "Connectors All",
					"action": "List Connectors",
					"description": "List Connectors",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connector/connectors"
						}
					}
				},
				{
					"name": "Connectors One",
					"value": "Connectors One",
					"action": "Get Connector",
					"description": "Get Connector",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connector/connectors/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connector/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					],
					"operation": [
						"Connectors All"
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
						"Connectors"
					],
					"operation": [
						"Connectors All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					],
					"operation": [
						"Connectors All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					],
					"operation": [
						"Connectors All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"unified_api\": \"file-storage\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					],
					"operation": [
						"Connectors All"
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
						"Connectors"
					],
					"operation": [
						"Connectors All"
					]
				}
			}
		},
		{
			"displayName": "GET /connector/connectors/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connectors"
					],
					"operation": [
						"Connectors One"
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
						"Connectors"
					],
					"operation": [
						"Connectors One"
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
						"Connectors"
					],
					"operation": [
						"Connectors One"
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
						"Connectors"
					],
					"operation": [
						"Connectors One"
					]
				}
			}
		},
];
