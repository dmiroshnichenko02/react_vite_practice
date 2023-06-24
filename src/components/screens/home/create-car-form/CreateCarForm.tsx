import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";
import { CarService } from "../../../../services/car.service";
import ErrorMessage from "./ErrorMessage";
import useCreateCar from "./useCreateCar";
import { ICarData } from "../../../../types/car.interface";

const CreateCarForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarData>({ mode: "onChange" });

    const { createCar } = useCreateCar(reset);

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
            />
            <ErrorMessage errors={errors?.name?.message} />
            <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
            />
            <input
                type="text"
                {...register("image", { required: true })}
                placeholder="Image"
            />

            <button className="btn">Create</button>
        </form>
    );
};

export default CreateCarForm;
