'use server';
/**
 * @fileoverview A simple chatbot flow that uses Genkit to generate responses.
 *
 * This file defines a Genkit flow that takes a chat history and a new message
 * as input, and returns a response from the language model.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { ChatbotInputSchema, ChatbotOutputSchema, type ChatbotInput, type ChatbotOutput } from './chatbot-types';

/**
 * The main function that gets called from the client.
 * It invokes the Genkit flow to get a response from the chatbot.
 * @param input The user's message and the chat history.
 * @returns The chatbot's response.
 */
export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  const llmResponse = await chatbotFlow(input);
  return llmResponse;
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const { history, message } = input;

    const response = await ai.generate({
      history: history,
      prompt: message,
    });

    return response.text;
  }
);
