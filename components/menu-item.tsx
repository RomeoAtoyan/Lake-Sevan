interface MenuItemProps {
  item: {
    name: string;
    description: string;
    price: any;
    image?: string;
  };
  icon?: React.ReactNode;
  compact?: boolean;
}

const MenuItem = ({ item, icon, compact = false }: MenuItemProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <h1
          className={`${compact ? "text-sm md:text-lg" : "text-lg"
            } text-[#d4b672] flex items-center gap-2`}
        >
          {item.name}
          {icon}
        </h1>
        <p className="text-sm leading-tight text-gray-200">
          {item.description}
        </p>
      </div>
      <p className="text-[#d4b672] font-bold">{item.price}</p>
    </div>
  );
};

export default MenuItem;
