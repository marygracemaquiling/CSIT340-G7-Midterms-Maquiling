function RepoCard({name, description, language, commits}) {
  return (
    <div className="w-96 rounded-xl bg-[#FAF3E1] p-4">  
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-2 text-xl">{description}</p>
      <div className="mt-6 flex items-center gap-4 text-lg">
        <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
          {language}
        </span>
        <span>{commits} commits</span>
      </div>
    </div>
  );
}

export default RepoCard;