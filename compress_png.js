var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;

input_path = 'assets/images/png/**/*.{png}';
output_path = 'assets/images/png/compressed/';

compress_images(input_path, output_path, 
  { compress_force: false, statistic: true, autoupdate: true }, false,
  { png: { engine: 'pngcrush', command: ['--quality=80-100'] } },
  function (error, completed, statistic) {
    console.log('------ PNG Compression -------');
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log('-------------------------------');
  });