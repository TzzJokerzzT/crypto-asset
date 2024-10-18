import {
  Avatar,
  AvatarImage,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from "keep-react";
import { HouseLine, MagnifyingGlass, PresentationChart } from "phosphor-react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <Sidebar className="h-[90vh]">
      <SidebarBody>
        <fieldset className="relative">
          <Input placeholder="Search" className="ps-11" />
          <InputIcon>
            <MagnifyingGlass size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>
        <SidebarList>
          <SidebarItem>
            <HouseLine size={20} />
            <Link to="/">Home</Link>
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            <Link to="/favorite">Favorite</Link>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      <SidebarFooter>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar" />
        </Avatar>
        <div>
          <p className="text-body-4 font-medium text-metal-400 dark:text-white">
            Enzo Farnandez
          </p>
          <p className="text-body-4 font-normal text-metal-300 dark:text-metal-400">
            enzo123@gmail.com
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
