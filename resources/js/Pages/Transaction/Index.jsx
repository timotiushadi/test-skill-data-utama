import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Paginator from "@/Components/Paginator";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, transaction }) {
    const { delete: destroy, put } = useForm();

    return (
        <Authenticated auth={auth}>
            {/* Cek ada flash message atau tidak */}
            <Head title="Admin - Transaction" />
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
            <Link href={route("addTransaction")} method="POST">
                <Button type="button" className=" w-40 mb-8 ">
                    Test New Transaction to API DataUtama
                </Button>
            </Link>
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Reference No.</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Payment Amount</th>
                        <th>Product</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.data.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.reference_no}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.quantity}</td>
                            <td>{transaction.payment_amount}</td>
                            <td>{transaction.product_id}</td>
                            <td>
                                <div
                                    onClick={() => {
                                        transaction.deleted_at
                                            ? put(
                                                route(
                                                    "transaction.restore",
                                                    transaction.id
                                                )
                                            )
                                            : destroy(
                                                route(
                                                    "transaction.destroy",
                                                    transaction.id
                                                )
                                            );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {transaction.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-full flex justify-end">
                <Paginator meta={transaction.meta}/>
            </div>
        </Authenticated>
    );
}
