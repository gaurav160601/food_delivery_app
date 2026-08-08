import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/userContext";
const About = () => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [profileRes, reposRes] = await Promise.all([
                fetch("https://api.github.com/users/gaurav160601"),
                fetch("https://api.github.com/users/gaurav160601/repos?sort=updated&per_page=6")
            ]);
            const profileData = await profileRes.json();
            const reposData = await reposRes.json();
            setProfile(profileData);
            setRepos(reposData);
        };
        fetchData();
    }, []);

    if (!profile) return <Shimmer />;

    const langColors = {
        JavaScript: "bg-yellow-400",
        HTML: "bg-orange-500",
        Java: "bg-red-500",
        CSS: "bg-blue-500",
        Python: "bg-green-500",
    };

    return (
        
        <div className="bg-gray-50 min-h-screen">
                    <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-32"></div>
                    <div className="px-8 pb-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16">
                            <img
                                src={profile.avatar_url}
                                alt={profile.login}
                                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold text-gray-800">{profile.login}</h1>
                                <a
                                    href={profile.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                                >
                                    github.com/{profile.login}
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center sm:justify-start gap-8 mt-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-800">{profile.public_repos}</p>
                                <p className="text-sm text-gray-500">Repos</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-800">{profile.followers}</p>
                                <p className="text-sm text-gray-500">Followers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-800">{profile.following}</p>
                                <p className="text-sm text-gray-500">Following</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Latest Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8.5ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                                </svg>
                                <h3 className="text-base font-semibold text-gray-800 truncate">{repo.name}</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-2 min-h-[40px]">
                                {repo.description || "No description available"}
                            </p>
                            <div className="flex items-center justify-between">
                                {repo.language && (
                                    <span className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                                        <span className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] || "bg-gray-400"}`}></span>
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                    ⭐ {repo.stargazers_count}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
