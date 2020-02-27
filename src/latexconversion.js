export default class LatexConversion {

	get( editorstring ) {

		var result = { success: null, content: null };
	
		try {
			var editorhtml      = new DOMParser().parseFromString( editorstring, 'text/html' ).documentElement;
			var latexelements   = editorhtml.getElementsByTagName( 'code.language-latex' );
	
			for (var i = latexelements.length - 1; i >= 0 ; i-- ) {
				latexelements[ i ].split( '&nbsp;' ).join( ' ' );
				latexelements[ i ].split( '<br>' ).join( '\n' );
				latexelements[ i ].innerHTML = latexelements[ i ].innerText;
			}
	
			editorstring = editorhtml.getElementsByTagName( 'body' )[ 0 ].innerHTML;
	
			result = { success: 1, content: editorstring };
	
		} catch ( error ) {
			result = { success: 0, content: error };
		}
	
		return result;
	}
	
	set( editorstring ) {
		return editorstring;
	}
}