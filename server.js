import app from './app.js'
import { PORT } from './config.js'
import { connectDB } from './db.js'

async function main() {
  try {
    await connectDB()
    const HOST = '0.0.0.0';
    app.listen(PORT, HOST, () => {
      console.log(`App listening on http://${HOST}:${PORT}`);
    });
    
  } catch (error) {
    console.error(error)
  }
}

main()