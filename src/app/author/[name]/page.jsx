import { CardData } from "../../../../helpers/CardData";

export default function AuthorPage({ params }) {
    const name = params?.name ? decodeURIComponent(params.name) : "";
    const post = CardData.find((item) => item.user.name === name);

    if (!post)
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-xl">
                Author not found
            </div>
        );

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <img src={post.user.img} alt={post.user.name} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-2xl font-bold text-center mt-3">{post.user.name}</h2>
            <p className="text-gray-500 text-center">{post.user.about.job}</p>
            <p className="mt-4 text-gray-700">{post.user.about.text}</p>
        </div>
    );
}
