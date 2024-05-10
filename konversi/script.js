function resizeImage() {
    const input = document.getElementById('imgInput');
    const img = document.getElementById('previewImage');

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const image = new Image();
        image.src = e.target.result;

        image.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Resize image to 300x300
            canvas.width = 300;
            canvas.height = 300;
            ctx.drawImage(image, 0, 0, 300, 300);

            // Convert canvas to data URL
            const resizedDataUrl = canvas.toDataURL('image/jpeg');
            img.src = resizedDataUrl;
        }
    }

    reader.readAsDataURL(file);
}

function compressAudio() {
    const input = document.getElementById('audioInput');
    const audio = document.getElementById('previewAudio');

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContext.decodeAudioData(e.target.result, function(decodedData) {
            // Compress audio (dummy implementation)
            const compressedData = decodedData; // Dummy compression, just use original data
            const compressedBlob = new Blob([compressedData], { type: 'audio/mp3' });
            audio.src = URL.createObjectURL(compressedBlob);
        });
    }

    reader.readAsArrayBuffer(file);
}
