import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, product }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            {/* Cek ada flash message atau tidak */}
            <Head title="Admin - Product" />
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
            <Link href={route("product.create")}>
                <Button type="button" className=" w-40 mb-8 ">
                    Insert New Product
                </Button>
            </Link>
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link
                                    href={route(
                                        "product.edit",
                                        product.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        product.deleted_at
                                            ? put(
                                                  route(
                                                      "product.restore",
                                                      product.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "product.destroy",
                                                      product.id
                                                  )
                                              );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {product.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
