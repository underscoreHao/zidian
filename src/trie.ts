class Trie {
	rootNode: TrieNode;

	constructor() {
		this.rootNode = new TrieNode('');
	}

	public insert(key: string) {
		var currentNode: TrieNode = this.rootNode;

		if (key != null) {
			if (key.length === 0) {
				currentNode.setEndOfWord(true);
			}

			for (let i = 0, j = key.length; i < j; i++) {
				var childNode = currentNode.getNode(key[i]);

				if (childNode != null) {
					currentNode = childNode;
				} else {
					currentNode = currentNode.addNode(key[i]);
				}

				if (i == j - 1) {
					if (!currentNode.isEndOfWord) {
						currentNode.setEndOfWord(true);
					}
				}
			}
		} else {
			console.log('No key to add');
		}
	}

	public search(key: string) {
		var currentNode: TrieNode = this.rootNode;
		for (let i = 0, j = key.length; i < j; i++) {
			if (currentNode.getNode(key[i]) == undefined) {
				return false;
			} else {
				currentNode = currentNode.getNode(key[i]);
			}
		}

		if (currentNode.isEndOfWord) {
			return true;
		} else {
			return false;
		}
	}
}