import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/homeproduct.css';

function HomeProduct() {
    const { register, handleSubmit } = useForm();

    const send = async (data) => {
        try {
            const response = await axios.post("https://botiga-kvf9.onrender.com/contact/createContact",data, 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <input
                    type="text"
                    placeholder="Enter your names"
                    {...register("names", { required: true })}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                /><br/>
                <textarea
                    placeholder="Leave your comment"
                    {...register("message", { required: true })}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HomeProduct;
