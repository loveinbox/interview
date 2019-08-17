const { expect } = require('chai')

function EventBus() {
	this.on = () => {}
	this.off = () => {}
	this.emit = () => {}
}

describe('feature test', function() {
	const eventBus = new EventBus()

	const show1 = str => 'show1'
	const show2 = str => 'show2'
	eventBus.on('show', show1)
	eventBus.on('show', show2)
	eventBus.on('hide', () => 'hide')

  it('should return show1 and show2 when emitted show', function() {
    expect(eventBus.emit('show')).to.equal('show1show2');
  });

  it('should return hide when emitted hide', function() {
    expect(eventBus.emit('hide')).to.equal('hide');
  });

  eventBus.off('show', show2)

  it('should return show1 when emitted show after show2 offed', function() {
    expect(eventBus.emit('show')).to.equal('show1');
  });
});

// TODO sender
// TODO data

