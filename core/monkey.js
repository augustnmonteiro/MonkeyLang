var core = {},
	keys = {
		"limpar": "COMMAND",
		"planeta": "CLASS",
		"novo": "CONSTRUCT",
	},
	objects = {},
	memory = {},
	buffer = [],
	operators = {
		"+": "SUM",
		"=": "EQUAL",
		"-": "MINUS",
		"/": "DIVIDE",
		"*": "MULTIPLY",
		".": "SET"
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
	lexer.prototype.isNumber = function(item){
		if(!isNaN(parseFloat(item)) && isFinite(item)){
			return true;
		}
	}
	lexer.prototype.undestandCode = function(item, i){
		if(this.isNull(item)){
			//nothing to do
		}else if(this.isKey(item)){
			buffer.push({"KEY": item});
		}else if(this.isOperator(item)){
			buffer.push({"OPERATOR": item});
		}else if(this.isLogical(item)){
			buffer.push({"LOGICAL": item});
		}else if(this.isNumber(item)){
			buffer.push({"NUMBER": item});
		}else{
			buffer.push({"OTHER": item});
		}
	}
	exports.lexer = new lexer();
})(core);

(function(exports){
	function parser(){

	}
	parser.prototype.buffer = function(){
		for(var i=0, len=buffer.length; i<len; i++){
			var obj_key = Object.keys(buffer[i]);
			if(obj_key == "OTHER"){
				if(Object.keys(buffer[i + 1]) == "OPERATOR"){
					if(Object.keys(buffer[i + 2]) == "CONSTRUCT"){

					}else if(Object.keys(buffer[i + 2]) == "NUMBER"){

					}else{
						//Syntax err
					}
				}else{
					//Syntax err
				}
			}
		}
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
	core.parser.buffer();
}