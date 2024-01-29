import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function Create({ auth, product }) {
    const { setData, data, processing, errors } = useForm({
        ...product,
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

        router.post(route("product.update", product.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update" />
            <h1 className="text-xl">Update Product: {product.name}</h1>
            <hr className=" mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                {/* Name of Product */}
                <InputLabel forInput="name" value="Name a Product" />
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter the name of the product"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                    defaultValue={product.name}
                />
                <InputError message={errors.name} className="mt-2" />
                {/* price */}
                <InputLabel
                    forInput="price"
                    value="Price"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Enter the price "
                    handleChange={handleOnChange}
                    variant="primary-outline"
                    defaultValue={product.price}
                />
                <InputError message={errors.price} className="mt-2" />
                {/* Video URL */}
                <InputLabel
                    forInput="stock"
                    value="Stock"
                    className="mt-4"
                />
                <Input
                    type="number"
                    name="stock"
                    placeholder="Enter the stock"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                    defaultValue={product.stock}
                />
                <InputError message={errors.stock} className="mt-2" />
                {/* Video URL */}
                <InputLabel
                    forInput="description"
                    value="Description"
                    className="mt-4"
                />
                <Input
                    type="text"
                    name="description"
                    placeholder="Enter the description"
                    isFocused={true}
                    handleChange={handleOnChange}
                    variant="primary-outline"
                    defaultValue={product.description}
                />
                <InputError message={errors.description} className="mt-2" />
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
