const buildModal = ({
		type,
		containerStyle,
		content,
		confirmText,
		cancelText,
	}) => {
	const overlay = `<div id="overlay" style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:10;background:rgba(50,50,50,0.9);"></div>`
	const inlineStyle="width:300px;height:200px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#eee;z-index:100;"
	const buttons = type === 'confirm'
		? `<button id="confirm">${confirmText}</button><button id="cancel">${cancelText}</button>`
		: `<button id="confirm">${confirmText}</button>`

	const modal = `<section class=${containerStyle} style=${inlineStyle}>
			<div>${content}</div>
			<div>${buttons }</div>
		</section>${overlay}`

	return modal
}

class Modal {
	constructor({
		type,
		containerStyle,
		content,
		confirm = {},
		close = {},
		cancel = {},
	}) {
		this.modalDiv = document.createElement('div')

		this.modalDiv.innerHTML = buildModal({
			type,
			containerStyle,
			content,
			confirmText: confirm.text,
			closeText: close.text,
			cancelText: cancel.text,
		})

		this.confirmAction = confirm.action
		this.closeAction = close.action
		this.cancelAction = cancel.action
		
		this.show()
	}

	show() {
		this.modalDiv.querySelector('#overlay').addEventListener('click', () => this.close())
		this.modalDiv.querySelector('#confirm').addEventListener('click', () => this.confirm())

		const cancelButtion = this.modalDiv.querySelector('#cancel')

		if(cancelButtion) {
			cancelButtion.addEventListener('click', () => this.cancel())
		}

		document.body.append(this.modalDiv)
	}

	close() {
		this.closeAction()
		this.modalDiv.remove()
	}

	confirm() {
		this.confirmAction()
		this.close()
	}

	cancel() {
		this.cancelAction()
		this.close()
	}
}