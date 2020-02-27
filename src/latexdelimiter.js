import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class LatexDelimiter extends Plugin {

	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'action1', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: '\\(..',
				tooltip: true,
				withText: true
			} );

			view.on( 'execute', () => {
				editor.model.change( writer => {
					var start = editor.model.document.selection.getFirstPosition();
					var end = editor.model.document.selection.getLastPosition();
					writer.insertText( '\\)', end );
					writer.insertText( '\\(', start );
				} );
			} );
			return view;
		} );

		editor.ui.componentFactory.add( 'action2', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: '\\[..',
				tooltip: true,
				withText: true
			} );

			view.on( 'execute', () => {
				editor.model.change( writer => {
					var start = editor.model.document.selection.getFirstPosition();
					var end = editor.model.document.selection.getLastPosition();
					writer.insertText( '\\]', end );
					writer.insertText( '\\[', start );
				} );
			} );
			return view;
		} );
	}
}
