import github from '../functions/github';
import readme from '../functions/readme';
import screenshot from '../functions/screenshot';

async function run() {
  await screenshot(); // Puppeter is async
  readme();
  github();
}

run()



