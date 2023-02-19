import * as vscode from 'vscode';
import { unfold } from './unfold';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('splunk-unfold.unfold', () => {
		unfold().then(() => vscode.window.showInformationMessage('Unfolded Splunk logs'))
			.catch(() => vscode.window.showErrorMessage('An error occurred :('));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { /* no cleanup required */  };
