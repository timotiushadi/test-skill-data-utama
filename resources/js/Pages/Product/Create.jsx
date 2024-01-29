import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("product.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Product" />
            <h1 className="text-xl">Insert a Product</h1>
            <hr className=" mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                {/* Name of Movie */}
                <InputLabel 
                    forInput="name" 
                    value="Name" 
                />
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter the name of the product"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                />
                <InputError message={errors.name} className="mt-2" />
                {/* Price */}
                <InputLabel
                    forInput="price"
                    value="Price"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Price of the product"
                    handleChange={handleOnChange}
                    variant="primary-outline"
                />
                <InputError message={errors.price} className="mt-2" />
                {/* Stock */}
                <InputLabel
                    forInput="stock"
                    value="Stock"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="stock"
                    placeholder="Enter the stock of the product"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                />
                <InputError message={errors.stock} className="mt-2" />
                {/* Description */}
                <InputLabel forInput="description" value="Description" className="mt-4"/>
                <Input
                    type="text"
                    name="description"
                    placeholder="Enter the description of the product"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                />
                <InputError message={errors.description} className="mt-2" />
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
