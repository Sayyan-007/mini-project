import { useState } from "react";
import toast from "react-hot-toast";

export const useClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text) => {
        try 
        {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            toast.success("Copied URL");
        } 
        catch (error) 
        {
            console.error(error);
            toast.error('Error Occured')
        }
    };

    return { copied, copyToClipboard };
};