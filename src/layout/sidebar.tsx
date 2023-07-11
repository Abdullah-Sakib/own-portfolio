import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Sidebar = () => {
  return (
    <div>
      <Avatar className="w-32 h-32 bg-black mx-auto mt-5">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/108396938?s=400&u=5cdd7fc9548080b1947f106179a2dc868f792aeb&v=4"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="text-center text-lg font-semibold mt-2">Abdullah Sakib</h2>
    </div>
  );
};

export default Sidebar;
