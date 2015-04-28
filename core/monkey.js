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
	var code, words, buffer;
	function lexer(){
		
	}
	lexer.prototype.setCode = function(code){
		this.code = code;
	}
	lexer.prototype.word = function(){
		var c = this.code.split(" ");
		c.forEach(function(item, i){
			core.lexer.undestandCode(item, i);
		});
	}
	lexer.prototype.isKey = function(item){
		if(typeof keys[item] != "undefined"){
			return true;
		}
	}
	lexer.prototype.isNull = function(item){
		if(item == null || item == ""){
			return true;
		}
	}
	lexer.prototype.isOperator = function(item){
		if(typeof operators[item] != "undefined"){
			return true;
		}
	}
	lexer.prototype.isLogical = function(item){
		if(typeof logical[item] != "undefined"){
			return true;
		}
	}
	lexer.prototype.undestandCode = function(item, i){
		if(this.isNull(item)){
			console.log("Null");
		}else if(this.isKey(item)){
			console.log("Key");
		}else if(this.isOperator(item)){
			console.log("Operator");
		}else if(this.isLogical(item)){
			console.log("Logical");
		}else{
			console.log("Another");
		}
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
	core.lexer.setCode("venus = novo planeta");
	core.lexer.word();
	core.lexer.undestandCode();
}