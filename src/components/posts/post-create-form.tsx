'use client';
import { useFormState } from "react-dom";
import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';
import FormButton from "@/components/common/form-button";

export default function PostCreateForm() {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form>
                    
                </form>
            </PopoverContent>
        </Popover>
    )
}