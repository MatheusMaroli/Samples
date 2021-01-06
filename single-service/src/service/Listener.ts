export default function Listener() {
	const subscribles = [];

	return {
		emit: (param) => {
			this.subscribles.map((fn) => fn.call(param));
		},
		subscribe: (fn) => {
			this.subscribles.push(fn);
		}
    }
}