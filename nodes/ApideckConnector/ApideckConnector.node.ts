import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { connectorsDescription } from './resources/connectors';
import { connectorDocsDescription } from './resources/connector-docs';
import { apIsDescription } from './resources/ap-is';
import { connectorResourcesDescription } from './resources/connector-resources';
import { apiResourcesDescription } from './resources/api-resources';

export class ApideckConnector implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apideck Connector',
		name: 'N8nDevApideckConnector',
		icon: { light: 'file:./apideck-connector.png', dark: 'file:./apideck-connector.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Connector API documentation.',
		defaults: { name: 'Apideck Connector' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApideckConnectorApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Connectors",
					"value": "Connectors",
					"description": ""
				},
				{
					"name": "Connector Docs",
					"value": "Connector Docs",
					"description": ""
				},
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				},
				{
					"name": "Connector Resources",
					"value": "Connector Resources",
					"description": ""
				},
				{
					"name": "API Resources",
					"value": "API Resources",
					"description": ""
				}
			],
			"default": ""
		},
		...connectorsDescription,
		...connectorDocsDescription,
		...apIsDescription,
		...connectorResourcesDescription,
		...apiResourcesDescription
		],
	};
}
