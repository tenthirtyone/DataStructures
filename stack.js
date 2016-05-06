var Stack = function() {
	return {
	top: null,
	pop: function() {
		return data.pop();
	},
	push: function(value) {
		if (this.top === null) {
			console.log('Top is null')
			this.top = getNode(value)
			return;
		}
		var temp = this.top;
		var newTop = getNode(value);
		newTop.next = this.top;
		this.top = newTop;

	},
	toString: function() {
		var temp = this.top;
		console.log(temp)
		
	}
	}
}

var getNode = function(value) {
	return {
		value: value || null,
		next: null
	}
}

module.exports = {
	Stack: Stack
}