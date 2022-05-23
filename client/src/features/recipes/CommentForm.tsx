import styled from "styled-components";
import React, { useState } from "react";
import { postComment } from "../../api";

const StyledCommentForm = styled.form`
    /* display: grid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 2/3;

    & input,
    textarea {
        border: black 2px solid;
        padding: 0.5rem;
        margin: 0.5rem;
    }
`;
interface CommentFormProps {
    recipeId: string;
    trigger: Function;
}

const CommentForm = ({ recipeId, trigger }: CommentFormProps) => {
    const [comment, setComment] = useState({
        commentBody: "",
        name: "",
        createdAt: new Date().toLocaleString(),
    });

    const [formToggle, setFormToggle] = useState(true);
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormToggle(false);
        await postComment(recipeId, comment);
        trigger();
    };
    return formToggle ? (
        <StyledCommentForm onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                required
                type="text"
                onChange={(e) =>
                    setComment({ ...comment, name: e.target.value })
                }
            />
            <label>Comment:</label>
            <textarea
                required
                onChange={(e) =>
                    setComment({ ...comment, commentBody: e.target.value })
                }
            />
            <button>Submit</button>
        </StyledCommentForm>
    ) : (
        <p>Tack för din kommentar!</p>
    );
};

export default CommentForm;
