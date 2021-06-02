import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class BackgroundColorPlugin extends Plugin {

    onload() {
        this.addCommand({
			id: 'add-focused-writing-background-color',
			name: 'Add background color to editor for a focused writing session',
			 callback: () => {
			 	var focusedBackground = document.createElement('style');
                focusedBackground.id = 'focused-writing-style';
                focusedBackground.innerText = ".markdown-source-view { background-color: #005cb8 !important; } \n .CodeMirror-gutters { display:none; }";
                document.getElementsByTagName("head")[0].appendChild(focusedBackground);
			 }
        });

        this.addCommand({
			id: 'remove-focused-writing-background-color',
			name: 'Remove focused writing session background color',
			 callback: () => {
                document.getElementById('focused-writing-style').remove();
			 }
        })
    }};