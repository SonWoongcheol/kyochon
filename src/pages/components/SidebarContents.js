const SidebarContents = ({ children }) => {
  return (
    <>
      <div className="border-b border-solid pb-8 border-gray-200 py-4 text-left text-base">{children}</div>
    </>
  );
};

export default SidebarContents;
