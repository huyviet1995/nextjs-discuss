'use server';

import { z } from 'zod';

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
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const result = createTopicSchema.safeParse({ name, description });

    if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        return {
            errors
        }
    }

    return {
        errors: {}
    }
}