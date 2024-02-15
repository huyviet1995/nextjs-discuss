'use server';

import { z } from 'zod';

import type { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import paths from '@/paths';

const createTopicSchema = z.object({
    name: z.string().min(3).max(255).regex(/[a-z-]/, { message: 'Must be lowercase and contain a-z characters, or dots without spaces' }),
    description: z.string().min(3).max(255)
})

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {

    await new Promise(resolve => setTimeout(resolve, 2500));

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const result = createTopicSchema.safeParse({ name, description });

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        return {
            errors
        }
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
            }
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['Something went wrong']
                }
            }
        }
    }

    revalidatePath('/');
    redirect(paths.topicShow(topic.slug));

    return {
        errors: {}
    }
}