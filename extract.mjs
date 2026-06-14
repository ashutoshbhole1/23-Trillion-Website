import mammoth from 'mammoth';

async function extract() {
    try {
        const result = await mammoth.extractRawText({ path: 'Copy of 23 Trillion Website Content .docx' });
        console.log(result.value);
    } catch (e) {
        console.error(e);
    }
}
extract();
