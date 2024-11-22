const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
    await imagemin(['src/public/images/*.{jpg,png,gif,svg}'], {
        destination: 'dist/images',
        plugins: [
            imageminMozjpeg({ quality: 50 }),
            imageminPngquant({
                quality: [0.3, 0.5]
            }),
            imageminGifsicle(),
            imageminSvgo()
        ]
    });

    console.log('Images optimized successfully!');
})();