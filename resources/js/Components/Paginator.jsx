import { Link } from "@inertiajs/react";


export default function Paginator ({meta}) {

    const previous = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {previous && <Link href={previous} className="join-item btn">«</Link>}
            <button className="join-item btn">{current}</button>
            {next && <Link href={next} className="join-item btn">»</Link>}
        </div>
    )
}