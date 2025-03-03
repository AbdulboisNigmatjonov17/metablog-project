import Link from "next/link";
import { CardData } from "../../../../helpers/CardData";

export default function Post({ params }) {
    const id = params?.id ? decodeURIComponent(params.id) : "";
    const post = CardData.find((item) => String(item.id) === String(id));

    if (!post)
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-xl">
                Post not found
            </div>
        );

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <Link href={`/author/${post.user.name}`}>
                <img src={post.user.img} alt={post.user.name} className="w-24 h-24 rounded-full mx-auto" />
                <h2 className="text-2xl font-bold text-center mt-3">{post.user.name}</h2>
                <p className="text-gray-500 text-center">{post.user.about.job}</p>
            </Link>
            <p className="mt-4 text-gray-700">{post.user.about.text}</p>
        </div>
    );
}
