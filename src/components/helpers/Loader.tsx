const BounceLoader = () => {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/20 
                      animate-bounce delay-[${index * 200}ms]`}
        />
      ))}
    </div>
  );
};
export default BounceLoader;
