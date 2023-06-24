import { FC } from "react";

const ErrorMessage: FC<{ errors?: string }> = ({ errors }) => {
    if (!errors) return null;
    return <p>Name is no valid</p>;
};

export default ErrorMessage;
