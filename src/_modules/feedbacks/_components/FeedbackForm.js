import React, { useState } from "react";

import { Button, Checkbox, TextArea } from "_components/Form";

import useForm from "_hooks/useForm";
import { FeedbackFormSchema } from "../_utils/validation-rules";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { useToast } from "_contexts/ToastProvider";

import * as feedbacks from "_services/feedbacks.service";
import FeedbackTypeSelector from "./FeedbackTypeSelector";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import FeedbackUnAuthorised from "_components/DisplayStates/Error/FeedbackUnAuthorised";

const FeedbackForm = () => {
    const { register, submit, errors, isSubmitting } = useForm({ schema: FeedbackFormSchema });
    const [feedbackType, setFeedbackType] = useState('complaint');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const { toast } = useToast()

    const { userName } = getUserDetailsOfCurrentUser();

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

    const handleFeedbackTypeChange = (queryMap, id) => {
        setFeedbackType(id);
    }

    const handleAnonymousChange = (anonymousFlag) => {
        setIsAnonymous(anonymousFlag);
    }

    if(!userName){
        return (
            <FeedbackUnAuthorised />
        )
    }

    return (
            <div className="flex flex-col">
                <div className="flex my-4 mx-2 text-xs">
                    <FeedbackTypeSelector selectedValue={feedbackType} onChange={handleFeedbackTypeChange} />
                    {/* <ModeSelector
                        modes={
                            [
                                { id: 'complaint', label: 'Complaint', modeElement: 'Complaint' },
                                { id: 'suggestion', label: 'Suggestion', modeElement: 'Suggestion' },
                                { id: 'enquiry', label: 'Enquiry', modeElement: 'Enquiry' },
                            ]
                        }
                        selectedValue={feedbackType}
                        onChange={handleFeedbackTypeChange}
                    /> */}
                </div>

                <div className="my-3">
                    <TextArea
                        labelName='Feedback'
                        placeHolder="Tell us what prompted you to give feedback"
                        validationMsg={errors.feedback}
                        {...register('feedback')}
                    />
                </div>

                <div className="my-3">
                    <Checkbox 
                        labelName='Post Anonymously'
                        onChange={handleAnonymousChange}
                    />
                </div>

                <div className="my-3">
                    <Button size='xs' width='none' variant='accent' className='mx-2' disabled={isSubmitting} onClick={submit(handleSave)}>
                        Send Feedback
                    </Button>
                </div>

            </div>
    );
}

export default FeedbackForm;