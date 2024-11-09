import Reveal from './reveal.js';

// 创建全局 Reveal 实例
let deck = null;

// 初始化函数
export function initialize(options = {}) {
	// 确保只创建一个实例
	if (!deck) {
		deck = new Reveal(document.querySelector('.reveal'), options);
	}
	return deck.initialize();
}

// 导出 Reveal 实例供其他模块使用
export default Reveal;