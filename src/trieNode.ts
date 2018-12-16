class TrieNode {

	// TODO: Value should be an interface or an object
	public value: string;
	public isEndOfWord: boolean;
	private children: TrieNode[] = [];

	constructor(value: string) {
		this.value = value;
		this.isEndOfWord = false;
	}

	getNode(value: string): TrieNode {
		if (this.children != null) {
			for (let node of this.children) {
				if (node.getValue() === value) {
					return node;
				}
			}
		}
		return undefined;
	}

	getValue() {
		return this.value;
	}

	setEndOfWord(isEnd: boolean) {
		this.isEndOfWord = isEnd;
	}

	addNode(value: string): TrieNode {
		var node = new TrieNode(value);
		this.children.push(node);
		return node;
	}
}