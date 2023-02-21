import { commands, Range, TextDocument, TextEdit, window, workspace, WorkspaceEdit } from "vscode";

export const unfold = async () => {
    const { activeTextEditor } = window;
    const document = activeTextEditor?.document;
    if (!document) {
        return;
    }

    const transformedLines = transformLines(document);
    let newText;
    try {
        newText = JSON.stringify(transformedLines);
    } catch (error) {
        console.error('Error while stringify transformedLines', error);
        throw error;
    }

    const edit = new WorkspaceEdit();
    edit.set(document.uri, [
        TextEdit.replace(
            new Range(
                0,
                0,
                document.lineCount - 1,
                document.lineAt(document.lineCount - 1).text.length
            ),
            newText
        )
    ]);

    await workspace.applyEdit(edit);
    await commands.executeCommand('editor.action.formatDocument.multiple'); // ask user for preferred formatter
};

const transformLines = (document: TextDocument): string[] => {
    const lines = [];
    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i);
        if (line.isEmptyOrWhitespace) {
            continue;
        }

        try {
            lines.push(JSON.parse(line.text));
        } catch (error) {
            console.error(`Error while parsing line: ${line.text}`, error);
            throw error;
        }
    }

    return lines;
};
