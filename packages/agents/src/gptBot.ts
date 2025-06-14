import { chatWithGPT } from '@aio/core/openaiClient';

export class Bot {
  name: string;
  context: string[];

  constructor(name: string) {
    this.name = name;
    this.context = [];
  }

  async respond(input: string): Promise<string> {
    this.context.push(`User: ${input}`);
    const prompt = this.context.join('\n');
    const response = await chatWithGPT(prompt);
    this.context.push(`${this.name}: ${response}`);
    return response;
  }
}
