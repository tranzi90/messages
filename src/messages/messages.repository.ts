import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');

    return JSON.parse(content);
  }

  async create(content: string) {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    const id = Math.floor(Math.random() * 999)

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}