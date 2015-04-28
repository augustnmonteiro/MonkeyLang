var core = {},
	keys = {
		"limpar": "COMMAND",
		"planeta": "CLASS",
		"novo": "CONSTRUCT",
	},
	objects = {},
	memory = {},
	operators = {
		"+": "SUM",
		"=": "EQUAL",
		"-": "MINUS",
		"/": "DIVIDE",
		"*": "MULTIPLY"
	},
	logical = {
		"e": "AND",
		"ou": "OR"
	};

(function(exports){
	var code;
	function lexer(){
		
	}
	lexer.prototype.setCode = function(code){
		this.code = code;
	}
	lexer.prototype.line = function(){
		this.code = code;
	}
	lexer.prototype.isKey = function(){
		
	}
	lexer.prototype.isOperator = function(){
		
	}
	lexer.prototype.isLogical = function(){
		
	}
	lexer.prototype.undestandCode = function(){
		
	}

	exports.lexer = new lexer();
})(core);

(function(exports){
	function parser(){

	}

	exports.parser = new parser();
})(core);

(function(exports){
	function interpreter(){

	}

	exports.interpreter = new interpreter();
})(core);

window.onload = function(){
	//core.lexer.setCode("");
	//core.lexer.undestandCode();
}