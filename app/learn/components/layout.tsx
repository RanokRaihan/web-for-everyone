import SideMenu from "@/components/SideMenu";

const ComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <SideMenu />
      <main className="w-full h-[calc(100vh-80px)] overflow-y-scroll p-4">
        {children}
      </main>
    </div>
  );
};

export default ComponentLayout;
