export default function GlassPanel({ title, children }) {
  return (
    <div className="relative backdrop-blur-[17.5px] bg-[rgba(255,255,255,0.41)] rounded-[31px] border border-[rgba(0,0,0,0.32)] shadow-[0px_4px_4px_rgba(0,0,0,0.35)]">
      <div className="bg-[#fefefe] h-[75px] rounded-t-[31px] border-t-[3px] border-x-[3px] border-[#adadad] flex items-center px-10">
        <p className="text-black">{title}</p>
      </div>
      <div className="p-6 md:p-10">{children}</div>
    </div>
  );
}
