const fs = require('fs');
const path = require('path');

test('Verifica que el HTML contiene el mensaje', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    expect(html).toContain('¡Hola Mundo desde PWD!');
});
