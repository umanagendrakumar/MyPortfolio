import { skills } from "../utils/skills"; 

const Skills = () => {
    return (
        <>
            <main
                className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center"
                role="main"
            >
                <section
                    className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center"
                    aria-label="Skills Section"
                >
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
                        {skills.map((skill) => (
                            <li
                                key={skill.name}
                                className={`${skill.borderHoverColor} rounded-xl flex flex-col items-center justify-center py-6 px-4 border border-gray-400`}
                                aria-label={skill.name}
                            >
                                <span className="mb-4 text-[48px]">{skill.icon}</span>
                                <span className="font-semibold text-lg text-gray-100">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Skills;