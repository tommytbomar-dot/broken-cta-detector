const test = require('node:test'); const assert = require('node:assert'); const { analyze } = require('../detector.js');
test('flags dead link and bad tel', () => {
  const r = analyze([{ tag: 'a', text: 'Call Now', href: '#', top: 100, width: 100, height: 48 }, { tag: 'a', text: 'Call us', href: 'tel:abc', top: 120, width: 100, height: 48 }]);
  assert.equal(r.ok, false); assert.ok(r.issues.filter(i => i.sev === 'high').length >= 2);
});
test('healthy page is ok', () => {
  const r = analyze([{ tag: 'a', text: 'Call Now', href: 'tel:+15555550100', top: 100, width: 120, height: 48 }, { tag: 'a', text: 'Get a free quote', href: '/quote', top: 200, width: 120, height: 48 }]);
  assert.equal(r.ok, true); assert.equal(r.issues.length, 0);
});
test('no CTA is high', () => { assert.equal(analyze([{ tag: 'a', text: 'About', href: '/about' }]).ok, false); });
test('disabled and tiny', () => {
  const r = analyze([{ tag: 'button', text: 'Book now', disabled: true, width: 20, height: 20, top: 10 }]);
  assert.ok(r.issues.some(i => /disabled/.test(i.msg))); assert.ok(r.issues.some(i => /small/.test(i.msg)));
});
