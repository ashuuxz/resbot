const fs = require('fs').promises;
const path = './database/slr.json';

async function addSlr(id_grup, status, message) {
    try {
        let data = {};
        try {
            const fileContent = await fs.readFile(path, 'utf-8');
            data = JSON.parse(fileContent);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }
        data[id_grup] = { status, message };

        await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Terjadi kesalahan saat menyimpan data:', error);
    }
}

async function SLRcheckMessage(id_grup) {
    try {
        const fileContent = await fs.readFile(path, 'utf-8');
        const data = JSON.parse(fileContent);

        if (data[id_grup] && data[id_grup].status === true) {
            return data[id_grup].message;
        }
        return null;
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error('Terjadi kesalahan saat membaca data:', error);
        }
        return null;
    }
}

module.exports = {
    addSlr,
    SLRcheckMessage
};
