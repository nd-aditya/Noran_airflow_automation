class TrieNode {
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;
  tableIds: number[];

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.tableIds = [];
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, tableId: number) {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.tableIds.push(tableId);
  }

  search(prefix: string): number[] {
    let node = this.root;
    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this.collectAllTableIds(node);
  }

  private collectAllTableIds(node: TrieNode): number[] {
    let tableIds = [...node.tableIds];
    for (const child in node.children) {
      tableIds = tableIds.concat(this.collectAllTableIds(node.children[child]));
    }
    return tableIds;
  }
}
