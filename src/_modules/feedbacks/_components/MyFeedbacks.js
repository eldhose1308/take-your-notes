import React, { useState } from "react";

import { Button, Checkbox, TextArea } from "_components/Form";

import useForm from "_hooks/useForm";
import { FeedbackFormSchema } from "../_utils/validation-rules";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { useToast } from "_contexts/ToastProvider";

import * as feedbacks from "_services/feedbacks.service";

const MyFeedbacks = () => {
    const { register, submit, errors, isSubmitting } = useForm({ schema: FeedbackFormSchema });
    const [feedbackType, setFeedbackType] = useState('complaint');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const { toast } = useToast()

    const handleSave = async (formData) => {
        const { feedback } = formData;
        const feedbackPayload = {
            feedback,
            feedback_type: feedbackType,
            is_anonymous: isAnonymous
        };

        try {
            const feedbackResponse = await feedbacks.saveFeedback(feedbackPayload);
            toast({
                heading: 'Feedback submitted successfully!',
                description: 'Reply will be updated in your feedbacks list!',
                options: { position: 'top-right' }
            }).success()
        } catch (error) {
            const { message } = error;
            toast({
                heading: 'Oops! There was an error submitting your feedback.',
                description: message,
                options: { position: 'top-right' }
            }).error()
        }
    }

    const handleFeedbackTypeChange = (id) => {
        setFeedbackType(id);
    }

    const handleAnonymousChange = (anonymousFlag) => {
        setIsAnonymous(anonymousFlag);
    }

    return (
        <div className="text-default m-5">
            <h1>Feedback List</h1>

            <div className="flex flex-col">
                

            </div>
        </div>
    );
}

export default MyFeedbacks;