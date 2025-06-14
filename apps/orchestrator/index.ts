import dotenv from 'dotenv';
import { Bot } from '@aio/agents';

dotenv.config();

async function main() {
  const bot1 = new Bot('Bot1');
  const bot2 = new Bot('Bot2');

  let message = "Olá, tudo bem?";

  for (let i = 0; i < 5; i++) {
    console.log(`Bot1 diz: ${message}`);
    const responseFromBot2 = await bot2.respond(message);

    console.log(`Bot2 responde: ${responseFromBot2}`);
    message = await bot1.respond(responseFromBot2);
  }
}

main().catch(console.error);
