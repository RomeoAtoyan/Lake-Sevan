import { menuContent } from "@/data/menu-content";
import MenuCategory from "@/components/menu-category";

type MenuLocale = keyof typeof menuContent;

const Page = async ({
  params,
}: {
  params: Promise<{ locale: MenuLocale }>;
}) => {
  const locale = (await params).locale;
  const content = menuContent[locale];

  return (
    <div className="min-h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="text-center font-dynalight text-7xl text-[#e0e0e0]">
          Lake Sevan
        </h1>
        <p className="text-[#e0e0e0] font-poppins">A taste of the caucasus</p>
      </div>
      <h1 className="text-center mb-6 text-3xl text-white">Menu</h1>

      <div className="flex flex-col items-start gap-12">
        {content.categories.map((cat, i) => (
          <div key={i} className="relative z-0 w-full">
            <div className="mb-4">
              <h1 className="text-xl font-sans font-medium text-[#d4b672] w-full">
                {cat.name}
              </h1>
              <div className="h-[2px] bg-[#d4b672] w-full"></div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <MenuCategory
                items={cat.items}
                isDrinks={["DRINKS", "DRANKEN", "ALCOHOL", "НАПИТКИ"].some(
                  (s) => cat.name.toUpperCase().includes(s)
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
